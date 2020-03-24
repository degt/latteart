module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/latteart/'
    : '/',
  "transpileDependencies": [
    "vuetify"
  ]
}