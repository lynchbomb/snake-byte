import Snake from './snake';
import ICoords from './interfaces/i-coords';

var app = {

  num: <number> 0,
  $canvas: <object> document.getElementById('canvas'),
  canvasContext: <object> {},
  canvasWidth: <number> 0,
  canvasHeight: <number> 0,
  snake: Snake,

  _didRenderPoint: <boolean> false,
  _didCanvasClear: <boolean> false,

  init() {
    this.initCanvas('#000');
    this.initEvents();
    this.update();
    this.snake = new Snake({
      fillStyle: '#222'
    });
  },

  initCanvas(fillStyle: string = '#000') {
    this.canvasContext = this.$canvas.getContext('2d');
    this.canvasWidth = this.$canvas.width;
    this.canvasHeight = this.$canvas.height;
    this.canvasContext.fillStyle = fillStyle;
    this.canvasContext.fillRect(0, 0, this.canvasWidth, this.canvasHeight);
  },

  initEvents() {
    const SCOPE = this;

    document.onkeydown = (e) => {
      switch (e.keyCode) {
        case 37: SCOPE.handleLeftArrow()
          break;      
        case 38: SCOPE.handleUpArrow()
          break;      
        case 39: SCOPE.handleRightArrow()
          break;      
        case 40: SCOPE.handleDownArrow()
          break;      
      }
    };
  },

  handleLeftArrow() {
    this.snake.heading = 0;
  },

  handleUpArrow() {
    this.snake.heading = 1;
  },

  handleRightArrow() {
    this.snake.heading = 2;
  },

  handleDownArrow() {
    this.snake.heading = 3;
  },

  clearCanvas(x: number = 0, y: number = 0, width: number = this.canvasWidth, height: number = this.canvasHeight) {
		// instead of clearing the entire canvas
    // just pass the object/proto to be cleared
    // default is the clear the entire canvas
    this.canvasContext.clearRect(x, y, width, height);

    return true;
	},

  renderPoint(renderedPoint: ICoords) {
    this.canvasContext.fillStyle = this.snake.fillStyle;
    this.canvasContext.fillRect(renderedPoint.x, renderedPoint.y, this.snake.width, this.snake.height);

    return renderedPoint;
  },

  updateRenderedPoint(renderedPoint: ICoords) {    
    renderedPoint.x++;
    renderedPoint.y++;

    return renderedPoint;
  },

  eat() {

  },

  update() {
    for (var i = 0; i < this.snake.coords.length; i++) {
      var coords = this.snake.coords[i];
      let _renderedPointMeta = this.renderPoint(coords);

      this.renderedPointMeta = this.updateRenderedPoint(_renderedPointMeta);
      this.clearCanvas(_renderedPointMeta.x, _renderedPointMeta.y, _renderedPointMeta.width, _renderedPointMeta.height);      
    }

    window.requestAnimationFrame(this.update.bind(this));
  }
}

app.init();
