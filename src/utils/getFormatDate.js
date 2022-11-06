import moment from 'moment'

export default function getFormatDate(date) {
  const oldTime = moment(date)
  const nowTime = moment()
  const diff = nowTime.diff(oldTime)

  if (diff < 60 * 60 * 1000)
    return `${Math.floor(moment.duration(diff).asMinutes())} minutes ago`
  if (diff > 60 * 60 * 1000 && diff < 60 * 60 * 1000 * 24)
    return `${Math.floor(moment.duration(diff).asHours())} hours ago`
  if (diff > 60 * 60 * 1000 * 24)
    return `${Math.floor(moment.duration(diff).asDays())} days ago`
}
