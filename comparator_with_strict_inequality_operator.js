function test_double_notequal(a,b)
{
    if(a!=b)
        return "not equal";
    else
        return"equal";
}
function test_strict_notequal(a,b)
{
    if(a!==b)
        return"not equal";
    else
        return"equal";
}
console.log(test_double_notequal(5,'5'));
console.log(test_strict_notequal(5,'5'));