var port = 3000;

var name = localStorage.getItem("name");
var email = localStorage.getItem("email");
var status = localStorage.getItem("status");
console.log(name);
console.log(status);
if(name.length > 0)
    {
        document.getElementById('userDesc').innerHTML = `<h3>Name : ${name}</h3>`;
    }

var answer1 = 0;
var answer2 = 0;
var answer3 = 0;
var answer4 = 0;
var answer5 = 0;
var answer6 = 0;
var answer7 = 0;
var answer8 = 0;
var answer9 = 0;
var answer10 = 0;

    function select_answer(ques , ans ,elem)
        {
            if(ques == 1)
                {
                    answer1 = ans;
                }
            else if(ques == 2)
                {
                    answer2 = ans;
                }
                else if(ques == 3)
                {
                    answer3 = ans;
                }
                else if(ques == 4)
                {
                    answer4 = ans;
                }
                else if(ques == 5)
                {
                    answer5 = ans;
                }
                else if(ques == 6)
                {
                    answer6 = ans;
                }
                else if(ques == 7)
                {
                    answer7 = ans;
                }
                else if(ques == 8)
                {
                    answer8 = ans;
                }
                else if(ques == 9)
                {
                    answer9 = ans;
                }
                else if(ques == 10)
                {
                    answer10 = ans;
                }
            let id                  =   ques-1;
            let option_enclosure_id =   'option_enclosure_'+id;
            let option_enclosure    =   document.getElementById(option_enclosure_id);
            console.log(option_enclosure);
            let val =   elem.parentNode.getElementsByTagName('textarea')[0].value.trim();
            if(val!='')
            {
        
                clear_all_checkbox(option_enclosure);
                elem.getElementsByTagName('input')[0].checked           =   true;
                elem.getElementsByClassName('checkmark')[0].innerHTML   =   '&#10004';
                elem.getElementsByClassName('checkmark')[0].classList.add("checkmark-checked");
                elem.parentNode.getElementsByTagName('textarea')[0].style.background             =   '#47cb0a';
                elem.parentNode.getElementsByTagName('textarea')[0].style.color                  =   'white';
                elem.parentNode.getElementsByClassName('option_remove_icon')[0].style.display    =   'none';
            }
            else
            {
                elem.parentNode.getElementsByClassName('option_blank')[0].style.display    =   'block';
            }
        }

    function clear_all_checkbox(option_enclosure)
        {
            counter                 =   1;
        
            if(counter>0)
            {
                ri   =   option_enclosure.getElementsByClassName('option_remove_icon');
                for (let i = 0; i < ri.length; i++) 
                { 
                    ri[i].style.display       =   'block';
                }
            }
        
            let options     =   option_enclosure.getElementsByTagName('input');
            for (let j = 0; j < 4; j++) 
            {
                options[j].checked  =   false;
            }
        
            let ta   =   option_enclosure.getElementsByTagName('textarea');
            for (let i = 0; i < ta.length; i++) 
            { 
                ta[i].style.background  =   '';
                ta[i].style.color       =   '';
                
            }
        
            let cm   =   option_enclosure.getElementsByClassName('checkmark');
            for (let i = 0; i < cm.length; i++) 
            { 
                cm[i].innerHTML       =   '';
                cm[i].classList.remove("checkmark-checked");
            }
        
        }

    function createQuiz()
        {
            let check = 1;

            if(answer1 == 0 || answer2 == 0 || answer3 == 0 || answer4 == 0||answer5 == 0 || answer6 ==0 || answer7 == 0 || answer8 == 0 || answer9 == 0 || answer10 == 0)
                check = 0;

            if(check == 0)
                {
                    document.getElementById('wrong').innerHTML = `<h5 style="color : red"> Please select answers of all questions.</h5>`
                }
            else
                {
                    for(let i = 0  ;i < 10 ; i++)
                        {
                            let option_enclosure    =   document.getElementById(`option_enclosure_${i}`);
                            clear_all_checkbox(option_enclosure);
                        }

                    var quizHTML = document.getElementById('quizHTML').innerHTML;

                    axios.post(`http://localhost:${port}/quiz`,{
                        name : name,
                        email : email,
                        quizHTML : quizHTML,

                        answer1 : answer1,
                        answer2 : answer2,
                        answer3 : answer3,
                        answer4 : answer4,
                        answer5 : answer5,
                        answer6 : answer6,
                        answer7 : answer7,
                        answer8 : answer8,
                        answer9 : answer9,
                        answer10 :answer10
                    }).then(res=>{
                        console.log("Quiz submitted");
                    }).catch(err=>{
                        console.log(err);
                    })
                }
        }