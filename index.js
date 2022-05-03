// code your solution here
function saturdayFun (string="roller-skate"){
 return`This Saturday, I want to ${string}!`;
    
}
saturdayFun (string="bathe my dog");
saturdayFun ();



function mondayWork(string ="go to the office"){
    return `This Monday, I will ${string}.`;

}
function wrapAdjective (Fname="*"){
    
    return  function(Plang ="special"){
      return `You are ${Fname}${Plang}${Fname}!`
    };
    
    }