var questions = [
    {
        question: 'Q1 : How many data types are there?',
        option1: '7',
        option2: '4',
        option3: '3',
        correctOption: '7'
    },
    {
        question: 'Q2 : Where is the correct place to insert a JavaScript?',
        option1: 'head',
        option2: 'body',
        option3: 'both are correct',
        correctOption: 'both are correct'
    },
    {
        question: 'Q3 : What is an object in javascript?',

        option1: 'An object is a collection of properties',
        option2: 'An object is a collection of functions',
        option3: 'An object is a collection of variables',
        correctOption: 'An object is a collection of properties',
    },
    {
        question: 'What is Html?',
        option1: 'hyper text',
        option2: 'hyper text markup languague',
        option3: 'hyper markup',
        correctOption: 'hyper text markup languague'
    },
    {
        question: 'array use for?',
        option1: 'collection of data',
        option2: 'collection of object',
        option3: 'action',
        correctOption: 'collection of data'
    },
    {
        question: 'biggest city of Pakistan?',
        option1: 'lahore',
        option2: 'karachi',
        option3: 'quetta',
        correctOption: 'karachi'
    }
]

var ques = document.getElementById('ques')
var opt1 = document.getElementById('opt1')
var opt2 = document.getElementById('opt2')
var opt3 = document.getElementById('opt3')
var btn = document.getElementById('btn')
var index = 0
var score = 0

function nextQ() {
    var getOptions = document.getElementsByName('options')
    for (var i = 0; i < getOptions.length; i++) {
        if (getOptions[i].checked) {
            var selectvalue = getOptions[i].value
            var selectedques = questions[index -1]['question']
            var selectans =questions[index -1]['option' + selectvalue]
            var correctOption =questions[index -1]['correctOption']
            if (selectans == correctOption){
                score++
            }
        }
            getOptions.checked = false
        }
        btn.disabled = true

                    if (index > questions.length - 1){
           
      var scoreValue=((score/6)*100)
      location.href = './score.html'
    //    alert('Your score is  ' + Math.floor(scoreValue) + '%')
    //    ques.innerHTML = 'Your score is' + Math.floor(scoreValue) + '%.'
                    }
        else {
            ques.innerHTML = questions[index].question
            opt1.innerHTML = questions[index].option1
            opt2.innerHTML = questions[index].option2
            opt3.innerHTML = questions[index].option3
            index++
        }
    }
    nextQ()


    function clicked() {
        btn.disabled = false
    }

function togglePasswordVisibility() {
    var passwordInput = document.getElementById("spass");
    var icon = document.querySelector('.toggle-password');

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        icon.classList.remove('fa-eye');
        icon.classList.add('fa-eye-slash');
    } else {
        passwordInput.type = "password";
        icon.classList.remove('fa-eye-slash');
        icon.classList.add('fa-eye');
    }
}

function togglePasswordVisibilitya() {
    var passwordInput = document.getElementById("lpass");
    var icon = document.querySelector('.toggle-password');

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        icon.classList.remove('fa-eye');
        icon.classList.add('fa-eye-slash');
    } else {
        passwordInput.type = "password";
        icon.classList.remove('fa-eye-slash');
        icon.classList.add('fa-eye');
    }
}

function signup() {
    var email = document.getElementById('semail').value
    var pass = document.getElementById('spass').value
    localStorage.setItem('Email', email)
    localStorage.setItem('Password', pass)
    location.href = './SIGNIN.html'
}

function signin() {
    var email = document.getElementById('lemail').value
    var pass = document.getElementById('lpass').value

    if (
        localStorage.getItem('Email') == email &&
        localStorage.getItem('Password') == pass) {
        location.href = './quiz.html'
    }
    else {
        location.href = './SIGNUP.html'
    }
}
