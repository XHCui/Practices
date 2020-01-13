const assert = require('assert');
const expect = require('chai').expect;
const bubbleSort_1 = require('../bubbleSort_1');
const bubbleSort_2 = require('../bubbleSort_2');


describe('tests for a bubble sort implementation', function() {
  
    it ('- should sort a simple integer list', function() {
      var unsorted = [17, 43, 216, 3, 9, 27], 
          sorted = bubbleSort_1(unsorted);
  
      expect(sorted[0]).equal(3);
      expect(sorted[1]).equal(9);
      expect(sorted[2]).equal(17);
      expect(sorted[3]).equal(27);
      expect(sorted[4]).equal(43);
      expect(sorted[5]).equal(216);
      expect(sorted.length).equal(6);
    });
    
    it('- should sort positive and negative integers', function() {
      var unsorted = [17, -43, 216, 3, -9, 27], 
          sorted = bubbleSort_1(unsorted);
  
      expect(sorted[0]).equal(-43);
      expect(sorted[1]).equal(-9);
      expect(sorted[2]).equal(3);
      expect(sorted[3]).equal(17);
      expect(sorted[4]).equal(27);
      expect(sorted[5]).equal(216);
      expect(sorted.length).equal(6);
    });
  
    it('- should clumsily sort strings', function() {
      var unsorted = ['toad', 'prune', 'pretzel', 'aardvark', 'tuna', 'weasel'], 
          sorted = bubbleSort_1(unsorted);
  
      expect(sorted[0]).equal('aardvark');
      expect(sorted[1]).equal('pretzel');
      expect(sorted[2]).equal('prune');
      expect(sorted[3]).equal('toad');
      expect(sorted[4]).equal('tuna');
      expect(sorted[5]).equal('weasel');
      expect(sorted.length).equal(6);
    });  
    
  });

  describe('tests for a bubble sort implementation', function() {
  
    it ('- should sort a simple integer list', function() {
      var unsorted = [17, 43, 216, 3, 9, 27], 
          sorted = bubbleSort_2(unsorted);
  
      expect(sorted[0]).equal(3);
      expect(sorted[1]).equal(9);
      expect(sorted[2]).equal(17);
      expect(sorted[3]).equal(27);
      expect(sorted[4]).equal(43);
      expect(sorted[5]).equal(216);
      expect(sorted.length).equal(6);
    });
    
    it('- should sort positive and negative integers', function() {
      var unsorted = [17, -43, 216, 3, -9, 27], 
          sorted = bubbleSort_2(unsorted);
  
      expect(sorted[0]).equal(-43);
      expect(sorted[1]).equal(-9);
      expect(sorted[2]).equal(3);
      expect(sorted[3]).equal(17);
      expect(sorted[4]).equal(27);
      expect(sorted[5]).equal(216);
      expect(sorted.length).equal(6);
    });
  
    it('- should clumsily sort strings', function() {
      var unsorted = ['toad', 'prune', 'pretzel', 'aardvark', 'tuna', 'weasel'], 
          sorted = bubbleSort_2(unsorted);
  
      expect(sorted[0]).equal('aardvark');
      expect(sorted[1]).equal('pretzel');
      expect(sorted[2]).equal('prune');
      expect(sorted[3]).equal('toad');
      expect(sorted[4]).equal('tuna');
      expect(sorted[5]).equal('weasel');
      expect(sorted.length).equal(6);
    });  
    
  });  