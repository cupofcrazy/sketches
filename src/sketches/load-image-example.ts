import p5 from 'p5'


export const sketch = (p: p5) => {
  const image = p.loadImage('/images/snail-mail.png')

  p.setup = () => {
    p.createCanvas(500, 400)
    image.resize(200, 200)
    p.imageMode('center')
    
  }
  p.draw = () => {
    p.background('#111')
    p.image(image, p.width/2, p.height/2)

  } 
}
