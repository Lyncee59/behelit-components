import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import DefaultCell from './components/DefaultCell'
import DefaultRow from './components/DefaultRow'
import HeaderCell from './components/HeaderCell'
import HeaderRow from './components/HeaderRow'
import NavigationRow from './components/NavigationRow'
import NavigationButton from './components/NavigationButton'
import NavigationDropdown from './components/NavigationDropdown'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 250px;
  height: 250px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
`

const Calendar = props => (
  <Container>
    <NavigationRow>
      <NavigationButton />
      <NavigationDropdown />
      <NavigationButton />
    </NavigationRow>
    <HeaderRow>
      <HeaderCell />
      <HeaderCell>1</HeaderCell>
      <HeaderCell>2</HeaderCell>
      <HeaderCell>3</HeaderCell>
      <HeaderCell>4</HeaderCell>
      <HeaderCell>5</HeaderCell>
      <HeaderCell>6</HeaderCell>
      <HeaderCell>7</HeaderCell>
    </HeaderRow>
    <DefaultRow>
      <DefaultCell />
      <DefaultCell>1</DefaultCell>
      <DefaultCell>2</DefaultCell>
      <DefaultCell>3</DefaultCell>
      <DefaultCell>4</DefaultCell>
      <DefaultCell>5</DefaultCell>
      <DefaultCell>6</DefaultCell>
      <DefaultCell>7</DefaultCell>
    </DefaultRow>
  </Container>
)

export default Calendar
