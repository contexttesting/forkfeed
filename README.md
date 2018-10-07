# forkfeed

[![npm version](https://badge.fury.io/js/forkfeed.svg)](https://npmjs.org/package/forkfeed)

`forkfeed` is a function that passes answer values to a child process on data. For example, if a fork was spawned which requires user interaction, this module can be used to pass answers to it according to the seen data from `stdout`.

```sh
yarn add -E forkfeed
```

## Table Of Contents

- [Table Of Contents](#table-of-contents)
- [API](#api)
- [`forkFeed(readable: Readable, stdin: Writable, inputs: [RegExp, string][], log: Writable)`](#forkfeedreadable-readablestdin-writableinputs-regexp-stringlog-writable-void)
- [Copyright](#copyright)

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/0.svg?sanitize=true"></a></p>

## API

The package is available by importing its default function:

```js
import forkFeed from 'forkfeed'
```

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/1.svg?sanitize=true"></a></p>

## `forkFeed(`<br/>&nbsp;&nbsp;`readable: Readable,`<br/>&nbsp;&nbsp;`stdin: Writable,`<br/>&nbsp;&nbsp;`inputs: [RegExp, string][],`<br/>&nbsp;&nbsp;`log: Writable,`<br/>`): void`

Sets up a listener on the _Readable_ stream and writes answers to the _Writable_ stream when data specified in `inputs` was detected. The logging stream will receive both data and answers.

`import('stream').Writable` __<a name="type-writable">`Writable`</a>__

`import('stream').Readable` __<a name="type-readable">`Readable`</a>__

Given a fork source code as

```js
const rl = require('readline')

const i = rl.createInterface({
  input: process.stdin,
  output: process.stderr,
})
i.question(
  'What was the football coach yelling at the vending machine?\n> ',
  () => {
    i.question('What do snowmen do in their spare time?\n> ', () => {
      process.exit(1)
    })
  })
```

The function can be used in the following manner:

```js
/* yarn example/ */
import forkFeed from 'forkFeed'
import { fork } from 'child_process'

(async () => {
  const cp = fork('example/fork', [], { stdio: 'pipe' })
  forkFeed(cp.stderr, cp.stdin, [
    [/coach/, 'Gimme my quarter back!!!'],
    [/snowmen/, 'Just chilling.'],
  ], process.stdout)
})()
```
```
What was the football coach yelling at the vending machine?
> Gimme my quarter back!!!
What do snowmen do in their spare time?
> Just chilling.
```

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/2.svg?sanitize=true"></a></p>

## Copyright

(c) [Art Deco][1] 2018

[1]: https://artdeco.bz

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/-1.svg?sanitize=true"></a></p>