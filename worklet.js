class CustomWorklet {
  static get contextOptions() {
    return { alpha: true }; // true by default, else false --> alpha of 1.0 for all colours used on canvas
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
