require.config({
    baseUrl: './js/',
    paths: {
        'a': 'a',
        'b': 'b',
        'common': 'common',
        'index': '../index'
    },
    shim: {
        'jquery': {
            'exports': 'BBB'
        }
    }
});

require(['index', 'jquery'], function (abc, BBB) {
    console.log(abc);
    console.log(BBB);
});

// require(['a', 'underscore', 'backbone'], function (a) {
//     console.log(a.test());
// });
//
//
// require(['common'], function (Common) {
//     console.log(Common.sum(10, 20));
//     console.log(B);
//
//     if (true) {
//         require(['b'], function (B) {
//             console.log(B);
//         });
//     }
// });
