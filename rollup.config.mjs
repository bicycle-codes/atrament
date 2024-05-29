import webWorkerLoader from 'rollup-plugin-web-worker-loader';

export default {
  input: 'src/index.js',
  output: [
    {
      file: 'dist/index.js',
      format: 'esm',
    },
    {
      file: 'dist/index.cjs',
      format: 'cjs',
      exports: 'named',
    },
  ],
  plugins: [
    webWorkerLoader({
      targetPlatform: 'browser',
    }),
  ],
};
