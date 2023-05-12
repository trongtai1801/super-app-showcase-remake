const deps = {
  react: {
    /**
     * singleton means that only one version of the module is loaded.
     */
    singleton: true,
    /**
     * eager means that the module is added into the initial bundle and will not be loaded later.
     * All shared module in the host app should be eager. In remote containers it depends on build proposes.
     * If bundle should work as a standalone application, then it should be eager.
     * Here is STANDALONE env variable shows if bundle is standalone and eager should be enabled.
     */
    eager: true,
    /**
     * requiredVersion is used to match requested modules in bundle.
     * It's recommended to use the same version as in the host app.
     */
    requiredVersion: "18.2.0",
  },
  "react-native": {
    singleton: true,
    eager: true,
    requiredVersion: "0.71.7",
  },
  "@react-navigation/native": {
    singleton: true,
    eager: true,
    requiredVersion: "6.1.6",
  },
  "@react-navigation/native-stack": {
    singleton: true,
    eager: true,
    requiredVersion: "6.9.12",
  },
  "@react-navigation/material-bottom-tabs": {
    singleton: true,
    eager: true,
    requiredVersion: "6.2.15",
  },
  "@react-navigation/bottom-tabs": {
    singleton: true,
    eager: true,
    requiredVersion: "^6.5.7",
  },
  "@react-native-async-storage/async-storage": {
    singleton: true,
    eager: true,
    requiredVersion: "1.18.1",
  },
  'react-native-safe-area-context': {
      singleton: true,
      eager: true,
      requiredVersion: '4.5.2',
  },
  'react-native-screens': {
      singleton: true,
      eager: true,
      requiredVersion: '3.20.0',
  },
  'react-redux': {
      singleton: true,
      eager: true,
      requiredVersion: '8.0.5',
  },
  'reduxjs/toolkit': {
      singleton: true,
      eager: true,
      requiredVersion: '1.9.5',
  },
  'redux-persist': {
      singleton: true,
      eager: true,
      requiredVersion: '6.0.0',
  },
};

export { deps };