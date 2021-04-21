import * as monaco from "monaco-editor-core";

import Uri = monaco.Uri;
import {PqlLangWorker} from './pqlLangWorker';
import {languageID} from './config';

export class WorkerManager {

  private worker: monaco.editor.MonacoWebWorker<PqlLangWorker>;
  private workerClientProxy: Promise<PqlLangWorker>;

  constructor() {
    this.worker = null;
  }

  private getClientProxy(): Promise<PqlLangWorker> {
    if (!this.workerClientProxy) {
      this.worker = monaco.editor.createWebWorker<PqlLangWorker>({
        // module that exports the create() method and returns a `JSONWorker` instance
        moduleId: 'PqlLangWorker',
        label: languageID,
        // passed in to the create() method
        createData: {
          languageId: languageID,
        }
      });

      this.workerClientProxy = <Promise<PqlLangWorker>><any>this.worker.getProxy();
    }

    return this.workerClientProxy;
  }

  async getLanguageServiceWorker(...resources: Uri[]): Promise<PqlLangWorker> {
    const _client: PqlLangWorker = await this.getClientProxy();
    await this.worker.withSyncedResources(resources)
    return _client;
  }
}
