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
    };

    let deck = [];

    Object.keys(letters).forEach( (letter) => {
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
    for (const letter of inputCopy) {
      if (handCopy.includes(letter)) {
        handCopy.splice( handCopy.indexOf(letter), 1);
      } else {
        return false;
      }
    }
    return true;
  },

  scoreWord(word) {

    const scoreChart = {
      A: 1,
      E: 1,
      I: 1,
      O: 1,
      U: 1,
      L: 1,
      N: 1,
      R: 1,
      S: 1,
      T: 1,
      D: 2,
      G: 2,
      B: 3,
      C: 3,
      M: 3,
      P: 3,
      F: 4,
      H: 4,
      V: 4,
      W: 4,
      Y: 4,
      K: 5,
      J: 8,
      X: 8,
      Q: 10,
      Z: 10
    };

    let score = 0;

    const wordArray = word.toUpperCase().split('');

    wordArray.forEach((letter) => {
      score += scoreChart[letter];
    });

    if (word.length > 6) {
      score += 8;
    }

    return score;
  },

  highestScoreFrom(words) {

    let topWord;
    let all_tiles_winner;
    let shortest_winner;
    let max = 0;
    let winner = [];

    for (const word of words) {
      const temp = this.scoreWord(word);
      if (temp > max) {
        max = temp;
        winner = [word];
      } else if (temp == max) {
        winner.push(word);
      }
    }

    if (winner.length > 1) {

      all_tiles_winner = winner.find( (word) => {
        return word.length == 10;
      });

      for (const word of winner) {
        if (shortest_winner === undefined || word.length < shortest_winner.length) {
          shortest_winner = word;
        }
      }

      topWord = all_tiles_winner === undefined ? shortest_winner : all_tiles_winner;
    } else {
      topWord = winner[0];
    }

    return {
      word: topWord,
      score: max
    }
  }

};

// Do not remove this line or your tests will break!
export default Adagrams;
