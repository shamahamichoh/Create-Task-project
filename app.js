let gameState = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';

function makeMove(curIndex) {
    if (gameState[curIndex] === '') {
        gameState[curIndex] = currentPlayer;
        document.getElementById(`cell-${curIndex}`).innerText = currentPlayer;

        
        if (checkWinner()) {
            document.getElementById('message').innerText = `${currentPlayer} wins!`;
            return;
        } else if (gameState.every(cell => cell !== '')) {
            document.getElementById('message').innerText = `It's a draw!`;
            return;
        }
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
}

function checkWinner() {
    const winningCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], 
        [0, 3, 6], [1, 4, 7], [2, 5, 8], 
        [0, 4, 8], [2, 4, 6]             
    ];

    return winningCombinations.some(combination => {
        return combination.every(index => gameState[index] === currentPlayer);
    });
}