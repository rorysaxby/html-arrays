(function(){
    
    /***************************
    - HTML Array Generator 
    ****************************/

    var htmlArray = function(obj){
        this.array = obj.array;
        this.callback = obj.callback;
        
        this.html = '<' + this.array[0] + '>';
        this.openElements = [this.array[0]];

        this.inspectArray(this.array);
    };

    htmlArray.prototype.inspectArray = function(array){
        if(this.array.length > 1){
            for(var i = 1; i < this.array.length; i++){
                this.checkType(this.array[i]);
            };
        } else{
            this.addCloseElement();
        };
    };

    htmlArray.prototype.checkType = function(item){
        var type = typeof item;
        
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