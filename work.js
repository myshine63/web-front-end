onmessage = e => {
    let port1 = e.ports[0]
    port1.postMessage('hello tom')
    port1.onmessage = e => {
        console.log(e)
    }
}
