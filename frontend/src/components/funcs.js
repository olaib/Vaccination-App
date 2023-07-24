const ROUTE_NOT_FOUND = "404 Not Found";
const SOME_ERROR_OCCURRED = "Something went wrong!";

exports.status = (response) => {
    if (response.status === 404) return Promise.reject(new Error(ROUTE_NOT_FOUND));
    if (response.status === 400) {
        return response.json().then(data => {
            const errorMessage = Object.values(data).join('\n');
            throw new Error(errorMessage);
        });
    }
    if (response.status >= 200 && response.status < 300) {
        return Promise.resolve(response);
    } else throw new Error(SOME_ERROR_OCCURRED);
};

exports.json = (response) => response.json();
exports.handleError = (error, setMsg) => setMsg(error.message);
