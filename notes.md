My Git & VS Code Notes

## 🛠 Git Shortcuts
- `git add .` → Stage all changes
- `git commit -m "Message"` → Save changes
- `git push origin main` → Upload changes

## 💻 VS Code Shortcuts
- `Cmd + S` → Save file
- `Cmd + Shift + G` → Open Git panel
- `Cmd + J` → Toggle terminal

⸻

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

Explanation: The <audio> tag embeds an audio file. The controls attribute adds playback controls, and the <source> tag specifies the audio file and format.

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


