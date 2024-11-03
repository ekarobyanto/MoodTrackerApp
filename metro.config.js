const {withMonicon} = require('@monicon/metro');
const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = getDefaultConfig(__dirname);
const configWithMonicon = withMonicon(config, {
  icons: [
    'ion:happy',
    'iconamoon:neutral-face-fill',
    'tabler:mood-sad-filled',
    'material-symbols:sentiment-stressed-rounded',
  ],
  collections: [],
});

module.exports = mergeConfig(getDefaultConfig(__dirname), configWithMonicon);
