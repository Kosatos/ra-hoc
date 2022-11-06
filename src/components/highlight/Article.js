import React from 'react'
import withHighlight from '../../hoc/withHighlight'

export function Article(props) {
  return (
    <div className='item item-article'>
      <h3>
        <a href='#'>{props.title}</a>
      </h3>
      <p className='views'>Прочтений: {props.views}</p>
    </div>
  )
}

const AtricleWithHighlight = withHighlight(Article)
export default AtricleWithHighlight
