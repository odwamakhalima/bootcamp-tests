describe('this test',function(){
    it('mostProfitableDepartment',function(){
        assert.equal(mostProfitableDepartment([{"department":"carpentry","sales":5500,"day":"Monday"},{"department":"hardware","sales":7500,"day":"Tuesday"}]),'hardware');
    });
});