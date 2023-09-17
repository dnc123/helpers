"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(text) {
    if (!text) {
        return text;
    }
    const sentences = text.trim().split(/([.!?])(?!\s|$)/); // Split text into sentences
    for (let i = 0; i < sentences.length; i += 2) {
        const sentence = sentences[i].trim();
        if (sentence.length > 0) {
            const firstLetter = sentence.charAt(0).toUpperCase();
            const restOfSentence = sentence.slice(1);
            sentences[i] = firstLetter + restOfSentence;
        }
    }
    return sentences.join('');
}
exports.default = default_1;
