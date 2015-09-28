import styles from './index.css';

/**
 * @param  {string} text
 * @return {string}
 */
export default function paragraph(text) {
  return `<p class="${styles.common}">${text}</p>\n`;
}
