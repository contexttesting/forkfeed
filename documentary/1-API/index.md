## API

The package is available by importing its default function:

```js
import forkFeed from 'forkfeed'
```

%~%

```## forkFeed
[
  ["readable", "Readable"],
  ["stdin", "Writable"],
  ["inputs", "[RegExp, string][]"],
  ["log", "Writable"]
]
```

Sets up a listener on the _Readable_ stream and writes answers to the _Writable_ stream when data specified in `inputs` was detected. The logging stream will receive both data and answers.

%TYPEDEF types/index.xml%

Given a fork source code as

%EXAMPLE: example/fork.js%

The function can be used in the following manner:

%EXAMPLE: example/example.js, ../src => forkFeed%
%FORK example example/example%

%~%