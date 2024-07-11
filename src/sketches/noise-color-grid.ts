import p5 from 'p5'

export const sketch = (p: p5) => {
  let cols: number, rows: number
  let scl = 20
  let w = 500
  let h = 500
  let zoff = 0
  let flowfield = []

  p.setup = () => {
    p.createCanvas(500, 500)
    cols = p.floor(w / scl)
    rows = p.floor(h / scl)
    flowfield = new Array(cols * rows)
  }
  p.draw = () => {
    p.background(255)
    let yoff = 0
    for (let y = 0; y < rows; y++) {
      let xoff = 0
      for (let x = 0; x < cols; x++) {
        let index = x + y * cols
        let angle = p.noise(xoff, yoff, zoff) * p.TWO_PI * 4
        let v = p5.Vector.fromAngle(angle)
        v.setMag(0.1)
        flowfield[index] = v
        xoff += 0.1
        
        let r = p.noise(xoff, yoff, zoff) * 255
        let g = p.noise(xoff + 50, yoff + 30, zoff) * 255
        let b = p.noise(xoff + 30, yoff + 50, zoff) * 255
        p.fill(r, g, b)
        p.noStroke()
        p.rect(x * scl, y * scl, scl, scl)
      }
      yoff += 0.1
      }
    zoff += 0.01
  }
}