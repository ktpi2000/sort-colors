import { hexToRgb } from './lib/hexToRgb';
import { rgbToHsv } from './lib/rgbToHsv';

export const sortHex = (hex: string[]) => {
  if (!Array.isArray(hex)) {
    throw new TypeError('hex argument must be an array');
  }
  const result: { [key: number]: { hex: string; saturation: number } } = {};
  hex.forEach((v, i) => {
    const rgb = hexToRgb(v);
    const { r, g, b } = rgb;
    const hsv = rgbToHsv(r, g, b);

    result[i] = {
      hex: v,
      saturation: hsv.s,
    };
  });
  const a = Object.entries(result);
  a.sort((a, b) => {
    if (a[1].saturation > b[1].saturation) return 1;
    if (b[1].saturation > a[1].saturation) return -1;
    return 0;
  });
  const map = new Map();

  a.forEach((v, index) => {
    map.set(index, { show_index: Number(v[0]), hex: v[1].hex });
  });
  return map;
};
