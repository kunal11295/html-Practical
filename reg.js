function register (event)
{
    event.preventDefault();


    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confrimpassword = document.getElementById("confrimPassword").value;


    if( name && email && password && confrimpassword)
    {
        if(password.length >=8 && confrimpassword.length >=8)
        {
            if(password == confrimpassword)
            {
                var Ls = JSON.parse(localStorage.getItem("amazonuser")) || []
                var flag =false
                for(i=0;i<Ls.length;i++)
                {
                    if(Ls[i].userEmail == email)
                    {
                        flag = true;
                    }
                }
                if(!flag)
                {
                    var userdata = {userName:name,userEmail:email,userPassword:password,userconfirmpassword:confrimpassword}
                    Ls.push(userdata);
                    localStorage.setItem("amazonuser",JSON.stringify(Ls));
                    alert("Registeration Successful")
                    window.location.href ="./login.html";
                }
                else
                {
                    alert("Email already exist");
                }

            }else
            {
                console.log("password not match")
            }
        }else
        {
            console.log("password should be * charcter")
        }
    }else
    {
        console.log("fill all field")
    }
}