const alphabet = "abcdefghijklmnopqrstuvwxyz"
var plugboard = alphabet

function swap(allPairs) {
    let newboard = plugboard
    for (let pair of allPairs) {
        let a = pair[0]
        let b = pair[1]
        console.log(a,b,alphabet.indexOf(a),alphabet.indexOf(b))
        newboard[alphabet.indexOf(a)] = b
    }
    plugboard = newboard
}

function returnPB() {
    return plugboard
}

export { swap, returnPB }