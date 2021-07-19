function formatNumber(n, d) {
    var x, p, dd
    x = ('' + n).length
    p = Math.pow
    dd = p(10, d)
    x -= x % 3
    return Math.round((n * dd) / p(10, x)) / dd + ' kMGTPE'[x / 3]
}

export default formatNumber
