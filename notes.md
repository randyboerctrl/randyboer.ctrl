My Git & VS Code Notes

## 🛠 Git Shortcuts
- `git add .` → Stage all changes
- `git commit -m "Message"` → Save changes
- `git push origin main` → Upload changes

## 💻 VS Code Shortcuts
- `Cmd + S` → Save file
- `Cmd + Shift + G` → Open Git panel
- `Cmd + J` → Toggle terminal

⸻ HTML PROMPTS

1. Basic HTML Document Structure

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <h1>Hello World</h1>
</body>
</html>

Explanation: This is the basic structure of any HTML document. It includes the DOCTYPE, html, head, and body tags. The meta tags help with character encoding and viewport settings.

⸻

2. Adding Links

<a href="https://www.example.com" target="_blank">Visit Example</a>

Explanation: The <a> tag creates a hyperlink. The href attribute specifies the link’s destination, and target="_blank" opens the link in a new tab.

⸻

3. Adding Images

<img src="image.jpg" alt="Description of image" width="300" height="200">

Explanation: The <img> tag embeds an image. The src attribute specifies the image file, alt provides alternative text if the image doesn’t load, and width and height set the size.

⸻

4. Creating an Unordered List

<ul>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>

Explanation: The <ul> tag creates an unordered (bulleted) list. Each <li> represents a list item.

⸻

5. Creating an Ordered List

<ol>
  <li>First item</li>
  <li>Second item</li>
  <li>Third item</li>
</ol>

Explanation: The <ol> tag creates an ordered (numbered) list, and each <li> represents a list item.

⸻

6. Creating a Table

<table>
  <tr>
    <th>Header 1</th>
    <th>Header 2</th>
  </tr>
  <tr>
    <td>Row 1, Cell 1</td>
    <td>Row 1, Cell 2</td>
  </tr>
  <tr>
    <td>Row 2, Cell 1</td>
    <td>Row 2, Cell 2</td>
  </tr>
</table>

Explanation: The <table> tag creates a table. <tr> defines a row, <th> defines a table header cell, and <td> defines a regular table cell.

⸻

7. Adding a Form

<form action="/submit" method="POST">
  <label for="name">Name:</label>
  <input type="text" id="name" name="name">
  <input type="submit" value="Submit">
</form>

Explanation: The <form> tag defines a form. The action attribute specifies where to send the form data, and method="POST" defines how the data is sent. The <label> is associated with the <input> element using for and id attributes.

⸻

8. Adding a Button

<button type="button">Click Me!</button>

Explanation: The <button> tag creates a clickable button. The type="button" makes it a standard button.

⸻

9. Adding a Dropdown Menu

<select name="fruit" id="fruit">
  <option value="apple">Apple</option>
  <option value="banana">Banana</option>
  <option value="orange">Orange</option>
</select>

Explanation: The <select> tag creates a dropdown menu, and <option> tags define the menu items.

⸻

10. Creating a Text Area

<textarea name="message" rows="4" cols="50"></textarea>

Explanation: The <textarea> tag defines a multi-line text input field. The rows and cols attributes define the size of the text area.

⸻

11. Using the div Element for Grouping

<div class="container">
  <p>This is a paragraph inside a div.</p>
</div>

Explanation: The <div> tag is a generic container used to group elements together, often used for styling or structuring purposes.

⸻

12. Using the span Element for Inline Grouping

<p>This is <span class="highlight">highlighted text</span> in a paragraph.</p>

Explanation: The <span> tag is used to group inline elements, typically for styling purposes.

⸻

13. Adding a Meta Tag for Character Set

<meta charset="UTF-8">

Explanation: This meta tag defines the character encoding for the document. UTF-8 supports most characters from different languages.

⸻

14. Adding a Video

<video width="320" height="240" controls>
  <source src="movie.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

Explanation: The <video> tag embeds a video. The controls attribute adds video controls like play/pause. The <source> tag specifies the video file and format.

⸻

15. Adding an Audio File

<audio controls>
  <source src="audio.mp3" type="audio/mp3">
  Your browser does not support the audio element.
</audio>

Explanation: The <audio> tag embeds an audio file. The controls attribute adds playback controls, and the <source> tag specifies the audio file and format.

⸻

16. Creating a Link to an Email

<a href="mailto:someone@example.com">Send Email</a>

Explanation: The mailto: link opens the user’s email client with the specified email address.

⸻

17. Creating an Input for a Password

<input type="password" id="password" name="password">

Explanation: The type="password" makes the input field hide the characters entered (useful for sensitive data like passwords).

⸻

18. Adding a Checkbox

<input type="checkbox" id="subscribe" name="subscribe" value="yes">
<label for="subscribe">Subscribe to newsletter</label>

Explanation: The <input type="checkbox"> creates a checkbox. The <label> tag is used to associate text with the checkbox.

⸻

19. Adding a Radio Button

<input type="radio" id="male" name="gender" value="male">
<label for="male">Male</label>
<input type="radio" id="female" name="gender" value="female">
<label for="female">Female</label>

Explanation: The <input type="radio"> creates a radio button, which allows a user to select one option from a set. The name attribute groups the radio buttons.

⸻

20. Adding a Hidden Element

<input type="hidden" name="user_id" value="12345">

Explanation: The <input type="hidden"> creates a hidden input field, typically used to pass data without showing it to the user.

⸻

Now, you should be able to copy and paste this into your notes.md without any issues.

⸻ CSS PROMPTS

