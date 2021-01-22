function kilometerToMeter(km){
    
    if(km < 0){
        console.log("Distance can not be any negative value");    
    }
    else{
        var convertToMeter = km * 1000;  //1 km = 1000m
    }
    return convertToMeter;
}






function budgetCalculator(watch, mobile, laptop){
    
    var watchCost = watch * 50;
    var mobileCost = mobile * 100;
    var laptopCost = laptop * 500;

    var totalCost = watchCost + mobileCost + laptopCost;

    return totalCost;
}








function hotelCost(day){
    var billPayment = 0;
    if(day <= 10){
    billPayment = day * 100;
    }

else if(day <= 20){
   var firstTenDays = 10 * 100;
   var remainingDays = day - 10;
   var secondTermCost = remainingDays * 80;
   billPayment = firstTenDays + secondTermCost;
    
}
else{
    var firstTenDays = 10*100; 
    var secondTermCost = 10*80;
    var remainingDays = day - 20;
    var remainingDaysCost = remainingDays * 50;
    billPayment = firstTenDays + secondTermCost + remainingDaysCost; //secondTermCost refers 11th-20th days cost
}
return billPayment;
}






function megaFriend(arr){
    var maximumWord = 0;
    var bigName;
    
    for(i=0; i < arr.length; i++){
        if(arr[i].length > maximumWord){
            var maximumWord = arr[i].length;
            bigName = arr[i];
        }
    }
    return bigName;
}








