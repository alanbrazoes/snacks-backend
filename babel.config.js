module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
    '@babel/preset-typescript',
  ],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@router': './src/modules',
          '@models': './src/models',
          '@controllers': './src/controllers',
        },
      },
    ],
  ],
  ignore: ['**/*.test.ts'],
};
