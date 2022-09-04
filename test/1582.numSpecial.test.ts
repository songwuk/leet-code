import { expect, test } from 'vitest'
import {numSpecial} from '../src/code/numSpecial'

test('numSpecial', ()=> {
  const mat = [[1,0,0],[0,0,1],[1,0,0]]

  expect(numSpecial(mat)).toMatchInlineSnapshot('1')
})
