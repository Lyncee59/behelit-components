import { append, contains, equals, filter, isEmpty, isNil, prop, toLower } from 'ramda'

export const getAvailableItems = (items, values, search) => isNil(search) || isEmpty(search)
  ? filter(x => !contains(prop('value', x), values), items)
  : filter(x => !contains(prop('value', x), values) && toLower(prop('text', x)).indexOf(toLower(search)) !== -1, items)

export const getSelectedItems = (items, values) => filter(x => contains(prop('value', x), values), items)

export const addValue = (value, values) => append(value, values)

export const removeValue = (value, values) => filter(x => !equals(prop('value', x), prop('value', value)), values)
