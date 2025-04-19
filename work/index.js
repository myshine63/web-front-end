// main.js
const {Worker} = require('worker_threads');

function runWorker(filePath, params) {
    return new Promise((resolve, reject) => {
        let worker = new Worker(filePath, {workerData: params})
        worker.on('message', resolve)
        worker.on('error', reject)
        worker.on('exit', code => {
            if (code !== 0) {
                reject(`exit with error code is: ${code}`)
            }
        })
    })
}

async function executeTasksInParallel() {
    const data = {text: 'haha'}
    try {
        const tasks = [
            {
                filePath: './a.js',
                data
            },
            {
                filePath: './b.js',
                data
            },
            {
                filePath: './c.js',
                data
            }
        ]
        const promises = tasks.map(task => runWorker(task));
        const results = await Promise.all(promises);
        console.log(results); // ["Task 1 completed", "Task 2 completed", "Task 3 completed"]
    } catch (error) {
        console.error('Error:', error);
    }
}

executeTasksInParallel();
