// function totalBasketballScore(ft, mr, tp) => {
//     if(typeof ft === 'number' && typeof mr === 'number' && typeof tp === 'number')
//         return (ft * 1) + (mr * 2) + (tp * 3);
//      {

//     }else{
//         return 'updating score'
//     }
// }

// console.Log(totalBasketballScore(2, 3, 4))



function totalBasketballScore(ft, mr, tp) {
    if (typeof ft === 'number' && typeof mr === 'number' && typeof tp === 'number') {
      return (ft * 1) + (mr * 2) + (tp * 3);
    }
    return 'pending score' ;
  }
  
  console.log(totalBasketballScore(2, 3, 4));