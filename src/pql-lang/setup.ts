import * as monaco from "monaco-editor-core";
import {languageExtensionPoint, languageID} from "./config";
import {richLanguageConfiguration, monarchLanguage} from "./pqlLangMonarch";
import {PqlLangWorker} from "./pqlLangWorker";
import {WorkerManager} from "./WorkerManager";
import DiagnosticsAdapter from "./DiagnosticsAdapter";
import PqlLangFormattingProvider from "./PqlLangFormattingProvider";

export function setupLanguage() {
  (window as any).MonacoEnvironment = {
    getWorkerUrl: function (moduleId, label) {
      if (label === languageID)
        return "./pqlLangWorker.js";
      return './editor.worker.js';
    }
  }

  monaco.languages.register(languageExtensionPoint);
  monaco.languages.onLanguage(languageID, () => {
    monaco.languages.setMonarchTokensProvider(languageID, monarchLanguage);
    monaco.languages.setLanguageConfiguration(languageID, richLanguageConfiguration);
    const client = new WorkerManager();

    const worker: WorkerAccessor = (...uris: monaco.Uri[]): Promise<PqlLangWorker> => {
      return client.getLanguageServiceWorker(...uris);
    };

    //Call the errors provider
    new DiagnosticsAdapter(worker);
    monaco.languages.registerDocumentFormattingEditProvider(languageID, new PqlLangFormattingProvider(worker));
  });

}

export type WorkerAccessor = (...uris: monaco.Uri[]) => Promise<PqlLangWorker>;
