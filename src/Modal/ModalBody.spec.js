import React from 'react'
import { mountWithTheme } from '../../utils/testHelper'

import ModalBody from './ModalBody'

describe('ModalBody', () => {
  it('should render correctly', () => {
    const tree = mountWithTheme(<ModalBody />)

    expect(tree.find(ModalBody)).toMatchSnapshot()
  })
})
