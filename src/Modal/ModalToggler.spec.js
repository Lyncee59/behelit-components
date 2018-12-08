import React from 'react'
import { mountWithTheme } from '../../utils/testHelper'

import ModalToggler from './ModalToggler'

describe('ModalToggler', () => {
  it('should render correctly', () => {
    const tree = mountWithTheme(<ModalToggler />)

    expect(tree.find(ModalToggler)).toMatchSnapshot()
  })
})
