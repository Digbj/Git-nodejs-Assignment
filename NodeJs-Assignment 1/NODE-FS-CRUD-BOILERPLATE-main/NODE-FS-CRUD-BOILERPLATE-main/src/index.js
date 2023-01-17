const fs = require('fs/promises')
const os = require("os");

const myFileWriter = async (fileName, fileContent) => {
	// write code here
	// dont chnage function name
	await fs.writeFile(fileName, fileContent, (err) => {
    console.log(err);
})
}

const myFileReader = async (fileName) => {
	// write code here
	// dont chnage function name	
		const data=await fs.readFile(fileName,'utf-8');
		console.log(data)
}

const myFileUpdater = async (fileName, fileContent) => {
	// write code here
	// dont chnage function name
	await fs.appendFile(fileName, fileContent, (issue) => {
    console.log(issue);
})
}

const myFileDeleter = async (fileName) => {
	// write code here
	// dont chnage function name
	await fs.unlink(fileName, (err) => {
		    console.log(err);
		})
}

// let name="hello.txt";
// let conten="hello world"
// myFileWriter(name,conten);
// let fileName="D:\\program\\NodeJs\\NodeJs-Assignment 1\\NODE-FS-CRUD-BOILERPLATE-main\\NODE-FS-CRUD-BOILERPLATE-main\\src\\hello.txt";
// myFileReader(fileName)
// let n='Test.txt';
// let m="\n This is just for demo";
// myFileUpdater(n,m)
// let file='D:\\program\\NodeJs\\NodeJs-Assignment 1\\NODE-FS-CRUD-BOILERPLATE-main\\NODE-FS-CRUD-BOILERPLATE-main\\src\\File.txt';
// myFileDeleter(file);

module.exports ={myFileWriter,myFileReader,myFileUpdater,myFileDeleter} ;