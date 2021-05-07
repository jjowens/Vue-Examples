let purgeEnabled = false;

if (process.argv.length > 0) {
    purgeEnabled = process.argv.includes('--purge=true')
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