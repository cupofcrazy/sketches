import p5 from 'p5'

export const sketch = (p: p5) => {
  const size = 4
  p.setup = () => {
    p.createCanvas(600, 400)
  }
  p.draw = () => {
    p.background('#111')

    for (let i = 0; i < p.height; i++) {
      p.push()
      p.translate(p.tan(p.radians(p.frameCount * (i+1)/10)) * p.width/2 + p.width/2, i* size/2)
      p.fill('#fff')
      p.noStroke()
      p.ellipse(0, 0, size, size)

      p.pop()
    }
  }
}
