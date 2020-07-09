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
code.get((error,code)=>{
    if(error) return console.error(error)
    console.log("code=",code);
})

CONSOLE: 8TBY-B44M-UXXG-U0QC
````
# OPTIONS
| type                     |   length    |       group |   split |   splitStatus |
| ------------------------ | :---------: | ----------: | ------: | ------------: |
| number, random or letter | 1-NON-LIMIT | 1-NON-LIMIT | charset | true or false |

# ERRORS
| status |    message    |
| ------ | :-----------: |
| false  | Error Message |
````
error parameters is object. 
Example :
{
    status: false,
    message: "group must be greater than 0"
}
````
