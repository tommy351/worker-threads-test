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

  worker.on('message', msg => {
    console.log('from worker', msg);
  });
} else {
  console.log('Worker', threadId);

  setInterval(() => {
    parentPort.postMessage(Date.now());
  }, 500);
}
