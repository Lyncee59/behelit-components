import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'

import Layout from '../components/layout'
import { Calendar } from '../../src'

const sample = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Cras id tortor lectus.Pellentesque pulvinar sit amet massa quis auctor.Ut consectetur dui mi, eu vestibulum felis ornare sit amet.Sed vel interdum massa, a gravida arcu.Vestibulum sed dictum elit.Nulla pharetra euismod quam, ut iaculis nisi tincidunt et.Donec justo neque, pulvinar sit amet sollicitudin nec, fermentum vel sem.Mauris varius ultrices viverra.Donec condimentum velit id aliquam aliquet.Donec dapibus, tortor vehicula mollis venenatis, felis nisi porttitor nisl, vitae imperdiet leo tortor sed eros.'

storiesOf('Calendars', module)
  .addDecorator(story => (<Layout>{story()}</Layout>))
  .addDecorator((story, context) => withInfo({ text: 'Documentation', inline: true })(story)(context))
  .add('Calendar', () => <Calendar />)

