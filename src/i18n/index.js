const NextI18Next = require('next-i18next').default
const path = require('path')

module.exports = new NextI18Next({
  defaultNS: 'index',
  defaultLanguage: 'zh_tw',
  otherLanguages: ['en'],
  localeSubpaths: {
    en: 'en',
    zh_tw: 'zh_tw',
  },
  localePath: path.resolve('./public/static/locales'),
})