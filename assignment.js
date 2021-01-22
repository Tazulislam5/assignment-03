function kilometerToMeter(km){
    
    if(km < 0){
        console.log("Distance can not be any negative value");
        
    }
    else{
        var getkiloMeter = km;
        var convertToMeter = km * 1000;  //1 km = 1000m
    }
    return convertToMeter;
}
var result = kilometerToMeter(0);
console.log(result);





function budgetCalculator(watch, mobile, laptop){
    var watchQuantity = watch;
    var watchCost = watch * 50;

    var mobileQuantity = mobile;
    var mobileCost = mobile * 100;

    var laptopQuantity = laptop;
    var laptopCost = laptop * 500;

    var totalCost = watchCost + mobileCost + laptopCost;

    return totalCost;
}
var result = budgetCalculator(2, 0, 6);
console.log(result);





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
    billPayment = firstTenDays + secondTermCost + remainingDaysCost;
}
return billPayment;
}
var result = hotelCost(11);
console.log(result);







function megaFriend(arr){
    var bigName = arr[0];
    for(i = 0; i < arr.length; i++){
       var element = arr[i];
       if(element > arr[0] ){
           bigName = element;
       }
    }
    return bigName;
    
}
var result = megaFriend(["akbar ali khan", "tamim iqbal", "jamal", "tazul islam nishad", "shekh mujibur rahman shaheb"]);
console.log(result);






