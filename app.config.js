const IS_DEV = process.env.APP_VARIANT === 'development';
const IS_PREVIEW = process.env.APP_VARIANT === 'preview';

const getUniqueIdentifier = () => {
  if (IS_DEV) {
    return 'com.zelitosaide.uemsaude.dev';
  }

  if (IS_PREVIEW) {
    return 'com.zelitosaide.uemsaude.preview';
  }

  return 'com.zelitosaide.uemsaude';
};

const getAppName = () => {
  if (IS_DEV) {
    return '(Dev) UEM Saúde';
  }

  if (IS_PREVIEW) {
    return '(Preview) UEM Saúde';
  }

  return 'UEM Saúde';
};

export default {
  "orientation": "portrait",
  "icon": "./assets/images/icon.png",
  "scheme": "myapp",
  "userInterfaceStyle": "automatic",
  "splash": {
    "image": "./assets/images/splash.png",
    "resizeMode": "contain",
    "backgroundColor": "#ffffff"
  },
  "ios": {
    "supportsTablet": true,
    bundleIdentifier: getUniqueIdentifier(),
    config: {
      usesNonExemptEncryption: false,
    },
    entitlements: {
      "aps-environment": "production", // For production push notifications
    },
  },
  "android": {
    "adaptiveIcon": {
      "foregroundImage": "./assets/images/adaptive-icon.png",
      "backgroundColor": "#ffffff"
    },
    package: getUniqueIdentifier(),
  },
  "web": {
    "bundler": "metro",
    "output": "static",
    "favicon": "./assets/images/favicon.png"
  },
  "plugins": [
    "expo-router",
    "expo-secure-store",
    "expo-font"
  ],

  name: getAppName(),
  "slug": "uem-saude",
  "version": "1.0.1",
  
  "assetBundlePatterns": [
    "**/*"
  ],
  "experiments": {
    "typedRoutes": true
  },
  "extra": {
    "router": {
      "origin": false
    },
    "eas": {
      "projectId": "d463133e-0f0b-4cfe-a51d-2e2afdd2fcc0"
    }
  },
  "runtimeVersion": "1.0.0",
  "updates": {
    "url": "https://u.expo.dev/d463133e-0f0b-4cfe-a51d-2e2afdd2fcc0"
  },
  "owner": "escolaberta"
};
