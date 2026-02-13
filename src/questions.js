const quizQuestion = [
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
        question: "Which data type is NOT in JavaScript?",
        options: ["String", "Boolean", "Float", "Number"],
        correct: 2,
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
        question: "Which operator is used for strict equality?",
        options: ["==", "===", "!=", "="],
        correct: 1,
    },
    {
        question: "Which loop runs at least once?",
        options: ["for", "while", "do-while", "foreach"],
        correct: 2,
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
        question: "Which keyword is block scoped?",
        options: ["var", "let", "function", "global"],
        correct: 1,
    },
    {
        question: "NaN stands for?",
        options: ["No assigned number", "Not a Number", "New and Null", "Null and Number"],
        correct: 1,
    },
    {
        question: "Which operator is used for exponent?",
        options: ["^", "**", "^^", "pow"],
        correct: 1,
    },
    {
        question: "Which event occurs when user clicks?",
        options: ["onhover", "onclick", "onpress", "onchange"],
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
        options: ["End of function", "Function inside function with access outer variable", "Loop break", "Object property"],
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
        question: "Which keyword defines constant?",
        options: ["let", "const", "var", "fixed"],
        correct: 1,
    },
    {
        question: "Which function delays execution?",
        options: ["delay()", "setTimeout()", "wait()", "sleep()"],
        correct: 1,
    },
    {
        question: "Which repeats execution?",
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
        question: "How to write object?",
        options: ["var a=[]", "var a={}", "var a=()", "var a=<>"],
        correct: 1,
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
        question: "Which method joins array?",
        options: ["concat()", "join()", "merge()", "combine()"],
        correct: 1,
    },
    {
        question: "Which checks value and type?",
        options: ["==", "===", "!=", "="],
        correct: 1,
    },
    {
        question: "What is hoisting?",
        options: ["Variable moved to top", "Loop skip", "Function delete", "Memory clear"],
        correct: 0,
    },
    {
        question: "Which keyword returns value?",
        options: ["break", "return", "exit", "stop"],
        correct: 1,
    },
    {
        question: "Which keyword handles error?",
        options: ["try-catch", "error", "fix", "catch-error"],
        correct: 0,
    },
    {
        question: "What is Promise?",
        options: ["Loop", "Async result object", "Function call", "Variable"],
        correct: 1,
    },
    {
        question: "Which keyword for async function?",
        options: ["async", "wait", "delay", "promise"],
        correct: 0,
    },
    {
        question: "Which waits for promise?",
        options: ["wait", "async", "await", "then"],
        correct: 2,
    },
    {
        question: "Which method used for API request?",
        options: ["get()", "fetch()", "call()", "request()"],
        correct: 1,
    },
    {
        question: "Which storage stores permanently?",
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
        question: "Which loop used for array?",
        options: ["for", "while", "forEach", "do"],
        correct: 2,
    },
    {
        question: "Which method filters array?",
        options: ["map()", "filter()", "reduce()", "slice()"],
        correct: 1,
    },
    {
        question: "Which method transforms array?",
        options: ["map()", "filter()", "find()", "some()"],
        correct: 0,
    },
    {
        question: "Which finds first match?",
        options: ["find()", "search()", "match()", "filter()"],
        correct: 0,
    },
];

export default quizQuestion;