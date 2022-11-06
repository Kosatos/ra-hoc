import React from 'react'
import moment from 'moment'
import { withFormatDate } from '../../hoc/withFormatDate'

export function SortTable(props) {
  return (
    <div>
      <h2>Sort Table</h2>
      <table>
        <tr>
          <th>Date</th>
          <th>Amount</th>
        </tr>
        {props.list.map((item, idx) => (
          <tr key={idx}>
            <td>{item.date}</td>
            <td>{item.amount}</td>
          </tr>
        ))}
      </table>
    </div>
  )
}

const SortTableWithDate = withFormatDate('date', (date) =>
  moment(date).format('YYYY-MM-DD')
)(SortTable)
export default SortTableWithDate
