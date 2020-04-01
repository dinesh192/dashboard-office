// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: 'AIzaSyA0On8jwlakqQ_Wtb9SQCnGPfV-6VYK2iE',
    authDomain: 'dashboard-c2e5f.firebaseapp.com',
    databaseURL: 'https://dashboard-c2e5f.firebaseio.com',
    projectId: 'dashboard-c2e5f',
    storageBucket: 'dashboard-c2e5f.appspot.com',
    messagingSenderId: '13116244986',
    appId: '1:13116244986:web:5f0a4f0cb5adf0b0e1da43'
  },
  appID: '',
  config: {
    apiKey: '',
    authDomain: '',
    databaseURL: '',
    projectId: '',
    storageBucket: '',
    messagingSenderId: ''
  },
  apiOpenWeatherMap:
    'https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5',
  apiKeyOpenWeatherMap: '8d516015a3b94526a34642759a19d41b',
  apiDarkSkyWeather:
    'https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/df2397bcd9a09be6dae0745eb195f654/43.5283,5.4497',
  apitwitter:
    'https://cors-anywhere.herokuapp.com/https://pure-fjord-81228.herokuapp.com'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
