var cat={
    "name":"camper",
    "legs":"3",
    "tails":"1",
    "friends":['everyone']
};
function check_obj(prop)
{
    if(cat.hasOwnProperty(prop) ==true)
    {
        return cat[prop];
    }
    else
    {
        return"not found";
    }
}
console.log(check_obj("name"));
delete cat.friends;
console.log(check_obj("friends"));
