import marked from 'marked';
import stylesHeader from './styles/header.css';
import stylesLayout from './styles/layout.css';

const renderer = new marked.Renderer();

renderer.code = function (code, language) {};

renderer.heading = function heading(text, level) {
  switch (level) {
  case 1:
    return `<h1 class="${stylesHeader.primary}">${text}</h1>`;
  case 2:
    return `<h2 class="${stylesHeader.secondary}">${text}</h2>`;
  case 3:
    return `<h3 class="${stylesHeader.tertiary}">${text}</h3>`;
  case 4:
    return `<h4 class="${stylesHeader.quaternary}">${text}</h4>`;
  case 5:
    return `<h5 class="${stylesHeader.quinary}">${text}</h5>`;
  case 6:
    return `<h6 class="${stylesHeader.senary}">${text}</h6>`;
  }
};

// code(string code, string language)
// blockquote(string quote)
// html(string html)
// heading(string text, number level)
// hr()
// list(string body, boolean ordered)
// listitem(string text)
// paragraph(string text)
// table(string header, string body)
// tablerow(string content)
// tablecell(string content, object flags)

export default renderer;
