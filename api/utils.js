const responseIs = (codeString, actualCode) => {
    const receivedCode = parseInt(actualCode / 100);
    switch (codeString) {
        case '1xx':
            return receivedCode == 1;
        case '2xx':
            return receivedCode == 2;
        case '3xx':
            return receivedCode == 3;
        case '4xx':
            return receivedCode == 4;
        case '5xx':
            return receivedCode == 5;
    }
    throw Error("Invalid Code String");
}

const responseIsNot = (codeString, actualCode) => {
    return !responseIs(codeString, actualCode);
}

const handleResponse = (pendingPromise, callback, errorHandler) => {
    pendingPromise
        .then(response => {
            if (responseIs('2xx', response.status)) {
                callback(response.data);
            } else {
                if (errorHandler) errorHandler({ message: response.data.message }); // If no error handler passed, error is supressed.
            }
        })
        .catch(err => {
            console.error(err)
        });
}

const mockPendingPromise = (data) => {
    return new Promise((resolve, _) => {
        setTimeout(() => {
            resolve({statusCode: 201, data});
        }, 1500);
    })
}

export {
    handleResponse,
    mockPendingPromise,
    responseIs,
    responseIsNot
};