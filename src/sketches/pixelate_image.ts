import p5 from 'p5'


export const sketch = (p: p5) => {
  let image: p5.Image;
  
  p.preload = () => {
    image = p.loadImage('/images/shadow.jpg')
  }
  p.setup = () => {
    p.createCanvas(500, 500)
    p.imageMode('center')
    image.resize(p.width/2, 0)
  }
  p.draw = () => {
    const amount = 100
    const w = p.width/amount
    const h = p.height/amount

    p.background('#111')
    p.noStroke()
    for (let x = 0; x < amount; x++) {
      for (let y = 0; y < amount; y++) {
        const color = image.get(x*w, y*h)
        p.push()
        p.translate(x*w, y*h)
        
        p.fill(color)
        p.rect(0, 0, w, h)
        p.pop()
      }
    }
    
  }
}