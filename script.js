(function(){
    
    /***************************
    - HTML Array Generator 
    ****************************/

    var htmlArray = function(obj){

    };

    /**************************
    - HTML Array demo 
    ***************************/

    var htmlArrayDemo = {};

    htmlArrayDemo.getHtmlString = function(){
        var demoString = new htmlArray({
            array:['div'],
            callbackFn: htmlArrayDemo.displayString
        });
    };

    htmlArrayDemo.displayString = function(){
        
    };

    htmlArrayDemo.init = function(){
        htmlArrayDemo.target = document.getElementsByClassName('html-output');
    }();

})();