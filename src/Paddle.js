const SPEED = 0.01;

export default class Paddle {
  /**
   *
   * @param {string} paddleElemId
   */
  constructor(paddleElemId) {
    this.paddleElem = document.getElementById(paddleElemId);
    this.reset();
  }

  get position() {
    return parseFloat(
      getComputedStyle(this.paddleElem).getPropertyValue("--position")
    );
  }

  set position(value) {
    this.paddleElem.style.setProperty("--position", value);
  }

  rect() {
    return this.paddleElem.getBoundingClientRect();
  }

  reset() {
    this.position = 50;
  }

  update(delta, ballHeight) {
    this.position += SPEED * delta * (ballHeight - this.position);
  }
}
