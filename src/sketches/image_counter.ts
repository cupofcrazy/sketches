import p5 from "p5";

export const sketch = (p: p5) => {
  let value = 0;
  const image = p.loadImage("/images/snail-mail.png");

  p.setup = () => {
    p.createCanvas(p.windowWidth, p.windowHeight);
    window.addEventListener("resize", () =>
      p.resizeCanvas(p.windowWidth, p.windowHeight)
    );
    p.noCursor();
  };
  p.draw = () => {
    p.background("#111");

    if (p.frameCount % 5 == 0 && value !== 300) value += 1;

    p.push();
    p.translate(p.mouseX, p.mouseY);
    p.imageMode("center");
    p.rotate(p.sin(p.frameCount * 0.1) * 0.2);
    p.image(image, p.sin(p.frameCount * 0.1) * 32, 0, 200, 200);
    p.pop();

    const mappedValue = p.abs(
      p.floor(p.map(p.mouseX, 0, p.windowWidth, -360, 360))
    );

    p.push();
    p.translate(p.width / 2, p.height / 2);
    p.fill("#ff0");
    p.textSize(value);
    p.textAlign("center", "center");
    p.text(
      mappedValue,
      p.map(p.mouseX, 0, p.windowWidth, -p.windowWidth / 4, p.windowWidth / 4),
      p.map(
        p.mouseY,
        0,
        p.windowHeight,
        -p.windowHeight / 4,
        p.windowHeight / 4
      )
    );
    p.pop();
  };
};
