// node main.js tree "D:\full stack wd\fjp-1\FileOrganizer"
// node main.js organize "D:\full stack wd\fjp-1\FileOrganizer\downloads"
// node main.js help

// let helpFn=require("./help");
let orgFnc=require("./organize");
let treeFnc=require("./tree");
let arr=process.argv.slice(2);
let command=arr[0];
let path =arr[1];
console.log(path);

switch(command){
    case "tree" :
        treeFnc.tree(path);
        break;
    case "organize" :
        orgFnc.organize(path);
        break;
    // case "help" :
    //       helpFn.help();
    //     break;
    default :
     console.log("command not reorganized : ");
     break; 
}