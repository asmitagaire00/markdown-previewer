import React, { useState } from 'react';
import './Markdown.css';
import { marked } from 'marked';

function Markdown() {
  const initialState = `
# This is a React Markdown Previewer header.
---
<br>

## This is a sub heading element.
---
<br>

 Here's an awesome website [links](https://www.freecodecamp.org). <br><br>
 
 You can also make **bold text** and blockquote:<br><br>
 
 > A blockquote would look great below the second list item.
 
<br><br>Some ordered list:
          1. First item
          2. Second item
          3. Third item
          4. Fourth item

<br><br>and unordered list:
          - First item
          - Second item
          - Third item
          - Fourth item<br><br>

  Some Codeblock:<br><br>
          
  \`\`\`

  {
    "firstName": "John",
    "lastName": "Smith",
    "age": 25
  }


  \`\`\`

  <br><br>Image:
  ![Freecodecamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
          
 `;
  const [text, setText] = useState(initialState);

  const markdown = marked(text, { breaks: true });
  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <section className="markdown">
      <div className="editor">
        <h1 class="header">Here's your Editor</h1>
        <textarea
          className="editor__textarea"
          onChange={handleChange}
          value={text}
          rows="52.9"
          cols="100"
        ></textarea>
      </div>
      <div className="previewer">
        <h1 class="header">See the magic here:</h1>
        <div
          className="preview"
          dangerouslySetInnerHTML={{
            __html: marked.parse(markdown),
          }}
        ></div>
      </div>
    </section>
  );
}

export default Markdown;
