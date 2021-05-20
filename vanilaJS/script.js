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
function MY_classList_toggle() {
	document.getElementById("myDIV").classList.toggle("mystyle");
}

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
/* show input value and push in array */
var val = document.querySelector('#my_input1');
var form = document.querySelector('#form');
var new_val;
function get_val(){
	var defult_val = val.defaultValue;
	new_val = val.value;
	document.querySelector('#result16').innerHTML = new_val + ' instead of ' + defult_val;
}

	var arr10 = [];
function push_val (e) {
	e.preventDefault();
	arr10.push(new_val);	//arr10.push(JSON.parse(localStorage.getItem('arr11')));
	document.querySelector('#result16').innerHTML = arr10;
	console.log(arr10);
}

form.addEventListener('submit',push_val);
function Save (){
	localStorage.setItem('arr11',JSON.stringify(arr10));
}
function load (){
	const arr12 = JSON.parse(
	localStorage.getItem('arr11')
	);
	document.querySelector('#result16').innerHTML =
	(localStorage.getItem('arr11') !== null)?
	arr12 : 'nothing!';
}

function remove() {
	localStorage.removeItem('arr11');
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




/* if checkBox check backgroudn black and text white */
function My_checkBox1() {
	let checkBox2 = document.querySelector('#myCheck');
	let body = document.querySelector('#body');
	
	if (checkBox2.checked == true) {
		body.style.backgroundColor = '#483636';
		body.style.color = '#fff';
	} else {
		body.style.backgroundColor = '#fff';
		body.style.color = 'black';
	}
}

/* setInterval */
var set_timer;
function say_1s(x) {
	let result = document.querySelector('#result17');
	set_timer = setInterval(()=>
	result.innerHTML += x
	,1000);
}

function clear_Timeoute(){
	clearTimeout(set_timer);
}

function clear_Interval(){
	clearInterval(set_timer);
}

//hello_1s(' Hello');

/* setInterval show clock 1s */
var set_clock = setInterval(clock_set,1000);

function clock_set() {
	let d = new Date();
	let t = d.toLocaleTimeString();
	document.getElementById("result18").innerHTML = t;
	
}

function clear_Interval2(){
	clearInterval(set_clock);
}


/* join */
function My_Join(){
	let names1 = ['hassan','nasrin','pouriya','mehran','mobina'];
	let X = document.querySelector('#result19');
	X.innerHTML = names1.join(' and ');
}

/*use this keyword*/
var info1 ={
	id:101,
	name:'pouri',
	lastName:'zarei',
	fullName:function(){
		return this.name + ' ' + this.lastName;
	}
}
	
function My_This(){
	document.querySelector('#result20').innerHTML = info1.fullName();
}
	

/* huge lesson: promise */

//show in DOM
function myDisplayer(some) {
	document.querySelector('#result21').innerHTML = some;
}

const myPromise = new Promise(function(myResolve,myReject){
	let x = true;
	
	if (x) {
		myResolve('OK')
	}else {
		myReject('NO')
	}
});

//console.log(myPromise);
myPromise.then(
	function(value) {myDisplayer(value)},
	function(error) {myDisplayer(error)}
);

/* make complex promise - a mom promise to her sun buy a phone */

function myDisplayer2(some , som2) {
	document.querySelector('#result22').innerHTML = some + ':' + som2;
}

const momsPromise = new Promise(function(myResolve,myReject){
	let money = 70000;
	let price = 60000;
	if(money > price) {
		myResolve({
			brand: 'iphone',
			model: '11pro_Max'
		});
	}else {
		myReject("We donot have enough savings. Let us save some more money.")
	}
});

momsPromise.then(
  function(value) {
    myDisplayer2("Hurray I got this phone as a gift ", JSON.stringify(value));
  },
  function(reason) {
    myDisplayer2("Mom coudn't buy me the phone because ", reason);
  }
);


/* async & await */

//simolate a server that respond and give nums after 5s with promise & setTimeout
let numbersFromServer = () => {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            var numbers = randomNumbers();
            resolve(numbers);
        }, 5000);
    });
}
 
// creat 6 random number:
function randomNumbers() {
    return Array(6).fill().map(() => Math.round(Math.random() * 100))
}

//main curse:
async function render() {
    let numbers = await numbersFromServer();
 
    var sorted = numbers.sort();
    var reversed = sorted.reverse();
    var joined = reversed.join();
 
    console.log(joined);
    console.log('tick');
}
 
render();


/* compelex async & await */

//simolate a server that respond and give users after 5s 
let users = () => {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            var users = ['John', 'Donald', 'Sarah'];
            resolve(users);
        }, 5000);
    });
}
 

//simolate a server that respond and give users grads after 8s 
let grades = (users) => {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            console.log('Grades for: ' + users.join());
            var grades = [1, 2, 3, 4];
            resolve(grades);
        }, 8000);
    });
}

async function render2() {
    let usersFromServer = await users();
    let gradesFromServer = await grades(usersFromServer);
    
    var sorted = gradesFromServer.sort();
    var reversed = sorted.reverse();
    var joined = reversed.join();
 
    console.log(joined);
	console.log('i am did it :)');
	
	
}
 
render2();

/* fetch */

// getText("https://api.github.com/user");

// async function getText(file) {
//   let x = await fetch(file);
//   let y = await x.text();
//   document.getElementById("result25").innerHTML = y;
// }

/* JavaScript Error Handling */

//try can ignore error just for test:self learning
try {
 	
  document.getElementById("result26").innerHTML = suop;
  //document.getElementById("result26").innerHTML = demo;
}

catch(err) {
  document.getElementById("result26").innerHTML = err.message;
}

/* playe with then() */


var url= 'https://api.github.com/users/QuincyLarson';

const playeThen =()=>{
fetch(url)
		.then((resp)=> resp.json())
		.then((user)=> {
			const {login} = user;
			document.getElementById("result27").innerHTML = login;
		})
		.catch((error) => console.log(error));
}		

/* querySelectorAll */

function myqurryAll() {
   var x = document.querySelectorAll("p"); 
   for (var i = 0; i <= 33; i++) {
     x[i].style.backgroundColor = "red";
   }
}

function myTargetEvent(event) { 
  var x = event.target;
  var data = event.target.getAttribute('data-j');
  document.getElementById("result29").innerHTML = "Triggered by a " + x.tagName + " element whith data: " + data;
}

/* remove repeted by new Set */


// const removeReppet =()=>{
// 	var repeted = ['abas', 'samad','somi' ,'ali' , 'abas' , 'samad' , 'mahmood' , 'somi' , 'poori' , 'ali' , 'samad' , 'mahmood' ];

// 	var nweRepeted = new Set(repeted.map((item)=>{
// 		return (item)
// 	}));
	
// 	//i cant understand why nweRepeted.map is not a function
// 	var newArry = new Set(nweRepeted.map((item)=>{
// 		document.getElementById("result30").innerHTML = ',' + item; 
// 	}));

// 	console.log(nweRepeted);

	
// }


/* new and this */

function Car1(make,model,year) {
    this.make = make;
    this.model = model;
    this.year = year;
}
const Car2 = new Car1('Eagle', 'Talon TSi', 1993);
document.querySelector('#result31').innerHTML = Car2.model;

/*********************/








