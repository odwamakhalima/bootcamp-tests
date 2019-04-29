var name = 'Bob';
function greet(name){
  return 'Hi, '+ name;
}

describe('this test' , function(){
    it('Greeting' , function(){
        assert.equal(greet('Mark!'), 'Hi, Mark!');

    });

});