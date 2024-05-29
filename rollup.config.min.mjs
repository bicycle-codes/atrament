import terser from '@rollup/plugin-terser';
import webWorkerLoader from 'rollup-plugin-web-worker-loader';

export default {
  input: 'src/index.js',
  output: [
    {
      file: 'dist/index.min.js',
      plugins: [
        terser(),
      ],
    },
    {
      file: 'dist/index.min.cjs',
      format: 'cjs',
      exports: 'named',
    },
  ],
  plugins: [
    webWorkerLoader(),
  ],
};
