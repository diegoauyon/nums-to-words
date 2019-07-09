const MAX_SAFE_INTEGER = 9007199254740991;

export function isSafeNumber(value: any): boolean {
  return typeof value === 'number' && Math.abs(value) <= MAX_SAFE_INTEGER;
}


export function isFinite(value: any): boolean {
  return !(typeof value !== 'number' || value !== value || value === Infinity || value === -Infinity);
}

export function isObject(obj: any): boolean {
  return obj !== undefined && obj !== null && obj.constructor == Object;
}

export enum TENS {
  Ten = 10,
  Hundred = 100,
  Thousand = 1000,
  Million = 1000000,
}
