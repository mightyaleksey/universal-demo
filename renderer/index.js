import marked from 'marked';
import code from './code';
import heading from './heading';
import hr from './hr';
import list from './list';
import listitem from './listitem';
import paragraph from './paragraph';

const renderer = new marked.Renderer();

renderer.code = code;
renderer.heading = heading;
renderer.hr = hr;
renderer.list = list;
renderer.listitem = listitem;
renderer.paragraph = paragraph;

export default renderer;
