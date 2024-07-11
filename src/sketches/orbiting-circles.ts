import p5 from 'p5'
import { Pane } from 'tweakpane'

export const sketch = (p: p5) => {
  const amount = 10
  const controls = {
    amount,
    size: 360 / amount
  }
  
  const pane = new Pane()
  const settings = pane.addFolder({ title: 'Settings' })

  settings.addBinding(controls, 'amount', { min: 1, max: controls.amount, step: 1})
  settings.addBinding(controls, 'size', { min: 1, max: controls.size, step: 1})


  p.setup = () => {
    p.createCanvas(500, 500)
  }
  p.draw = () => {
    p.background('#111')

    p.translate(p.width/2, p.height/2)
    p.noStroke()

    for (let i = 1; i <= controls.amount; i++) {
      if (i % 2 == 0) p.fill('#fff')
      else p.fill('#0ff')
      p.push()
      p.blendMode('difference')
      p.rotate(p.radians(i * p.frameCount) / 5)
      p.ellipse(0, 120, controls.size*i, controls.size*i)
      p.pop()
    }
  } 
}
