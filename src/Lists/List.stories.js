import React from 'react'
import { storiesOf } from '@storybook/react'

import List from './List'
import ListItem from './ListItem'

storiesOf('List', module)
  .add('default', () => (
    <List>
      <ListItem>First item</ListItem>
      <ListItem>Second item</ListItem>
      <ListItem>Third item</ListItem>
    </List>
  ))
