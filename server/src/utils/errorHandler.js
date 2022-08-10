


function errorHandler(error, req, res) {
    let message = 'Something went wrong!';
    if (error.name === 'ValidationError') {
        message = Object.values(error.errors)[0].message;
        res.json({ message });
    } else if (error.name === 'Custom error!') {
        res.json({ message: error.errors });
    } else if (error.name === 'User validation failed') {
        res.json({ message: error.message });
    } else {
        res.json({ message: error.message });
    }
}


module.exports = errorHandler;