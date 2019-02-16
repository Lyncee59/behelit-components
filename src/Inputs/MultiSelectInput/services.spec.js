import { getAvailableItems, getSelectedItems, addValue, removeValue } from './services'

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
    const result = getAvailableItems(items, [], '')

    expect(result).toEqual(expectedResult)
  })

  it('should return all items without the selected items', () => {
    const expectedResult = [
      { text: 'Item2', value: '2' },
      { text: 'Item3', value: '3' },
      { text: 'Item4', value: '4' }
    ]
    const result = getAvailableItems(items, ['1', '5'], '')

    expect(result).toEqual(expectedResult)
  })

  it('should return all items without the selected items and only items matching the search', () => {
    const expectedResult = [
      { text: 'Item2', value: '2' },
      { text: 'Item3', value: '3' }
    ]
    const result = getAvailableItems(items, ['1', '4', '5'], 'Item')

    expect(result).toEqual(expectedResult)
  })

  it('should return all items without the selected items and only items matching the search (2)', () => {
    const expectedResult = []
    const result = getAvailableItems(items, ['1', '5'], 'lol')

    expect(result).toEqual(expectedResult)
  })
})

describe('getSelectedItems', () => {
  it('should return selected items', () => {
    const expectedResult = [
      { text: 'Item1', value: '1' },
      { text: 'Item5', value: '5' }
    ]
    const result = getSelectedItems(items, ['1', '5'])

    expect(result).toEqual(expectedResult)
  })

  it('should return no items when nothing selected', () => {
    const expectedResult = []
    const result = getSelectedItems(items, [])

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
