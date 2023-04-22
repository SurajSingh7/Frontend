// node organize.js

const fs = require("fs"); 
const path = require("path"); 
let types = {
    media: ["mp4", "mkv", "mp3","mov"],
    archives: ['zip', '7z', 'rar', 'tar', 'gz', 'ar', 'iso', "xz"],
    documents: ['docx', 'doc', 'pdf', 'xlsx', 'xls', 'odt', 'ods', 'odp', 'odg', 'odf', 'txt', 'ps', 'tex',"csv",'json'],
    app: ['exe', 'dmg', 'pkg', "deb","apk"],
    images: ['png','jpg','jpeg']
}

function organize(srcPath) {

  // 1. to check if srcPath is present
  // 2. to create a directory-> organized_files
  // 3. scan the entire srcPath(downloads folder in this case)
  // 4.trvaerse over all the files and classify them on the basis of their extension (.pdf , .mp3)
  //    1.1 get ext name
  //     1.2 get folder name from extension
  //     1.3 copy from src folder (srcPath) and paste in dest folder (folder_name e.g. document, media etc)



  //1. to check if srcPath is present
  if (srcPath == undefined) {
    //The process.cwd() method returns --> current working directory of the Node.js process.
    //console.log(srcPath); //undefined
    srcPath = process.cwd();
    // console.log("source path is ",srcPath);
  }

  //2. to create a directory-> organized_files
  // let organizedFiles = srcPath + "/" + "organized_files";
  let organizedFiles = path.join(srcPath, "Organized_Folder");
  //console.log("organized files folder path is ", organizedFiles);
  if (fs.existsSync(organizedFiles) == false) {
    //organizedfiles naam ka folder exist nhi krta to ek folder bana do warna rhne do
    fs.mkdirSync(organizedFiles);
  } else console.log("folder already exists");

  //3. scan the entire srcPath(doenloads folder in this case)
  //Reads the contents of the directory.-> basically reads the names of files present in directory
    let allFiles = fs.readdirSync(srcPath);
    // console.log(allFiles);

  //4.trvaerse over all the files and classify them on the basis of their extension (.pdf , .mp3)
    for (let i = 0; i < allFiles.length; i++){
      // let ext = allFiles[i].;
      //extname returns the extension of the file
      let fullPathOfFile = path.join(srcPath, allFiles[i]);
      //console.log(fullPathOfFile);
      //1. check if it is a file or folder
      //lstatsync gives the information regarding the link provided ,
      let isfile = fs.lstatSync(fullPathOfFile).isFile(); //true-> file hai to  or false-> agar folder h 
      // console.log(allFiles[i] + " is " + isThisAFile);
      if (isfile) {
        //1.1 get ext name
          let ext=path.extname(allFiles[i]).substring(1);   //issue for this type file  mk.jk.mp4 --> allFiles[i].split(".")
        //1.2 get folder name from extension
        let folderName = getFolderName(ext); //like get this -->archives
        // console.log(folderName);
        //  1.3 copy from src folder (srcPath) and paste in dest folder (folder_name e.g. document, media etc)
       copyFileToDest(srcPath, fullPathOfFile, folderName); //copy fullpathOfFile(like ../abc.zip) --> paste in archives(like archives/abc.zip)
      }
    }
}

function getFolderName(ext) {
  for (let key in types) {
    // console.log(key);
    for (let i = 0; i < types[key].length; i++) {
      if (types[key][i] == ext) {
        return key;
      }
    }
  }
  return "miscellaneous"
}


function copyFileToDest(srcPath, fullPathOfFile, folderName) {
  //1. folderName ka path banana h
  let destFolderPath = path.join(srcPath, "Organized_Folder", folderName); // .../downloads/organized_files/archives
  // console.log(des);
  //2 check folder if exists, if it does not, then make folder

  if (!fs.existsSync(destFolderPath)) {
    fs.mkdirSync(destFolderPath);
  }
  //3. copy file from src folder to dest folder

  // Returns the last portion of a path (like-abc.zip)
  let fileName = path.basename(fullPathOfFile); 
  let destFileName = path.join(destFolderPath, fileName);    
  
  fs.copyFileSync(fullPathOfFile, destFileName);
}

// let srcPath="D:/full stack wd/fjp-1/FileOrganizer/downloads";
// organize(srcPath);

module.exports={
  organize:organize
}