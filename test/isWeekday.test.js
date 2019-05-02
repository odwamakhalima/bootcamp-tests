 describe('this test' , function(){
    it('isWeekday' , function(){
        assert.equal(isWeekday('Sunday'), false);
        assert.equal(isWeekday('Monday'), true);
        assert.equal(isWeekday('Saturday'), false);
        assert.equal(isWeekday('Wednesday'), true);

    });
});