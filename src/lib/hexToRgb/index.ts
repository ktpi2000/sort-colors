export const hexToRgb = (hex: string) => {
  // バリデーション
  if (typeof hex !== 'string' || !hex.match(/^#?[0-9A-Fa-f]{3}([0-9A-Fa-f]{3})?$/)) {
    throw new TypeError('Expected a valid hex string');
  }
  // 形式を直す
  if (hex.slice(0, 1) === '#') {
    hex = hex.slice(1);
  }
  // 3桁のときは6桁にへんかんする
  if (hex.length === 3) {
    hex = hex.replace(/./g, '$&$&');
  }

  const decimal = Number.parseInt(hex, 16);

  return {
    r: decimal >> 16,
    g: (decimal >> 8) & 255,
    b: decimal & 255,
  };
};
