// worker.js
const { parentPort, workerData } = require('worker_threads');

// 模拟耗时的同步方法
function heavyComputation(task) {
    console.log(task)
    const start = Date.now();
    while (Date.now() - start < 3000) {
        // 模拟耗时操作，例如复杂计算或数据处理
    }
    return `${task} completed`;
}

const result = heavyComputation(workerData.task);
parentPort.postMessage(result);
