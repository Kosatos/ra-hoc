import React from 'react'
import Video from './Video'

export default function VideoList(props) {
  return props.list.map((item, idx) => (
    <Video url={item.url} date={item.date} key={idx} />
  ))
}
