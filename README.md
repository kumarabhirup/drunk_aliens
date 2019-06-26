# Basic Game Template

This is an extension of the P5 Koji Scaffold originally made by [jones](https://gokoji.com/profile/jones).

I've compiled some easily modifiable universal features that I use across most of my game templates, which usually save me at least an hour or two of setting up each template, as well as provide code consistency.

Things like the main menu, sound button, scaling, custom font loading, highscore etc. are all included here which makes it a great starting point for any game.

## Getting Started
Main code is in *frontend/app/index.js*

## About The Game

Controls: How is this game played?

## Scaling

This system for scaling is the one I use across all of my templates.

It's mostly based on using the *objSize* variable that is calculated when the app starts.

Basically, instead of using hardcoded pixels to draw objects, you use *objSize*.

To draw an object you would do something like:

*image(myImage, pos.x, pos.y, objSize, objSize);*

Which would make sure it scales properly relative to screen size.
If you want bigger or smaller objects, just multiply *objSize* with a value.

You can also use *objSize* to determine positions:

*pos.x = width/2 + objSize * 2;*

Would offset the X coordinate by two objSizes right of the center.

Have fun playing with this, it's really simple once you get the hang of it and could really simplify your code!



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
Please feel free to [contact me](https://gokoji.com/profile/Svarog1389) if you have any suggestions!   
