# Welcome to the Pixels Art Project!

### 💡Veja o exemplo a seguir de como o projeto pode se parecer depois de pronto. Lembre-se que você pode ~~e deve~~ ir além para deixar o projeto com a sua cara e impressionar à todos!

![exemplo de arte com pixels](./art-with-pixels.gif)

---

## Mandatory Requirements:

* In this project, you will implement a pixel art editor.

**In other words, given a color palette and a frame composed of pixels, you will allow those who use it to be able to paint whatever they want on the frame!** 👩‍🎨

### 1 - The page must have the title "Palette of Colors"

- tag `h1`;

### 2 - The page must have a palette of four different colors.

- The background color of each element in the palette should be the color that the element represents. **The only color not allowed in the palette is white.**;
- Each element of the color palette must have a solid black border, 1 pixel wide;
- The color palette should list all colors available for use side by side, and should be positioned under the title "Color Palette";
- The color palette must not contain repeated colors.

### 3 - The color **black** should be the first in the color palette.

### 4 - The page must have a pixel frame, with 25 pixels.

- The pixel frame must be 5 elements wide and 5 elements long;
- The initial color of the "pixels" inside the frame, when opening the page, must be white;
- The "pixel" frame should appear below the color palette.

### 5 - Each element of the pixel frame must be 40 _pixels_ wide and 40 _pixels_ high and be delimited by a black border of 1 pixel.

### 6 - When loading the page, the color **black** of the palette must already be selected to paint the pixels.

### 7 - When you click on one of the colors in the palette, the selected color will be used to fill the pixels in the frame.

### 8 - When clicking on a pixel within the frame after selecting a color from the palette, the pixel must be filled with that color.

- When loading the page it should be possible to paint the pixels black;
- After selecting another color in the palette, it should be possible to paint the pixels with that color;
- Only the pixel that was clicked should be filled with the selected color, without influencing the color of the other pixels.

### 9 - Create a button that, when clicked, clears the frame by filling the color of all its pixels with white.

- The button must be positioned between the color palette and the pixel frame;
- The button text must be **"Clear"**.

## Bonus:

### 10 - Make the pixel frame its user-defined size.

- Create an input and a button that allow you to define a pixel frame with size between 5 and 50. When clicking on the button, a frame of **N** pixels wide and **N** pixels high must be generated, where **N** is the number entered in the input;
- That is, if the value passed to the input is 7, when clicking on the button, a 49 pixel frame will be generated (7 pixels wide x 7 pixels high);
- The input must only accept numbers greater than zero. This restriction ** must ** be made using the attributes of the `input` element;
- The button must contain the text "VQV";
- The input must be positioned between the color palette and the pixel frame;
- The button must be positioned next to the input;
- If no value is placed in the input when clicking the button, show an `alert` with the text:" Board is invalid! ";
- The new frame must have all pixels filled with white.

### 11 - Limit the size of the minimum and maximum of the board.

- If the value entered in the input `board-sze` falls outside the range of 5 to 50, do:
   - Value less than 5, consider 5 as standard;
   - Value greater than 50, consider 50 as standard.

### 12 - Make the colors in the palette randomly generated when loading the page.

- The black color still needs to be present and should be the first in your color palette.

---

#VQV 🚀
