var questions = [


    {
        question: '1. Which of the following is a server-side Java Script object?',
        option1: 'function',
        option2: 'file',
        option3: 'fileupload',
        correctOption: 'file',
    },
    {
        question: '2.Where is the correct place to insert a JavaScript?',
        option1: 'head',
        option2: 'body',
        option3: 'both',
        correctOption: 'both',
    },
    {
        question: '3. Which of the following is correct to write â€œHello Worldâ€ on the web page?',
        option1: 'system.out.printin(â€œHello Worldâ€)',
        option2: 'document.write(â€œHello Worldâ€)',
        option3: 'response.write(â€œHello Worldâ€)',
        correctOption: 'document.write(â€œHello Worldâ€)',
    },
    {
        question: '4.To insert a JavaScript into an HTML page, which tag is used?',
        option1: '< script=âjavaâ> ',
        option2: '< javascript>',
        option3: '< script>',
        correctOption: '< script>',
    },
    {
        question: '5.Which of the following is not a valid JavaScript variable name?',
        option1: ' 2java ',
        option2: '_java_and_ java _names',
        option3: ' javaAndJava',
        correctOption: ' 2java '
    },
    {
        question: '6.Which of the ways below is incorrect of instantiating a date?',
        option1: 'new Date(dateString)',
        option2: 'new Date()',
        option3: ' new Date(seconds)',
        correctOption: ' new Date(seconds)'
    },
    {
        question: '7. ___________ JavaScript is also called client-side JavaScript.',
        option1: 'Microsoft',
        option2: 'Navigator ',
        option3: 'LiveWire',
        correctOption: 'Navigator '
    },
    {
        question: '8.What language defines the behavior of a web page?',
        option1: 'HTML',
        option2: 'CSS',
        option3: 'Java Script ',
        correctOption: 'Java Script '
    },
    {
        question: '9.What is the alternate name for Java script?',
        option1: 'LimeScript',
        option2: ' ECMScrip',
        option3: 'ECMAScript',
        correctOption: 'ECMAScript'
    },
    {
        question: '10. Javascript is an object oriented language?',
        option1: 'true',
        option2: 'false',
        option3: 'both',
        correctOption: 'true'
    },
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
            var selectedques = questions[index - 1]['question']
            var selectans = questions[index - 1]['option' + selectvalue]
            var correctOption = questions[index - 1]['correctOption']
            if (selectans == correctOption) {
                score++
            }
        }
        getOptions.checked = false
    }
    btn.disabled = true

    if (index > questions.length - 1) {

        var scoreValue = ((score / 10) * 100)
      alert('Your score is  ' + Math.floor(scoreValue) + '%')
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
