import Snake from './snake';
import ICoords from './interfaces/i-coords';

var app = {
  
  $canvas: <object> document.getElementById('canvas'),
  canvasContext: <object> {},
  canvasWidth: <number> 0,
  canvasHeight: <number> 0,

  snake: Snake,

  init() {
    this.initCanvas('#000');
    this.snake = new Snake({
      fillStyle: 'green',
      origin: [{x:this.canvasWidth / 2, y:this.canvasHeight / 2}]
    });
    this.eventController();
    this.update();
  },

  initCanvas(fillStyle: string = '#000') {
    this.canvasContext = this.$canvas.getContext('2d');
    this.canvasWidth = this.$canvas.width;
    this.canvasHeight = this.$canvas.height;
    this.canvasContext.fillStyle = fillStyle;
    this.canvasContext.fillRect(0, 0, this.canvasWidth, this.canvasHeight);
  },

  eventController() {
    document.addEventListener('keydown', this.handleKeydown.bind(this));
  },

  handleKeydown(e: any) {
    switch (e.keyCode) {
      case 37: this.handleLeftArrow()
        break;      
      case 38: this.handleUpArrow()
        break;      
      case 39: this.handleRightArrow()
        break;      
      case 40: this.handleDownArrow()
        break;      
    }
  },

  handleLeftArrow() {
    this.snake.heading = 0;
    console.log(0);
  },

  handleUpArrow() {
    this.snake.heading = 1;
    console.log(1);
  },

  handleRightArrow() {
    this.snake.heading = 2;
    console.log(this.snake.coords[0]);

    // throw-away
    this.snake.incrementDirection('right');
  },

  handleDownArrow() {
    this.snake.heading = 3;
    console.log(3);
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
    // fill a point that is {x:0,y:0, 1, 1}
    this.canvasContext.fillRect(renderedPoint.x, renderedPoint.y, this.snake.width, this.snake.height);

    return renderedPoint;
  },

  // TODO: prob delete this method
  updateRenderedPoint(renderedPoint: ICoords) {    
    renderedPoint.x++;
    renderedPoint.y++;

    return renderedPoint;
  },

  eat() {

  },

  update() {
    for (var i = 0; i < this.snake.coords.length; i++) {
      // {x:0, y:0}
      var coords = this.snake.coords[i];
      // point above is rendered to canvas
      let _renderedPointMeta = this.renderPoint(coords);

      // this.renderedPointMeta = this.updateRenderedPoint(_renderedPointMeta);
      // this.clearCanvas(_renderedPointMeta.x, _renderedPointMeta.y, _renderedPointMeta.width, _renderedPointMeta.height);      
    }

    window.requestAnimationFrame(this.update.bind(this));
  }
}

app.init();
