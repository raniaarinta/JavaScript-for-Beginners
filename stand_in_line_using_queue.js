function nextinline(arr,val)
{
    arr.push(val);
    return arr.shift();
}
var item=[1,2,3,4];
console.log("before: "+JSON.stringify(item));
console.log(nextinline(item,5));
console.log("after: "+JSON.stringify(item));

