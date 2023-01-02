const alphabet = "abcdefghijklmnopqrstuvwxyz"

// Letter to signal
function forward(letter) {
    return alphabet.indexOf(letter.toLowerCase())
}
// Signal to Letter
function backward(signal) {
    return alphabet[signal]
}

export { forward, backward }