import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { equals } from 'ramda'

import Icon from '../Icons/Icon'

const Wrapper = styled.div`
  position: relative;
`

const Arrow = styled(Icon).attrs({ name: 'caret-down', size:'16px' })`
  position: absolute;

`

class SelectInputContainer extends React.Component {
  static getDerivedStateFromProps(nextProps, prevState) {
    if (!equals(nextProps.value, prevState.value)) {
      return { value: nextProps.value, expanded: prevState.expanded }
    }
    return null
  }

  constructor (props) {
    super(props)
    this.handleBlur = this.handleBlur.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.handleFocus = this.handleFocus.bind(this)
  }

  handleClick (value) {
    this.setState({ value, expanded: false })
    if (this.props.handleChange) { this.props.handleChange() }
  }

  handleBlur () {
    this.setState({ expanded: false })
    if (this.props.handleBlur) { this.props.handleBlur() }
  }

  handleFocus () {
    this.setState({ expanded: true })
    if (this.props.handleFocus) { this.props.handleFocus() }
  }

  render () {
    const { items, borderColor } = this.props
    const { value, expanded } = this.state

    return (
      <Wrapper onBlur={handleBlur} onFocus={handleFocus}>
        <Display borderColor={borderColor}>
          <Button>{display}</Button>
        </Display>

        <List expanded={expanded}>
          {items.map((item, index) => <ListItem key={index} onMouseDown={() => handleClick(item.value)}>{item.text}</ListItem>)}
        </List>
      </Wrapper>
    )
  }
}

SelectInputContainer.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    value: PropTypes.any.isRequired
  })).isRequired,
  borderColor: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.object]),
  handleBlur: PropTypes.func,
  handleChange: PropTypes.func,
  handleFocus: PropTypes.func
}

SelectInputContainer.defaultProps = {
  borderColor: '#CCCCCC'
}

export default SelectInputContainer
