function insert(num) {
let input = document.getElementById('result').innerHTML 
document.getElementById('result').innerHTML = input + num
}

function clean(){
    document.getElementById('result').innerHTML = ""
}

function back(){
    let backspace = document.getElementById('result').innerHTML
    document.getElementById('result').innerHTML = backspace.substring(0, backspace.length -1)
}

function calc(){
    let outcome = document.getElementById('result').innerHTML

    if(outcome){
        document.getElementById('result').innerHTML = eval(outcome)
    }
}
