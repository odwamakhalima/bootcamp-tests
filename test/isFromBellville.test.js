  describe('function that test registration number if Is from bellvile' , function(){
    it('it should return true because the registration number starts with CY' , function(){
        assert.equal(isFromBellville('CY878969'), true);
      });
    it('it should return false because the registration number does not starts with CY' , function(){
        assert.equal(isFromBellville('CA878969'), false);
      });
    it('it should return false because there is no registration number' , function(){
        assert.equal(isFromBellville(''), false);
    });

});