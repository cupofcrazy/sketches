import p5 from 'p5';
import 'p5/lib/addons/p5.sound'

declare global {
  interface Window {
    p5: typeof p5;
  }
}