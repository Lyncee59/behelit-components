import { append, equals, filter, head, isEmpty, isNil, prop, toLower } from 'ramda'

export const getAvailableItems = (items, value, search) => isNil(search) || isEmpty(search)
  ? filter(x => !equals(prop('value', x), value), items)
  : filter(x => !equals(prop('value', x), value) && toLower(prop('text', x)).indexOf(toLower(search)) !== -1, items)

export const getSelectedItem = (items, value) => head(filter(x => equals(prop('value', x), value), items))

export const addValue = (value, values) => append(value, values)

export const removeValue = (value, values) => filter(x => !equals(prop('value', x), prop('value', value)), values)
