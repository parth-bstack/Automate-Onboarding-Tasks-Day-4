function isVowel(input, position) {
    if (input.charAt(position) === 'a' || input.charAt(position) === 'e' || input.charAt(position) === 'i' || input.charAt(position) === 'o' || input.charAt(position) === 'u') {
        return true;
    } else {
        return false;
    }
}

function main() {
    const input = ("NNNNNN").toLowerCase();;
    const len = input.length;

    for (let i = 0; i < len; i++) {
        if (isVowel(input, i)) {
            console.log("Vowel is present");
            return;
        }
    }
    console.log("No Vowel Found");
}

main();
