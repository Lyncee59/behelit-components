import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { theme } from '../Tools/interpolation'
import { Text } from '../Typography'

const Wrapper = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
`
const BulletPoint = styled.div`
  display: flex;
  flex-shrink: 0;
  width: 5px;
  height: 5px;
  border: 2px solid ${theme('listItemColor')};
  border-radius: 50%;
  margin-right: 10px;
  margin-top: 5px;
`

const ListItem = ({ children, size, weight, ...rest }) => (
  <Wrapper {...rest}>
    <BulletPoint />
    <Text size="1rem" weight={400}>{children}</Text>
  </Wrapper>
)

ListItem.propTypes = {
  size: PropTypes.string,
  weight: PropTypes.number
}

ListItem.defaultProps = {
  size: '1rem',
  weight: 400
}

export default ListItem
