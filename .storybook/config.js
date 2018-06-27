import React from 'react'
import { configure, addDecorator } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import Layout from './layout'
import ThemeProvider from '../src/Themes/ThemeProvider'

const req = require.context('../src/Desktop', true, /stories\.js$/)

addDecorator((story, context) => withInfo({ text: 'Documentation', inline: true })(story)(context))

addDecorator(story => <ThemeProvider><Layout>{story()}</Layout></ThemeProvider>)

function loadStories() {
  req.keys().forEach((filename) => req(filename))
}

configure(loadStories, module)
