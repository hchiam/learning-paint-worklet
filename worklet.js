class CustomWorklet {
  // Whether Alpha is allowed - This is set to true by default, if it is set to false all colours used on the canvas will have full opacity, or alpha of 1.0
  static get contextOptions() {
    return { alpha: true };
  }

  paint(drawingContext) {
    drawingContext.fillStyle = "orange";
    var x = 20,
      y = 20,
      w = 100,
      h = 20;
    drawingContext.fillRect(x, y, w, h);
  }
}

registerPaint("custom-paint-worklet", CustomWorklet);
