function checkPrime(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i * i <= num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

function main() {
    const num = parseInt("3");
    if (checkPrime(num)) {
        console.log(`${num} is a prime number.`);
    } else {
        console.log(`${num} is not a prime number.`);
    }
}

main();
