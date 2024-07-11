import p5 from 'p5'
import { Pane } from 'tweakpane'


export const sketch = (p: p5) => {
  const controls = {
    amount: 1,
    foreground: '#111',
    background: '#111'
  }
  const pane = new Pane()
  const settings = pane.addFolder({ title: 'Settings' })
  

  settings.addBinding(controls, 'amount', { min: 1, max: 50, step: 1})
  settings.addBinding(controls, 'foreground')
  settings.addBinding(controls, 'background')

  
  p.setup = () => {
    p.createCanvas(500, 500)
    p.noCursor()
  }
  p.draw = () => {
    const wave = p.tan(p.frameCount*0.05)*250
    p.background(controls.background)

    p.fill('#ff0')
    p.rectMode('center')
    p.translate(p.width/2+wave, p.height/2)
    p.rotate(p.tan(p.frameCount*0.05))
    p.rect(0, 0, 32, 400)

  } 
}
