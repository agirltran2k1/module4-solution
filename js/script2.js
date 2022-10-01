(function(window) {
    var goodbye = {};
    var bye = "Goodbye ";
    goodbye.sayGoodbye = function(name) {
        console.log(bye + name);
    }

    window.goodbye = goodbye;
})(window);