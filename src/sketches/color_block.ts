import p5 from 'p5'


export const sketch = (p: p5) => {
  const gridArray: p5.Color[][] = []
  const grid = 2
  
  console.log(gridArray)
  
  p.setup = () => {
    p.createCanvas(500, 500)

    for (let i = 0; i < grid; i++) {
      gridArray[i] = []
      for (let j = 0; j < grid; j++) {
        gridArray[i][j] = p.color(p.random(0, 255), p.random(0, 255), p.random(0, 255))
      }
    }
  }
  p.draw = () => {
    const w = p.width/grid
    const h = p.height/grid
    p.noStroke()

    for (let x = 0; x < grid; x++) {
      for (let y = 0; y < grid; y++) {
        p.fill(gridArray[x][y])
        p.rect(x*w, y*h, w, h)
      }
    }
  }
}