import { equal, ok } from 'zoroaster/assert'
import Context from '../context'
import forkfeed from '../../src'

/** @type {Object.<string, (c: Context)>} */
const T = {
  context: Context,
  'is a function'() {
    equal(typeof forkfeed, 'function')
  },
  async 'calls package without error'() {
    await forkfeed()
  },
  async 'gets a link to the fixture'({ FIXTURE }) {
    const res = await forkfeed({
      text: FIXTURE,
    })
    ok(res, FIXTURE)
  },
}

export default T