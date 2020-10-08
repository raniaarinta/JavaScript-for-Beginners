var arr=["cat","dogs"];
arr.push("fish");
console.log("push oprator one dimention array\n ");
for(i=0;i<arr.length;i++)
{
    console.log(arr[i]);
}

var multii_dimention_arr=[["cat", "2"],["dog","2"]];
multii_dimention_arr.push(["fish",23]);

console.log("push oprator multi dimention array\n ");
for(i=0;i<multii_dimention_arr.length;i++)
{
    for(j=0;j< multii_dimention_arr[i].length;j++)
    {
        console.log(multii_dimention_arr[i][j]);
    }
    
}