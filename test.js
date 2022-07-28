// totalBasketballScore

function totalBasketballScore(ft, mr, tp) {
    if (typeof ft === 'number' && typeof mr === 'number' && typeof tp === 'number') {
      return (ft * 1) + (mr * 2) + (tp * 3);
    }
    return 'pending score' ;
  }
  
  console.log(totalBasketballScore(2, 3, 4));

  //===========================================>

  // itemPrice
  function itemPrice(item) {
    switch(itemPrice){
        case 'computer':
        console.log(itemPrice());
        break;
        case 'mouse':
        console.log('mouse price is $10')
        break;
        case 'tablet':
        console.log('tablet price is $250')
        break;
        case 'case':
        console.log('case price is $25')
        break;
        case 'router':
        console.log('router price is $100')
        break;
        default:
            console.log(itemPrice)
            break;



    }

} 