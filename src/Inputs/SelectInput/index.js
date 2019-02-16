/* eslint-disable react/jsx-no-bind */
import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { equals, prop } from 'ramda'

import { theme } from '../../Tools/interpolation'
import { getSelectedItem, getAvailableItems } from './services'

const Input = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  height: auto;
  min-height: 40px;
`
const Display = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  height: 2.7rem;
  padding: 0 1.4rem;
  font-family: ${theme('fontPrimary')};
  font-size: 1rem;
  box-sizing: border-box;
  background: ${theme('selectBackgroundColor')};
  border: 1px solid ${theme('selectBorderColor')};
`
const Dropdown = styled.div`
  display: ${props => props.toggled ? 'flex' : 'none'};
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  max-height: 150px;
  border: 1px solid ${theme('selectBorderColor')};
  box-sizing: border-box;
  z-index: 100;
`
const Search = styled.input.attrs({ type: 'text' })`
  display: block;
  width: 100%;
  height: 40px;
  padding: 0.7rem 1.4rem;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px dotted ${theme('selectBorderColor')}; 
  outline: none;
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  font-weight: 300;
  color: ${theme('selectColor')};

  &::-webkit-input-placeholder { color: ${theme('selectPlaceholderColor')}; }
`
const Result = styled.div`
  width: 100%;
  max-height: 200px;
  background: ${theme('selectBackgroundColor')};
  overflow-y: auto;
`
const ResultItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 40px;  
  padding: 6px 12px;
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  font-weight: 300;
  color: ${theme('selectColor')};
  cursor: pointer;

  &:hover { background: ${theme('selectBackgroundColor')}; }
`

class MultiSelectField extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      search: '',
      toggled: false,
      value: props.value
    }
    this.dropdownRef = React.createRef()
    this.searchRef = React.createRef()
    this.handleSearch = this.handleSearch.bind(this)
    this.handleSelect = this.handleSelect.bind(this)
    this.handleToggle = this.handleToggle.bind(this)
  }

  static getDerivedStateFromProps (prevProps, nextState) {
    if (!equals(prevProps.value, nextState.value)) {
      return { value: prevProps.value }
    } else {
      return null
    }
  }

  handleToggle () {
    const { toggled } = this.state
    this.setState({ toggled: !toggled })
    this.searchRef.current.focus()
  }

  handleSearch (e) {
    this.setState({ search: e.target.value })
  }

  handleSelect (tag) {
    const value = prop('value', tag)
    this.setState({ toggled: false })
    if (this.props.onChange) { this.props.onChange(value) }
  }

  render () {
    const { search, toggled, value } = this.state
    const { items } = this.props
    const selectedItem = getSelectedItem(items, value) || { text: '' }
    const availableItems = getAvailableItems(items, value, search)

    return (
      <Input ref={this.dropdownRef}>
        <Display onClick={this.handleToggle}>{selectedItem.text}</Display>
        <Dropdown toggled={toggled}>
          <Search onChange={this.handleSearch} ref={this.searchRef} value={search} />
          <Result>
            {availableItems.map((item, index) => <ResultItem key={item.text} onClick={() => this.handleSelect(item)}>{item.text}</ResultItem>)}
          </Result>
        </Dropdown>
      </Input>
    )
  }
}

MultiSelectField.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired
  })).isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.array
}

export default MultiSelectField
/* eslint-enable react/jsx-no-bind */
