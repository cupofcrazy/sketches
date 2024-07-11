import p5 from 'p5'


export const sketch = (p: p5) => {
  let image: p5.Image;
  
  p.preload = () => {
    image = p.loadImage('/images/album-cover.png')
  }
  p.setup = () => {
    p.createCanvas(500, 500)
  }
  p.draw = () => {
    const amount = 100
    const pixelWidth = p.width/amount
    const pixelHeight = p.height/amount

    p.background('#111')

    p.ellipseMode('corner')
    p.noStroke()
    for (let x = 0; x < amount; x++) {
      for (let y = 0; y < amount; y++) {
        const color = image.get(x*pixelWidth, y*pixelHeight)
        const brightness = p.brightness(color)

        const scale = p.map(brightness, 0, 255, 0, 2)

        p.fill('#fff')
        p.ellipse(x*pixelWidth, y*pixelHeight, pixelWidth*scale, pixelHeight*scale)
      }
    }
  }
}
