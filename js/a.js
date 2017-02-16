define(['jquery'], function () {
    function test() {
        console.log('test');
        console.log($('h1').html("aaaaaaaaaaaa"));
    }
    var myName = 'liadze';

    return {
        test: test,
        myName: myName
    };
});
