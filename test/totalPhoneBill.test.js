describe('function that returns the sum of total sms and calls',function(){
    it('should return total bill of calls',function(){
        assert.equal(totalPhoneBill('call,'),'R5.50');
    });
    it('should return total bill of sms',function(){
        assert.equal(totalPhoneBill('sms,'),'R3.40');
    });
    it('should return total bill of sms and 2 calls',function(){
        assert.equal(totalPhoneBill('sms,call,call'),'R6.15');
    });

});