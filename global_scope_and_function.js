var global=10;

function function1()
{
   function1_var=2;

}

function function2(){
    var output="";
    if(typeof global!='undefined')
    {
        output+= "\nglobal variable "+global;
    }
    if(typeof function1_var !='undefined')
    {
        output+= "\nfunction 1 variable "+function1_var;
    }
    console.log(output);
    
}
function1();
function2();