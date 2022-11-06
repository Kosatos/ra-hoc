import React, { useEffect, useState } from 'react'

import VideoList from './components/time/VideoList'
import List from './components/highlight/List'
import MonthTableWithMonth from './components/aggregation/MonthTable'
import YearTableWithYear from './components/aggregation/YearTable'
import SortTableWithDate from './components/aggregation/SortTable'

import dataTime from './data/dataTime'
import dataHighlight from './data/dataHighlight'

export default function App() {
  const [videos, setVideos] = useState(dataTime)
  const [list, setList] = useState(dataHighlight)
  const [data, setData] = useState([])

  const fetchData = async () => {
    const response = await fetch(process.env.REACT_APP_AGGR_URL)
    const json = await response.json()
    setData((prev) => json.list)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className='container'>
      <h2 className='task-title'>TIME</h2>
      <hr />
      <div className='time'>
        <VideoList list={videos} />
      </div>

      <h2 className='task-title'>HIGHLIGHT</h2>
      <hr />
      <div className='highlight'>
        <List list={list}></List>
      </div>

      <h2 className='task-title'>AGGREGATION</h2>
      <hr />
      <div className='aggregation'>
        <MonthTableWithMonth list={data} />
        <YearTableWithYear list={data} />
        <SortTableWithDate list={data} />
      </div>
    </div>
  )
}
