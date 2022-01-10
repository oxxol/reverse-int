module.exports = function reverse(n) {
    let mod = String(Math.abs(n));
    let result = '';
    for (let i = 0; i < mod.length; i += 1) {
        result = `${mod[i]}${result}`;
    }
    return Number(result);
};
