describe('this test',function(){
    it('findItemsOver',function(){
        assert.deepEqual(findItemsOver([
            {name : 'apples', qty : 10},
            {name : 'bananas', qty : 27},
            {name : 'apples', qty : 3},
        ]),[{name : 'bananas', qty : 27}]);
    });
});