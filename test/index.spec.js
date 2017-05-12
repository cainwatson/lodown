var 
    expect = require('chai').expect,
    sinon = require('sinon'),
    lodown = require('../index'),
    customers = require('./fixtures/customers.json');

describe('lodown', function() {
    describe('each', function() {
        it('should iterate an Array, applying action to each element, index of the element, and the collection', function() {
            var action = sinon.spy();
            lodown.each(customers, action);
            expect(action.callCount).to.equal(customers.length);
            customers.forEach(function(customer, index){
               expect(action.calledWith(customer, index, customers)).to.be.true;
            });
        });
   
        it('should iterate an Object, applying action for each value, key of value, and Object', function() {
            var action = sinon.spy();
            var customer = customers[0];
            lodown.each(customer, action);
            expect(action.callCount).to.equal(Object.keys(customer).length);
            for(var key in customer) {
              expect(action.calledWith(customer[key], key, customer)).to.be.true;
            }
        });
    });
    
    describe('identity', function() {
       it('expect argument passed to equal value returned', function() {
           const ar = [];
           expect(lodown.identity(1)).to.equal(1);
           expect(lodown.identity(ar)).to.eql(ar);
       });
    });
    
    describe('typeOf', function() {
        it('expect to pass the type of the value passed as a string', function() {
          expect(lodown.typeOf(1)).to.equal('number'); 
          expect(lodown.typeOf('')).to.equal('string'); 
          expect(lodown.typeOf([])).to.equal('array'); 
          expect(lodown.typeOf({})).to.equal('object'); 
          expect(lodown.typeOf(function() {})).to.equal('function'); 
          expect(lodown.typeOf(undefined)).to.equal('undefined'); 
          expect(lodown.typeOf(null)).to.equal('null'); 
            
        });
    });
    
    describe('first', function() {
        it('expect to return the first number of elements in the array', function() {
            expect(lodown.first([1, 2, 3], 1)).to.equal(1);
            expect(lodown.first([1, 2, 3], 2)).to.eql([1, 2]);
            expect(lodown.first([1, 2, 3], NaN)).to.equal(1);
            expect(lodown.first([1, 2, 3])).to.equal(1);
            expect(lodown.first([1, 2, 3], 4)).to.eql([]);
            expect(lodown.first(1, 1)).to.eql([]);
            
        }); 
    });
    
    describe('last', function() {
        it('expect to return the last number of elements in the array', function() {
            expect(lodown.last([1, 2, 3], 1)).to.equal(3);
            expect(lodown.last([1, 2, 3], 2)).to.eql([2, 3]);
            expect(lodown.last([1, 2, 3], NaN)).to.equal(3);
            expect(lodown.last([1, 2, 3])).to.equal(3);
            expect(lodown.last([1, 2, 3], 4)).to.eql([]);
            expect(lodown.last(1, 1)).to.eql([]);
            
        }); 
    });
    
    describe('each', function() {
      it('expect function be called over each iteration of a collection\'s items', function() {
          expect(lodown.each([]), function(e, i, a) { }).to.eql();
      });
    });
    
    describe('indexOf', function() {
      it('expect to return the index of value in array; if value is not in array or there is no array, return -1', function() {
         expect(lodown.indexOf([0, 1, 2], 1)).to.equal(1);
         expect(lodown.indexOf(['a', 'b', 'c'], 'c')).to.equal(2);
         expect(lodown.indexOf([0, 1, 2], 4)).to.equal(-1); 
         expect(lodown.indexOf(1, 1)).to.equal(-1); 
      });
    });
});