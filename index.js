const sentences = require("./sentences.json");
const totalSentencesCount = sentences.length;
const totalDigits = String(totalSentencesCount).length;

// console.log(typeof sentences, Array.isArray(sentences), sentences);
class RandomSentences {
  #recentIndices = [];

  #getRandomIndex() {
    const randomNumber = Math.random();
    const randomNumberMultiplied = randomNumber * 10 ** totalDigits;
    const randomInteger = Math.ceil(randomNumberMultiplied);
    const randomIndex = randomInteger % totalSentencesCount;
    return randomIndex;
  }

  #getRandomIndexUnique(uniqueUpto = 100) {
    if (uniqueUpto > totalSentencesCount)
      return new Error(
        "This library only supports indices unique upto " + totalSentencesCount
      );
    let index;
    if (this.#recentIndices.length === uniqueUpto) {
      this.#recentIndices.unshift();
    }

    while (!index || this.#recentIndices.includes(index)) {
      index = this.#getRandomIndex();
    }

    this.#recentIndices.push(index);

    return index;
  }

  getRandomSentence(uniqueUpto = 100) {
    if (uniqueUpto > totalSentencesCount)
      return new Error(
        "This library only supports sentences unique upto " +
          totalSentencesCount
      );
    const index = this.#getRandomIndexUnique(uniqueUpto);

    return sentences[index];
  }
}

const RS = new RandomSentences();

module.exports = RS;
