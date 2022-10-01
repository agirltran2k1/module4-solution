(function(window) {
    var hello = {};
    var greeting = "Hello ";
    hello.sayHello = function(name) {
        console.log(greeting + name);
    }

    window.hello = hello;
})(window);