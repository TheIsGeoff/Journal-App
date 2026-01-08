const textBox = document.getElementById('journal-text');
const wordCountDisplay = document.getElementById('wordcount-display');
const maxWords = 1000;

onload = () => {
    textBox.maxLength = maxWords;
}

textBox.addEventListener('input', () => {

    var textboxText = textBox.value;
    var wordCount = textboxText.length / maxWords * 100;

    wordCountDisplay.style.setProperty('--percent', wordCount);

    console.log(wordCount);

});