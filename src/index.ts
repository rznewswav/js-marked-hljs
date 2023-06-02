import {marked} from 'marked';
import {gfmHeadingId} from "marked-gfm-heading-id";
import {mangle} from "marked-mangle";
import {markedHighlight} from "marked-highlight";
import highlight from 'highlight.js';

marked.use(mangle())
marked.use(gfmHeadingId());
marked.use(markedHighlight({
    langPrefix: 'hljs language-',
    highlight(code, lang) {
        const language = highlight.getLanguage(lang) ? lang : 'plaintext';
        return highlight.highlight(code, {language}).value;
    }
}));
