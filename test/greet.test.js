describe('function that greets neighbours' , function(){
    it('it should return names correctly' , function(){
        assert.equal(greet('Mark!'), 'Hi, Mark!');
    });
    it('it should return names correctly' , function(){
        assert.equal(greet('John'), 'Hi, John');
    });
    it('it should return no name because there is no input' , function(){
        assert.equal(greet(''), 'Hi, ');
    });
});