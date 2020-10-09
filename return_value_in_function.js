var a="hello";
function return_name(name)
{
    return a+" "+name;
}
function return_current_age(birthyear)
{
    var date=new Date().getFullYear();
    return Math.abs(date-birthyear);
}

function isprime(number)
{
    var result=true;
    if (number < 2) {
        result=false;
    } else if (number<=2) {     
        result=true;
    } else if (number % 2 == 0 || number % 3 == 0) { 
        result=false;
    }
    sqrt=Math.sqrt(number);
    for ( i = 3; i <= sqrt; i += 2) { 
        if (number % i == 0) {
            result=false;
            break;
        }
    }
   
    return result;

}
console.log(return_name("ran"));
console.log(return_current_age("1996"));
console.log(isprime(2));
