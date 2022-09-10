import typescript from "@rollup/plugin-typescript";
import commonjs from "@rollup/plugin-commonjs";
import {
  terser
} from 'rollup-plugin-terser';

export default {
  input: 'src/index.ts',
  output: [{
      file: 'dist/index.js',
      format: 'cjs',
      sourcemap: true
    },
    {
      file: 'dist/index.mjs',
      format: 'esm',
      sourcemap: true
    }
  ],
  plugins: [
    typescript({
      exclude: ['**/*.test.ts']
    }),
    commonjs(),
    terser(),
  ]
}
