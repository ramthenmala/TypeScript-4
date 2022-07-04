
function startGame() {
    // start click
    var msg = document.getElementById('messages');
    msg!.innerHTML = 'Welcome to new game!';
}
document.getElementById('startGame')!.addEventListener('click', startGame);
