import moment from 'moment'

moment.locale('en')

export const getDays = (month, year) => {
  const currentMonth = moment().month(month - 1).year(year - 1)
  const startOfMonth = moment(currentMonth).startOf('month')
  const endOfMonth = moment(currentMonth).endOf('month')
  const start = startOfMonth.day() === 0 ? startOfMonth : moment(startOfMonth).startOf('week')
  const end = endOfMonth.day() === 6 ? endOfMonth : moment(endOfMonth).add(1, 'week').endOf('week')
  const result = []
  const nbDays = end.diff(start, 'day')

  let counter = 0
  while (counter < nbDays) {
    const day = moment(start).add(counter, 'day').date()
    result.push(day)
    counter++
  }
  return result
}