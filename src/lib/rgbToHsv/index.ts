export const rgbToHsv = (r: number, g: number, b: number) => {
  if (typeof r !== 'number' && typeof g !== 'number' && typeof b !== 'number') {
    throw new TypeError('Expected a valid value');
  }

  (r /= 255), (g /= 255), (b /= 255);

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h = 0;
  let s = 0;
  const v = max;

  const diff = max - min;
  s = max === 0 ? 0 : diff / max;

  if (max !== min) {
    switch (max) {
      case r:
        h = (g - b) / diff + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / diff + 2;
        break;
      case b:
        h = (r - g) / diff + 4;
        break;
    }

    h /= 6;
  } else {
    h = 0;
  }
  h *= 360;

  return {
    h,
    s,
    v,
  };
};
