
/**
* The core EndlessRunner blueprint game file.
* 
* This file is only used to initalise (start-up) the main Kiwi Game 
* and add all of the relevant states to that Game.
*
*/

//Initialise the Kiwi Game. 

var game = new Kiwi.Game('content', 'MyGame', null, {renderer: Kiwi.RENDERER_CANVAS, plugins:['LeapMotion']});

//Add all the States we are going to use.
game.states.addState(LoadingState);
game.states.addState(IntroState);
game.states.addState(PlayState);

game.states.switchState("LoadingState");