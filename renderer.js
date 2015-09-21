import marked from 'marked';
import stylesHeader from './styles/header.css';

const renderer = new marked.Renderer();

renderer.heading = function heading(text, level) {
  return `<h${level} class=${stylesHeader.primary}>${text}</h${level}>`;
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
