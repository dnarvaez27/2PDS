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

const ES = [ 'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre' ];
const EN = [ 'January', 'February', 'March', 'Arpil', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ];
const DE = [ 'Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember' ];

const idMainLine = 'tl-main-line';
const idItemTitulo = 'tl-titulo-item-';
const idItemLine = 'tl-line-item-';
const idItemText = 'tl-text-item-';
const idItemYear = 'tl-year-item-';
const idItemJoin = 'tl-join-item-';
const idItemCircle = 'tl-circle-item-';

const classItemTitulo = 'tl-titulo-item';
const classItemLine = 'tl-line-item';
const classItemText = 'tl-text-item';
const classItemYear = 'tl-year-item';
const classItemJoin = 'tl-join-item';
const classItemCircle = 'tl-circle-item';
const itemPositionClass = 'tl-item-position-';
const suffixRight = 'R';
const suffixLeft = 'L';

let lineColor;
let margin;
let padding;
let itemsLineMargin;
let buttonItem;
let fontYear;
let minWidth;
let maxBoxWidth;
let lang;
let inited;

class Item extends HTMLElement {

  static get observedAttributes() {
    return [
      'text',
      'date',
      'item-style'
    ];
  }

  constructor() {
    super();
  }

  attachedCallback() {
    // Called when the element is inserted into a document, including into a shadow tree
    this.created = true;
    this.added = [];
    this.reset();
  }

  disconnectedCallback() {
    // Called when the element is removed from a document
  }

  attributeChangedCallback( attributeName ) {
    // Called when an attribute is changed, appended, removed, or replaced on the element. Only called for observed attributes.
    if( Item.observedAttributes.some( item => item === attributeName ) ) {
      this.reset( true );
      let nexSibling = this.nextSibling.nextSibling;
      if( nexSibling.__proto__.move ) {
        nexSibling.__proto__.move.call( nexSibling );
      }
    }
  }

  reset( repaint ) {
    if( this.created && inited ) {

      while( this.firstChild ) {
        this.removeChild( this.firstChild );
      }

      this.titulo = document.createElement( 'span' );
      this.line = document.createElement( 'div' );
      this.text = document.createElement( 'span' );
      this.year = document.createElement( 'span' );
      this.joinLine = document.createElement( 'div' );
      this.circle = document.createElement( 'div' );
      this.id = this.getAttribute( 'item-id' );

      this.style.boxSizing = 'content-box';
      this.titulo.style.boxSizing = 'content-box';
      this.line.style.boxSizing = 'content-box';
      this.text.style.boxSizing = 'content-box';
      this.year.style.boxSizing = 'content-box';
      this.joinLine.style.boxSizing = 'content-box';
      this.circle.style.boxSizing = 'content-box';

      this.titulo.id = idItemTitulo + this.id;
      this.line.id = idItemLine + this.id;
      this.text.id = idItemText + this.id;
      this.year.id = idItemYear + this.id;
      this.joinLine.id = idItemJoin + this.id;
      this.circle.id = idItemCircle + this.id;

      this.titulo.classList.add( classItemTitulo );
      this.line.classList.add( classItemLine );
      this.text.classList.add( classItemText );
      this.year.classList.add( classItemYear );
      this.joinLine.classList.add( classItemJoin );
      this.circle.classList.add( classItemCircle );

      this.appendChild( this.year );
      this.appendChild( this.titulo );
      this.appendChild( this.line );
      this.appendChild( this.text );
      this.joinLine.appendChild( this.circle );
      this.appendChild( this.joinLine );

      this.line.style.margin = '2px 0';
      this.line.style.height = '2px';

      this.lineStroke = parseInt( this.parentNode.getAttribute( 'line-stroke' ) );
      let maxBox = getNumber( getComputedStyleFrom( this.parentNode, 'width' ) );
      maxBox /= 2;
      maxBox -= itemsLineMargin;
      maxBox -= ( margin + padding ) * 2;

      this.style.display = 'inline-block';
      this.style.padding = padding + 'px';
      this.style.boxShadow = '#212121 0px 0px 5px 0px';
      this.style.margin = margin + 'px';
      this.style.maxWidth = Math.min( maxBoxWidth || maxBox, maxBox ) + 'px';
      this.style.minWidth = minWidth + 'px';
      this.style.position = 'absolute';

      // -------------------------------------- Lines
      this.joinLine.style.position = 'absolute';
      this.joinLine.style.height = this.lineStroke + 'px';
      this.joinLine.style.backgroundColor = lineColor;

      this.circle.style.borderRadius = '50%';
      this.circle.style.height = buttonItem + 'px';
      this.circle.style.width = buttonItem + 'px';
      this.circle.style.backgroundColor = lineColor;
      this.circle.style.position = 'absolute';
      this.circle.style.top = ( -buttonItem / 2 ) + ( this.lineStroke / 2 ) + 'px';
      this.circle.style.zIndex = '1';
      // -------------------------------------- Lines

      this.year.style.position = 'absolute';
      this.year.style.color = lineColor;
      this.year.style.font = fontYear;

      this.paint( repaint );
    }
  }

