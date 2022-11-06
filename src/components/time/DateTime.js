import React from 'react'
import withFormat from '../../hoc/withFormat'

export function DateTime(props) {
  return <p className='date'>{props.date}</p>
}

const DateTimePretty = withFormat(DateTime)

export default DateTimePretty
