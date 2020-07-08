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
    type: "number", // default "random"
    length: 25, // default 16
    group: 5, // default 4
    split: "-", // default "-"
    splitStatus: true // default true
}
const code = new Generator(options);
code.get((err,code)=>{
    if(err) return console.error(err)
    console.log("code=",code);
})
````
# OPTIONS
| type                     |  length   |     group |   split |   splitStatus |
| ------------------------ | :-------: | --------: | ------: | ------------: |
| number, random or letter | NON-LIMIT | NON-LIMIT | charset | true or false |
