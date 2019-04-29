var regCount = countRegNumber('CA 182736,CY 523519,CJ 812328')
function countRegNumber(anything){
    console.log(anything);
     var too = anything.split(',')
      return(too.length)
    }

    describe('this test' , function(){
        it('regCount' , function(){
            assert.equal(regCount,3);
    
        });
    
    });