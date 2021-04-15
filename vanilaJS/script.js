/* localStorage , save */

localStorage.setItem('name', 'Pourya');
document.getElementById('result1').innerHTML =
    localStorage.getItem('name');

/* Syntax => window.localStorage
Syntax for SAVING data to localStorage:=>
localStorage.setItem("key", "value");
Syntax for READING data from localStorage:=>
var lastname = localStorage.getItem("key");
Syntax for REMOVING data from localStorage:=>
localStorage.removeItem("key");*/

/* button click couner app in localStorage */
function clickCounter() {

    (localStorage.clickcount) ?
    localStorage.clickcount = Number(localStorage.clickcount) + 1 :
        localStorage.clickcount = 1;

    document.getElementById("result2").innerHTML = "Click : " + localStorage.clickcount + " times";
};

function reset() {

    localStorage.removeItem("clickcount");

    document.getElementById('result2').innerHTML =
        "Click : " + 0 + " times";
};

/* Parse server string data to JS objects */

function parsInt() {
    let txt = '{"name":"John", "age":30, "city":"New York"}'
        let obj = JSON.parse(txt);
    document.getElementById('result3').innerHTML += obj.name + ', ' + obj.age;
};

/* Create JSON string from a JavaScript object. */

var obj = {
    name: "John",
    age: 30,
    city: "New York"
};
var myJSON = JSON.stringify(obj);
var myJSON_Pars = JSON.parse(myJSON);
document.getElementById("demo").innerHTML = myJSON;
document.getElementById("demo1").innerHTML = myJSON_Pars.name;

/* cancels the event if it is cancelable */

document.getElementById('EVENT').addEventListener("click", function (e) {
    e.preventDefault();
});

/* Click anywhere in the document */

function myFuncy() {
    document.getElementById("result4").innerHTML += "salam";
};

document.addEventListener("click", myFuncy);

function Remove() {
    document.removeEventListener('click', myFuncy);
};

/* return */

function whats_return() {

    return Math.random();

};

document.getElementById('result5').innerHTML = whats_return();

/* get input's value */

function Whats_value() {
    document.getElementById('myText1').value = Math.random();
};

/* Trim space */
var str_trim = "       Hello   world    !        ";
//alert(str_trim);
function Trim() {
    alert(str_trim.trim());
};

/* appendChild */

function My_appendChild() {
    let node = document.createElement('li'); //Create a <li> node
    let textnode = document.createTextNode('Ali'); //Create a text node
    node.appendChild(textnode); //Append the text to <li>
    document.getElementById('myList1').appendChild(node); //Append <li> to <ul> with id="myList1"
};

/* MycreateElement */

function My_createElement() {
    let btn = document.createElement("BUTTON"); // Create a <button> element
    btn.innerHTML = "CLICK ME!"; // Insert text
    document.getElementById('result7').appendChild(btn); // Append <button> to id="result7"
};

/* classList() */

function My_classList() {
    document.getElementById("myDIV").classList.add("mystyle");
};
function remove_My_classList() {
    document.getElementById("myDIV").classList.remove("mystyle");
};

/* map */

function My_map() {
    let num = [4, 9, 16, 25];
    let x = document.getElementById('result8');
    x.innerHTML = num.map(Math.sqrt);
};

/*! use map !*/

var nums_map = [65, 44, 12, 4];
var newArray = nums_map.map(My_map2);
document.getElementById('result8-1').innerHTML = newArray;
function My_map2(x) {
    return x * 10;
};

/* reduce or increas in array from left to right */

var nums_reduce = [175, 25, 50, 50];

document.getElementById('result9').innerHTML = nums_reduce.reduce(My_reduce);

function My_reduce(a, b) {
    return a - b;
};

/* Click the button to get the sum of the rounded numbers in the array and plus 10 */

var reduce_array = [15.5, 2.3, 1.1, 4.7]; // named array

function My_click1() {
    document.getElementById('result10').innerHTML =
        answer1; //get id result 10 = round_sum + 10;
}; //if click button run funcy


function My_reduce2(a, b) {
    return Math.round(a + b);
}; //named funcy

const answer1 = `round(Sum_Array) + 10 = ${reduce_array.reduce(My_reduce2,10)} `;

/* round decimal num to What u whant */

function My_toFixed() {
    let num = 5.567896;
    let result = num.toFixed(2);
    let answer = `num = ${result}`;
    document.getElementById('result11').innerText =
        answer;
};

/* filter top of 18 */

function My_Filter() {
    let ages = [32, 33, 16, 40, 17, 19];
    let check_top_18 = (age) => {
        return age >= 18;
    };
    let Solve = ages.filter(check_top_18);
    //or -->
    //let Solve = ages.filter((age) => age >= 18);
    let answer = `ages = [${Solve}]`;
    document.getElementById('result12').innerText =
        answer;

};

/* forEach */

function My_forEach() {

    let fruits = ["apple", "orange", "cherry"];

    let answer = fruits.forEach(My_sul);

};

function My_sul(item, index) {

    document.getElementById('result13').innerHTML += index + " :" + item + "<br/>";
};

/* Math.abs or mosbat saz  */

function My_Math_abs() {
    let a = Math.abs(7.25);
    let b = Math.abs(-7.25);
    let c = Math.abs(null);
    let d = Math.abs("Hello");
    let e = Math.abs(2 + 3);
    let f = Math.abs(-2 + 3);

    let x = a + '<br/>' + b + '<br/>' + c + '<br/>'
         + d + '<br/>' + e + '<br/>' + f;

    document.getElementById('result14').innerHTML = x;
}

/* change src of img1 id */

var click = 1;
	function click_count() {
		click = click + 1;
		document.querySelector('#result15').innerText =
        click;
	}

function change() {
	click_count();
	if (click%2 == 0)//is click num even
    { document.querySelector('#img1').src = 'images/summer.jpg'; }else {
		document.querySelector('#img1').src = 'images/Frog-Series.jpg';
	}
}

document.querySelector('#img1').addEventListener('click',change);

/*********************/






