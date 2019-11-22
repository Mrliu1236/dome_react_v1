// all UI components are there, and export as a 'async component'

import loadable from '@loadable/component'

export const Button = loadable(() => import('./Button'))
