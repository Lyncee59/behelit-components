import React from 'react'
import { storiesOf } from '@storybook/react'

import TabMenu from './TabMenu'
import TabMenuItem from './TabMenuItem'

storiesOf('TabMenu', module)
  .add('default', () => (
    <TabMenu>
      <TabMenuItem>First item</TabMenuItem>
      <TabMenuItem>Second item</TabMenuItem>
      <TabMenuItem>Third item</TabMenuItem>
    </TabMenu>
  ))
  .add('with selected', () => (
    <TabMenu>
      <TabMenuItem>First item</TabMenuItem>
      <TabMenuItem selected>Second item</TabMenuItem>
      <TabMenuItem>Third item</TabMenuItem>
    </TabMenu>
  ))