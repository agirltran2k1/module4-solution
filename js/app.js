// Immediately Invoked Function Expression
// IIFE
(function() {
    // body...
    var names = ["Janna", "Tina", "John", "Jame", "Angela", "Cruela"];

    for (var i = 0; i < names.length; i++) {
        var firstName = names[i].charAt(0);

        if(firstName != "J")
        {
        	hello.sayHello(names[i]);
        }
        else {
        	goodbye.sayGoodbye(names[i]);
        }
    }

})();