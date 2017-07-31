import ICoords from './interfaces/i-coords';
import ISnakeOptions from './interfaces/i-snake-options';
import Snake from './snake';

export default class SnakeByte {

  public snake = <Snake> {};
  public $canvas = <HTMLCanvasElement> document.getElementById('canvas');
  public canvasContext = <CanvasRenderingContext2D> this.$canvas.getContext('2d');
  public canvasWidth = <number> 0;
  public canvasHeight = <number> 0;

  public someNum = 1;

  constructor() {
    this.initCanvas('#000');
    this.snake = new Snake({
      fillStyle: 'green',
      origin: [{x: this.canvasWidth / 2, y: this.canvasHeight / 2}]
    });
    this.eventController();
    this.update();
  }

  public initCanvas(fillStyle: string = '#000') {
    this.canvasWidth = this.$canvas.width;
    this.canvasHeight = this.$canvas.height;
    this.canvasContext.fillStyle = fillStyle;
    this.canvasContext.fillRect(0, 0, this.canvasWidth, this.canvasHeight);
  }

  public eventController() {
    document.addEventListener('keydown', this.handleKeydown.bind(this));
  }

  public handleKeydown(e: any) {
    switch (e.keyCode) {
      case 37: this.handleLeftArrow();
        break;
      case 38: this.handleUpArrow();
        break;
      case 39: this.handleRightArrow();
        break;
      case 40: this.handleDownArrow();
        break;
      default: return;
    }
  }

  public handleLeftArrow() {
    this.snake.heading = 0;
  }

  public handleUpArrow() {
    this.snake.heading = 1;
  }

  public handleRightArrow() {
    this.snake.heading = 2;

    // throw-away
    this.snake.incrementDirection('right');
  }

  public handleDownArrow() {
    this.snake.heading = 3;
  }

  public clearCanvas(x: number = 0, y: number = 0, width: number = this.canvasWidth, height: number = this.canvasHeight) {
		// instead of clearing the entire canvas
    // just pass the object/proto to be cleared
    // default is the clear the entire canvas
    this.canvasContext.clearRect(x, y, width, height);

    return true;
  }

  public renderPoint(renderedPoint: ICoords) {
    this.canvasContext.fillStyle = this.snake.fillStyle;
    // fill a point that is {x:0,y:0, 1, 1}
    this.canvasContext.fillRect(renderedPoint.x, renderedPoint.y, this.snake.width, this.snake.height);

    return renderedPoint;
  }

  // TODO: prob delete this method
  public updateRenderedPoint(renderedPoint: ICoords) {
    renderedPoint.x++;
    renderedPoint.y++;

    return renderedPoint;
  }

  public eat() {

  }

  public update() {
    for (let i = 0; i < this.snake.coords.length; i++) {
      // {x:0, y:0}
      let coords = this.snake.coords[i];
      // point above is rendered to canvas
      let _renderedPointMeta = this.renderPoint(coords);

      // this.renderedPointMeta = this.updateRenderedPoint(_renderedPointMeta);
      // this.clearCanvas(_renderedPointMeta.x, _renderedPointMeta.y, _renderedPointMeta.width, _renderedPointMeta.height);
    }

    window.requestAnimationFrame(this.update.bind(this));
  }
};