  paint( repaint ) {
    let style = this.getAttribute( 'item-style' );
    let date = this.getAttribute( 'date' );
    if( date ) {
      if( !isObject( date ) ) {
        return;
      }
      date = toObject( date );
    }
    if( style ) {
      if( !isObject( style ) ) {
        return;
      }
      style = toObject( style );
    }

    this.style.backgroundColor = style.background;
    this.style.color = style.foreground;

    this.line.style.backgroundColor = style.foreground;
    this.titulo.style.font = 'bold 15px Arial';
    if( date ) {
      let month = '';
      switch( lang ) {
        case 'ES':
          month = ES[ date.month - 1 ];
          break;
        case 'DE':
          month = DE[ date.month - 1 ];
          break;
        default:
          month = EN[ date.month - 1 ];
          break;
      }
      this.titulo.innerHTML = month + ' ' + date.day;
      this.year.innerHTML = date.year;
    }
    this.text.innerHTML = this.getAttribute( 'text' );

    if( !repaint ) {
      this.style.top = parseInt( this.parentNode.__proto__.ultimoHijo.call( this.parentNode ) ) + 'px';
      let lineXPos = parseInt( this.parentNode.__proto__.line.call( this.parentNode ) );
      this.pos = this.parentNode.__proto__.pos.call( this.parentNode );
      this.classList.add( itemPositionClass + (this.pos ? suffixRight : suffixLeft ) );

      let distance = 0;
      if( !this.pos ) {
        distance = lineXPos;
        distance -= parseInt( getComputedStyleFrom( this, 'width' ) );
        distance -= parseInt( this.parentNode.getAttribute( 'line-stroke' ) ) / 2;
        distance -= ((margin + padding) * 2);
        distance -= itemsLineMargin;
      }
      else {
        distance = lineXPos;
        distance += parseInt( this.parentNode.getAttribute( 'line-stroke' ) ) / 2;
        distance += itemsLineMargin;
      }
      this.style.left = distance + 'px';
    }
    let lineSize = itemsLineMargin + margin;
    this.joinLine.style.width = lineSize + 'px';
    if( !this.pos ) {
      this.joinLine.style.left = ( getNumber( getComputedStyleFrom( this, 'width' ) ) + ( padding * 2 ) ) + 'px';
      this.circle.style.left = ( itemsLineMargin + (this.lineStroke / 2) + margin - (buttonItem / 2)) + 'px';
    }
    else {
      this.joinLine.style.right = ( getNumber( getComputedStyleFrom( this, 'width' ) ) + ( padding * 2 ) ) + 'px';
      this.circle.style.right = ( itemsLineMargin + (this.lineStroke / 2) + margin - (buttonItem / 2)) + 'px';
    }

    if( !repaint ) {
      this.parentNode.__proto__.paint.call( this.parentNode, this );
    }

    let childsHeight = getNumber( getComputedStyleFrom( this, 'height' ) );
    childsHeight += padding * 2;
    let top = childsHeight / 2;
    top -= this.lineStroke / 2;
    this.joinLine.style.top = top + 'px';

    this.year.style.top = (getNumber( this.joinLine.style.top ) + (this.lineStroke / 2 ) - ( parseInt( fontYear.replace( /[^0-9]/g, '' ) ) / 2) ) + 'px';
    if( !this.pos ) {
      this.year.style.right = -( measureText( this.year.innerHTML ) + itemsLineMargin + margin + this.lineStroke + (buttonItem / 2) ) + 'px';
    }
    else {
      this.year.style.left = -( measureText( this.year.innerHTML ) + itemsLineMargin + margin + this.lineStroke + (buttonItem / 2) ) + 'px';
    }

  }

  move() {
    let lastTop = getNumber( getComputedStyleFrom( this.previousSibling.previousSibling, 'top' ) );
    let lastHeight = getNumber( getComputedStyleFrom( this.previousSibling.previousSibling, 'height' ) );
    lastHeight += padding * 2;
    lastHeight += (margin * 2);
    let newTop = (lastTop + lastHeight);

    this.style.top = newTop + 'px';

    let nextSibling = this.nextSibling.nextSibling;
    if( nextSibling && nextSibling.tagName && nextSibling.tagName.toLowerCase === 'item-time-line' ) {
      nextSibling.__proto__.move.call( nextSibling );
    }
    else if( this.parentNode && this.parentNode.tagName && this.parentNode.tagName.toLowerCase() === 'time-line' ) {
      if( this.parentNode.__proto__.moveLine ) {
        this.parentNode.__proto__.moveLine.call( this.parentNode, this );
      }
    }
  }
}

class Line extends HTMLElement {
  constructor() {
    super();
    //Called when the element is created or upgraded
  }

  createdCallback() {
    // Called when the element is inserted into a document, including into a shadow tree
    this.created = true;
    this.added = [];
    inited = true;
    this.reset();
  }

  attributeChangedCallback() {
    // Called when an attribute is changed, appended, removed, or replaced on the element. Only called for observed attributes.
    this.reset();
    this.querySelectorAll( 'item-time-line' ).forEach( child => child.__proto__.reset.call( child ) );
  }

