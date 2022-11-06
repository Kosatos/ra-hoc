import React from 'react'
import moment from 'moment'
import { withFormatDate } from '../../hoc/withFormatDate'

export function YearTable(props) {
  return (
    <div>
      <h2>Year Table</h2>
      <table>
        <tr>
          <th>Year</th>
          <th>Amount</th>
        </tr>
        {props.list.map((item, idx) => (
          <tr key={idx}>
            <td>{item.year}</td>
            <td>{item.amount}</td>
          </tr>
        ))}
      </table>
    </div>
  )
}

const YearTableWithYear = withFormatDate('year', (date) =>
  moment(date).format('YYYY')
)(YearTable)
export default YearTableWithYear
