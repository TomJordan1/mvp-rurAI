export class InputManager {
  constructor() {
    this.keys = {};

    // Teclas que el juego usa y no deben provocar scroll/navegación
    this.gameKeys = new Set([
      'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight',
      'w', 'a', 's', 'd', 'W', 'A', 'S', 'D', ' '
    ]);
    
    this.handleKeyDown = (e) => {
      if (this.gameKeys.has(e.key)) {
        e.preventDefault();
      }
      this.keys[e.key] = true;
      if (e.key.length === 1) {
        this.keys[e.key.toLowerCase()] = true;
      }
    };
    
    this.handleKeyUp = (e) => {
      if (this.gameKeys.has(e.key)) {
        e.preventDefault();
      }
      this.keys[e.key] = false;
      if (e.key.length === 1) {
        this.keys[e.key.toLowerCase()] = false;
      }
    };

    window.addEventListener('keydown', this.handleKeyDown);
    window.addEventListener('keyup', this.handleKeyUp);
  }

  isKeyDown(key) {
    return !!this.keys[key];
  }
  
  cleanup() {
    window.removeEventListener('keydown', this.handleKeyDown);
    window.removeEventListener('keyup', this.handleKeyUp);
  }
}
