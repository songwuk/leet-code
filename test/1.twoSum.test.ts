import { expect, test } from 'vitest'
import {twoSum} from '../src/code/twoSum'

test('twoSum', () => {
  const nums = [1, 7, 11, 15]
  const target = 18
  expect(twoSum(nums,target)).toMatchInlineSnapshot(`
    [
      1,
      2,
    ]
  `)
})
