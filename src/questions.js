//  EASY LEVEL QUESTIONS 
const easyQuestions = [
    {
        question: "Which keyword is used to declare a variable in JavaScript?",
        options: ["var", "int", "string", "define"],
        correct: 0,
    },
    {
        question: "Which company developed JavaScript?",
        options: ["Microsoft", "Netscape", "Google", "IBM"],
        correct: 1,
    },
    {
        question: "Inside which HTML tag do we put JavaScript?",
        options: ["<js>", "<javascript>", "<script>", "<code>"],
        correct: 2,
    },
    {
        question: "How do you write Hello in alert box?",
        options: ["alertBox('Hello')", "msg('Hello')", "alert('Hello')", "msgBox('Hello')"],
        correct: 2,
    },
    {
        question: "Which symbol is used for single line comment?",
        options: ["//", "/*", "#", "<!--"],
        correct: 0,
    },
    {
        question: "How do you create a function?",
        options: ["function myFun()", "create myFun()", "def myFun()", "func myFun()"],
        correct: 0,
    },
    {
        question: "How to call function myFun?",
        options: ["call myFun()", "myFun()", "Call.myFun()", "run myFun()"],
        correct: 1,
    },
    {
        question: "Which loop runs at least once?",
        options: ["for", "while", "do-while", "foreach"],
        correct: 2,
    },
    {
        question: "How to write array?",
        options: ["var a=(1,2,3)", "var a=[1,2,3]", "var a={1,2,3}", "var a=<1,2,3>"],
        correct: 1,
    },
    {
        question: "Which method adds element at end of array?",
        options: ["push()", "pop()", "shift()", "join()"],
        correct: 0,
    },
    {
        question: "Which method removes last element?",
        options: ["push()", "pop()", "shift()", "slice()"],
        correct: 1,
    },
    {
        question: "What is DOM?",
        options: ["Data Object Model", "Document Object Model", "Digital Object Mode", "Display Object Method"],
        correct: 1,
    },
    {
        question: "How to select element by id?",
        options: ["getElement()", "getElementById()", "queryId()", "selectId()"],
        correct: 1,
    },
    {
        question: "NaN stands for?",
        options: ["No assigned number", "Not a Number", "New and Null", "Null and Number"],
        correct: 1,
    },
    {
        question: "Which event occurs when user clicks?",
        options: ["onhover", "onclick", "onpress", "onchange"],
        correct: 1,
    },
    {
        question: "Which keyword defines constant?",
        options: ["let", "const", "var", "fixed"],
        correct: 1,
    },
    {
        question: "How to write object?",
        options: ["var a=[]", "var a={}", "var a=()", "var a=<>"],
        correct: 1,
    },
    {
        question: "What is the output of 5 + 5?",
        options: ["10", "55", "Error", "undefined"],
        correct: 0,
    },
    {
        question: "Which symbol is used for multi-line comment?",
        options: ["//", "/**/", "#", "<!---->"],
        correct: 1,
    },
    {
        question: "How to access first element of array?",
        options: ["array(0)", "array[0]", "array.0", "array#0"],
        correct: 1,
    },
    {
    question: "Which keyword is used to print in console?",
    options: ["console.log()", "print()", "echo()", "write()"],
    correct: 0,
},
{
    question: "Which symbol is used for addition?",
    options: ["+", "-", "*", "/"],
    correct: 0,
},
{
    question: "Which data type is used for text?",
    options: ["Number", "Boolean", "String", "Array"],
    correct: 2,
},
{
    question: "Which value represents true or false?",
    options: ["String", "Number", "Boolean", "Object"],
    correct: 2,
},
{
    question: "Which keyword declares block-scoped variable?",
    options: ["var", "let", "define", "constvar"],
    correct: 1,
},
{
    question: "Which operator is used for multiplication?",
    options: ["+", "*", "-", "%"],
    correct: 1,
},
{
    question: "How to write single line comment?",
    options: ["// comment", "/* comment */", "# comment", "<!-- comment -->"],
    correct: 0,
},
{
    question: "Which method converts string to number?",
    options: ["parseInt()", "toString()", "NumberToString()", "convert()"],
    correct: 0,
},
{
    question: "Which method converts number to string?",
    options: ["toString()", "parseInt()", "Number()", "convertString()"],
    correct: 0,
},
{
    question: "Which keyword is used to define class?",
    options: ["function", "class", "object", "define"],
    correct: 1,
},
{
    question: "Which symbol is used for comparison?",
    options: ["=", "==", "+", ":"],
    correct: 1,
},
{
    question: "Which loop checks condition first?",
    options: ["do-while", "for", "while", "foreach"],
    correct: 2,
},
{
    question: "Which method checks array length?",
    options: ["size()", "length", "count()", "len()"],
    correct: 1,
},
{
    question: "Which keyword is used to export module?",
    options: ["send", "export", "share", "public"],
    correct: 1,
},
{
    question: "Which keyword is used to import module?",
    options: ["include", "require", "import", "add"],
    correct: 2,
},
{
    question: "Which operator gives remainder?",
    options: ["%", "/", "*", "+"],
    correct: 0,
},
{
    question: "Which value means no value assigned?",
    options: ["0", "null", "undefined", "false"],
    correct: 2,
},
{
    question: "Which method removes specific array element?",
    options: ["splice()", "slice()", "remove()", "delete()"],
    correct: 0,
},
{
    question: "Which method copies array?",
    options: ["copy()", "slice()", "clone()", "spread()"],
    correct: 1,
},
{
    question: "Which operator is logical AND?",
    options: ["&&", "||", "!", "&"],
    correct: 0,
},
{
    question: "Which keyword declares a variable globally (old way)?",
    options: ["let", "var", "const", "global"],
    correct: 1,
},
{
    question: "Which value is considered falsy?",
    options: ["1", "true", "0", "100"],
    correct: 2,
},
{
    question: "Which operator is used for subtraction?",
    options: ["+", "-", "*", "%"],
    correct: 1,
},
{
    question: "How do you write a string?",
    options: ["'Hello'", "Hello", "{Hello}", "(Hello)"],
    correct: 0,
},
{
    question: "Which method shows message in browser console?",
    options: ["console.log()", "alert()", "prompt()", "confirm()"],
    correct: 0,
},
{
    question: "Which function takes user input?",
    options: ["alert()", "prompt()", "confirm()", "input()"],
    correct: 1,
},
{
    question: "Which function shows OK/Cancel box?",
    options: ["alert()", "prompt()", "confirm()", "message()"],
    correct: 2,
},
{
    question: "What is 10 % 3?",
    options: ["3", "1", "0", "10"],
    correct: 1,
},
{
    question: "Which operator means NOT equal (loose)?",
    options: ["!=", "!==", "==", "="],
    correct: 0,
},
{
    question: "Which keyword creates object?",
    options: ["new", "make", "create", "object"],
    correct: 0,
},
{
    question: "Which method rounds a number?",
    options: ["Math.round()", "Math.random()", "Math.floor()", "Math.ceil()"],
    correct: 0,
},
{
    question: "Which method generates random number?",
    options: ["Math.random()", "Math.round()", "Math.floor()", "Math.max()"],
    correct: 0,
},
{
    question: "Which method gives largest number?",
    options: ["Math.min()", "Math.max()", "Math.top()", "Math.high()"],
    correct: 1,
},
{
    question: "Which method gives smallest number?",
    options: ["Math.max()", "Math.min()", "Math.low()", "Math.small()"],
    correct: 1,
},
{
    question: "Which property gives string length?",
    options: ["size", "length", "count", "len"],
    correct: 1,
},
{
    question: "Which method converts text to uppercase?",
    options: ["toUpperCase()", "toLowerCase()", "upper()", "capitalize()"],
    correct: 0,
},
{
    question: "Which method converts text to lowercase?",
    options: ["toLowerCase()", "toUpperCase()", "lower()", "small()"],
    correct: 0,
},
{
    question: "Which method joins two strings?",
    options: ["append()", "concat()", "merge()", "combine()"],
    correct: 1,
},
{
    question: "Which method finds index of value in array?",
    options: ["indexOf()", "find()", "search()", "locate()"],
    correct: 0,
},
{
    question: "Which method reverses array?",
    options: ["reverse()", "flip()", "back()", "change()"],
    correct: 0,
},
{
    question: "Which method sorts array?",
    options: ["arrange()", "sort()", "order()", "set()"],
    correct: 1,
},
{
    question: "Which loop is best for fixed number of iterations?",
    options: ["while", "for", "do-while", "foreach"],
    correct: 1,
},
{
    question: "Which keyword is used for decision making?",
    options: ["if", "loop", "switch", "case"],
    correct: 0,
},
{
    question: "Which keyword is used with if condition alternative?",
    options: ["else", "then", "other", "otherwise"],
    correct: 0,
},
{
    question: "Which statement checks multiple cases?",
    options: ["if", "switch", "loop", "for"],
    correct: 1,
},
{
    question: "Which keyword exits a function?",
    options: ["break", "return", "stop", "exit"],
    correct: 1,
},
{
    question: "Which operator is logical OR?",
    options: ["&&", "||", "!", "|"],
    correct: 1,
},
{
    question: "Which operator is logical NOT?",
    options: ["!", "&&", "||", "~"],
    correct: 0,
},
{
    question: "Which keyword creates constant variable?",
    options: ["var", "let", "const", "fixed"],
    correct: 2,
},
{
    question: "Which method removes last character of string?",
    options: ["slice()", "trim()", "substring()", "pop()"],
    correct: 0,
},
{
    question: "Which method removes spaces from both sides?",
    options: ["trim()", "cut()", "remove()", "strip()"],
    correct: 0,
},
{
    question: "Which property checks array length?",
    options: ["count", "size", "length", "total"],
    correct: 2,
},
{
    question: "Which symbol is used for template literals?",
    options: ["'", '"', "`", "~"],
    correct: 2,
},
{
    question: "Which keyword is used to handle errors?",
    options: ["try", "error", "fix", "handle"],
    correct: 0,
},
{
    question: "Which block catches errors?",
    options: ["catch", "error", "fix", "finally"],
    correct: 0,
},
{
    question: "Which block runs always?",
    options: ["finally", "catch", "try", "last"],
    correct: 0,
},
{
    question: "Which method checks if array includes value?",
    options: ["contains()", "includes()", "has()", "exists()"],
    correct: 1,
},
{
    question: "Which method converts string to array?",
    options: ["split()", "join()", "break()", "cut()"],
    correct: 0,
},
{
    question: "Which method joins array into string?",
    options: ["split()", "join()", "merge()", "bind()"],
    correct: 1,
},
{
    question: "Which method removes first array element?",
    options: ["shift()", "pop()", "slice()", "remove()"],
    correct: 0,
},
{
    question: "Which method adds element at start of array?",
    options: ["push()", "unshift()", "shift()", "add()"],
    correct: 1,
},
{
    question: "Which keyword is used inside loop to skip iteration?",
    options: ["continue", "skip", "next", "pass"],
    correct: 0,
},
{
    question: "Which symbol starts block of code?",
    options: ["{", "(", "[", "<"],
    correct: 0,
},
{
    question: "Which symbol ends statement?",
    options: [";", ":", ".", ","],
    correct: 0,
},
{
    question: "Which operator assigns value?",
    options: ["=", "==", "===", ":"],
    correct: 0,
},
{
    question: "Which keyword defines arrow function?",
    options: ["function", "=>", "arrow", "lambda"],
    correct: 1,
},
{
    question: "Which function runs when page loads?",
    options: ["onload", "onclick", "onhover", "onchange"],
    correct: 0,
},
{
    question: "Which property gets element text?",
    options: ["innerText", "textGet", "valueText", "getText"],
    correct: 0,
},
{
    question: "Which property sets input value?",
    options: ["value", "innerHTML", "text", "data"],
    correct: 0,
},
{
    question: "Which method adds event listener?",
    options: ["addEventListener()", "addEvent()", "listen()", "onEvent()"],
    correct: 0,
},

];

