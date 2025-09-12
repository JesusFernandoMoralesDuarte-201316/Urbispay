const { getDefaultConfig } = require('expo/metro-config');

const defaultConfig = getDefaultConfig(__dirname);

defaultConfig.resolver.extraNodeModules = {
    ...defaultConfig.resolver.extraNodeModules,
    '@aws-amplify': require.resolve('@aws-amplify/react-native'),
};

module.exports = defaultConfig;
