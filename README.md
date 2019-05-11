# auto-correction

### About

This is the code repository for the article at https://medium.com/@ehioroboevans/building-a-simple-auto-correction-tool-97d77d458742.

This tool allows for auto-correction of spelling errors and was built with HTML, CSS and JavaScript. See more about it in the Medium article above.

### Usage

- Clone or download this repository.
- Open the main.html file inside the auto-correction folder in your browser.

Alternatively, you can just extract the JavaScript code and use it in a larger project.

The functions provided are:

- *getBigram(word)*: returns the bigram of the word. Read about bigrams here: https://en.wikipedia.org/wiki/Bigram.

- *getSimilarity(word1, word2)*: calculates the similarity of the bigrams of the two words.

- *autoCorrect(word, knownWords, similarityThreshold)*: given an array of known or expected words, this function finds the most similar word in the array to the word passed in and, if the similarity is higher than the given threshold, returns the matched word.
