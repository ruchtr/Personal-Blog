function validateForm()
{
    let x =  document.forms["myForm"]["firstname"].value;
    if (x =="")
    {
        alert("Name must be filled");
        return false;
    }

    let y =  document.forms["myForm"]["lastname"].value;
    if (y =="")
    {
        alert("Name must be filled");
        return false;
    }

    let z =  document.forms["myForm"]["subject"].value;
    if (z =="")
    {
        alert("Name must be filled");
        return false;
    }


}
