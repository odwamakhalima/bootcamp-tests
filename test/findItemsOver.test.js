describe('function that checks items with over 20 quality',function(){
    it('test the item with the most quality and should return bananas because its the one with most quality',function(){
        assert.deepEqual(findItemsOver([
            {name : 'apples', qty : 10},
            {name : 'bananas', qty : 27},
            {name : 'apples', qty : 3},
        ]),[{name : 'bananas', qty : 27}]);
    });
    it('test the item with the most quality and should return apples because its the one with most quality',function(){
        assert.deepEqual(findItemsOver([
            {name : 'apples', qty : 10},
            {name : 'bananas', qty : 3},
            {name : 'apples', qty : 33},
        ]),[{name : 'apples', qty : 33}]);
    });
});