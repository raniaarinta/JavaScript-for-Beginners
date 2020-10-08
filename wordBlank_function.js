function wordblank(noun,adj,verb,adverb)
{
    var result="";
    result+="The " +adj+" " +noun+ " "+" "+verb+" "+"to the store"+" "+adverb;
    return result;
}
console.log(wordblank("dog","big","run","quickly"));
console.log(wordblank("bike","slow","flew","slowly"));