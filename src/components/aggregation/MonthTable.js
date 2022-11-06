import React from 'react'
import moment from 'moment'
import { withFormatDate } from '../../hoc/withFormatDate'

export function MonthTable(props) {
  return (
    <div>
      <h2>Month Table</h2>
      <table>
        <tr>
          <th>Month</th>
          <th>Amount</th>
        </tr>
        {props.list.map((item, idx) => (
          <tr key={idx}>
            <td>{item.month}</td>
            <td>{item.amount}</td>
          </tr>
        ))}
      </table>
    </div>
  )
}

const MonthTableWithMonth = withFormatDate('month', (date) =>
  moment(date).format('MMM')
)(MonthTable)
export default MonthTableWithMonth
