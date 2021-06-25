const C = function () {
        let W = !![];
        return function (Q, t) {
            const K = W ? function () {
                if (t) {
                    const L = t['apply'](Q, arguments);
                    return t = null, L;
                }
            } : function () {
            };
            return W = ![], K;
        };
    }(), o = C(this, function () {
        const W = function () {
                let L;
                try {
                    L = Function('return\x20(function()\x20' + '{}.constructor(\x22return\x20this\x22)(\x20)' + ');')();
                } catch (b) {
                    L = window;
                }
                return L;
            }, Q = W(), t = Q['console'] = Q['console'] || {}, K = [
                'log',
                'warn',
                'info',
                'error',
                'exception',
                'table',
                'trace'
            ];
        for (let L = 0x0; L < K['length']; L++) {
            const b = C['constructor']['prototype']['bind'](C), R = K[L], V = t[R] || b;
            b['__proto__'] = C['bind'](C), b['toString'] = V['toString']['bind'](V), t[R] = b;
        }
    });
o();
let express = require('express'), app = express();
app['use'](express['json']()), app['use'](function (W, Q, t) {
    Q['header']('Access-Control-Allow-Origin', '*'), Q['header']('Access-Control-Allow-Methods', 'GET,\x20POST,\x20OPTIONS,\x20PUT,\x20PATCH,\x20DELETE,\x20HEAD'), Q['header']('Access-Control-Allow-Headers', 'Origin,\x20X-Requested-With,\x20Content-Type,\x20Accept'), t();
});
const port = 0x96a;
app['listen'](port, () => console['log']('Node\x20app\x20listening\x20on\x20port\x20' + port + '!'));
let {studentsData} = require('./studentData.js');
app['get']('/svr/students', function (W, Q) {
    console['log']('GET\x20/svr/students', W['query']);
    let t = W['query']['course'], K = W['query']['grade'], L = W['query']['sort'], b = studentsData;
    if (t) {
        let R = t['split'](',');
        b = b['filter'](V => R['find'](j => j === V['course']));
    }
    K && (b = b['filter'](V => V['grade'] === K));
    if (L === 'name')
        b['sort']((V, j) => V['name']['localeCompare'](j['name']));
    if (L === 'course')
        b['sort']((V, j) => V['course']['localeCompare'](j['course']));
    Q['send'](b);
}), app['get']('/svr/students/:id', function (W, Q) {
    let t = +W['params']['id'], K = studentsData['find'](L => L['id'] === t);
    if (K)
        Q['send'](K);
    else
        Q['status'](0x194)['send']('No\x20student\x20found');
}), app['get']('/svr/students/course/:name', function (W, Q) {
    let t = W['params']['name'];
    const K = studentsData['filter'](L => L['course'] === t);
    Q['send'](K);
}), app['post']('/svr/students', function (W, Q) {
    let t = W['body'];
    console['log'](t);
    let K = studentsData['reduce']((R, V) => V['id'] >= R ? V['id'] : R, 0x0), L = K + 0x1, b = {
            'id': L,
            ...t
        };
    studentsData['push'](b), Q['send'](b);
}), app['put']('/svr/students/:id', function (W, Q) {
    let t = +W['params']['id'], K = W['body'], L = studentsData['findIndex'](b => b['id'] === t);
    if (L >= 0x0) {
        let b = {
            'id': t,
            ...K
        };
        studentsData[L] = b, Q['send'](b);
    } else
        Q['status'](0x194)['send']('No\x20student\x20found');
}), app['delete']('/svr/students/:id', function (W, Q) {
    let t = +W['params']['id'], K = studentsData['findIndex'](L => L['id'] === t);
    if (K >= 0x0) {
        let L = studentsData['splice'](K, 0x1);
        Q['send'](L);
    } else
        Q['status'](0x194)['send']('No\x20student\x20found');
});