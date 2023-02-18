
document.getElementById("submit").addEventListener("click",submit);

function submit(){
    var getdata = JSON.parse(localStorage.getItem("user"));
    let b = document.getElementById("email").value;
    let c = document.getElementById("password").value;
    if(getdata)
    {
        var stat = 0;
        for(var i=0; i<getdata.length; i++)
        {
            if(getdata[i].email==b && getdata[i].password==c)
            {
                stat = 1;
                break;
            }
            else if(getdata[i].email==b && getdata[i].password!=c)
            {
                stat = 2;
                break;
            }
        }
        if(stat==0)
        {
            alert("Please Signup first");
            window.location.href = "../signup/signup.html";
        }
        else if(stat==1)
        {
            alert("Login Successful")
            window.location.href = "../quiz/quiz.html";
        }
        else if(stat==2)
        {
            alert("Wrong Password!")
        }
    }
    else
    {
        alert("Please Signup first");
            window.location.href = "../signup/signup.html";
    }
}