var SLIDE_CONFIG = {
  // Slide settings
  settings: {
    title: '(Ab)using Google\'s Chromium EC<br>for your own projects',
    subtitle: 'Building Franken Chrome Devices',
    /*eventInfo: {
      title: 'FOSDEM\'17',
      date: '2/4/2017'
    }, */
    useBuilds: true, // Default: true. False will turn off slide animation builds.
    usePrettify: true, // Default: true
    enableSlideAreas: true, // Default: true. False turns off the click areas on either slide of the slides.
    enableTouch: true, // Default: true. If touch support should enabled. Note: the device must support touch.
    //analytics: 'UA-XXXXXXXX-1', // TODO: Using this breaks GA for some reason (probably requirejs). Update your tracking code in template.html instead.
    favIcon: 'images/fosdem-gear.png',
    fonts: [
      'Open Sans:regular,semibold,italic,italicsemibold',
      'Source Code Pro'
    ],
    //theme: ['mytheme'], // Add your own custom themes or styles in /theme/css. Leave off the .css extension.
  },

  // Author information
  presenters: [{
    name: 'Moritz Fischer',
    company: 'Senior Software Engineer<br>National Instruments',
    gplus: 'http://plus.google.com/117055022771319709709',
    twitter: '@fischmz',
    www: 'http://www.ni.com',
    github: 'http://github.com/mfischer'
  }/*, {
  }*/]
};

