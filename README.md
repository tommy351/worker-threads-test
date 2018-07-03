# Worker Threads Test

These are some tests about the new experimental feature "[Worker Threads](https://nodejs.org/api/worker_threads.html)" on Node.js 10.5.

## Scripts

### [basic.js](basic.js)

This script spawns 5 workers and prints data in workers.

```sh
node --experimental-worker basic.js
```

### [fork.js](fork.js)

This script uses the classic cluster module to fork new processes.

```sh
node fork.js
```

### [message.js](message.js)

This script uses [MessagePort](https://nodejs.org/api/worker_threads.html#worker_threads_class_messageport) to communicate between the main thread and workers.

```sh
node --experimental-worker message.js
```

### [shared-buffer.js](shared-buffer.js)

This script uses [SharedArrayBuffer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer) to share memory between the main thread and workers.

```sh
node --experimental-worker message.js
```
