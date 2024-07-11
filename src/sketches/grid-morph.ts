import p5 from 'p5'
import { Pane } from 'tweakpane'


export const sketch = (p: p5) => {
  const controls = {
    amount: 1,
    foreground: '#111',
    background: '#fff'
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
    if (p.frameCount % 60 === 0) controls.amount++
    if  (controls.amount == 25) controls.amount = 2
    const width = p.width/controls.amount
    const height = p.height/controls.amount
    p.background(controls.background)
    p.translate(width/2, height/2)
    p.fill(controls.foreground)
    p.noStroke()
    
    for (let x = 0; x < controls.amount; x++) {
      for (let y = 0; y < controls.amount; y++) {
        if (x%2==0 || y%2==0) {
          p.push()
          p.translate(x*width, y*height)
          p.rectMode('center')
          p.rotate(p.radians(p.frameCount*1.5))
          p.rect(0, 0, width, height)
          p.pop()
        } else {
          p.push()
          p.translate(x*width, y*height)
          p.ellipse(0, 0, width, height)
          p.pop()
        }
      }
    }
  } 
}
