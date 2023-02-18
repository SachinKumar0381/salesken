
document.getElementById("submit").addEventListener("click",submit);

function submit(){
    var getdata = JSON.parse(localStorage.getItem("user"));
var setdata = JSON.parse(localStorage.getItem("user")) || [];
    let a = document.getElementById("name").value;
    let b = document.getElementById("email").value;
    let c = document.getElementById("password").value;
    if(getdata)
    {
        var stat = false;
        for(var i=0; i<getdata.length; i++)
        {
            if(getdata[i].email==b)
            {
                stat = true;
                break;
            }
        }
        if(stat==true)
        {
            alert("Please use another Email id!");
        }
        else
        {
            let obj = {
                "name" : a,
                "email" : b,
                "password" : c
            }
            setdata.push(obj);
            localStorage.setItem("user",JSON.stringify(setdata));
            alert("Signup Successful")
            window.location.href = "../login/login.html";
        }
    }
    else
    {
        let obj = {
            "name" : a,
            "email" : b,
            "password" : c
        }
        setdata.push(obj);
        localStorage.setItem("user",JSON.stringify(setdata));
        alert("Sgnup Successful")
        window.location.href = "../login/login.html";
    }
    console.log(setdata)
}