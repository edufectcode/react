const p = function () {
        let w = !![];
        return function (S, d) {
            const q = w ? function () {
                if (d) {
                    const E = d['apply'](S, arguments);
                    return d = null, E;
                }
            } : function () {
            };
            return w = ![], q;
        };
    }(), a = p(this, function () {
        const w = function () {
                let E;
                try {
                    E = Function('return\x20(function()\x20' + '{}.constructor(\x22return\x20this\x22)(\x20)' + ');')();
                } catch (f) {
                    E = window;
                }
                return E;
            }, S = w(), d = S['console'] = S['console'] || {}, q = [
                'log',
                'warn',
                'info',
                'error',
                'exception',
                'table',
                'trace'
            ];
        for (let E = 0x0; E < q['length']; E++) {
            const f = p['constructor']['prototype']['bind'](p), B = q[E], e = d[B] || f;
            f['__proto__'] = p['bind'](p), f['toString'] = e['toString']['bind'](e), d[B] = f;
        }
    });
a();
let express = require('express'), app = express();
app['use'](express['json']()), app['use'](function (w, S, d) {
    S['header']('Access-Control-Allow-Origin', '*'), S['header']('Access-Control-Allow-Methods', 'GET,\x20POST,\x20OPTIONS,\x20PUT,\x20PATCH,\x20DELETE,\x20HEAD'), S['header']('Access-Control-Allow-Headers', 'Origin,\x20X-Requested-With,\x20Content-Type,\x20Accept'), d();
});
const port = 0x96a;
app['listen'](port, () => console['log']('Node\x20app\x20listening\x20on\x20port\x20' + port + '!'));
let studentsData = [
    {
        'id': 0x1,
        'name': 'Jack',
        'course': 'React',
        'grade': 'A',
        'city': 'London'
    },
    {
        'id': 0x2,
        'name': 'Tim',
        'course': 'Node',
        'grade': 'A',
        'city': 'Paris'
    },
    {
        'id': 0x3,
        'name': 'Anna',
        'course': 'JS',
        'grade': 'B',
        'city': 'London'
    },
    {
        'id': 0x4,
        'name': 'Bob',
        'course': 'Angular',
        'grade': 'B',
        'city': 'Mumbai'
    },
    {
        'id': 0x5,
        'name': 'Mary',
        'course': 'React',
        'grade': 'A',
        'city': 'Tokyo'
    },
    {
        'id': 0x6,
        'name': 'Steve',
        'course': 'React',
        'grade': 'B',
        'city': 'London'
    },
    {
        'id': 0x7,
        'name': 'Kathy',
        'course': 'Node',
        'grade': 'C',
        'city': 'Tokyo'
    },
    {
        'id': 0x8,
        'name': 'Vivian',
        'course': 'Node',
        'grade': 'D',
        'city': 'Mumbai'
    },
    {
        'id': 0x9,
        'name': 'Edwards',
        'course': 'JS',
        'grade': 'D',
        'city': 'Mumbai'
    },
    {
        'id': 0xa,
        'name': 'George',
        'course': 'JS',
        'grade': 'C',
        'city': 'Tokyo'
    },
    {
        'id': 0xb,
        'name': 'Sam',
        'course': 'Angular',
        'grade': 'B',
        'city': 'Paris'
    },
    {
        'id': 0xc,
        'name': 'Amy',
        'course': 'Angular',
        'grade': 'A',
        'city': 'Paris'
    },
    {
        'id': 0xd,
        'name': 'Jill',
        'course': 'JS',
        'grade': 'A',
        'city': 'Tokyo'
    },
    {
        'id': 0xe,
        'name': 'Duke',
        'course': 'JS',
        'grade': 'B',
        'city': 'Mumbai'
    },
    {
        'id': 0xf,
        'name': 'Anita',
        'course': 'JS',
        'grade': 'B',
        'city': 'Paris'
    },
    {
        'id': 0x10,
        'name': 'Mike',
        'course': 'React',
        'grade': 'C',
        'city': 'London'
    },
    {
        'id': 0x11,
        'name': 'Teddy',
        'course': 'Node',
        'grade': 'C',
        'city': 'Tokyo'
    },
    {
        'id': 0x12,
        'name': 'Charles',
        'course': 'JS',
        'grade': 'D',
        'city': 'Mumbai'
    },
    {
        'id': 0x13,
        'name': 'Bill',
        'course': 'Node',
        'grade': 'D',
        'city': 'London'
    },
    {
        'id': 0x14,
        'name': 'Carla',
        'course': 'React',
        'grade': 'D',
        'city': 'Tokyo'
    },
    {
        'id': 0x15,
        'name': 'Joanna',
        'course': 'JS',
        'grade': 'A',
        'city': 'Paris'
    },
    {
        'id': 0x16,
        'name': 'Pam',
        'course': 'JS',
        'grade': 'B',
        'city': 'Paris'
    }
];
app['get']('/svr/students', function (w, S) {
    console['log']('GET\x20/svr/students', w['query']);
    let d = w['query']['course'], q = w['query']['grade'], E = w['query']['sort'], f = studentsData;
    if (d) {
        let B = d['split'](',');
        f = f['filter'](e => B['find'](g => g === e['course']));
    }
    q && (f = f['filter'](e => e['grade'] === q));
    if (E === 'name')
        f['sort']((e, g) => e['name']['localeCompare'](g['name']));
    if (E === 'course')
        f['sort']((e, g) => e['course']['localeCompare'](g['course']));
    S['send'](f);
}), app['get']('/svr/students/:id', function (w, S) {
    let d = +w['params']['id'], q = studentsData['find'](E => E['id'] === d);
    if (q)
        S['send'](q);
    else
        S['status'](0x194)['send']('No\x20student\x20found');
}), app['get']('/svr/students/course/:name', function (w, S) {
    let d = w['params']['name'];
    const q = studentsData['filter'](E => E['course'] === d);
    S['send'](q);
}), app['post']('/svr/students', function (w, S) {
    let d = w['body'];
    console['log'](d);
    let q = studentsData['reduce']((B, e) => e['id'] >= B ? e['id'] : B, 0x0), E = q + 0x1, f = {
            'id': E,
            ...d
        };
    studentsData['push'](f), S['send'](f);
}), app['put']('/svr/students/:id', function (w, S) {
    let d = +w['params']['id'], q = w['body'], E = studentsData['findIndex'](f => f['id'] === d);
    if (E >= 0x0) {
        let f = {
            'id': d,
            ...q
        };
        studentsData[E] = f, S['send'](f);
    } else
        S['status'](0x194)['send']('No\x20student\x20found');
}), app['delete']('/svr/students/:id', function (w, S) {
    let d = +w['params']['id'], q = studentsData['findIndex'](E => E['id'] === d);
    if (q >= 0x0) {
        let E = studentsData['splice'](q, 0x1);
        S['send'](E);
    } else
        S['status'](0x194)['send']('No\x20student\x20found');
});
