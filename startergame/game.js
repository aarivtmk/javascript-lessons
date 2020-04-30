

var scores, dice_number, player_no, current_score;


scores = [0, 0]
player_no = 0;
current_score = 0;
score_of_player0 = 0;
score_of_player1 = 0;

startGame()
// hide the dice

function startGame() {
    document.getElementById('score-0').textContent = '0'
    document.getElementById('score-1').textContent = '0'
    document.getElementById('current-0').textContent = '0'
    document.getElementById('current-1').textContent = '0'
    document.querySelector('.dice').style.display = 'None';
}



// generate a diceno


document.querySelector('.btn-roll').addEventListener('click', throwDice);


function throwDice() {
    dice_number = Math.floor(Math.random() * 6) + 1;

    if (dice_number > 1) {

        current_score = current_score + dice_number;
        document.querySelector('.dice').style.display = 'block';

        document.querySelector('.dice').src = 'dice-' + dice_number + '.png';
        document.getElementById('current-' + player_no).textContent = current_score;

    }

    else {
        document.querySelector('.dice').style.display = 'None';
        current_score = 0;
        document.querySelector('#current-' + player_no).textContent = current_score;
        // pass dice to next player
        nextPlayer();

    }

}



function nextPlayer() {



    // if player-0 is playing, pass the dice to player-1
    // if player-1 is playing , pass the dice to player-0

    if (player_no === 0) {
        player_no = 1;
    }
    else {
        player_no = 0;
    }


    // change the dot to active player
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

}

document.querySelector('.btn-hold').addEventListener('click', function () {

    scores[player_no] = scores[player_no] + current_score;
    current_score = 0;
    document.querySelector('#current-' + player_no).textContent = current_score;

    // find the winner
    document.querySelector('#score-' + player_no).textContent = scores[player_no];

    if (scores[player_no] >= 10) {
        document.querySelector('#name-' + player_no).textContent = 'Winner';
        document.querySelector('.player-' + player_no + '-panel').classList.add('winner');
        document.querySelector('.btn-roll').style.display = "None";
        document.querySelector('.btn-hold').style.display = "None";


    }



    nextPlayer();
});


document.querySelector('.btn-new').addEventListener('click', startGame);