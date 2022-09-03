import { expect, test } from 'vitest'
import {lengthOfLongestSubstring} from '../src/code/lengthOfLongestSubstring'

test('lengthOfLongestSubstring', () => {
  const s = 'dsadsadsa'
  expect(lengthOfLongestSubstring(s)).toMatchInlineSnapshot('3')
})
