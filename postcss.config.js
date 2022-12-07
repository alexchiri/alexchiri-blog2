const autoprefixer = require('autoprefixer')
const purgecss = require('@fullhuman/postcss-purgecss')

const plugins = [
                  autoprefixer,
                  purgecss({
                    content: ['./docs/**/*.html'],
                    safelist: ['active', 'dark-theme', 'light-theme', 'no-webp', 'webp']
                  })
                ]

module.exports = {
  plugins
}
