const expect = require('chai'); 
 const calculateNumber = require('./2-calcul_chai'); 
  
 describe('calculateNumber', () => { 
   describe('type == "SUM"', () => { 
     it('equal positive numbers', () => { 
       expect(calculateNumber('SUM', 1.4, 4.5), 6); 
     }); 
   }); 
  
   describe('type == "SUBTRACT"', () => { 
     it('equal positive numbers', () => { 
       expect(calculateNumber('SUBTRACT', 1.4, 4.5), -4); 
     });   
   }); 
  
   describe('type == "DIVIDE"', () => { 
     it('positive numbers', () => { 
       expect(calculateNumber('DIVIDE', 1.4, 4.5),0.2); 
     }); 
  
     it('positive number and 0', () => { 
       expect(calculateNumber('DIVIDE', 1.4, 0), 'Error'); 
     }); 
 }); 
 });