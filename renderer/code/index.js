import styles from './index.css';

/**
 * @param  {string} code
 * @param  {string} language
 * @return {string}
 */
export default function code(code, language) {
  return `<pre><code class=${styles.common}>${code}\n</code></pre>\n`;
}
