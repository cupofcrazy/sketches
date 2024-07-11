import p5 from 'p5'
import { sketch } from './sketches/binary-grid-identity.ts'
import './style.css'


new p5(sketch, document.getElementById('app') as HTMLElement)