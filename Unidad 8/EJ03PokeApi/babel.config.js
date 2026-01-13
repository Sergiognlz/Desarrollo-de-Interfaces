module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          alias: {
            '@app': './src/APP',
            '@domain': './src/APP/Domain',
            '@data': './src/APP/Data',
            '@presenter': './src/APP/Presenter'
          }
        }
      ]
    ]
  };
};
