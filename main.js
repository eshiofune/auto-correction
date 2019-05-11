const universeOfDiscourse = [
    "Google", "Alphabet", "Facebook", "Amazon", "Apple", "Microsoft"
];

function getBigram(word) {
    let result = [];

    for (let i = 0; i < word.length-1; i++) {
        result.push(word[i] + word[i+1]);
    }

    return result;
}

function getSimilarity(word1, word2) {
    word1 = word1.toLowerCase();
    word2 = word2.toLowerCase();
    const bigram1 = getBigram(word1), bigram2 = getBigram(word2);
    let similar = [];

    for (let i = 0; i < bigram1.length; i++) {
        if (bigram2.indexOf(bigram1[i]) > -1) {
            similar.push(bigram1[i]);
        }
    }

    return similar.length / Math.max(bigram1.length, bigram2.length);
}

function autoCorrect(word, knownWords=universeOfDiscourse, similarityThreshold=0.5) {
    let maxSimilarity = 0;
    let mostSimilar = word;

    for (let i = 0; i < knownWords.length; i++) {
        let similarity = getSimilarity(knownWords[i], word);
        if (similarity > maxSimilarity) {
            maxSimilarity = similarity;
            mostSimilar = knownWords[i];
        }
    }

    return maxSimilarity > similarityThreshold ? mostSimilar : word;
}

function submit() {
    let text = document.getElementById("text").value;

    if (text.length > 0) {
        const lastChar = text[text.length - 1];
        
        if (lastChar === " ") {
            text = text.split(" ");
            const lastWord = text[text.length - 2];
            text[text.length - 2] = autoCorrect(lastWord);
            text = text.join(" ");
        }

        document.getElementById("text").value = text;
        document.getElementById("output").innerHTML = "You know: <br/>" + text;
    }
    else
        document.getElementById("output").innerHTML = "";
}

