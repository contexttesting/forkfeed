/* yarn example/ */
import forkfeed from '../src'

(async () => {
  const res = await forkfeed({
    text: 'example',
  })
  console.log(res)
})()