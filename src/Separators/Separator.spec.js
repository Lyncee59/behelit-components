import React from 'react'
import { mountWithTheme } from '../../utils/testHelper'

import Separator from './Separator'

describe('Separator', () => {
  it('should render correctly', () => {
    const tree = mountWithTheme(<Separator />)

    expect(tree.find(Separator)).toMatchSnapshot()
  })
})
