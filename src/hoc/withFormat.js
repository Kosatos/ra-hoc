import React from 'react'
import getFormatDate from '../utils/getFormatDate'

export default function withFormat(Component) {
  return function (props) {
    const date = getFormatDate(props.date)
    return <Component {...props} date={date}></Component>
  }
}
