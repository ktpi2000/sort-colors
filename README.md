# sort-colors

Sort an array containing hex color codes in order of saturation. This is useful for sorting colors by saturation.

## install

```
npm install
```
or
```
yarn
```

## usage

```javascript
import { sortHex } from "@ktpi2000/sort-colors";

const hexList = [
  "#cc5050",
  "#bd5757",
  "#e32222",
  "#c28686",
  "#e34444",
  "#b56e6e",
  "#fff",
];
console.log(sortHex(hexList));

/*
Map(7) {
  0 => { list_index: 6, hex: '#fff' },
  1 => { list_index: 3, hex: '#c28686' },
  2 => { list_index: 5, hex: '#b56e6e' },
  3 => { list_index: 1, hex: '#bd5757' },
  4 => { list_index: 0, hex: '#cc5050' },
  5 => { list_index: 4, hex: '#e34444' },
  6 => { list_index: 2, hex: '#e32222' }
}
 */
```
