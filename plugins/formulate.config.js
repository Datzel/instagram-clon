import { de } from '@braid/vue-formulate-i18n'

export default {
  plugins: [de],
  locale: 'en',
  rules: {
    foobar: ({ value }) => ['foo', 'bar'].includes(value)
  }
}