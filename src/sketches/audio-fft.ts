import p5 from 'p5'

window.p5 = p5

export const sketch = (p: p5) => {
  let sound: p5.SoundFile
  let fft: p5.FFT

  p.preload = () => {
    sound = p.loadSound('/audio/tame_impala.mp3')
  }
  p.setup = () => {
    p.createCanvas(500, 500)
    sound.play()
    
    fft = new p5.FFT()
    fft.setInput(sound)
  }
  p.draw = () => {
    p.background('#111')
    const spectrum = fft.analyze()

    p.noStroke()

    for (let i = 0; i < spectrum.length; i++) {
      const x = p.map(i, 0, spectrum.length, 0, p.width)
      const h = -p.height + p.map(spectrum[i], 0, 255, p.height, 0)

      p.fill(p.map(i, 0, spectrum.length, 0, 255), 255, 255)
      p.rect(x, p.height, p.width/spectrum.length, h)
    }
  }
}