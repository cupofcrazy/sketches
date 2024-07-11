import p5 from 'p5'
import { Pane } from 'tweakpane'


export const sketch = (p: p5) => {
  const controls = {
    amount: 20,
    foreground: '#fff',
    background: '#111'
  }
  const pane = new Pane()
  const settings = pane.addFolder({ title: 'Settings' })
  

  settings.addBinding(controls, 'amount', { min: 10, max: 30, step: 1})
  settings.addBinding(controls, 'foreground')
  settings.addBinding(controls, 'background')

  p.setup = () => {
    p.createCanvas(500, 500)
    p.noCursor()
  }
  p.draw = () => {
    const amount = 30
    const w = p.width / controls.amount
    const h = p.height/ controls.amount

    console.log(p.width)

    p.background(controls.background)
    p.noStroke()
    p.rectMode('center')

    p.fill(controls.foreground)
    for (let x = 0; x < amount; x++) {
      for (let y = 0; y < amount; y++) {
        const waveX = p.sin(p.radians(p.frameCount + x * 10)) * 100
        const waveY = p.cos(p.radians(p.frameCount + y * 10)) * 100

        p.push()
        p.translate(x*w+waveY, y*h+waveX)
        p.ellipse(0, 0, w/3, h/3)
        p.pop()
      }   
    }

  } 
}
