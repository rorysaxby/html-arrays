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

        this.callback(this.html);
    };

    htmlArray.prototype.inspectArray = function(array){
        if(array.length > 1){
            for(var i = 1; i < array.length; i++){
                this.checkType(array[i]);

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
                this.addOpenElement(item[0]);
                this.inspectArray(item);
            break;
        };
    };

    htmlArray.prototype.addOpenElement = function(item){
        this.html = this.html + '<' + item + '>';
        this.openElements.unshift(item);
    };

    htmlArray.prototype.addCloseElement = function(){
        this.html = this.html + '</' + this.openElements[0] + '>';
        this.openElements.splice(0, 1);
    };

    htmlArray.prototype.addString = function(string){
        var s1 = string.replace(/</gi, "&lt;"),
            s2 = s1.replace(/>/gi, "&gt;");
        this.html = this.html + s2;
    };


    /**************************
    - HTML Array demo 
    ***************************/

    var htmlArrayDemo = {};

    htmlArrayDemo.getHtmlString = function(){

        var exampleArray = ['div', 'test', ['h1', 'header', ['span', '<strong>more text</strong>']]];

        var demoString = new htmlArray({
            array: exampleArray,
            callback: htmlArrayDemo.displayString
        });
    };

    htmlArrayDemo.displayString = function(value){
        htmlArrayDemo.target[0].append(value);
    };

    htmlArrayDemo.init = function(){
        htmlArrayDemo.target = document.getElementsByClassName('html-output');
        htmlArrayDemo.getHtmlString();
    }();

})();