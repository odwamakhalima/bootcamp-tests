describe('Function that returns difference between years' , function(){
    it('should return 43' , function(){
        assert.equal(yearsAgo(1976),43);
    });
    it('should return 59' , function(){
        assert.equal(yearsAgo(1960),59);
    });
    it('should return 2019 because there is no other year' , function(){
        assert.equal(yearsAgo(''),2019);
    });
});