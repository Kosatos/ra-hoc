import React from 'react'
import VideoWithHighlight from './Video'
import ArticlewithHighlight from './Article'

export default function List(props) {
  return props.list.map((item, idx) => {
    switch (item.type) {
      case 'video':
        return <VideoWithHighlight {...item} key={idx} />

      case 'article':
        return <ArticlewithHighlight {...item} key={idx} />
    }
  })
}
