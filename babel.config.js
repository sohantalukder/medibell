module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    '@realm/babel-plugin',
    ['@babel/plugin-proposal-decorators', {legacy: true}],
    'react-native-reanimated/plugin',
    [
      'module-resolver',
      {
        extensions: [
          '.ios.js',
          '.android.js',
          '.ios.jsx',
          '.android.jsx',
          '.js',
          '.jsx',
          '.json',
          '.ts',
          '.tsx',
        ],
        root: ['.'],
        alias: {
          // src/app/assets
          '@constants': './src/app/assets/constants',
          '@icons': './src/app/assets/icons',
          '@images': './src/app/assets/images',
          '@styles': './src/app/assets/styles',
          // Components: All common components (e.g.: Button, Modal, etc.)
          '@components': './src/app/components',
          // Lottie: All Lottie related files (e.g.: Lottie assets, etc.)
          '@lottie': './src/app/lottie',
          // API: All API related files (e.g.: API calls, configurations, etc.)
          '@api': './src/app/controllers/api',
          // Formatters: All Formatters related files (e.g.: Formatters etc.)
          '@formatters': './src/app/controllers/formatters',
          // Local-Data: All Local Data related files (e.g.: Data etc.)
          '@localData': './src/app/controllers/local-data',
          // Local-Store: All Local store related files (e.g.: Local Store Data etc.)
          '@localStore': './src/app/controllers/local-store',
          // Models: All Local store related files (e.g.: Realm Models etc.)
          '@models': './src/app/controllers/models',
          // Validators: All validators files (e.g.: Login, sign-up etc.)
          '@validators': './src/app/controllers/validators',
          // Helper: Hooks and Utilities
          '@helper': './src/app/helper',
          // Layouts: Common layout for screens
          '@layouts': './src/app/layouts',
          // Modules: Screens as modules (e.g.: Home, Profile, etc.)
          '@modules': './src/app/modules',
          // Packages for internal usage (e.g.: asyncStorage, realm, etc.)
          '@packages': './src/app/packages',
          // Provider: Global providers for application (e.g.: Redux, Realm, etc.)
          '@provider': './src/app/provider',
          // Store: All state management related files (e.g. configuration, slices, etc.)
          '@states': './src/app/states',
          // Routes: All routes for application (e.g.: Login, Register, etc.)
          '@routes': './src/app/routes',
          // Services: All services for application (e.g.: API calls, caching etc.)
          '@services': './src/app/services',
          // Types: All commonly used types for application (e.g.: interfaces, enums etc.)
          '@types': './src/app/types',
        },
      },
    ],
  ],
  env: {
    production: {
      plugins: ['react-native-paper/babel'],
    },
  },
};
