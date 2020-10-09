function look_up_animals(val)
{
    var result="";
    var lookup={
        "a":"ant",
        "b":"bee",
        "c":"cat"
    };
    result=lookup[val];
    return result;
}
console.log(look_up_animals("a"));
console.log(look_up_animals("c"));