/* yarn example/ */
import forkFeed from '../src'
import { fork } from 'child_process'

(async () => {
  const cp = fork('example/fork', [], { stdio: 'pipe' })
  forkFeed(cp.stderr, cp.stdin, [
    [/coach/, 'Gimme my quarter back!!!'],
    [/snowmen/, 'Just chilling.'],
  ], process.stdout)
})()