  reset() {
    if( this.created ) {
      this.style.boxSizing = 'content-box';
      this.added.forEach( item => this.removeChild( item ) );
      this.added = [];

      itemsLineMargin = parseInt( this.getAttribute( 'item-line-margin' ) ) || 50;
      buttonItem = parseInt( this.getAttribute( 'circle-size' ) ) || 20;
      fontYear = this.getAttribute( 'font-year' ) || 'bold 20px Arial';
      maxBoxWidth = parseInt( this.getAttribute( 'max-box-width' ) );
      margin = parseInt( this.getAttribute( 'item-margin' ) ) || 5;
      padding = parseInt( this.getAttribute( 'item-padding' ) ) || 10;
      lang = this.getAttribute( 'lang' ) || 'EN';
      lineColor = this.getAttribute( 'line-color' ) || '#212121';

      this.ultimoHijoY = 0;
      this.position = false;
      this.actualChild = 0;

      let lineStroke = parseInt( this.getAttribute( 'line-stroke' ) );
      this.widthTimeLine = parseInt( this.getAttribute( 'width' ) ) || (getNumber( getComputedStyleFrom( this.parentNode, 'width' ) ) - 30);
      this.style.width = this.widthTimeLine + 'px';
      this.style.display = 'inline-block';
      this.style.position = 'relative';
      this.style.textAlign = 'center';
      this.center = this.widthTimeLine / 2;

      minWidth = Math.min( (this.widthTimeLine / 2 ) - itemsLineMargin - ( (margin + padding) * 2), 150 );

      this.mainLine = document.createElement( 'div' );
      this.mainLine.style.top = margin + 'px';
      this.mainLine.style.position = 'relative';
      this.mainLine.style.width = lineStroke + 'px';
      this.mainLine.style.backgroundColor = lineColor;
      this.mainLine.style.display = 'inline-block';
      this.mainLine.style.zIndex = '0';
      this.mainLine.style.boxSizing = 'content-box';

      this.mainLine.id = idMainLine;
      this.added.push( this.mainLine );
      this.appendChild( this.mainLine );
    }
  }

  ultimoHijo() {
    return this.ultimoHijoY;
  };

  pos() {
    return this.position;
  }

  line() {
    return this.center;
  }

  paint( child, repaint ) {
    if( !repaint ) {
      let stroke = parseInt( this.getAttribute( 'line-stroke' ) );
      this.position = !this.position;

      let childsHeight = getNumber( getComputedStyleFrom( child, 'height' ) );
      childsHeight += padding * 2;

      if( this.actualChild === 0 ) {
        let top = ( childsHeight / 2 );
        top -= (stroke / 2);
        top += margin;
        this.mainLine.style.top = top + 'px';
      }

      let newHeight = ( this.ultimoHijoY += childsHeight + (margin * 2));

      this.style.height = (newHeight + padding) + 'px';

      let endLine = (parseInt( child.style.top.replace( /([0-9]+).*/, '$1' ) ) - getNumber( this.mainLine.style.top ) );
      endLine += margin;
      endLine += childsHeight / 2;
      endLine += stroke / 2;
      this.mainLine.style.height = endLine + 'px';
      this.actualChild++;
    }
  }

  moveLine( child ) {
    let childsHeight = getNumber( getComputedStyleFrom( child, 'height' ) );
    childsHeight += padding * 2;

    let endLine = (parseInt( child.style.top.replace( /([0-9]+).*/, '$1' ) ) - getNumber( this.mainLine.style.top ) );
    endLine += margin;
    endLine += childsHeight / 2;
    endLine += parseInt( this.getAttribute( 'line-stroke' ) ) / 2;

    this.mainLine.style.height = endLine + 'px';
  }
}

document.registerElement( 'item-time-line', Item );

document.registerElement( 'time-line', Line );

function getComputedStyleFrom( obj, style ) {
  return window.getComputedStyle( obj, null ).getPropertyValue( style );
}

function toObject( obj ) {
  return eval( '(' + obj + ')' );
}

function isObject( string ) {
  if( !string.startsWith( '{' ) || !string.endsWith( '}' ) ) {
    return false;
  }
  string = string.replace( /[{}]/g, '' );
  return string.split( ',' ).every( function( item ) {
    let obj = item.split( ':' );
    return obj[ 0 ].trim().match( /[a-z-]+/ig ).length === 1;
  } );
}

function getNumber( string ) {
  return parseInt( string.replace( /([0-9]+).*/, '$1' ) );
}

function measureText( string ) {
  let canvas = document.createElement( 'canvas' );
  let ctx = canvas.getContext( '2d' );
  ctx.font = fontYear;
  return ctx.measureText( string ).width;
}

function event() {
  return function( $timeout ) {
    return {
      restrict: 'A',
      link: function( scope, element, attr ) {
        if( scope.$last === true ) {
          $timeout( function() {
            scope.$emit( attr.onTimelineRender );
          } );
        }
      }
    };
  };
}