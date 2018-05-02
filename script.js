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
        
        console.log(this.html);
    };

    htmlArray.prototype.inspectArray = function(array){
        if(this.array.length > 1){
            for(var i = 1; i < this.array.length; i++){
                this.checkType(this.array[i]);

                if(i + 1 == array.length){
                    this.addCloseElement();
                };
            };
        } else{
            this.addCloseElement();
        };
    };

    htmlArray.prototype.checkType = function(item){
        var type = typeof item;

        switch(type){
            case 'string':
                this.addString(item);
            break;
            case 'object':
                this.addOpenElement(item);
            break;
        };
    };

    htmlArray.prototype.addOpenElement = function(array){
        this.html = this.html + '<' + array[0] + '>';
        this.openElements.unshift(array[0]);
    };

    htmlArray.prototype.addCloseElement = function(){
        this.html = this.html + '</' + this.openElements[0] + '>';
        this.openElements.splice(0, 1);
    };


    /**************************
    - HTML Array demo 
    ***************************/

    var htmlArrayDemo = {};

    htmlArrayDemo.getHtmlString = function(){
        var demoString = new htmlArray({
            array:['div', 'test', ['h1', 'header']],
            callbackFn: htmlArrayDemo.displayString
        });
    };

    htmlArrayDemo.displayString = function(){

    };

    htmlArrayDemo.init = function(){
        htmlArrayDemo.target = document.getElementsByClassName('html-output');
        htmlArrayDemo.getHtmlString();
    }();

})();