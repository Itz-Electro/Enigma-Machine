var alphabet = "abcdefghijklmnopqrstuvwxyz"
var plugboard = "rbcdefkhijglmnxpqastuvwoyz"
var rotor_settup = {
    "right":
        "bdfhjlcprtxvznyeiwgakmusqo",
    "middle":
        "ajdksiruxblhwtmcqgznpyfvoe",
    "left":
        "ekmflgdqvzntowyhxuspaibrcj",
    "reflector":
        "ejmzalyxvbwfcrquontspikhgd",
    "rightAlp":
        "abcdefghijklmnopqrstuvwxyz",
    "middleAlp":
        "abcdefghijklmnopqrstuvwxyz",
    "leftAlp":
        "abcdefghijklmnopqrstuvwxyz",
}
var rotor = {}
//plugboard=alphabet

plugboard = alphabet

enigma("a")

function enigma(input) {
    // Grab HTML
    var output = document.getElementById('output')
    document.getElementById('inputtext').innerHTML = input

    rotor = rotor_settup

    rotor

    input = input.toLowerCase()

    var encoded = ""
    for (var i = 0; i < input.length; i++) {
        if (!alphabet.includes(input[i])) {encoded+=input[i]; continue}
        encoded += convert_charactor(input[i])
        step_rotors()
        console.log(rotor)
    }
    
    output.innerHTML = encoded
}

function convert_charactor(char) {
    // Plugboard (also converts charactor to a number: its index in the alphabet)
    char = plugboard.indexOf(char)
    // Rotors & Reflector
    char = rotor.rightAlp.indexOf(rotor.right[char])
    char = rotor.middleAlp.indexOf(rotor.middle[char])
    char = rotor.leftAlp.indexOf(rotor.left[char])
    char = rotor.reflector.indexOf(alphabet[char])
    // Go backwards through Reflector & Rotors
    char = rotor.left.indexOf(rotor.leftAlp[char])
    char = rotor.middle.indexOf(rotor.middleAlp[char])
    char = rotor.right.indexOf(rotor.rightAlp[char])
    char = plugboard[char]
    char = alphabet.indexOf(char)
    return alphabet[char]
}

function step_rotors() {
    rotor.left = rotatestring(rotor.left)
    rotor.leftAlp = rotatestring(rotor.leftAlp)
    if (rotor.left[0] != "r") {return}
}

function rotatestring(string) {
    return string.substr(1, string.length) + string[0]
}