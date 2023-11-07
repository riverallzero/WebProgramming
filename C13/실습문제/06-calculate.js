onmessage = function (e){
    let first = parseInt(e.data.first);
    let second = parseInt(e.data.second);
    let result = first * second;
    postMessage(result);
}