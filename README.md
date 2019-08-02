# Basic Game Template

- This is an extension of the P5 Scaffold.

- I've compiled some easily modifiable universal features that I use across most of my game templates, which usually save me at least an hour or two of setting up each template, as well as provide code consistency.

- Things like the main menu, sound button, scaling, custom font loading, highscore etc. are all included here which makes it a great starting point for any game.

- Read the instructions below to get some understanding of how it works.

## Getting Started
Main code is in *frontend/app/index.js*

## About The Game

Controls: How is this game played?

## Tips 
- To end a game, simply change *gameOver* to *TRUE*. This will take you to the main menu.
- Clicking the PLAY button will restart the game (resets the *gameOver* boolean and calls the *init()* function).
- Reset everything in *init()* function (clear out all arrays, reset variables to their initial state etc. simply get everything as it was when the game loaded).
- Code with comment *"DELETE THIS"* is just example and can be deleted once you've checked out how it works
- Use *checkHighscore()* whenever you want to check for highscore and save it to localStorage
- Everything with a comment *"EXAMPLE"* above it is there just for illustration purposes and can be deleted once you want to make your own game.

## Scaling

- This system for scaling is the one I use across all of my templates.
- It's mostly based on using the *objSize* variable as a base unit size that is calculated when the app starts and on resize event.
- Using it will make sure your game objects remain roughly the same size compared to the game view.
- If you have CSS experience, you can think of it as something like a *vmin* viewport unit.
- Basically, instead of using hardcoded pixels to draw objects, you use *objSize*.
- To draw an object you would do something like:

*image(myImage, pos.x, pos.y, objSize, objSize);*

Which would make sure it scales properly relative to screen size.
- If you want bigger or smaller objects, just multiply *objSize* with a value.
- You can also use *objSize* to determine positions:

*pos.x = width/2 + objSize * 2;*

Would offset the X coordinate by two objSizes right of the center.

- Have fun playing with this, it's really simple once you get the hang of it and could really simplify your code!



# Customizations

Include tips for the best types of assets in each customization section.

Things that can be customized:

## Colors

- Background
- Title
- Instructions
- Play Button
- Score and High Score


## Images
- Background (optional)
- Life Icon

## Sounds
- Music

## Game Settings
- Any Google Font can be used
- All game text
- Lives

## NOTES

Avoid resizing the game window while playing, weird stuff happens.

## Support and suggestions
Please feel free to [contact me](https://withkoji.com/~Svarog1389) if you have any suggestions!   
