let gameState = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';

const playerImages = {
    'X': 'img/icons8-squid-game-circle-guard-96.png',
    'O': 'img/icons8-squid-game-triangle-guard-96.png'
}

function makeMove(curIndex) {
    if (gameState[curIndex] === '') {

        gameState[curIndex] = currentPlayer;

        

        document.getElementById(`cell-${curIndex}`).innerHTML = `<img src="${playerImages[currentPlayer]}" alt="${currentPlayer}" style="width: 80px; height: 80px;">`;

        if (checkWinner()) {
            document.getElementById('message').innerText = `${currentPlayer} wins!`;
            setTimeout(resetGame, 2000);
            return;
            
        } else if (gameState.every(cell => cell !== '')) {
            document.getElementById('message').innerText = `It's a draw!`;
            setTimeout(resetGame, 2000);
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
function resetGame(){
   
    gameState = ['', '', '', '', '', '', '', '', ''];

    for(let i = 0; i < gameState.length; i++){
        document.getElementById(`cell-${i}`).innerHTML = "";
    }
    currentPlayer = "X"
    document.getElementById("message").innerText = "";
}