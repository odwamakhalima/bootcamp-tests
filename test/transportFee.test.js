describe('function that returns transport fee depending on the time of the day' , function(){
    it('should return transport fee in the morning' , function(){
        assert.equal(transportFee('morning'),'R20');
    });
    it('should return transport fee in the afternoon' , function(){
        assert.equal(transportFee('afternoon'),'R10');
    });
    it('should return free' , function(){
        assert.equal(transportFee('midnight'),'free');
    });
});