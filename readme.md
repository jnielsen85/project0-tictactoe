I've a new found appreciation for the idea that software is never finished, which is certainly the case here.  Functionality that has been started but not finished includes the ability to select your own avatars and input a players name.  

Game Site:
https://jnielsen85.github.io/project0-tictactoe/index.html

Languages Used:
HTML
CSS
JavaScript
jQuery

Project:
Setting up the HTML for the page was the first step, and was done almost entirely using divs.  I tried to keep the HTML to a minimum.  There is very little to no styling in the html files.  All animations and functionality are contained in the JS and CSS files. Images for token selection (coming in V3) were applied through CSS. ID's and Classes were used heavily.

Many of my variables were initially local and later changed to global as the code became more complex.  Likewise, as the code progressed, Jquery and vanilla JS were occasionally blended.  So too is there a mix of long form, ternary, arrow functions, etc.  Though most of these were re-written as long form (easier to understand when tweaking code).           

While the chopping and changing served a purpose from an educational perspective, it was not the most efficient approach and an endorsement for a more methodical approach to planning and use of psuedo code.  

Animations:
Animations and transitions, including the 'win notification pop up' and the index page animation were achieved through css and JS by through a mix of delays, adding classes and updating style properties (for e.g. display none to inline.  or visibility hidden to visible)

e.g.
$(#block_0)
.delay(5600)
.queue(function (next) {
$(this).css('display', 'inline');
next();
});

Buttons (reset and start):
HTML buttons were not used but instead divs styled (8bit retro style) in CSS.  e.g. .resetDiv and .reset and ::before and ::after properties.
