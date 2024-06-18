function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    return true;
}

function collectRangeAndDisplayNumbers() {
    let startRange = parseInt(prompt("Enter the start of the range:", "1"));
    let endRange = parseInt(prompt("Enter the end of the range:", "100"));

    if (isNaN(startRange) || isNaN(endRange) || startRange > endRange || startRange < 1 || endRange > 100) {
        alert("Please enter valid numbers for the range (1 to 100).");
        return;
    }

    displayNumbers(startRange, endRange);
}

function displayNumbers(startRange, endRange) {
    let allNumbersDiv = document.getElementById('all-numbers');
    let oddNumbersDiv = document.getElementById('odd-numbers');
    let evenNumbersDiv = document.getElementById('even-numbers');
    let primeNumbersDiv = document.getElementById('prime-numbers');

    allNumbersDiv.innerHTML = '';
    oddNumbersDiv.innerHTML = '';
    evenNumbersDiv.innerHTML = '';
    primeNumbersDiv.innerHTML = '';

    for (let i = startRange; i <= endRange; i++) {
        
        let wholeNum = document.createElement('p');
        wholeNum.textContent = i;
        allNumbersDiv.appendChild(wholeNum);

        
        if (i % 2 !== 0) {
            let oddNum = document.createElement('p');
            oddNum.textContent = i;
            oddNumbersDiv.appendChild(oddNum);
        }

        
        if (i % 2 === 0) {
            let evenNum = document.createElement('p');
            evenNum.textContent = i;
            evenNumbersDiv.appendChild(evenNum);
        }

        
        if (isPrime(i)) {
            let primeNum = document.createElement('p');
            primeNum.textContent = i;
            primeNumbersDiv.appendChild(primeNum);
        }
    }
}