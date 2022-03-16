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
          '@router': './src/routes',
          '@models': './src/models',
          '@controllers': './src/controllers',
          '@middlewares': './src/middlewares',
        },
      },
    ],
  ],
  ignore: ['**/*.test.ts'],
};