//  MEDIUM LEVEL QUESTIONS
const mediumQuestions = [
    {
    question: "What is output of: console.log(2 + 3 * 2)?",
    options: ["10", "12", "8", "7"],
    correct: 3,
},
{
    question: "What is output of: console.log('5' - 2)?",
    options: ["3", "52", "NaN", "7"],
    correct: 0,
},
{
    question: "What is output of: console.log(typeof [])?",
    options: ["array", "object", "list", "undefined"],
    correct: 1,
},
{
    question: "What is output of: console.log(10 / 0)?",
    options: ["Infinity", "0", "Error", "undefined"],
    correct: 0,
},
{
    question: "What is output of: console.log(0.1 + 0.2 === 0.3)?",
    options: ["true", "false", "NaN", "Error"],
    correct: 1,
},
{
    question: "What is output of: console.log(5 == '5')?",
    options: ["false", "Error", "true", "undefined"],
    correct: 2,
},
{
    question: "What is output of: console.log(5 === '5')?",
    options: ["true", "false", "Error", "undefined"],
    correct: 1,
},
{
    question: "What is output of: console.log(Boolean(''))?",
    options: ["true", "false", "Error", "null"],
    correct: 1,
},
{
    question: "What is output of: console.log([1,2,3].length)?",
    options: ["2", "4", "3", "1"],
    correct: 2,
},
{
    question: "What is output of: console.log(Math.floor(4.9))?",
    options: ["5", "4", "4.9", "Error"],
    correct: 1,
},
{
    question: "What is output of: console.log(Math.ceil(4.1))?",
    options: ["4", "5", "4.1", "Error"],
    correct: 1,
},
{
    question: "What is output of: console.log('hello'.toUpperCase())?",
    options: ["hello", "HELLO", "Hello", "error"],
    correct: 1,
},
{
    question: "What is output of: console.log('HELLO'.toLowerCase())?",
    options: ["hello", "HELLO", "Hello", "error"],
    correct: 0,
},
{
    question: "What is output of: console.log('abc'.charAt(1))?",
    options: ["a", "b", "c", "undefined"],
    correct: 1,
},
{
    question: "What is output of: console.log(parseInt('10') + 5)?",
    options: ["15", "105", "Error", "NaN"],
    correct: 0,
},
{
    question: "What is output of: console.log(Number('abc'))?",
    options: ["0", "NaN", "Error", "undefined"],
    correct: 1,
},
{
    question: "What is output of: let a=5; a+=3; console.log(a)?",
    options: ["8", "5", "3", "53"],
    correct: 0,
},
{
    question: "What is output of: console.log(2 ** 3)?",
    options: ["6", "9", "8", "Error"],
    correct: 2,
},
{
    question: "What is output of: console.log([1,2,3].join('-'))?",
    options: ["1,2,3", "123", "1-2-3", "Error"],
    correct: 2,
},
{
    question: "What is output of: console.log('5' + 2)?",
    options: ["7", "52", "NaN", "Error"],
    correct: 1,
},
{
    question: "What is output of: console.log(true + true)?",
    options: ["0", "1", "2", "true"],
    correct: 2,
},
{
    question: "What is output of: console.log(false + 1)?",
    options: ["0", "1", "false", "Error"],
    correct: 1,
},
{
    question: "What is output of: console.log(null == undefined)?",
    options: ["true", "false", "Error", "NaN"],
    correct: 0,
},
{
    question: "What is output of: console.log(null === undefined)?",
    options: ["true", "false", "Error", "NaN"],
    correct: 1,
},
{
    question: "What is output of: console.log([1,2].push(3))?",
    options: ["3", "[1,2,3]", "Error", "undefined"],
    correct: 0,
},
{
    question: "What is output of: console.log([1,2,3].pop())?",
    options: ["1", "2", "3", "undefined"],
    correct: 2,
},
{
    question: "What is output of: console.log(Math.max(2,8,5))?",
    options: ["5", "8", "2", "Error"],
    correct: 1,
},
{
    question: "What is output of: console.log(Math.min(2,8,5))?",
    options: ["5", "8", "2", "Error"],
    correct: 2,
},
{
    question: "What is output of: console.log(typeof NaN)?",
    options: ["NaN", "number", "undefined", "object"],
    correct: 1,
},
{
    question: "What is output of: console.log(typeof null)?",
    options: ["null", "object", "undefined", "number"],
    correct: 1,
},
{
    question: "What is output of: console.log(!!1)?",
    options: ["true", "false", "1", "Error"],
    correct: 0,
},
{
    question: "What is output of: console.log(!!0)?",
    options: ["true", "false", "0", "Error"],
    correct: 1,
},
{
    question: "What is output of: console.log('10' / '2')?",
    options: ["5", "102", "NaN", "Error"],
    correct: 0,
},
{
    question: "What is output of: console.log([1,2,3].includes(2))?",
    options: ["false", "true", "2", "Error"],
    correct: 1,
},
{
    question: "What is output of: console.log([1,2,3].indexOf(2))?",
    options: ["1", "2", "0", "-1"],
    correct: 0,
},
{
    question: "What is output of: console.log('abc'.includes('b'))?",
    options: ["true", "false", "Error", "undefined"],
    correct: 0,
},
{
    question: "What is output of: console.log(Math.trunc(4.9))?",
    options: ["5", "4", "4.9", "Error"],
    correct: 1,
},
{
    question: "What is output of: console.log('a' > 'b')?",
    options: ["true", "false", "Error", "NaN"],
    correct: 1,
},
{
    question: "What is output of: console.log(3 > 2 > 1)?",
    options: ["true", "false", "Error", "NaN"],
    correct: 1,
},
{
    question: "What is output of: console.log(1 < 2 < 3)?",
    options: ["true", "false", "Error", "NaN"],
    correct: 0,
},
{
    question: "What is output of: console.log('2' * '3')?",
    options: ["6", "23", "NaN", "Error"],
    correct: 0,
},
{
    question: "What is output of: console.log(5 && 0)?",
    options: ["5", "0", "true", "false"],
    correct: 1,
},
{
    question: "What is output of: console.log(5 || 0)?",
    options: ["5", "0", "true", "false"],
    correct: 0,
},
{
    question: "What is output of: console.log(!true)?",
    options: ["true", "false", "Error", "undefined"],
    correct: 1,
},
{
    question: "What is output of: console.log(!false)?",
    options: ["true", "false", "0", "1"],
    correct: 0,
},
{
    question: "What is output of: console.log(2 + + '2')?",
    options: ["22", "4", "NaN", "Error"],
    correct: 1,
},
{
    question: "What is output of: console.log(+'5')?",
    options: ["5", "'5'", "NaN", "Error"],
    correct: 0,
},
{
    question: "What is output of: console.log(typeof 'hello')?",
    options: ["string", "object", "text", "undefined"],
    correct: 0,
},
{
    question: "What is output of: console.log(typeof true)?",
    options: ["boolean", "true", "object", "undefined"],
    correct: 0,
},
{
    question: "What is output of: console.log(3 + null)?",
    options: ["3", "null3", "NaN", "Error"],
    correct: 0,
},
,{
    question: "What is output of: console.log([1,2] + [3,4])?",
    options: ["[1,2,3,4]", "1234", "1,23,4", "Error"],
    correct: 2,
},
{
    question: "What is output of: console.log(typeof function() {})?",
    options: ["object", "function", "method", "undefined"],
    correct: 1,
},
{
    question: "What is output of: console.log(1 + true)?",
    options: ["2", "1true", "true1", "NaN"],
    correct: 0,
},
{
    question: "What is output of: console.log([] == false)?",
    options: ["false", "true", "Error", "undefined"],
    correct: 1,
},
{
    question: "What is output of: console.log([].length === 0)?",
    options: ["false", "0", "true", "undefined"],
    correct: 2,
},
{
    question: "What is output of: console.log('5' * 2 + 1)?",
    options: ["11", "101", "52", "NaN"],
    correct: 0,
},
{
    question: "What is output of: console.log('10' - '4' - '3')?",
    options: ["3", "7", "NaN", "1043"],
    correct: 0,
},
{
    question: "What is output of: console.log(+'')?",
    options: ["NaN", "0", "''", "undefined"],
    correct: 1,
},
{
    question: "What is output of: console.log(!!'hello')?",
    options: ["false", "Error", "true", "undefined"],
    correct: 2,
},
{
    question: "What is output of: console.log([1,2,3].slice(1))?",
    options: ["[2,3]", "[1,2]", "[1,2,3]", "2,3"],
    correct: 0,
},
{
    question: "What is output of: console.log([1,2,3].splice(1,1))?",
    options: ["[1,3]", "[2]", "[1,2,3]", "2"],
    correct: 1,
},
{
    question: "What is output of: console.log('abc'.indexOf('b'))?",
    options: ["2", "0", "1", "-1"],
    correct: 2,
},
{
    question: "What is output of: console.log(Math.pow(2,3))?",
    options: ["6", "9", "8", "Error"],
    correct: 2,
},
{
    question: "What is output of: console.log('7' > 5)?",
    options: ["true", "false", "Error", "NaN"],
    correct: 0,
},
{
    question: "What is output of: console.log(3 == '03')?",
    options: ["false", "Error", "undefined", "true"],
    correct: 3,
},
{
    question: "What is output of: console.log(3 === '03')?",
    options: ["true", "false", "Error", "NaN"],
    correct: 1,
},
{
    question: "What is output of: console.log(typeof Infinity)?",
    options: ["infinity", "number", "object", "undefined"],
    correct: 1,
},
{
    question: "What is output of: console.log(Math.sign(-5))?",
    options: ["1", "-1", "0", "Error"],
    correct: 1,
},
{
    question: "What is output of: console.log('Java' + 5 + 5)?",
    options: ["Java10", "Java55", "10Java", "Error"],
    correct: 1,
},
{
    question: "What is output of: console.log(5 + 5 + 'Java')?",
    options: ["Java10", "55Java", "10Java", "Error"],
    correct: 2,
},
{
    question: "What is output of: console.log([].toString())?",
    options: ["[]", "", "undefined", "Error"],
    correct: 1,
},
{
    question: "What is output of: console.log([1,2].toString())?",
    options: ["[1,2]", "1 2", "1,2", "12"],
    correct: 2,
},
{
    question: "What is output of: console.log(Boolean(0))?",
    options: ["true", "false", "0", "undefined"],
    correct: 1,
},
{
    question: "What is output of: console.log(Boolean('0'))?",
    options: ["false", "true", "0", "Error"],
    correct: 1,
},
{
    question: "What is output of: console.log(10 > 5 && 5 > 2)?",
    options: ["true", "false", "Error", "undefined"],
    correct: 0,
},
{
    question: "What is output of: console.log(10 > 5 && 2 > 5)?",
    options: ["true", "false", "undefined", "Error"],
    correct: 1,
},
{
    question: "What is output of: console.log(0 || 'Hello')?",
    options: ["0", "false", "Hello", "undefined"],
    correct: 2,
},
{
    question: "What is output of: console.log('Hi' && 0)?",
    options: ["Hi", "0", "true", "false"],
    correct: 1,
},
{
    question: "What is output of: console.log(5 > 3 ? 'Yes' : 'No')?",
    options: ["No", "Yes", "true", "false"],
    correct: 1,
},
{
    question: "What is output of: console.log(2 < 1 ? 'A' : 'B')?",
    options: ["A", "B", "true", "false"],
    correct: 1,
},
{
    question: "What is output of: console.log(typeof {})?",
    options: ["object", "array", "null", "undefined"],
    correct: 0,
},
{
    question: "What is output of: console.log([1] == '1')?",
    options: ["false", "true", "Error", "undefined"],
    correct: 1,
},
{
    question: "What is output of: console.log([] === [])?",
    options: ["true", "false", "undefined", "Error"],
    correct: 1,
},
{
    question: "What is output of: console.log([1,2] == [1,2])?",
    options: ["true", "false", "undefined", "Error"],
    correct: 1,
},
{
    question: "What is output of: console.log(typeof NaN === 'number')?",
    options: ["false", "Error", "true", "undefined"],
    correct: 2,
},
{
    question: "What is output of: console.log(1 + undefined)?",
    options: ["NaN", "1", "undefined", "Error"],
    correct: 0,
},
{
    question: "What is output of: console.log(null + 5)?",
    options: ["5", "null5", "NaN", "Error"],
    correct: 0,
},
{
    question: "What is output of: console.log('abc'[1])?",
    options: ["a", "b", "c", "undefined"],
    correct: 1,
},
{
    question: "What is output of: console.log(100 / '10')?",
    options: ["10", "10010", "NaN", "Error"],
    correct: 0,
},
{
    question: "What is output of: console.log(5 % 2)?",
    options: ["1", "2", "2.5", "0"],
    correct: 0,
},
{
    question: "What is output of: console.log(Math.sqrt(16))?",
    options: ["8", "4", "16", "Error"],
    correct: 1,
},
{
    question: "What is output of: console.log('5' == 5 && 5 === 5)?",
    options: ["false", "true", "Error", "undefined"],
    correct: 1,
},
{
    question: "What is output of: console.log(!!undefined)?",
    options: ["true", "false", "undefined", "Error"],
    correct: 1,
},
{
    question: "What is output of: console.log(Array.isArray([]))?",
    options: ["true", "false", "undefined", "Error"],
    correct: 0,
},
{
    question: "What is output of: console.log(Array.isArray({}))?",
    options: ["true", "false", "undefined", "Error"],
    correct: 1,
},
{
    question: "What is output of: console.log(typeof [])?",
    options: ["array", "object", "list", "undefined"],
    correct: 1,
},
{
    question: "What is output of: console.log(5 + false)?",
    options: ["5", "false5", "NaN", "Error"],
    correct: 0,
},
{
    question: "What is output of: console.log(+'abc')?",
    options: ["abc", "0", "NaN", "Error"],
    correct: 2,
},
{
    question: "What is output of: console.log(3 * null)?",
    options: ["0", "null", "NaN", "Error"],
    correct: 0,
},
{
    question: "What is output of: console.log('' == 0)?",
    options: ["false", "true", "undefined", "Error"],
    correct: 1,
},
,
    {
        question: "Which data type is NOT in JavaScript?",
        options: ["String", "Boolean", "Float", "Number"],
        correct: 2,
    },
    {
        question: "Which operator is used for strict equality?",
        options: ["==", "===", "!=", "="],
        correct: 1,
    },
    {
        question: "What is output of typeof null?",
        options: ["null", "object", "undefined", "string"],
        correct: 1,
    },
    {
        question: "Which keyword stops loop?",
        options: ["stop", "break", "exit", "return"],
        correct: 1,
    },
    {
        question: "Which keyword is block scoped?",
        options: ["var", "let", "function", "global"],
        correct: 1,
    },
    {
        question: "Which operator is used for exponent?",
        options: ["^", "**", "^^", "pow"],
        correct: 1,
    },
    {
        question: "Which method converts JSON to object?",
        options: ["JSON.toObject()", "JSON.parse()", "JSON.stringify()", "JSON.convert()"],
        correct: 1,
    },
    {
        question: "Which converts object to JSON string?",
        options: ["JSON.parse()", "JSON.stringify()", "JSON.toString()", "JSON.object()"],
        correct: 1,
    },
    {
        question: "What is closure?",
        options: ["End of function", "Function inside function with access to outer variable", "Loop break", "Object property"],
        correct: 1,
    },
    {
        question: "Which symbol used for arrow function?",
        options: ["->", "=>", "==", "::"],
        correct: 1,
    },
    {
        question: "What is output of 2 + '2'?",
        options: ["4", "22", "Error", "undefined"],
        correct: 1,
    },
    {
        question: "Which function delays execution?",
        options: ["delay()", "setTimeout()", "wait()", "sleep()"],
        correct: 1,
    },
    {
        question: "Which repeats execution at interval?",
        options: ["setInterval()", "repeat()", "loop()", "run()"],
        correct: 0,
    },
    {
        question: "What is this keyword?",
        options: ["Current object", "Global always", "Function name", "Loop variable"],
        correct: 0,
    },
    {
        question: "Which operator checks type?",
        options: ["typeof", "type", "checktype", "instanceof"],
        correct: 0,
    },
    {
        question: "Which keyword used in class?",
        options: ["object", "class", "struct", "define"],
        correct: 1,
    },
    {
        question: "How to inherit class?",
        options: ["inherit", "extends", "super", "implements"],
        correct: 1,
    },
    {
        question: "Which method joins array into string?",
        options: ["concat()", "join()", "merge()", "combine()"],
        correct: 1,
    },
    {
        question: "Which checks both value and type?",
        options: ["==", "===", "!=", "="],
        correct: 1,
    },
    {
        question: "What is hoisting in JavaScript?",
        options: ["Variable moved to top", "Loop skip", "Function delete", "Memory clear"],
        correct: 0,
    },
    {
        question: "Which keyword returns value from function?",
        options: ["break", "return", "exit", "stop"],
        correct: 1,
    },
    {
        question: "Which keyword handles error?",
        options: ["try-catch", "error", "fix", "catch-error"],
        correct: 0,
    },
    {
        question: "Which storage stores data permanently?",
        options: ["sessionStorage", "localStorage", "tempStorage", "memoryStorage"],
        correct: 1,
    },
    {
        question: "Which storage clears after tab close?",
        options: ["sessionStorage", "localStorage", "permanentStorage", "browserStorage"],
        correct: 0,
    },
    {
        question: "Template literal uses which symbol?",
        options: ['" "', "' '", "` `", "<>"],
        correct: 2,
    },
    {
        question: "Which loop iterates over array?",
        options: ["for", "while", "forEach", "do"],
        correct: 2,
    },
    {
        question: "Which method filters array elements?",
        options: ["map()", "filter()", "reduce()", "slice()"],
        correct: 1,
    },
    {
        question: "Which method transforms array elements?",
        options: ["map()", "filter()", "find()", "some()"],
        correct: 0,
    },
    {
        question: "Which finds first element that matches?",
        options: ["find()", "search()", "match()", "filter()"],
        correct: 0,
    },
    {
        question: "What is the difference between undefined and null?",
        options: ["No difference", "undefined is declared but no value, null is intentional no value", "null is declared but no value", "undefined is permanent, null temporary"],
        correct: 1,
    },
    {
        question: "Which method removes first element from array?",
        options: ["pop()", "shift()", "slice()", "splice()"],
        correct: 1,
    },
    {
        question: "Which method adds to beginning of array?",
        options: ["push()", "unshift()", "shift()", "pop()"],
        correct: 1,
    },
];

