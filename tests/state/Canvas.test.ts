import { BrushTool, Canvas, EraserTool, SelectionTool } from '../../src/state';

describe('Canvas State Pattern', () => {
  let canvas: Canvas;
  beforeEach(() => {
    canvas = new Canvas();
  });

  describe('SelectionTool /', () => {
    describe('if the rectangle icon is selected', () => {
      it('should select the rectangle tool', () => {
        const currentTool = new SelectionTool();
        canvas.setCurrentTool(currentTool);

        expect(canvas.mouseDown()).toBe('Selection icon');
      });
    });

    describe('if the mouse is drag and released', () => {
      it('should draw a dashed rectangle', () => {
        canvas.setCurrentTool(new SelectionTool());

        expect(canvas.mouseUp()).toBe('Draw a dashed rectangle');
      });
    });
  });

  describe('BruhTool /', () => {
    describe('if the brush icon is selected', () => {
      it('should select the brushed tool', () => {
        const currentTool = new BrushTool();
        canvas.setCurrentTool(currentTool);

        expect(canvas.mouseDown()).toBe('Brush icon');
      });
    });

    describe('if the mouse is drag and released', () => {
      it('should draw a brushed line', () => {
        canvas.setCurrentTool(new BrushTool());

        expect(canvas.mouseUp()).toBe('Draw a line');
      });
    });
  });

  describe('EraserTool /', () => {
    describe('if the eraser icon is selected', () => {
      it('should select the eraser tool', () => {
        const currentTool = new EraserTool();
        canvas.setCurrentTool(currentTool);

        expect(canvas.mouseDown()).toBe('Eraser icon');
      });
    });

    describe('if the mouse is drag and released', () => {
      it('should erase something', () => {
        canvas.setCurrentTool(new EraserTool());

        expect(canvas.mouseUp()).toBe('Erase something');
      });
    });
  });
});
