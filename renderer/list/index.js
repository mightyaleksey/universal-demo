import styles from './index.css';

/**
 * @param  {string}  body
 * @param  {boolean} ordered
 * @return {string}
 */
export default function list(body, ordered) {
  const type = ordered ? 'ol' : 'ul';
  const className = ordered
    ? styles.numbered
    : styles.bulleted;

  return `<${type} class="${className}">\n${body}</${type}>\n`;
}
