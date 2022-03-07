function alls()
{
    var hid=document.getElementById("hid");
    var form=document.getElementById("forms");
    if(hid.style.display=="none")
    {
        hid.style.display="block";
        form.style.display="none";
    }
    else{
        hid.style.display="none";
    }
}
function create()
{
    if(form.style.display=="block")
    {
        hid.style.display="none";
        form.style.display="block";
    }
    else{
        form.style.display="block";
    }
}