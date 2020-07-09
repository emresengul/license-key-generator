class Generator{
    constructor(options){
        if(options){
            this.type = options.type || "random";
            this.length = options.length || 16;
            this.group = options.group || 4;
            this.splitStatus = options.splitStatus==false?false:true;
            this.splitItem = options.split || "-";
        }else{
            this.type = "random";
            this.length =  16;
            this.group =  4;
            this.splitStatus = true;
            this.splitItem = "-";
        }
    }
    async get(callback){
        let err = null;
        let code = null;
        if(typeof this.length !== "number")  err = this.createError("the length must be number");
        if(this.length <=0) err = this.createError("length must be greater than 0")
        if(this.splitStatus){
            if(typeof this.group !== "number")  err = this.createError("the group must be number")
            if(this.group <=0) err = this.createError("group must be greater than 0")
        }
        if( !err &&(this.type === "random" || this.type === "number" || this.type === "letter")) {
            try{
                code = await this.random(this.type,this.length,this.group);
            }
            catch(error){
                err.status = false;
                err.message = error.message;
            }
            if (typeof code !== "string") err = this.createError("Failed to generate Random code")
        }
        else{
            if(!err) err = this.createError("type must be number, letter or random")
        }
        callback(err,code)
    }
    createError(message){
        return {status: false,message:message}
    }
    random(type,length,group){
        let list = [];
        if(type == "number") list = [0,1,2,3,4,5,6,7,8,9];
        if(type == "letter") list = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
        if(type == "random") list = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",0,1,2,3,4,5,6,7,8,9];
        let random = "";
        for (let x = 0; x < length; x++){
            const item = list[Math.floor(Math.random() * list.length)];
            random += item;
        }
        if(this.splitStatus){
            random = this.split(random,group)
        }
        return random;
    }
    split(code,group){
        let splitItem = this.splitItem;
        const array = [...code.replace('', '')]
        if(group >= array.length) return code;
        const mod = array.length%group;
        const pane = parseInt(array.length/group);
        let total = 0;
        for(let x = 1; x <= pane; x++){
            total = x*group;
            if(total != array.length) array[total-1] += splitItem
        } 
        let result = "";
        array.forEach(element => {
            result +=element;
        });
        return result
    }
}
module.exports = Generator;