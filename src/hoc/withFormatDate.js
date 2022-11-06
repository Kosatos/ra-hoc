import React from 'react'
import moment from 'moment'

export const withFormatDate = (param, fn) => (Component) => {
  return function (props) {
    let sortedProps = [...props.list]
    if (param === 'date') {
      sortedProps = [...props.list].sort(
        (a, b) => moment(a.date) - moment(b.date)
      )
    }
    const list = sortedProps.map((prop) => ({
      ...prop,
      [param]: fn(prop.date),
    }))

    return <Component {...props} list={list} />
  }
}
