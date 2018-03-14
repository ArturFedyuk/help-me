module.exports = function count(s, pairs) {
    let N = 1;
    for (let i = 0; i < pairs.length; i++) {
        N *= Math.pow(pairs[i][0], pairs[i][1]);
    }
    if (N < 100000000)
        return 0;

    let bTemplate = s.split('');
    let res = 0;
    let counter = 0;

    for (let k = 1; k <= N; k++) {
        for (let j = 0; j < bTemplate.length; j++) {
            if ((NOD([k + j, N]) === 1) && ( bTemplate[j] == 1)) {
                counter++;
            } else if (NOD([k + j, N]) > 1 && bTemplate[j] == 0) {
                counter++;
            }
        }
        if (counter === bTemplate.length) {
            res++;
            counter = 0;
        } else {
            counter = 0;
        }
    }

    return res%1000000007;
};
function NOD(A) {
    let n = A.length, x = Math.abs(A[0]);
    for (let i = 1; i < n; i++) {
        let y = Math.abs(A[i]);
        while (x && y) {
            (x >= y) ? (x %= y) : (y %= x);
        }
        x += y;
    }
    return x;
}
