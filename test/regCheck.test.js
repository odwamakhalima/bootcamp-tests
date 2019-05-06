 describe('function should return true if the registration number ends GP' , function(){
    it('should return true' , function(){
        assert.equal(regCheck('DV 23 NB GP', 'GP'),true);
    });
    it('should return false' , function(){
        assert.equal(regCheck('DV 23 NB ', 'GP'),false);
    });
    it('should return false' , function(){
        assert.equal(regCheck('DV 23 NB CJ', 'GP'),false);

    });

});