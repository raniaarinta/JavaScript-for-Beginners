function test_double_equal(a,b)
{
    if(a==b)
        return "equal";
    else
        return"not equal";
}
function test_strict_equal(a,b)
{
    if(a===b)
        return"equal";
    else
        return"not equal";
}

console.log(test_double_equal(5,'5'));
console.log(test_strict_equal(5,'5'));
