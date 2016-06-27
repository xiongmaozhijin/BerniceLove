'use strict';
var arr = ['小明', '小红', '大军', '阿黄'];

/*
console.log(arr);

var lenght = arr.length;
var wel = ["欢迎", arr.slice(0, lenght-1).join(","), "和", arr[lenght-1], "同学"].join("");

console.log(wel);


function sum1(...rest) {
	arguments
}


function string2int(s) {

	  var sArr = s.split("");
	  var newArr = sArr.map(
		function(x) {
		  return x*1;
		}
	   );
	console.log("newArr=" + newArr);
	  return newArr.reduce(
		function(x, y) {
		   console.log(["x=", x, "y=", y].join(""));
			return x*10 + y;
		}
	  );
}



	return arr.map(
		function(x) {
			return x[0].toUpperCase() + x.substring(1).toLowerCase();
		}
	
	);




    var sArr = [];
    var sLength = s.length;
    var i =0;
    var item;
    for (i=0; i<sLength; i++) {
      item = s.substring(i, i+1);
      sArr.push(item);
      console.log(item);
    }

    return sArr.reduce(
      function(x, y) {
          return x*10+y;
      }
    );






var arr = [1, 2, 3, 4, 5];
var result = arr.reduce(function(x, y) {
	return x+y;
	
} );

console.log("result=" + result)


function create_counter(initial) {
	var x = initial || 0;
	return {
		inc : function() {
			x += 1;
			return x;
		}
	}
}

var c1 = create_counter();
console.log(c1.inc() );
console.log(c1.inc() );

var c2 = create_counter(10);
console.log(c2.inc());


console.log("-----------------------------------");
function make_pow(n) {
	return function(x) {
		return Math.pow(x, n);
	}
	
}

var pow2 = make_pow(2);
var pow3 = make_pow(3);

console.log(pow2(3));
console.log(pow3(3));



// 定义数字0:
var zero = function (f) {
    return function (x) {
        return x;
    }
};

// 定义数字1:
var one = function (f) {
    return function (x) {
        return f(x);
    }
};

// 定义加法:
function add(n, m) {
    return function (f) {
        return function (x) {
            return m(f)(n(f)(x));
        }
    }
}


// 计算数字2 = 1 + 1:
var two = add(one, one);

// 计算数字3 = 1 + 2:
var three = add(one, two);

// 计算数字5 = 2 + 3:
var five = add(two, three);

// 你说它是3就是3，你说它是5就是5，你怎么证明？

// 呵呵，看这里:

// 给3传一个函数,会打印3次:
(three(function () {
    console.log('print 3 times');
}))();

// 给5传一个函数,会打印5次:
(five(function () {
    console.log('print 5 times');
}))();

// 继续接着玩一会...


var now = new Date();
log(now);

var re = /^\d{3}\-\d{3,8}$/;
log( re.test('') );
log( re.test('010-123456') );
log( re.test('010 253456') );


var xiaoming = {
	name : "小明", 
	age  : 14, 
	gender: true,
	skills: ['javascript', 'java']
	
};

var jsonStr = JSON.stringify(xiaoming, null, ' ');
log(jsonStr);





function log(x) {
	console.log(x);
}


*/

//var result = (function (x) {return x*x}) (5);
//console.log(result);

console.log("here....");
var Student = {
	"name"	: "Robot", 
	"height": 1.2,
	 "run"	: function() {
		 console.log(name + "is running...");
	 }
};

function createStudent(name) {
	var s = Object.create(Student);
	s.name = name;
	
	return s;
}


var xiaoming = createStudent("小明");
xiaoming.run();
console.log (xiaoming.__proto__===Student );




/*

var a = 'Name';
var b = a;
a = 'changed';
console.log(b);


var num = 2;
console.log(String(num) );


var golbalVar = "Hello grolbarVar";


console.log(window.golbalVar);



function abxx() {
	console.log("hanshu abxx()");
}

var abxxx = function() {
	console.log("hanshu abxxx()");
};


abxx();
abxxx();


var xiaoming = {
	name:"小米",
	age: "19"
	
};

for (var key in xiaoming) {
	if (xiaoming.hasOwnProperty(key)) {
		console.log(key);
		console.log(xiaoming[key]);
	}
}

console.log("------------");

arr.forEach(
	function (indexxx) {
//		console.log(elemddent);
		console.log(indexxx);
	}
);


*/