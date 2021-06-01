1. Preload all the required images for the project in preload( ).
2. Add a background image to canvas.
3. Declare iss, spacecraft and hasDocked variables.
4. Assign false to hasDocked variable.
5. Create iss sprite in setup( ):
   ● Add animation to the iss sprite and scale the image.
6. Create spacecraft sprite in setup( ):
   ● Add animation to the spacecraft sprite and scale the image.
7. Write this below given condition in draw( ):
   ● Inside this condition set a random X position between some range for the
spacecraft.
   ● Write all the keyEvents condition inside this if(!hasDocked) condition.
8. When the left arrow is pressed:
   ● Show image with the left side jet smoke.
   ● Move the spacecraft in the left direction a little bit.
9. When the right arrow is pressed:
   ● Show image with the right side jet smoke.
   ● Move the spacecraft in the right direction a little bit.
10.When the down arrow is pressed:
   ● Show image with both side jet smoke.
   ● No downward movements will be added here for spacecraft.
11.Write a condition using UP_ARROW key:
   ● To move spacecraft towards ISS.
12.Also, write a condition to check if the spacecraft reaches the docking position of ISS as
shown in the image below.
   ● Once the spacecraft touches that point, set the hasDocked value as true.
   ● Show text that says “Docking Successful!”.
13.“Run” your code to check if it works as expected.
14.Find bugs and fix them.
