import * as worker from 'monaco-editor-core/esm/vs/editor/editor.worker';
import {PqlLangWorker} from './pqlLangWorker';

self.onmessage = () => {
  worker.initialize((ctx) => {
    return new PqlLangWorker(ctx)
  });
};