Here’s a list of essential CSS prompts for beginners, with a short explanation of what each does. These will cover the basics and help you build your foundational understanding of CSS for styling your HTML documents.

⸻

1. Basic CSS Structure

selector {
  property: value;
}

Explanation: This is the basic structure of a CSS rule. A selector targets an HTML element, and a property defines what aspect of the element you want to style (like color, size, or margin), with the value being the specific styling.

⸻

2. Styling Text Color

p {
  color: blue;
}

Explanation: This will set the text color of all <p> elements to blue. You can use color names (like blue), hex codes (#0000FF), RGB values (rgb(0, 0, 255)), and more.

⸻

3. Styling Background Color

body {
  background-color: lightgray;
}

Explanation: This sets the background color of the entire page (<body>) to light gray. Background colors can be applied to almost any element.

⸻

4. Font Size

h1 {
  font-size: 2em;
}

Explanation: This changes the font size of all <h1> elements to twice the default font size. You can use units like px, em, rem, %, etc.

⸻

5. Font Family

body {
  font-family: Arial, sans-serif;
}

Explanation: This defines the font family for the text in the body of the webpage. It tries to use “Arial” first, and if unavailable, it falls back to the generic sans-serif font.

⸻

6. Font Weight

strong {
  font-weight: bold;
}

Explanation: The font-weight property is used to set the thickness of the text. Here, it makes text inside <strong> tags bold.

⸻

7. Text Alignment

h1 {
  text-align: center;
}

Explanation: This aligns the text inside <h1> elements to the center. You can also use left, right, or justify.

⸻

8. Line Height

p {
  line-height: 1.5;
}

Explanation: This property adjusts the vertical space between lines of text. Here, it sets the line height of <p> elements to 1.5 times the font size.

⸻

9. Text Decoration

a {
  text-decoration: underline;
}

Explanation: This adds an underline to all <a> (anchor/link) elements. You can also use none, line-through, or overline.

⸻

10. Margin

div {
  margin: 20px;
}

Explanation: The margin property creates space around elements. Here, a margin of 20px is applied to all <div> elements.

⸻

11. Padding

div {
  padding: 15px;
}

Explanation: The padding property adds space inside an element, between the content and the border. Here, it adds 15px of padding to all <div> elements.

⸻

12. Width and Height

img {
  width: 100%;
  height: auto;
}

Explanation: This makes the image (<img>) fill the width of its container (100% of its parent’s width), while the height adjusts automatically to maintain the aspect ratio.

⸻

13. Borders

div {
  border: 2px solid black;
}

Explanation: This applies a 2px solid black border to all <div> elements. You can adjust the width, style (solid, dashed, dotted), and color.

⸻

14. Box Model

div {
  box-sizing: border-box;
}

Explanation: The box-sizing property defines how the total width and height of an element are calculated. border-box includes padding and borders in the element’s width and height.

⸻

15. Display Property

div {
  display: block;
}

Explanation: The display property defines how an element is displayed. block makes the element a block-level element (taking up the full width). You can also use inline, inline-block, flex, grid, etc.

⸻

16. Positioning (Static, Relative, Absolute, Fixed)

div {
  position: relative;
  top: 10px;
  left: 20px;
}

Explanation: The position property specifies how an element is positioned. relative positions an element relative to its normal position. Other values include absolute, fixed, and sticky.

⸻

17. Flexbox Layout

.container {
  display: flex;
  justify-content: center;
  align-items: center;
}

Explanation: Flexbox is a layout model that allows you to easily align and distribute space among items within a container. Here, it centers content both horizontally and vertically.

⸻

18. CSS Grid Layout

.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}

Explanation: CSS Grid is another layout model for creating complex, two-dimensional layouts. Here, it creates a grid with 3 equal-width columns.

⸻

19. Hover Effects

button:hover {
  background-color: lightblue;
}

Explanation: The :hover pseudo-class applies styles when an element is hovered over. Here, it changes the background color of a <button> when you hover over it.

⸻

20. Opacity

div {
  opacity: 0.5;
}

Explanation: The opacity property defines the transparency of an element. 0 is completely transparent, and 1 is fully opaque.

⸻

21. Transitions

button {
  transition: background-color 0.3s ease;
}
button:hover {
  background-color: lightblue;
}

Explanation: The transition property allows you to change property values smoothly over time. Here, the background color changes over 0.3 seconds when you hover over the button.

⸻

22. CSS Variables

:root {
  --primary-color: blue;
}

h1 {
  color: var(--primary-color);
}

Explanation: CSS variables (--variable-name) allow you to define reusable values. The :root selector targets the highest level (global), and var(--primary-color) accesses the variable.

⸻

23. Text Shadow

h1 {
  text-shadow: 2px 2px 5px gray;
}

Explanation: The text-shadow property adds a shadow to text. The values represent the horizontal and vertical shadow offsets, blur radius, and color.

⸻

24. Box Shadow

div {
  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.1);
}

Explanation: The box-shadow property adds a shadow to an element’s box. The values define the shadow’s offset, blur radius, spread, and color.

⸻

25. Overflow

div {
  overflow: hidden;
}

Explanation: The overflow property controls what happens if content overflows an element’s box. Common values are visible, hidden, scroll, and auto.

⸻

These CSS prompts will cover a lot of the basics you’ll need to style a webpage effectively. Once you’re comfortable with these, you can start exploring more advanced concepts like animations, responsive design, and custom properties.

