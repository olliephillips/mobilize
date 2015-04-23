# mobilize

###Introduction
Experimental suite of CSS resets and adjustments, and optional JavaScript routines to make non "responsive" sites more "mobile friendly". Tested on 3 sites, all of which subsequently passed Google's "mobile friendly" test here just by implementing just the basic CSS script. https://www.google.co.uk/webmasters/tools/mobile-friendly/

####How to use
1. Upload mobilize.css to your server, remember to amend any path dependencies in the remaining instructions
2. Add ```<meta name="viewport" content="width=device-width, initial-scale=1.0">``` to in between the ```<head></head>``` tags of your HTML page
3. Add this stylesheet in the ```<head></head>``` tags of your HTML page with ```<link href="mobilize.css" rel="stylesheet" type="text/css" />```


####Going Further
4. Use the "unfriendly" class to remove elements that just don't work when viewed on mobile. Add the class to the element
5. Use the "friendly" class to enable mobile only elements. Add the class to the elements
6. Add additional directives to enhance aesthetics

####Going Further Still
7. Upload mobilize.js to your server, remember to amend any path dependencies in the remaining instructions
8. Add this script in the ```<head></head>``` tags of your HTML page ```<script type="text/javascript" src="mobilize.js"></script>```
9. Works for mobile view ports only. To restructure the DOM for better UI, add the "remobilize" class to an element together with one of the following:
  * move-first, moves element and all children to first in DOM tree in ```<BODY>```
  * move-last, moves element and all children to last in DOM tree in ```<BODY>```
  * move-before-x, moves element and all children directly before another element where x is the element's ID to move before

#####Caveats
If there are inline styles marked "!important" there's nothing to be done.
If your site uses table based markup this won't work. 

#####Contributions
If you can improve this quick and dirty script please feel free to contribute

###License and Copyright
Mobilize is MIT licensed
Copyright 2015 Ollie Phillips