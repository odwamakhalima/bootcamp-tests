  describe('function that test registration number if Is from bellvile' , function(){
    it('it should return true' , function(){
        assert.equal(isFromBellville('CY878969'), true);
      });
    it('it should return false' , function(){
        assert.equal(isFromBellville(''), false);
      });
    it('it should return false' , function(){
        assert.equal(isFromBellville(''), false);
    });

});