 describe('function that returns true if its not weekday' , function(){
    it('should return true if its sunday' , function(){
        assert.equal(isWeekday('Sunday'), true);
    });
    it('should return false if its monday' , function(){
        assert.equal(isWeekday('Monday'), false);
    });
    it('should return true if its saturday' , function(){
        assert.equal(isWeekday('Saturday'), true);

    });
});