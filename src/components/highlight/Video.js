import React from 'react'
import withHighlight from '../../hoc/withHighlight'

export function Video(props) {
  return (
    <div className='item item-video'>
      <iframe
        src={props.url}
        frameborder='0'
        allow='autoplay; encrypted-media'
        allowfullscreen
      ></iframe>
      <p className='views'>Просмотров: {props.views}</p>
    </div>
  )
}

const VideoWithHighlight = withHighlight(Video)
export default VideoWithHighlight
