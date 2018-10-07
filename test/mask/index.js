import { makeTestSuite } from 'zoroaster'
import Context from '../context'
import forkfeed from '../../src'

const ts = makeTestSuite('test/result', {
  async getResults(input) {
    const res = await forkfeed({
      text: input,
    })
    return res
  },
  context: Context,
})

// export default ts