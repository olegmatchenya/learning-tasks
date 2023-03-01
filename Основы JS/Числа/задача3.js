function readNumber() {
    let request;
    while (!Number.isFinite(request)) {
    request = +prompt('ввидите число');
    }
    return request === null || request === 0 ? null : request;
    }
    
    console.log(readNumber())