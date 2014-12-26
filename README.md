jasmine-approve.js 0.0.00001
==================


This is a rough approval testing implementation for jasmine in the browser. I like the approval testing approach a lot
and when i started writing JavaScript i constantly wanted to assert json structures but i found no easy way to do 
approval testing in the browser. So this is my first go at solving this. 

this solution needs a http server to serve files to the browser I use 
https://github.com/nodeapps/http-server for this purpose 
and start http-server from the project root


Limitations
* Can´t handle assync test methods but assync calls can be done in beforeEach
* The discribe description is not added to file names so it descriptions must be uneque.
* since the approve files is downloaded by the browser you need to save them to the right folder (approvals) and remove eventual numbers added to the file name by the browser

Usage

the patten for tests is like this

 //approval test
  approveIt("should approve object", function() {
    var object = {};
    object.id = 100;
    object.name = "testObject";
    object.href = "http://url.com/test.txt";
    return object; //returned value is sent for approval
  });
  
approved outputs needs to be saved to approvals folder
