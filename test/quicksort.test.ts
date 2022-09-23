import { expect, test } from 'vitest'
import {quicksort} from '../src/code/quicksort'

test('quicksort', () => {
  const quickArr = [21,73,1,0, 11, 15]
  expect(quicksort(quickArr)).toMatchInlineSnapshot(`
    [
      0,
      1,
      11,
      15,
      21,
      73,
    ]
  `)
})
