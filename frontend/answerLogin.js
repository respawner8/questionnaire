let port = 3000;


let url = window.location.href;
let i = 0;
 let hash;
let mark = 0;
for(i = 0; i<url.length ; i++) 
 {
    if(url[i] == '/' && url[i-1] == 'r')
        mark = i;

    }
hash = url.substring(mark+1 , url.length );
localStorage.setItem("hash" ,  hash);           

function proceed()
    {
        document.getElementById('nameError').innerHTML = "";
        document.getElementById('emailError').innerHTML = "";
        let name = document.getElementById('name').value;
        let email = document.getElementById('email').value;
        
        if(name == "")
            {
                document.getElementById('nameError').innerHTML = `<h6 style = "color : red">Enter name</h6>`;
            }
        else if(email == "")
            {
                document.getElementById('emailError').innerHTML = `<h6 style = "color : red">Enter email</h6>`;
            }
        else
            {
                localStorage.setItem("name" , name);
                localStorage.setItem("email" , email);
                window.open(`http://localhost:${port}/answeR` , "_self");
            }
    }