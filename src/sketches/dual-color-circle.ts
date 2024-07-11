import p5 from 'p5'

export const sketch = (p: p5) => {
  const green = '#14FF00'
  const blue = '#000AFF'

  p.setup = () => {
    p.createCanvas(500, 400)
  }
  p.draw = () => {
    p.noStroke()
    if (p.mouseX < p.width/2) {
      p.background(green)
      p.fill(blue)
    } else {
      p.background(blue)
      p.fill(green)

    }
    const size = p.map(p.mouseX, 0, p.width, -200, 200)
    p.translate(p.width/2, p.height/2)
    p.ellipse(0, 0, size, size)
  }
}
