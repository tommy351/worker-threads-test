'use strict';

const {
  Worker,
  isMainThread,
  threadId,
  parentPort
} = require('worker_threads');

if (isMainThread) {
  console.log('Main thread');

  const worker = new Worker(__filename);
  const buf = new SharedArrayBuffer(1);
  const uint8 = new Uint8Array(buf);

  worker.postMessage({ buf });

  worker.on('message', msg => {
    console.log('from worker', msg, Atomics.load(uint8, 0));
  });
} else {
  console.log('Worker', threadId);

  parentPort.on('message', ({ buf }) => {
    const uint8 = new Uint8Array(buf);
    let i = 0;

    setInterval(() => {
      Atomics.store(uint8, 0, i++ % 256);
      parentPort.postMessage('updated');
    }, 500);
  });
}
