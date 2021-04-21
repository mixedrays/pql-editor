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

  doValidation(): Promise<ILangError[]> {
    const code = this.getTextDocument();
    return Promise.resolve(this.languageService.validate(code));
  }

  format(code: string): Promise<string> {
    return Promise.resolve(this.languageService.format(code));
  }

  private getTextDocument(): string {
    const model = this._ctx.getMirrorModels()[0];// When there are multiple files open, this will be an array
    return model.getValue();
  }

}
