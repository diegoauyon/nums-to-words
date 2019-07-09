import {LanguageJson, Options} from './interfaces'
import {Error} from "tslint/lib/error";
import {isObject} from './utils'

export class Parser {
  readonly options: Options;
  language: LanguageJson;

  constructor(options: Options = {appendNumber: true, language: 'es'}) {
    this.options = options;

    if (typeof options.language === 'string') {
      this.loadLanguageJson(options.language)
        .then((lang: LanguageJson) => {
          this.language = lang;
        }).catch(() => {
        throw new Error("Language is not defined")
      });
    } else if (isObject(options.language)) {
      this.language = options.language
    } else {
      throw new Error('Incorrect language parameter value')
    }

  }

  async loadLanguageJson(language: string): Promise<LanguageJson> {
    return await import(`./langs/${language.trim()}.json`)
  }

  parse( text: string): string {
    const tokens: string[]  = text.split(' ');

    return ""
  }
}
