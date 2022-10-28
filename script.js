var div = document.createElement("div")
div.setAttribute("class","container")

var div1 = document.createElement("div")
div1.setAttribute("class","calculator")

var input = document.createElement("input")
input.setAttribute("type","text")
input.setAttribute("placeholder","0")
input.setAttribute("id","output-screen")

var button1 = document.createElement("button")
button1.setAttribute("onclick","clear()")
button1.innerHTML="Cl"

var button2 = document.createElement("button")
button2.setAttribute("onclick","del()")
button2.innerHTML="Del"

var button3 = document.createElement("button")
button3.setAttribute("onclick","display('%')")
button3.innerHTML="%"

var button4 = document.createElement("button")
button4.setAttribute("onclick","display('/')")
button4.innerHTML="/"

var button5 = document.createElement("button")
button5.setAttribute("onclick","display('7')")
button5.innerHTML="7"

var button6 = document.createElement("button")
button6.setAttribute("onclick","display('8')")
button6.innerHTML="8"

var button7 = document.createElement("button")
button7.setAttribute("onclick","display('9')")
button7.innerHTML="9"

var button8 = document.createElement("button")
button8.setAttribute("onclick","display('*')")
button8.innerHTML="*"

var button9 = document.createElement("button")
button9.setAttribute("onclick","display('4')")
button9.innerHTML="4"

var button10 = document.createElement("button")
button10.setAttribute("onclick","display('5')")
button10.innerHTML="5"

var button11 = document.createElement("button")
button11.setAttribute("onclick","display('6')")
button11.innerHTML="6"

var button12 = document.createElement("button")
button12.setAttribute("onclick","display('-')")
button12.innerHTML="-"

var button13 = document.createElement("button")
button13.setAttribute("onclick","display('1')")
button13.innerHTML="1"

var button14 = document.createElement("button")
button14.setAttribute("onclick","display('2')")
button14.innerHTML="2"

var button15 = document.createElement("button")
button15.setAttribute("onclick","display('3')")
button15.innerHTML="3"

var button16 = document.createElement("button")
button16.setAttribute("onclick","display('+')")
button16.innerHTML="+"

var button17 = document.createElement("button")
button17.setAttribute("onclick","display('.')")
button17.innerHTML="."

var button18 = document.createElement("button")
button18.setAttribute("onclick","display('0')")
button18.innerHTML="0"

var button19 = document.createElement("button")
button19.setAttribute("onclick","calculate('=')")
button19.setAttribute("class","equal")
button19.innerHTML="="




div1.append(input,button1, button2,button3,button4,button5,button6,button7,button8,button9,button10,button11,button12,button13,button14,button15,button16,button17,button18,button19)
div.append(div1)
document.body.append(div)



var  outputscreen = document.getElementById("output-screen"); 

function display(num) {
    outputscreen.value += num
} 

function calculate() {

    try{
        outputscreen.value = eval(outputscreen.value)
    }
    catch(err){
        alert("invalid ")
    }
    
}

function clear(){
    outputscreen.value = "";
}

function del(){
    outputscreen.value = outputscreen.value.slice(0,-1);
}