/**
 * @param  {string}  body
 * @param  {boolean} ordered
 * @return {string}
 */
export default function list(body, ordered) {
  const type = ordered ? 'ol' : 'ul';
  return `<${type}>\n${body}</${type}>\n`;
}
