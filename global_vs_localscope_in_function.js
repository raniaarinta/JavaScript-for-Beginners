var global="hello world";
function gettext()
{
    var local="hello there";
    return global+" "+local;
}
console.log(gettext());
console.log(global);
    if(typeof local!='undefined')
        console.log(local);
    else
        console.log("undifined variable");