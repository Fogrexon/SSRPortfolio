import Markdownit from 'markdown-it';
import katex from 'markdown-it-katex';
import highlight from 'highlight.js';

const markdown = Markdownit({
  highlight(str, lang) {
    if (lang && highlight.getLanguage(lang)) {
      try {
        return highlight.highlight(lang, str).value;
      // eslint-disable-next-line no-empty
      } catch (__) {}
    }
    return '';
  },
});
markdown.use(katex);

export default markdown;
