function case_switch(val)
{
    var ans="";
    switch(val){
        case 1:
            ans="alfa";
            break;
        case 2:
            ans="beta";
            break;
        case 3: 
            ans="gamma";
            break;
        default:
            ans="stuff";
            break;
    }
    return ans
}
function case_switch_char(c)
{
    var ans="";
    switch(c){
        case 'a':
            ans="ant";
            break;
        case "b":
            ans="bird";
            break;
        case "c": 
            ans="cat";
            break;
        default:
            ans="animals";
            break;
    }
    return ans;
}

console.log(case_switch(1));
console.log(case_switch_char("a"));