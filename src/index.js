/**
 * Write data to the `writable` when data from the `readable` matches the regexp.
 * @param {Readable} readable A readable stream to detect data on.
 * @param {Writable} stdin A writable stream to pass answers to.
 * @param {[RegExp, string][]} inputs A serial collection of answers. Each answer will be ended with a `\n` character.
 * @param {Writable} [log] A stream to which to write both data from readable, and the passed answer.
 */
const forkFeed = (readable, stdin, inputs = [], log) => {
  if (log) readable.on('data', d => log.write(d))

  let [a, ...rest] = inputs
  if (!a) return

  const handler = (d) => {
    const [regexp, answer] = a
    if (!regexp.test(d)) return

    const an = `${answer}\n`
    if (log) log.write(an)

    stdin.write(an)
    ;([a, ...rest] = rest)
    if (!a) readable.removeListener('data', handler)
  }
  readable.on('data', handler)
}

export default forkFeed

/* documentary types/index.xml */
/**
 * @typedef {import('stream').Writable} Writable
 * @typedef {import('stream').Readable} Readable
 *

 */
