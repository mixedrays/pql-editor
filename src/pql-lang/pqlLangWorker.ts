import * as monaco from "monaco-editor-core";

import IWorkerContext = monaco.worker.IWorkerContext;
import LangLanguageService from "../language-service/LanguageService";
import {ILangError} from "../language-service/LangErrorListener";


export class PqlLangWorker {
  private _ctx: IWorkerContext;
  private languageService: LangLanguageService;

  constructor(ctx: IWorkerContext) {
    this._ctx = ctx;
    this.languageService = new LangLanguageService();
  }

  doValidation(resource: monaco.Uri): Promise<ILangError[]> {
    const code = this.getTextDocument(resource);
    return Promise.resolve(this.languageService.validate(code));
  }

  format(code: string): Promise<string> {
    return Promise.resolve(this.languageService.format(code));
  }

  private getTextDocument(resource: monaco.Uri): string {
    const models = this._ctx.getMirrorModels();
    const model = models.find((m) => m.uri.path === resource.path)

    return model ? model.getValue() : '';
  }
}
