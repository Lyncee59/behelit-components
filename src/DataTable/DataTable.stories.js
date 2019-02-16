import React from 'react'
import { storiesOf } from '@storybook/react'

import DataCell from './DataCell'
import DataRow from './DataRow'
import DataTable from './DataTable'

storiesOf('DataTable', module)
  .add('default', () => (
    <DataTable>
      <DataRow><DataCell>1-1</DataCell><DataCell>1-2</DataCell><DataCell>1-3</DataCell></DataRow>
      <DataRow><DataCell>2-1</DataCell><DataCell>2-2</DataCell><DataCell>2-3</DataCell></DataRow>
      <DataRow><DataCell>3-1</DataCell><DataCell>3-2</DataCell><DataCell>3-3</DataCell></DataRow>
    </DataTable>
  ))
  .add('with disableHighlight', () => (
    <DataTable>
      <DataRow disableHighlight><DataCell>1-1</DataCell><DataCell>1-2</DataCell><DataCell>1-3</DataCell></DataRow>
      <DataRow disableHighlight><DataCell>2-1</DataCell><DataCell>2-2</DataCell><DataCell>2-3</DataCell></DataRow>
      <DataRow disableHighlight><DataCell>3-1</DataCell><DataCell>3-2</DataCell><DataCell>3-3</DataCell></DataRow>
    </DataTable>
  ))
  .add('with width', () => (
    <DataTable>
      <DataRow><DataCell width="33%">1-1</DataCell><DataCell width="33%">1-2</DataCell><DataCell width="33%">1-3</DataCell></DataRow>
      <DataRow><DataCell width="33%">2-1</DataCell><DataCell width="33%">2-2</DataCell><DataCell width="33%">2-3</DataCell></DataRow>
      <DataRow><DataCell width="33%">3-1</DataCell><DataCell width="33%">3-2</DataCell><DataCell width="33%">3-3</DataCell></DataRow>
    </DataTable>
  ))
