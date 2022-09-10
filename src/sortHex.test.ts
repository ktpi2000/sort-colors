import { sortHex } from './sortHex';

const expected = new Map();
expected.set(0, { list_index: 6, hex: '#fff' });
expected.set(1, { list_index: 3, hex: '#c28686' });
expected.set(2, { list_index: 5, hex: '#b56e6e' });
expected.set(3, { list_index: 1, hex: '#bd5757' });
expected.set(4, { list_index: 0, hex: '#cc5050' });
expected.set(5, { list_index: 4, hex: '#e34444' });
expected.set(6, { list_index: 2, hex: '#e32222' });

test('test', () => {
  const hexList = ['#cc5050', '#bd5757', '#e32222', '#c28686', '#e34444', '#b56e6e', '#fff'];
  expect(sortHex(hexList)).toStrictEqual(expected);
});
