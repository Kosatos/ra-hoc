import New from '../components/highlight/New'
import React from 'react'
import Popular from '../components/highlight/Popular'

export default function withHighlight(Component) {
  return function (props) {
    return (
      <>
        {props.views > 1000 ? (
          <Popular>
            <Component {...props}></Component>
          </Popular>
        ) : props.views < 100 ? (
          <New>
            <Component {...props}></Component>
          </New>
        ) : (
          <Component {...props}></Component>
        )}
      </>
    )
  }
}
