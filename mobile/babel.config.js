module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      'expo-router/babel',
      'nativewind/babel',
      [
        'module-resolver',
        {
          alias: {
            '@components': './src/components',
            '@contexts': './src/contexts',
            '@routes': './src/routes',
            '@styles': './src/styles',
            '@hooks': './src/hooks',
            '@assets': './src/assets',
            '@utils': './src/utils'
          },
        },
      ],
    ],
  };
};
