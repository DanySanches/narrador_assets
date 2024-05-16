module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    //adicionamos o  plugin para o  react native reanimated
    plugins: ['react-native-reanimated/plugin'],
  };
};
