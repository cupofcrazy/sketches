import p5 from 'p5'

export const sketch = (p: p5) => {
  p.setup = () => {
    p.createCanvas(500, 400)
    p.background('#111')
  }
  p.draw = () => {
    p.background('#111')
    p.stroke('#fff')
    p.noFill()
    
    for (let i = 0; i < 15; i++) {
      const delay = i * 0.1
      const size = p.abs(p.sin(p.radians(p.frameCount*delay)) * (p.width/2))
      const strokeWeight = p.map(size, 0 , p.width/2, 10, 0)

      p.push()
      p.strokeWeight(strokeWeight)
      p.translate(p.width/2, p.height/2)
      p.rectMode('center')
      p.rotate(p.radians(p.frameCount*i/10))
      p.rect(0, 0, size, size)
      p.pop()
    }
  } 
}
