let score = "11abc"
let temprature = null
let undef = undefined
let ZO = true
console.log(typeof score);
console.log(typeof (score));
console.log(typeof temprature);
console.log(typeof (temprature));
console.log(typeof undef);
console.log(typeof (undef));
console.log(typeof ZO);
console.log(typeof (ZO));
let VIN = Number(score)
let NN = Number(temprature)//temprature was null not 0 but it says temprature is 0 after conversion.
let NDef = Number(undef)
let IZO = Number(ZO)



console.log(typeof VIN); 
console.log(VIN); 
console.log(typeof NN); 
console.log(NN); 
console.log(typeof NDef); 
console.log(NDef); 
console.log(typeof IZO); 
console.log(IZO); //BUT FOR STRING IT WAS SAME AS SCORE
// 11=11
//"11abc"=NaN
// true = 1
    
let LN = "F"
let BLN = Boolean(LN)
console.log(BLN);

// 1=> true ,0=> False
// ""=> False , "F" =>True
