'use strict';

const { isMaster, fork, worker } = require('cluster');

if (isMaster) {
  for (let i = 0; i < 5; i++) {
    fork();
  }
} else {
  console.log('Worker', worker.id);
}
