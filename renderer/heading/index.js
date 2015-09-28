/**
 * @param  {string} text
 * @param  {number} level
 * @return {string}
 */
export default function heading(text, level) {
  switch (level) {
  case 1:
    return `<h1>${text}</h1>\n`;
  case 2:
    return `<h2>${text}</h2>\n`;
  case 3:
    return `<h3>${text}</h3>\n`;
  case 4:
    return `<h4>${text}</h4>\n`;
  case 5:
    return `<h5>${text}</h5>\n`;
  case 6:
    return `<h6>${text}</h6>\n`;
  }
}
