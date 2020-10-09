function orderlogic(val)
{
    if(val<5)
    {
        return "less than five";
    }
    else if(val<10)
    {
        return"less than ten";
    }
   
    else
    {
        return"grater than or equal to 10";
    }
}
console.log(orderlogic(7));
console.log(orderlogic(2));
console.log(orderlogic(50));