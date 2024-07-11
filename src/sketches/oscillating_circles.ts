import p5 from 'p5'

export const sketch = (p: p5) => {
  const size = 48
  const spacing = size/2
  const offset = 0.5
  const speed = 0.1

  p.setup = () => {
    p.createCanvas(640, 480)
  }
  p.draw = () => {
    console.log(p.mouseX)
    console.log(p.width)
    
    p.noStroke()
    if (p.mouseX < p.width/2) {
      p.background('#111')
      for (let i = 0; i < 10; i++) {
        p.push()
        p.fill('#fff')
        p.translate(spacing+16, p.tan(i*offset+p.frameCount*speed)*64)
        p.ellipse((i * size) * 1.25, p.height/2, size, size)
        p.pop()
      }
      
    } else {
      p.background('#fff')

      p.push()
      p.fill('#111')
      p.translate(p.width/2, p.height/2)
      p.rotate(p.radians(p.frameCount*2))
      p.rectMode('center')
      p.rect(0, 0, size, size)
      p.pop()
    }
    
  }
}
