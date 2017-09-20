module.exports = function (req, res) {
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            return resolve('passed through middleware');
        },0);
    })
}