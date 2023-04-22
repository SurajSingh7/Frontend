// node tree.js
const fs = require("fs");
const path = require("path");

function treeFn(srcPath) {
  if (srcPath == undefined) {
    console.log("Please Enter a Valid Path");
    return;
  }
  let doesExist = fs.existsSync(srcPath);
  if (doesExist == true) {
    treehelper(srcPath, " ");
  }
}

function treehelper(srcPath, indent) {
    let isFile = fs.lstatSync(srcPath).isFile();

    if (isFile == true) {
        let fileName = path.basename(srcPath);
        console.log(indent + "├── " + fileName);
        return;
    }
    let dirName = path.basename(srcPath);
    console.log(indent + "└──" + dirName);

    let children = fs.readdirSync(srcPath);

    for (let i = 0; i < children.length; i++) {
      let childpath = path.join(srcPath, children[i]);
      treehelper(childpath, indent +"      ");
    }
}

module.exports = {
  tree: treeFn,
};

// let srcPath="D:/full stack wd/fjp-1/FileOrganizer";
// treeFn(srcPath);