### RANDOM CODE GENERATOR (LICENSE CODE, GAME CODE, STEAM RANDOM CODE)
You can create any code for your service. Useful and very simple.

# Installation
```
npm install license-key-generator
```



# Usage
````
const Generator = require("license-key-generator");

const options = {
    type: "random", // default "random"
    length: 16, // default 16
    group: 4, // default 4
    split: "-", // default "-"
    splitStatus: true // default true
}
const code = new Generator(options);
code.get((err,code)=>{
    if(err) return console.error(err)
    console.log("code=",code);
})

CONSOLE :  2X3I-EQ9N-OILF-KA5U
````
# OPTIONS
| type                     |  length   |     group |   split |   splitStatus |
| ------------------------ | :-------: | --------: | ------: | ------------: |
| number, random or letter | NON-LIMIT | NON-LIMIT | charset | true or false |
