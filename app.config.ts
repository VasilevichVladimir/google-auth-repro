import { ExpoConfig, ConfigContext } from '@expo/config';

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  name: 'GoogleAuthRepro',
  slug: 'google-auth-repro',
  scheme: 'com.uhapp.uhapp',
  version: '1.0.0',
  orientation: 'portrait',
  userInterfaceStyle: 'automatic',
  sdkVersion: '51.0.0',
  platforms: ['ios', 'android'],
  icon: './assets/icon.png',
  splash: {
    image: './assets/splash.png',
    resizeMode: 'contain',
    backgroundColor: '#ffffff',
  },
  ios: {
    supportsTablet: true,
    bundleIdentifier: 'com.uhapp.uhapp',
  },
  android: {
    package: 'com.uhapp.uhapp',
  },
});
