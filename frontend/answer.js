let port = 3000;

let name = localStorage.getItem("name");
let email = localStorage.getItem("email");
let hash = localStorage.getItem("hash");

axios.get(`http://localhost:${port}/quiz/${hash}`)
.then(res=>{
    console.log(res);
    document.getElementById('quizHTML').innerHTML = res.data.quizHTML;
})