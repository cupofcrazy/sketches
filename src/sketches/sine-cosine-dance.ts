import p5 from 'p5'
import { Pane } from 'tweakpane'


export const sketch = (p: p5) => {
  const controls = {
    x: 0.1,
    y: 0.1,
    foreground: '#00ffb2',
    background: '#5e00fd'
  }
  const pane = new Pane()
  const settings = pane.addFolder({ title: 'Settings' })
  

  settings.addBinding(controls, 'x', { min: 0, max: 0.1, step: 0.01})
  settings.addBinding(controls, 'y', { min: 0, max: 0.1, step: 0.01})
  settings.addBinding(controls, 'foreground')
  settings.addBinding(controls, 'background')

  
  p.setup = () => {
    p.createCanvas(400, 400)
    p.background(controls.background)
    p.noCursor()
  }
  p.draw = () => {
    const x = -p.sin(p.frameCount*controls.x)*p.width/3
    const y = p.cos(p.frameCount*controls.y)*p.height/3

    p.background(controls.background)

    p.noStroke()
    p.fill(controls.foreground)
    p.ellipse(p.width/2+x, p.height/2+y, 30, 30)

  } 
}
