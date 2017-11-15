function LinearProgress() {
  let self = this;
  // PRIVATE ATTRIBUTES
  const textMargin = 2;
  const padding = 10;
  let animFrameId;
  let ctx;
  let actualProgress = 0;
  let tempActualProgress = 0;

  // ATTRIBUTES
  self.progress = 100;
  self.canvas = undefined;
  self.background = 'rgba(0, 0, 0, 0.08)';
  self.accent = '#019bba';
  self.lineWidth = 0;
  self.width = undefined;
  self.font = 'bold 15px Arial';

  self.init = function() {
    ctx = self.canvas.getContext( '2d' );
    ctx.font = self.font;
    let fontSize = ctx.font.match( /[0-9]+/ )[ 0 ];
    self.canvas.height = Math.max( self.lineWidth, fontSize ) + padding;
    ctx.font = self.font;
    let textW = ctx.measureText( self.progress + '%' ).width + (textMargin * 2);

    self.canvas.width = self.width + textW + (self.lineWidth / 2);

    ctx.font = self.font;
    ctx.lineWidth = self.lineWidth;
    self.progress = self.progress > 100 ? 100 : self.progress;

    requestAnimationFrame( animate );
  };

  function animate() {
    ctx.clearRect( 0, 0, self.canvas.width, self.canvas.height );
    animFrameId = requestAnimationFrame( animate );

    if( tempActualProgress >= self.progress ) { cancelAnimationFrame( animFrameId ); }
    actualProgress = ( tempActualProgress++ / 100 ) * (self.width - (self.lineWidth / 2));
    draw();
  }

  function draw() {
    drawBackground();

    ctx.strokeStyle = self.accent;
    ctx.fillStyle = self.accent;

    let end = (self.lineWidth / 2) + actualProgress;
    let text = (tempActualProgress - 1 ) + '%';
    let fontSize = ctx.font.match( /[0-9]+/ )[ 0 ];

    ctx.beginPath();
    ctx.arc( self.lineWidth / 2, ( self.canvas.height / 2 ), self.lineWidth / 2, Math.PI * 0.5, Math.PI * 1.5 );
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.moveTo( self.lineWidth / 2, self.canvas.height / 2 );
    ctx.lineTo( end, self.canvas.height / 2 );
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.arc( end - 1, self.canvas.height / 2, self.lineWidth / 2, Math.PI * 1.5, Math.PI * 0.5 );
    ctx.fillText( text, end + ( self.lineWidth / 2 ) + textMargin, ( self.canvas.height / 2 ) + ( fontSize / 3 ) );
    ctx.fill();
    ctx.closePath();
  }

  function drawBackground() {
    ctx.strokeStyle = self.background;
    ctx.fillStyle = self.background;

    ctx.beginPath();
    ctx.arc( self.lineWidth / 2, ( self.canvas.height / 2 ), self.lineWidth / 2, Math.PI * 0.5, Math.PI * 1.5 );
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.moveTo( self.lineWidth / 2, ( self.canvas.height / 2 ) );
    ctx.lineTo( self.width, ( self.canvas.height / 2 ) );
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.arc( self.width, ( self.canvas.height / 2 ), self.lineWidth / 2, Math.PI * 1.5, Math.PI * 0.5 );
    ctx.fill();
    ctx.closePath();
  }
}

document.registerElement( 'linear-progress', class extends HTMLDivElement {
  constructor() {
    super();
  }

  attachedCallback() {
    this.reset();
  }

  attributeChangedCallback() {
    this.reset();
  }

  reset() {
    while( this.firstChild ) {
      this.removeChild( this.firstChild );
    }

    let canvas = document.createElement( 'canvas' );
    if( this.getAttribute( 'canvas-id' ) ) {
      canvas.id = this.getAttribute( 'canvas-id' );
    }
    this.appendChild( canvas );
    this.paint();
  }

  paint() {
    if( parseInt( this.getAttribute( 'value' ) ) ) {

      let linearProgress = new LinearProgress();
      linearProgress.canvas = this.querySelector( 'canvas' );
      linearProgress.lineWidth = parseInt( this.getAttribute( 'stroke' ) ) || 10;
      linearProgress.width = parseInt( this.getAttribute( 'width' ) ) || parseInt( getComputedStyleFrom( this, 'width' ) );

      linearProgress.progress = this.getAttribute( 'value' );
      if( this.style.color ) {
        linearProgress.accent = this.style.color;
      }
      if( this.style.textDecorationColor ) {
        linearProgress.background = this.style.textDecorationColor;
      }
      if( this.style.font ) {
        linearProgress.font = this.style.font;
      }

      linearProgress.init();
      this.style.height = linearProgress.canvas.height + 'px';
    }
  }
} );

function getComputedStyleFrom( obj, style ) {
  return window.getComputedStyle( obj, null ).getPropertyValue( style );
}
