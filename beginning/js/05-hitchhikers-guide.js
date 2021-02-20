// The “Hitchhiker’s Guide to the Galaxy” Game
// Usage: Use a combination of simple conditional, nested if/else if, and switch statements

let gameBegin = prompt('Are you ready to play the game : yes / no');

if (gameBegin === 'yes') {
    alert ('You are in a dark, dingy, and humid cave searching for the lost treasure of Captain Chingadera. You are disoriented, lost, hungry and extremely thirsty. You see a speck of light in the distance ahead of you, something shimmering to your right, and the sound of running water to your left. Your back is against the wall.');

    let moveDirection = prompt('Which direction would you like to head (please enter forward, left, or right)');

    switch(moveDirection){
        case 'left': alert('Your thirst has gotten the better of you. You trip on a rock, hit your head, and fall into a pool of water and drown!');
                break;  
        case 'forward': alert('You walk 100 yards and safely make your way out of the cave.');
                break;
        case 'right': alert('You found the gold! You walk into a small room and see thousands of gold coins, jewels, chalices, and more. You jump into the pile of gold in celebration and immediately a hidden door slams down and traps you in the room forever!');
                 break;
        default: alert('The ghost of Captain Chingadera has condemned you to eternal damnation and you shall now burn in the hot excoriation for lifeless lowlifes for not choosing the correct option.');

    }
    alert('Game Over!');

    let rating = Number(prompt('Rate the game between 1 and 10'));

    // If the user enters a number not between 1 and 10, thank the user for playing and end the game, If the user enters a number between 6 and 10, thank the user and ask them to play again. If the user enters a number between 1 and 5, thank the user and tell them that you are working hard to improve the game. 

    if(rating >=1 && rating <= 10) {
        if(rating >=6) {
            alert('Thank You! Play Again.');
        } else {
            alert('Thank You! We are working hard to improve the game.');
        }
    } else {
        alert('Thank You for playing!');
    }
} else {
    alert('Thank You ! Please try the game next time .');
}
