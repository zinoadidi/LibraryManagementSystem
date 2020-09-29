## Library Management System

### Tools & Setup
Code is writen in ES6 and tested with jest (JS).<br/>
To use this app, you will be needing nodejs downloaded and installed.
https://nodejs.org/en/download/
<br/>
Once download & installation completes, navigate to project foler and run in terminal 
```npm install``` 
<br/> Once installation is complete you can run the tests by running ```npm test```
<br/> The test files are in test folder and can be modified at will.

### Structure
The overall structure of the code is User and Library classes in model folder are standalone to aid testing, scalability and separation of concerns.<br/>
The App.js uses the model classes to accomplish the stories given. I tried not to over engineer things ahead of when they are needed, thus keeping it simple.

### Development Sytle 

I have decided to use agile method and treated the stories / tasks as is.
the commits are with story numbers and i have written the task to follow the stories as they develop, 
making just enough room for extending existing functionality when needed in the future as i complete the stories.<br/>

Below, information about decisions for each story on completion


#### Story 1: User can view books in library
