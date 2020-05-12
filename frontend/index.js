var port = 3000 ; 
        function proceed(){
            document.getElementById('nameError').innerHTML = "";
            document.getElementById('emailError').innerHTML = "";
            let name = document.getElementById('name').value;
            let email = document.getElementById('email').value;
            localStorage.clear();
            
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
                    axios.post(`http://localhost:${port}/user`,{
                        name : name,
                        email : email
                    })
                    .then(function(res){
                        console.log(res);
                        if(res.data.message == '1')
                            {
                                localStorage.setItem("name" , name);
                                localStorage.setItem("email" , email);
                                localStorage.setItem("status" , "1");
                            }
                        else
                            {
                                localStorage.setItem("name" , name);
                                localStorage.setItem("email" , email);
                                localStorage.setItem("status" , "2");
                            }
                        //console.log("hello there");
                        window.open(`http://localhost:${port}/quizCreate` , "_self");
                    })
                    .catch(function(error){
                        console.log(error);
                    })
                }
            

        }
