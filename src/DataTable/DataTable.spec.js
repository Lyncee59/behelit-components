import React from 'react'
import { mountWithTheme } from '../../utils/testHelper'

import DataTable from './DataTable'

describe('DataTable', () => {
  it('should render correctly', () => {
    const tree = mountWithTheme(<DataTable>MyDataTable</DataTable>)

    expect(tree.find(DataTable)).toMatchSnapshot()
  })
})
