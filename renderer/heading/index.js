import styles from './index.css';

/**
 * @param  {string} text
 * @param  {number} level
 * @return {string}
 */
export default function heading(text, level) {
  switch (level) {
  case 1:
    return `<h1 class="${styles.primary}">${text}</h1>\n`;
  case 2:
    return `<h2 class="${styles.secondary}">${text}</h2>\n`;
  case 3:
    return `<h3 class="${styles.tertiary}">${text}</h3>\n`;
  case 4:
    return `<h4 class="${styles.quaternary}">${text}</h4>\n`;
  case 5:
    return `<h5 class="${styles.quinary}">${text}</h5>\n`;
  case 6:
    return `<h6 class="${styles.senary}">${text}</h6>\n`;
  }
}
