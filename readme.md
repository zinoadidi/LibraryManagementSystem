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
the commits are with story numbers and the messeages try to reflect the reason for the commit rather than what is in the commit. I have also written the task to follow the stories as they develop, 
making just enough room for extending existing functionality when needed in the future as i complete the stories.<br/>

Below, information about decisions for each story on completion


#### Story 1: User can view books in library
- model/User.js: Here i have created a simple user class with a name and id fields since the story doesnt really tell what kind of details the user should have, i have made a detachable user that can be easily replaced with a proper one when needed. 
- model/Library.js I have made a flexible library class which can also take an array of book object to ensure that book can be defined elsewhere and plugged into the flow also.

Since the story only talked about viewing the books, i added a method to return the books in the array, no support for modifying the array of books yet as its not needed at this stage.

- App.js: here i have implemented the logic to view the books using the library. I have also decided that user object should be present to use the App class as there are no use cases without a user.

#### Story 2: User can borrow book from the library
Since the story doesnt cares about the user mainly and doesnt require tracking the books from the library perspective,
I have not added a way to track the books from library end. The book is handed to the user and simply forgotten by the library.
<br/>
Ways to make the data of the borrowed book available to the library after the user takes it out includes:
- tracking the borrowed books in an array in the library also. Example: ```library.registerBorrowedBook(book, user)```
<br/>
It is also possible to maintain just one list on the library for available books and borrowed books; this way all users will depend on the library to find their books which can cause an overhead of requiring the user to be present in the library at all times / each user keeping a copy of the library :)  to gain access to their borrowed books.
