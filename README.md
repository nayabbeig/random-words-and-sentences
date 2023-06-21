# random-words-and-sentences
You gussed it right! random-words-and-sentence generate random words and sentences for you. You can continuesly generate maximum of 1831 unique words randomly.

## Installation
To install run this command.
`npm install --save random-words-and-sentences`

## Usage
- `getRandomSentence(uniqueUpto)` : Returns a random sentence. By default if you call it 100 times it will return 100 unique sentences randomly. But after that sentence are not guaranteed to be unique, though they will be returned randomly.
  
  - `uniqueUpto` (type: number): Number of calls for which `getRandomSentence` returns a unique sentence. This param is optional and has a default value of 100, and it can take a value upto 1831. For a number more than 1831 it will return an error.

## Example
``` 
const RS = require("random-words-and-sentences");

const randomSentence = RS.getRandomSentence();

console.log(randomSentence); // Prints:  I don't think I can get anything but a dolphin here

```
