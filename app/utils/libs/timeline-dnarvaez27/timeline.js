/*
 Copyright 2017 David Narvaez (dnarvaez27)
 Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files
 (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge,
 publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so,
 subject to the following conditions:
 The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE
 FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

function TimeLine () {
  // CONSTANTES
  // General
  const lineWidth = 5;
  const margin = 40;
  const radPoint = 10;
  // Tag
  const wLineTag = 100;
  const maxWidthTag = 200;
  const minWidthTag = 150;
  const paddingTag = 10;
  const marginTag = 10;
  const tagOffsetY = (radPoint * 2);
  // Date
  const heightDate = 20;
  const paddingDate = 5;
  const dateLineWidth = 1.5;
  const lineSpacing = 3;
  const shadowBlur = 3;
  const colorShadow = '#212121';
  let months = [ 'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre' ];

  // ATRIBUTOS
  let canvas;
  let ctx;
  let height = 0;
  let width = 0;
  let middle = 0;
  let lastPoint = margin;
  let actualSide = true;
  let lastHeightTag = -1;
  let tags = [];
  let tagOnMouse;

  let timeline = this;
  // USER-CONFIG
  timeline.dataTimeLine = [];

  timeline.fontTag_timeline = '15px Arial';
  timeline.fontTagMin_timeline = '11px Arial';
  timeline.fontBigBoldTag_timeline = '20px Arial';
  timeline.fontBoldTag_timeline = 'bold 15px Arial';
  timeline.idCanvas_timeline = 'derCanvas';
  timeline.backgroundTags_timeline = '#006C93';
  timeline.foregroundTags_timeline = '#FFFFFF';
  timeline.selectedTagBackground_timeLine = '#FFFFFF';
  timeline.selectedTagsForeground_timeLine = '#000000';
  timeline.order = true;
  timeline.tagMouseClick = undefined;
  timeline.tagMouseIn = undefined;
  timeline.tagMouseOut = undefined;

  timeline.init = function () {
    canvas = document.getElementById( timeline.idCanvas_timeline );
    ctx = canvas.getContext( '2d' );

    timeline.dataTimeLine.sort( function ( a, b ) {
      if( a.date.year === b.date.year ) {
        if( a.date.month === b.date.month ) {
          if( a.date.day === b.date.day ) {
            return timeline.order ? ( timeline.dataTimeLine.indexOf( a ) - timeline.dataTimeLine.indexOf( b ) ) : ( timeline.dataTimeLine.indexOf( b ) - timeline.dataTimeLine.indexOf( a ) );
          }
          return timeline.order ? ( a.date.day - b.date.day ) : ( b.date.day - a.date.day );
        }
        else {
          return timeline.order ? ( a.date.month - b.date.month ) : ( b.date.month - a.date.month );
        }
      }
      else {
        return timeline.order ? ( a.date.year - b.date.year ) : ( b.date.year - a.date.year );
      }
    } );

    initTags();
    let parent = document.getElementById( timeline.idCanvas_timeline ).parentElement;
    height = calcularAltura();
    width = parent.clientWidth - 30;
    width -= window.getComputedStyle( parent ).padding.replace( /[^0-9.]/g, '' );
    middle = width / 2;

    canvas.width = width;
    canvas.height = height + margin;

    lastPoint = margin;

    setConfig();
    setListeners();

    draw();
  };

  function initTags () {
    tags = [];
    timeline.dataTimeLine.forEach( function ( item ) {
      let tag = new Tag( 0, 0, 0, 0 );
      tag.data = item;
      tag.calculateSize();
      tags.push( tag );
    } );
  }

  function calcularAltura () {
    let h = 0;
    tags.forEach( function ( tag ) {
      h += tag.height + marginTag;
    } );
    return h;
  }

  function setConfig () {
    ctx.lineWidth = lineWidth;
    ctx.fillStyle = timeline.backgroundTags_timeline;
    ctx.strokeStyle = timeline.backgroundTags_timeline;
    ctx.shadowBlur = 0;
  }

  function setShadow () {
    ctx.shadowBlur = shadowBlur;
    ctx.shadowColor = colorShadow;
  }

  function draw () {
    ctx.clearRect( 0, 0, canvas.width, canvas.height );
    drawLine();
    tags.forEach( function ( tag ) {
      drawPoint( middle, lastPoint, tag );
    } );
  }

  function drawLine () {
    ctx.moveTo( middle, margin );
    ctx.lineTo( middle, height - tags[ tags.length - 1 ].height + tagOffsetY );
    ctx.stroke();
  }

  function drawPoint ( x, y, tag ) {
    setConfig();
    setShadow();

    ctx.beginPath();
    ctx.moveTo( x, y );
    ctx.arc( x, y, radPoint, 0, 2 * Math.PI );
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.fillStyle = timeline.foregroundTags_timeline;
    ctx.arc( x, y, radPoint / 2, 0, 2 * Math.PI );
    ctx.fill();
    ctx.closePath();

    tag.side = actualSide;
    associateTag( x, y, actualSide, tag );
    actualSide = !actualSide;
    setConfig();
  }

  function associateTag ( x, y, side, tag ) {
    setConfig();
    setShadow();

    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.moveTo( side ? ( x + radPoint ) : ( x - radPoint ), y );
    ctx.lineTo( side ? ( x + wLineTag ) : ( x - wLineTag ), y );

    tag.x = side ? ( x + wLineTag ) : ( x - wLineTag - tag.width);
    tag.y = y - tagOffsetY;
    ctx.stroke();
    ctx.closePath();

    setConfig();

    if( tagOnMouse !== undefined && tag.equals( tagOnMouse ) ) {
      tag.pintarSelected( ctx );
    }
    else {
      tag.pintar( ctx );
    }

    lastPoint += tag.height + marginTag;
  }

  function setListeners () {
    canvas.addEventListener( 'mousemove',
      function ( e ) {
        let tag = (getTagOnPoint( e.offsetX, e.offsetY ));
        if( tag !== undefined && tagOnMouse === undefined ) {
          document.getElementById( timeline.idCanvas_timeline ).style.cursor = 'pointer';
          tagOnMouse = tag;
          lastPoint = margin;
          actualSide = true;
          lastHeightTag = 50;
          draw();
          if( timeline.tagMouseIn !== undefined ) {
            timeline.tagMouseIn( tag );
          }
        }
        else if( tag === undefined && tagOnMouse !== undefined ) {
          document.getElementById( timeline.idCanvas_timeline ).style.cursor = 'auto';
          let tempTag = tag;
          tagOnMouse = undefined;
          lastPoint = margin;
          actualSide = true;
          lastHeightTag = 50;
          draw();
          if( timeline.tagMouseOut !== undefined ) {
            timeline.tagMouseOut( tempTag );
          }
        }
      }, false );

    canvas.addEventListener( 'mouseup',
      function () {
        if( tagOnMouse !== undefined && timeline.tagMouseClick !== undefined ) {
          timeline.tagMouseClick( tagOnMouse );
        }
      }, false );
  }

  function getTagOnPoint ( x, y ) {
    return tags.filter( function ( item ) {
      return item.containsPoint( x, y );
    } )[ 0 ];
  }

  // CLASES
  function Tag ( x, y, width, height, data ) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.data = data;
    this.side = false;
    this.equals = function ( tag2 ) {
      return ( this.x === tag2.x ) && ( this.y === tag2.y ) && ( this.width === tag2.width ) && ( this.height === tag2.height );
    };
    this.containsPoint = function ( x, y ) {
      return (x > this.x && x < this.x + this.width) && (y > this.y && y < this.y + this.height);
    };

    this.pintar = function ( ctx ) {
      let self = this;

      // Rectangle
      ctx.beginPath();
      setShadow();
      ctx.moveTo( this.x, this.y );
      ctx.rect( this.x, this.y, this.width, this.height );
      ctx.fillStyle = this.data.color.background;
      ctx.fill();
      setConfig();
      ctx.closePath();

      // Date
      let yearOffsetY = -3;
      let yearOffsetX = 3;
      let dateFontSize = parseInt( timeline.fontBoldTag_timeline.split( ' ' )[ 1 ].substring( 0, 2 ) );
      let yearFontSize = parseInt( timeline.fontBigBoldTag_timeline.split( ' ' )[ 0 ].substring( 0, 2 ) );
      let year = this.data.date.year.toString();
      let monthDay = months[ this.data.date.month - 1 ] + ' ' + this.data.date.day;

      ctx.beginPath();
      ctx.fillStyle = this.data.color.accent;
      ctx.font = timeline.fontBigBoldTag_timeline;
      ctx.fillText( year, this.side ? this.x - wLineTag - ctx.measureText( year ).width - radPoint - yearOffsetX : this.x + this.width + wLineTag + radPoint + yearOffsetX, this.y + tagOffsetY + (yearFontSize / 2 ) + yearOffsetY );

      ctx.font = timeline.fontBoldTag_timeline;
      ctx.fillStyle = this.data.color.foreground;
      ctx.fillText( monthDay, this.x + marginTag, this.y + dateFontSize + paddingDate );

      ctx.lineWidth = dateLineWidth;
      ctx.moveTo( this.x + marginTag, this.y + (paddingDate * 2) + dateFontSize );
      ctx.lineTo( this.x + this.width - marginTag, this.y + (paddingDate * 2) + dateFontSize );
      ctx.strokeStyle = this.data.color.foreground;
      ctx.stroke();
      ctx.closePath();

      // Info
      let fontSize = parseInt( timeline.fontTag_timeline.split( ' ' )[ 0 ].substring( 0, 2 ) );
      let fontMinSize = parseInt( timeline.fontTagMin_timeline.split( ' ' )[ 0 ].substring( 0, 2 ) );
      ctx.font = timeline.fontTag_timeline;
      let actualY = this.y + (paddingDate * 3) + dateFontSize + fontSize;
      this.onEachLine( function ( line ) {
        if( line.startsWith( ' ' ) ) {
          line = line.substring( 1 );
        }

        if( line.startsWith( '\_' ) ) {
          ctx.font = timeline.fontTagMin_timeline;
          line = line.substring( 1 );
          actualY -= fontSize;
          actualY += fontMinSize;
        }
        else {
          ctx.font = timeline.fontTag_timeline;
        }
        ctx.fillText( line, self.x + marginTag, actualY );
        actualY += fontSize + lineSpacing + (line.startsWith( '\_' ) ? (0 - fontSize + fontMinSize) : 0);
      } );
    };

    this.pintarSelected = function ( ctx ) {
      let self = this;

      // Rectangle
      ctx.beginPath();
      setShadow();
      ctx.moveTo( this.x, this.y );
      ctx.rect( this.x, this.y, this.width, this.height );
      ctx.fillStyle = timeline.selectedTagBackground_timeLine;
      ctx.fill();
      setConfig();
      ctx.closePath();

      // Date
      let yearOffsetY = -3;
      let yearOffsetX = 3;
      let dateFontSize = parseInt( timeline.fontBoldTag_timeline.split( ' ' )[ 1 ].substring( 0, 2 ) );
      let yearFontSize = parseInt( timeline.fontBigBoldTag_timeline.split( ' ' )[ 0 ].substring( 0, 2 ) );
      let year = this.data.date.year.toString();
      let monthDay = months[ this.data.date.month - 1 ] + ' ' + this.data.date.day;

      ctx.beginPath();
      ctx.fillStyle = this.data.color.accent;
      ctx.font = timeline.fontBigBoldTag_timeline;
      ctx.fillText( year, this.side ? this.x - wLineTag - ctx.measureText( year ).width - radPoint - yearOffsetX : this.x + this.width + wLineTag + radPoint + yearOffsetX, this.y + tagOffsetY + (yearFontSize / 2 ) + yearOffsetY );

      ctx.font = timeline.fontBoldTag_timeline;
      ctx.fillStyle = timeline.selectedTagsForeground_timeLine;
      ctx.fillText( monthDay, this.x + marginTag, this.y + dateFontSize + paddingDate );

      ctx.lineWidth = dateLineWidth;
      ctx.moveTo( this.x + marginTag, this.y + (paddingDate * 2) + dateFontSize );
      ctx.lineTo( this.x + this.width - marginTag, this.y + (paddingDate * 2) + dateFontSize );
      ctx.strokeStyle = timeline.selectedTagsForeground_timeLine;
      ctx.stroke();
      ctx.closePath();

      // Info
      let fontSize = parseInt( timeline.fontTag_timeline.split( ' ' )[ 0 ].substring( 0, 2 ) );
      let fontMinSize = parseInt( timeline.fontTagMin_timeline.split( ' ' )[ 0 ].substring( 0, 2 ) );
      ctx.font = timeline.fontTag_timeline;
      let actualY = this.y + (paddingDate * 3) + dateFontSize + fontSize;
      this.onEachLine( function ( line ) {
        if( line.startsWith( ' ' ) ) {
          line = line.substring( 1 );
        }

        if( line.startsWith( '\_' ) ) {
          ctx.font = timeline.fontTagMin_timeline;
          line = line.substring( 1 );
          actualY -= fontSize;
          actualY += fontMinSize;
        }
        else {
          ctx.font = timeline.fontTag_timeline;
        }
        ctx.fillText( line, self.x + marginTag, actualY );
        actualY += fontSize + lineSpacing + (line.startsWith( '\_' ) ? (0 - fontSize + fontMinSize) : 0);
      } );
    };

    this.calculateSize = function () {
      let self = this;
      this.height = 0;
      let sizeFont = parseInt( timeline.fontTag_timeline.split( ' ' )[ 0 ].substring( 0, 2 ) );
      let sizeMinFont = parseInt( timeline.fontTagMin_timeline.split( ' ' )[ 0 ].substring( 0, 2 ) );

      this.onEachLine( function ( line ) {
        self.height += line.startsWith( '\_' ) ? sizeMinFont : sizeFont + lineSpacing;
      } );

      this.width = this.height !== sizeFont + lineSpacing ? maxWidthTag : Math.max( minWidthTag, ctx.measureText( this.data.texto ).width ) + (marginTag * 2);

      this.height += paddingTag * 2;
      this.height += heightDate;
      this.height += paddingDate * 2;
      this.height -= lineSpacing;

      return { height: this.height, width: this.width };
    };

    this.onEachLine = function ( exe ) {
      ctx.font = timeline.fontTag_timeline;
      let actualString = '';
      let lastWord = '';

      for( let i = 0; i < this.data.texto.length; i++ ) {
        let caracter = this.data.texto[ i ];
        if( caracter === '\n' ) {
          exe( actualString );
          actualString = '';
        }
        else if( caracter === '\_' ) {
          exe( actualString );
          actualString = '\_';
        }
        else {
          if( caracter === ' ' ) {
            lastWord = '';
          }
          else {
            lastWord += caracter;
          }
          actualString += caracter;

          if( actualString.startsWith( '\n' ) ) {
            ctx.font = timeline.fontTagMin_timeline;
          }
          else {
            ctx.font = timeline.fontTag_timeline;
          }

          let actualSize = ctx.measureText( actualString + ' ' ).width + (marginTag * 2);
          if( actualSize >= maxWidthTag ) {
            if( actualString.endsWith( ' ' ) || this.data.texto[ i + 1 ] === ' ' ) {
              exe( actualString );
              actualString = '';
            }
            else {
              exe( actualString.substring( 0, actualString.length - lastWord.length ) );
              actualString = (actualString.startsWith( '\_' ) ? '\_' : '') + lastWord;
            }
          }
        }
      }
      if( actualString !== '' ) {
        exe( actualString );
      }
    };
  }
}