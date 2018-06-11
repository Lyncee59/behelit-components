import React from 'react'
import { configure, addDecorator } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import Layout from './layout'

const req = require.context('../src/Desktop', true, /stories\.js$/)

addDecorator(story => <Layout>{story()}</Layout>)

addDecorator((story, context) => withInfo({ text: 'Documentation', inline: true })(story)(context))

function loadStories() {
  req.keys().forEach((filename) => req(filename))
}

configure(loadStories, module)