//  HARD LEVEL QUESTIONS 
const hardQuestions = [
    {
    question: "What is output?\nvar a=1; function f(){console.log(a); var a=2;} f();",
    options: ["1", "2", "undefined", "Error"],
    correct: 2,
},
{
    question: "What is output?\nconsole.log(typeof (async function(){}));",
    options: ["async", "function", "object", "undefined"],
    correct: 1,
},
{
    question: "What is output?\nconsole.log(1 < 2 < 2);",
    options: ["true", "false", "Error", "NaN"],
    correct: 1,
},
{
    question: "What is output?\nPromise.resolve(1).then(x=>x+1).then(console.log);",
    options: ["1", "2", "undefined", "Error"],
    correct: 1,
},
{
    question: "Node.js: Which module handles file system?",
    options: ["http", "fs", "path", "os"],
    correct: 1,
},
{
    question: "What is output?\nconsole.log([...new Set([1,1,2,2,3])].length);",
    options: ["3", "5", "2", "1"],
    correct: 0,
},
{
    question: "React: Which hook causes re-render?",
    options: ["useRef", "useState", "useMemo", "useCallback"],
    correct: 1,
},
{
    question: "TypeScript: What does 'never' mean?",
    options: ["any type", "always null", "function never returns", "void"],
    correct: 2,
},
{
    question: "What is output?\nconsole.log(0 ?? 5);",
    options: ["0", "5", "null", "undefined"],
    correct: 0,
},
{
    question: "Next.js: Which folder defines routes?",
    options: ["components", "routes", "pages", "src"],
    correct: 2,
},
{
    question: "What is output?\nconsole.log(typeof (null + 1));",
    options: ["number", "object", "string", "undefined"],
    correct: 0,
},
{
    question: "What is output?\nconsole.log([] + {});",
    options: ["[object Object]", "{}", "0", "Error"],
    correct: 0,
},
{
    question: "Node.js: Which method starts server?",
    options: ["app.run()", "server.listen()", "start()", "app.start()"],
    correct: 1,
},
{
    question: "What is output?\nlet x=10; (function(){console.log(x); let x=20})();",
    options: ["10", "20", "undefined", "Error"],
    correct: 3,
},
{
    question: "React: What triggers useEffect without dependency?",
    options: ["Once", "Never", "Every render", "On click"],
    correct: 2,
},
{
    question: "What is output?\nconsole.log(typeof NaN === 'number');",
    options: ["true", "false", "Error", "NaN"],
    correct: 0,
},
{
    question: "TypeScript: Which is strict type?",
    options: ["any", "unknown", "never", "void"],
    correct: 1,
},
{
    question: "What is output?\nconsole.log([1,2,3].reduce((a,b)=>a+b));",
    options: ["6", "123", "NaN", "Error"],
    correct: 0,
},
{
    question: "Next.js: Which method fetches data server-side?",
    options: ["useEffect", "getServerSideProps", "fetchData", "serverFetch"],
    correct: 1,
},
{
    question: "What is output?\nconsole.log(typeof (class A{}));",
    options: ["object", "function", "class", "undefined"],
    correct: 1,
},
{
    question: "Node.js: Which is non-blocking?",
    options: ["readFileSync", "readFile", "writeFileSync", "execSync"],
    correct: 1,
},
{
    question: "What is output?\nconsole.log(1 + true + '2');",
    options: ["4", "22", "32", "Error"],
    correct: 1,
},
{
    question: "React: Which hook memoizes value?",
    options: ["useMemo", "useState", "useEffect", "useRef"],
    correct: 0,
},
{
    question: "What is output?\nconsole.log('5' * '2' + '1');",
    options: ["11", "51", "101", "Error"],
    correct: 0,
},
{
    question: "TypeScript: Interface is used for?",
    options: ["Loop", "Type structure", "Math", "DOM"],
    correct: 1,
},
{
    question: "What is output?\nconsole.log(typeof undefined == typeof null);",
    options: ["true", "false", "Error", "NaN"],
    correct: 1,
},
{
    question: "Node.js: Which framework is popular?",
    options: ["Laravel", "Express", "Django", "Spring"],
    correct: 1,
},
{
    question: "What is output?\nconsole.log(3**3**1);",
    options: ["9", "27", "81", "Error"],
    correct: 1,
},
{
    question: "React: useRef persists across?",
    options: ["Reload", "Render", "State change", "Mount"],
    correct: 1,
},
{
    question: "What is output?\nconsole.log(typeof (()=>{}));",
    options: ["function", "object", "arrow", "undefined"],
    correct: 0,
},
{
    question: "Next.js: Static generation method?",
    options: ["getStaticProps", "useStatic", "fetchStatic", "getServerProps"],
    correct: 0,
},
{
    question: "What is output?\nconsole.log(!!'0');",
    options: ["true", "false", "0", "Error"],
    correct: 0,
},
{
    question: "TypeScript: Tuple means?",
    options: ["Dynamic array", "Fixed types array", "Object", "String"],
    correct: 1,
},
{
    question: "What is output?\nconsole.log([...'abc'].length);",
    options: ["1", "2", "3", "Error"],
    correct: 2,
},
{
    question: "Node.js: Which handles routing?",
    options: ["fs", "http", "express.Router()", "url"],
    correct: 2,
},
{
    question: "What is output?\nconsole.log(1 + '1' - 1);",
    options: ["0", "10", "1", "Error"],
    correct: 2,
},
{
    question: "React: Which avoids re-render?",
    options: ["memo", "state", "effect", "context"],
    correct: 0,
},
{
    question: "What is output?\nconsole.log(typeof BigInt(10));",
    options: ["bigint", "number", "object", "undefined"],
    correct: 0,
},
{
    question: "TypeScript: readonly means?",
    options: ["Mutable", "Immutable", "Optional", "Any"],
    correct: 1,
},
{
    question: "Next.js: API route folder?",
    options: ["api", "routes", "server", "backend"],
    correct: 0,
},
{
    question: "What is output?\nconsole.log(Math.imul(2,3));",
    options: ["5", "6", "8", "Error"],
    correct: 1,
},
{
    question: "Node.js: Global object?",
    options: ["window", "global", "process", "root"],
    correct: 1,
},
{
    question: "What is output?\nconsole.log(Number.MAX_SAFE_INTEGER > Number.MAX_VALUE);",
    options: ["true", "false", "NaN", "Error"],
    correct: 1,
},
{
    question: "React: StrictMode does?",
    options: ["Optimize", "Detect issues", "Speed up", "Cache"],
    correct: 1,
},
{
    question: "What is output?\nconsole.log('a'<'b'<'c');",
    options: ["true", "false", "NaN", "Error"],
    correct: 0,
},
{
    question: "TypeScript: enum is?",
    options: ["Object", "Constant set", "Function", "Class"],
    correct: 1,
},
{
    question: "Node.js: Event loop handles?",
    options: ["UI", "Async tasks", "DOM", "CSS"],
    correct: 1,
},
{
    question: "What is output?\nconsole.log(typeof Symbol());",
    options: ["symbol", "object", "string", "undefined"],
    correct: 0,
},
{
    question: "React: key prop helps?",
    options: ["Style", "Performance list diff", "State", "Hook"],
    correct: 1,
},
{
    question: "What is output?\nconsole.log(0.1+0.2==0.3);",
    options: ["true", "false", "NaN", "Error"],
    correct: 1,
},
{
    question: "What is output?\nconsole.log([] + [] + '1');",
    options: ["1", "01", "NaN", "Error"],
    correct: 0,
},
{
    question: "What is output?\nsetTimeout(()=>console.log(1),0); console.log(2);",
    options: ["1 2", "2 1", "1", "2"],
    correct: 1,
},
{
    question: "Node.js: Which object gives env variables?",
    options: ["global.env", "process.env", "env", "system.env"],
    correct: 1,
},
{
    question: "What is output?\nconsole.log(typeof (await Promise.resolve(5)));",
    options: ["number", "promise", "object", "undefined"],
    correct: 0,
},
{
    question: "React: useCallback returns?",
    options: ["Value", "Memoized function", "Object", "Hook"],
    correct: 1,
},
{
    question: "What is output?\nconsole.log([1,2,3] + 4);",
    options: ["1234", "1,2,34", "NaN", "Error"],
    correct: 1,
},
{
    question: "TypeScript: keyof returns?",
    options: ["Values", "Keys union", "Object", "Array"],
    correct: 1,
},
{
    question: "What is output?\nconsole.log((()=>{}) instanceof Function);",
    options: ["true", "false", "Error", "NaN"],
    correct: 0,
},
{
    question: "Next.js: Middleware runs on?",
    options: ["Client", "Server edge", "Browser", "DB"],
    correct: 1,
},
{
    question: "What is output?\nconsole.log(3 + 4 + '5' + 6);",
    options: ["75 6", "3456", "756", "Error"],
    correct: 2,
},
{
    question: "Node.js: Which is stream readable?",
    options: ["fs.createReadStream", "fs.readFile", "readSync", "open"],
    correct: 0,
},
{
    question: "What is output?\nconsole.log(typeof new Date());",
    options: ["date", "object", "string", "number"],
    correct: 1,
},
{
    question: "React: useLayoutEffect runs?",
    options: ["After paint", "Before paint", "Async", "Never"],
    correct: 1,
},
{
    question: "What is output?\nconsole.log(parseFloat('10.5px'));",
    options: ["10", "10.5", "NaN", "Error"],
    correct: 1,
},
{
    question: "TypeScript: Partial<T> makes?",
    options: ["Required", "Optional", "Readonly", "Mutable"],
    correct: 1,
},
{
    question: "What is output?\nconsole.log(Object.is(NaN, NaN));",
    options: ["true", "false", "Error", "undefined"],
    correct: 0,
},
{
    question: "Node.js: Which runs child process?",
    options: ["child.exec", "process.run", "spawn", "thread"],
    correct: 2,
},
{
    question: "What is output?\nconsole.log(1n + 1n);",
    options: ["2", "2n", "NaN", "Error"],
    correct: 1,
},
{
    question: "React: Suspense used for?",
    options: ["State", "Lazy loading", "Style", "Context"],
    correct: 1,
},
{
    question: "What is output?\nconsole.log(Boolean(NaN));",
    options: ["true", "false", "NaN", "Error"],
    correct: 1,
},
{
    question: "TypeScript: Record<K,T> creates?",
    options: ["Array", "Mapped object", "Tuple", "Enum"],
    correct: 1,
},
{
    question: "What is output?\nconsole.log(Math.clz32(1));",
    options: ["31", "32", "30", "Error"],
    correct: 0,
},
{
    question: "Node.js: Which handles buffer?",
    options: ["Buffer", "Stream", "Chunk", "Data"],
    correct: 0,
},
{
    question: "What is output?\nconsole.log('5' * true);",
    options: ["5", "NaN", "true5", "Error"],
    correct: 0,
},
{
    question: "React: Fragment syntax?",
    options: ["<Fragment>", "<></>", "<React.Fragment>", "All"],
    correct: 3,
},
{
    question: "What is output?\nconsole.log(Number.isNaN('NaN'));",
    options: ["true", "false", "NaN", "Error"],
    correct: 1,
},
{
    question: "TypeScript: as const does?",
    options: ["Freeze literal", "Convert", "Type any", "Optional"],
    correct: 0,
},
{
    question: "What is output?\nconsole.log(2 ** 3 ** 2);",
    options: ["512", "64", "256", "Error"],
    correct: 0,
},
{
    question: "Node.js: cluster used for?",
    options: ["Threads", "Multi-core scaling", "DB", "Routing"],
    correct: 1,
},
{
    question: "What is output?\nconsole.log([1,,3].length);",
    options: ["2", "3", "1", "Error"],
    correct: 1,
},
{
    question: "React: reconciliation compares?",
    options: ["State", "Virtual DOM", "Props only", "Hooks"],
    correct: 1,
},
{
    question: "What is output?\nconsole.log('foo' + + 'bar');",
    options: ["foobar", "fooNaN", "NaNfoo", "Error"],
    correct: 1,
},
{
    question: "TypeScript: unknown vs any?",
    options: ["Same", "unknown safer", "any safer", "None"],
    correct: 1,
},
{
    question: "What is output?\nconsole.log(Object.keys({a:1,b:2}).length);",
    options: ["1", "2", "0", "Error"],
    correct: 1,
},
{
    question: "Node.js: worker_threads used for?",
    options: ["IO", "CPU parallel", "HTTP", "Stream"],
    correct: 1,
},
{
    question: "What is output?\nconsole.log(Math.hypot(3,4));",
    options: ["5", "7", "25", "Error"],
    correct: 0,
},
{
    question: "React: useId used for?",
    options: ["Unique id", "State", "Style", "Hook memo"],
    correct: 0,
},
{
    question: "What is output?\nconsole.log(+'0xF');",
    options: ["15", "0", "NaN", "Error"],
    correct: 0,
},
{
    question: "TypeScript: Omit<T,K> does?",
    options: ["Remove keys", "Add keys", "Readonly", "Optional"],
    correct: 0,
},
{
    question: "What is output?\nconsole.log('abc'.padStart(5,'0'));",
    options: ["00abc", "abc00", "0abc0", "Error"],
    correct: 0,
},
{
    question: "Node.js: Which stops server?",
    options: ["server.end()", "server.close()", "stop()", "shutdown()"],
    correct: 1,
},
{
    question: "What is output?\nconsole.log([1,2,3].map(x=>x*2)[1]);",
    options: ["2", "4", "6", "Error"],
    correct: 1,
},
{
    question: "React: batching means?",
    options: ["Merge updates", "Split render", "Async DOM", "Cache"],
    correct: 0,
},
{
    question: "What is output?\nconsole.log(1/Infinity);",
    options: ["0", "Infinity", "NaN", "Error"],
    correct: 0,
},
{
    question: "TypeScript: utility Pick<T,K>?",
    options: ["Select keys", "Remove keys", "Freeze", "Optional"],
    correct: 0,
},
{
    question: "What is output?\nconsole.log(Math.log10(100));",
    options: ["1", "2", "10", "Error"],
    correct: 1,
},
{
    question: "Node.js: __dirname gives?",
    options: ["File path", "Dir path", "Root", "Env"],
    correct: 1,
},
{
    question: "What is output?\nconsole.log(+'');",
    options: ["0", "NaN", "''", "Error"],
    correct: 0,
},
{
    question: "React: Concurrent mode improves?",
    options: ["Blocking", "UI responsiveness", "Memory", "State"],
    correct: 1,
},
{
    question: "What is output?\nconsole.log(typeof (await (async()=>42)()));",
    options: ["number", "promise", "object", "undefined"],
    correct: 0,
},
,
    {
        question: "What is a Promise in JavaScript?",
        options: ["Loop statement", "Object representing async operation result", "Function call", "Storage object"],
        correct: 1,
    },
    {
        question: "Which keyword declares async function?",
        options: ["async", "await", "promise", "callback"],
        correct: 0,
    },
    {
        question: "Which waits for promise resolution?",
        options: ["wait", "async", "await", "then"],
        correct: 2,
    },
    {
        question: "Which method used for API request?",
        options: ["get()", "fetch()", "call()", "request()"],
        correct: 1,
    },
    {
        question: "What is the output of typeof typeof 42?",
        options: ["number", "string", "undefined", "object"],
        correct: 1,
    },
    {
        question: "What does the spread operator (...) do?",
        options: ["Multiplies value", "Spreads array/object elements", "Comments code", "Defines range"],
        correct: 1,
    },
    {
        question: "What is destructuring in JavaScript?",
        options: ["Breaking code", "Extracting values from objects/arrays", "Deleting properties", "Creating copies"],
        correct: 1,
    },
    {
        question: "What is event bubbling?",
        options: ["Event moves down", "Event moves up DOM tree", "Event stays static", "Event repeats"],
        correct: 1,
    },
    {
        question: "What is callback hell?",
        options: ["Too many loops", "Deeply nested callbacks", "Errors in callback", "Missing callbacks"],
        correct: 1,
    },
    {
        question: "What does Object.freeze() do?",
        options: ["Delete object", "Prevents modification of object", "Copies object", "Clears object"],
        correct: 1,
    },
    {
        question: "What is .bind() used for?",
        options: ["Connect strings", "Bind context to function", "Join arrays", "Create events"],
        correct: 1,
    },
    {
        question: "What is difference between .call() and .apply()?",
        options: ["No difference", "call passes args as list, apply as array", "apply is older", "call is deprecated"],
        correct: 1,
    },
    {
        question: "What is WeakMap in JavaScript?",
        options: ["Regular map", "Map with weak object references", "Map with weak values", "Deprecated map"],
        correct: 1,
    },
    {
        question: "What does Array.from() do?",
        options: ["Creates array from string", "Converts iterable to array", "Sorts arrays", "Filters arrays"],
        correct: 1,
    },
    {
        question: "What is memoization?",
        options: ["Memory storage", "Caching function results", "Forgetting data", "Deleting cache"],
        correct: 1,
    },
    {
        question: "What is currying in JavaScript?",
        options: ["Converting food data", "Function returning function with partial arguments", "Creating arrays", "String manipulation"],
        correct: 1,
    },
    {
        question: "What does Object.create() do?",
        options: ["Adds object", "Creates object with specified prototype", "Copies object", "Deletes values"],
        correct: 1,
    },
    {
        question: "What is the event loop?",
        options: ["Repeating code", "Mechanism handling async operations", "Loop statement", "Callback storage"],
        correct: 1,
    },
    {
        question: "What is the difference between map() and forEach()?",
        options: ["No difference", "map returns array, forEach returns undefined", "forEach is faster", "map modifies original"],
        correct: 1,
    },
    {
        question: "What does reduce() do?",
        options: ["Removes elements", "Reduces array to single value", "Sorts array", "Filters elements"],
        correct: 1,
    },
    {
        question: "What is the difference between null and undefined?",
        options: ["Same thing", "null is explicit empty, undefined is implicit", "undefined is older", "They're interchangeable"],
        correct: 1,
    },
    {
        question: "What is a Generator function?",
        options: ["Random number creator", "Function that can pause and resume", "Loop creator", "Error handler"],
        correct: 1,
    },
    {
        question: "What is Symbol in JavaScript?",
        options: ["Math symbol", "Unique identifier primitive", "Operator", "String type"],
        correct: 1,
    },
    {
        question: "What is the purpose of Object.keys()?",
        options: ["Encode data", "Gets enumerable property names", "Deletes properties", "Creates new object"],
        correct: 1,
    },
    {
        question: "What does .some() method do?",
        options: ["Gets some elements", "Tests if any element passes test", "Filters array", "Counts elements"],
        correct: 1,
    },
    {
        question: "What is a Proxy in JavaScript?",
        options: ["Connection tool", "Object trap for customization", "Network protocol", "Function wrapper"],
        correct: 1,
    },
];

// COMBINED ALL QUESTIONS 
const quizQuestion = [...easyQuestions, ...mediumQuestions, ...hardQuestions];

export default quizQuestion;
export { easyQuestions, mediumQuestions, hardQuestions };