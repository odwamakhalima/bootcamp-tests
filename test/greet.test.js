describe('function that greets neighbours' , function(){
    it('it should return Hi, Mark! correctly if Mark is the name of the neighbour' , function(){
        assert.equal(greet('Mark!'), 'Hi, Mark!');
    });
    it('it should return Hi, John correctly if the neighbours name is John' , function(){
        assert.equal(greet('John'), 'Hi, John');
    });
    it('it should return no name because there is no input' , function(){
        assert.equal(greet(''), 'Hi, ');
    });
});