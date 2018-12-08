import React from 'react'
import { mountWithTheme } from '../../utils/testHelper'

import ModalBackground from './ModalBackground'

describe('ModalBackground', () => {
  it('should render correctly', () => {
    const tree = mountWithTheme(<ModalBackground />)

    expect(tree.find(ModalBackground)).toMatchSnapshot()
  })
})
