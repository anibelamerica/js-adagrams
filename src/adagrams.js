const Adagrams = {
  drawLetters() {
    // Implement this method for wave 1
    const letters = {
      A: 9,
      B: 2,
      C: 2,
      D: 4,
      E: 12,
      F: 2,
      G: 3,
      H: 2,
      I: 9,
      J: 1,
      K: 1,
      L: 4,
      M: 2,
      N: 6,
      O: 8,
      P: 2,
      Q: 1,
      R: 6,
      U: 4,
      V: 2,
      W: 2,
      X: 1,
      Y: 2,
      Z: 1
    }

    let deck = [];

    Object.keys(letters).forEach(function (letter) {
      for (let i = 0; i < letters[letter]; i += 1) {
        deck.push(letter);
      }
    });

    for (let i = deck.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * Math.floor(i));
      const temp = deck[j];
      deck[j] = deck[i];
      deck[i] = temp;
    }

    return deck.slice(0, 10);
  },

  usesAvailableLetters(input, lettersInHand) {
    let inputCopy = input.toUpperCase().split('').slice();
    let handCopy = lettersInHand.slice();

    inputCopy.forEach(function (letter) {
      if (handCopy.includes(letter.toUpperCase())) {
        handCopy.pop(letter);
        inputCopy.pop(letter);
      } else {
        return false;
      }
    });
    return true;
  }


};

// Do not remove this line or your tests will break!
export default Adagrams;
