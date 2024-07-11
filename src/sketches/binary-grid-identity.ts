import p5 from 'p5'


export const sketch = (p: p5) => {
  const amount = 3

  p.setup = () => {
    p.createCanvas(500, 500)
    p.ellipseMode('corner')
    p.frameRate(2)
  }
  p.draw = () => {
    const pixelWidth = p.width/amount
    const pixelHeight = p.height/amount
    // p.image(image, 0, 0, 500, 500)

    if (p.random(1) > 0.5) {
      p.background('#111')
      p.fill('#fff')
    } else {
      p.background('#fff')
      p.fill('#111')
    }
    for (let x = 0; x < amount; x++) {
      for (let y = 0; y < amount; y++) {
        p.noStroke()
        p.push()
        p.translate(x*pixelWidth, y*pixelHeight)
        if (p.random(1) > 0.5) {
          p.ellipse(0, 0, pixelWidth, pixelHeight)
        } else {
          p.rect(0, 0, pixelWidth, pixelHeight)
        }
        p.pop()
      }
    }

    
  }
}
