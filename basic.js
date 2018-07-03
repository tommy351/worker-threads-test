'use strict';

const {
  Worker,
  isMainThread,
  workerData,
  threadId
} = require('worker_threads');

if (isMainThread) {
  console.log('Main thread');

  for (let i = 0; i < 5; i++) {
    const worker = new Worker(__filename, { workerData: i });
  }
} else {
  console.log('Worker', threadId);

  setInterval(() => {
    console.log(workerData);
  }, 500);
}
