let purgeEnabled = process.env.npm_config_purgeEnabled;

if (purgeEnabled === undefined) {
    purgeEnabled = false;
}

module.exports = {
    purge: {
      enabled: purgeEnabled,
      content: ['./website/**/*.html']
      },
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {},
    },
    variants: {
      extend: {},
    },
    plugins: [],
  }

  console.log("Done minification...");