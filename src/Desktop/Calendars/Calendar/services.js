import moment from 'moment'
import { append } from 'ramda'

export const getDays = (month, year) => {
  const currentMonth = moment().month(month - 1).year(year - 1)
  const startOfMonth = currentMonth.clone().startOf('month')
  const endOfMonth = currentMonth.clone().endOf('month')
  const start = startOfMonth.day() === 0 ? startOfMonth : startOfMonth.clone().startOf('week')
  const end = endOfMonth.day() === 6 ? endOfMonth : endOfMonth.clone().add(1, 'week').endOf('week')
  
  let result = []
  let counter = 0
  while (counter < currentMonth.daysInMonth()) {
    const date = moment(startOfMonth).add(counter, 'day')
    result.push({
      date,
      enabled: true,
      currentMonth: true,
      day: date.day(),
      weekNumber: date.weekYear()

    })
    counter++
  }

  console.log('result', result)


  // const result = []
  // const nbDays = end.diff(start, 'day')


  return result
}
