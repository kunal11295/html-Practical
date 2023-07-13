function login(event)
{
    event.preventDefault()


    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    loginuser = {}
    var Ls= JSON.parse(localStorage.getItem("amazonuser"))
    var flag =false
    for(i=0;i<Ls.length;i++)
    {
        if(Ls[i].userEmail == email && Ls[i].userPassword == password)
        {
            flag = true;
            loginuser =Ls[i]
        }
    }
    if(flag == true)
    {
        alert ("Login Sucessful");
        localStorage.setItem("amazoncurrentuser",JSON.stringify(loginuser));
        window.location.href ="./homepage.html";
    }else
    {
        alert("creditinal not match");
    }
}