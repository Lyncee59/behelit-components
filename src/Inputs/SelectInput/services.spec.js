import { getAvailableItems, getSelectedItem, addValue, removeValue } from './services'

const items = [
  { text: 'Item1', value: '1' },
  { text: 'Item2', value: '2' },
  { text: 'Item3', value: '3' },
  { text: 'Item4', value: '4' },
  { text: 'Item5', value: '5' }
]

describe('getAvailableItems', () => {
  it('should return all items when nothing selected', () => {
    const expectedResult = items
    const result = getAvailableItems(items, undefined, '')

    expect(result).toEqual(expectedResult)
  })

  it('should return all items without the selected items', () => {
    const expectedResult = [
      { text: 'Item2', value: '2' },
      { text: 'Item3', value: '3' },
      { text: 'Item4', value: '4' },
      { text: 'Item5', value: '5' }
    ]
    const result = getAvailableItems(items, '1', '')

    expect(result).toEqual(expectedResult)
  })

  it('should return all items without the selected item and only items matching the search', () => {
    const expectedResult = [
      { text: 'Item2', value: '2' }
    ]
    const result = getAvailableItems(items, '1', 'Item2')

    expect(result).toEqual(expectedResult)
  })

  it('should return all items without the selected items and only items matching the search (2)', () => {
    const expectedResult = []
    const result = getAvailableItems(items, '1', 'lol')

    expect(result).toEqual(expectedResult)
  })
})

describe('getSelectedItem', () => {
  it('should return selected items', () => {
    const expectedResult = { text: 'Item1', value: '1' }
    const result = getSelectedItem(items, '1')

    expect(result).toEqual(expectedResult)
  })

  it('should return no items when nothing selected', () => {
    const expectedResult = undefined
    const result = getSelectedItem(items, undefined)

    expect(result).toEqual(expectedResult)
  })
})

describe('addValue', () => {
  it('should return items with new value', () => {
    const expectedResult = [
      { text: 'Item1', value: '1' },
      { text: 'Item2', value: '2' },
      { text: 'Item3', value: '3' },
      { text: 'Item4', value: '4' },
      { text: 'Item5', value: '5' },
      { text: 'Item6', value: '6' }
    ]
    const result = addValue({ text: 'Item6', value: '6' }, items)

    expect(result).toEqual(expectedResult)
  })
})

describe('removeValue', () => {
  it('should return items with new value', () => {
    const expectedResult = [
      { text: 'Item1', value: '1' },
      { text: 'Item2', value: '2' },
      { text: 'Item3', value: '3' },
      { text: 'Item4', value: '4' }
    ]
    const result = removeValue({ text: 'Item5', value: '5' }, items)

    expect(result).toEqual(expectedResult)
  })
})
