export interface Connectors {
  readonly dot: string;
  readonly  and: string;
  readonly negative: string;
}

export interface QuantityNoun {
  readonly singular: string;
  readonly plural: string;
}

export interface Sexadecimal {
  readonly degree : QuantityNoun;
  readonly minute: QuantityNoun;
  readonly second: QuantityNoun;
}

export interface Numbers {
  readonly 0: string[];
  readonly 10: string[];
  readonly 20: string[];
  readonly 30: string | string[];
  readonly 40: string | string[];
  readonly 50: string | string[];
  readonly 60: string | string[];
  readonly 70: string | string[];
  readonly 80: string | string[];
  readonly 90: string | string[];
  readonly 100: string | QuantityNoun;
  readonly 200: string | QuantityNoun;
  readonly 300: string | QuantityNoun;
  readonly 400: string | QuantityNoun;
  readonly 500: string | QuantityNoun;
  readonly 600: string | QuantityNoun;
  readonly 700: string | QuantityNoun;
  readonly 800: string | QuantityNoun;
  readonly 900: string | QuantityNoun;
  readonly 1000: string | QuantityNoun;
  readonly 1000000: string | QuantityNoun;
}

export interface LanguageJson {
  readonly numbers: Numbers;
  readonly sexadecimal: Sexadecimal;
  readonly connectors: Connectors;
}

export interface Options{
  appendNumber?: boolean
  language: string | LanguageJson
}
