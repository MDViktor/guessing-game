class GuessingGame {
  constructor() {
    this.value = 0;
    this.left = 0;
    this.right = 0;

  }

  setRange(min, max) {
    this.left = min;
    this.right = max;
    
    // console.log(this.left, this.right);

  }

  guess() {
    this.value = Math.round((this.left+this.right)/2) ; 
    console.log(this.left, this.right, this.value);
    return this.value;
  }

  lower() {
    this.right = this.value;
  }

  greater() {
    this.left = this.value;
  }
}

module.exports = GuessingGame;
