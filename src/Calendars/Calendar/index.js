import React from 'react'
import PropTypes from 'prop-types'

import Calendar from './template'
import { getDays } from './services'

class CalendarContainer extends React.PureComponent {
  constructor (props) {
    super(props)
    const days = getDays(6, 2018)
    this.state = { days }
  }

  render () {
    return <Calendar days={this.state.days} />
  }
}

export default CalendarContainer