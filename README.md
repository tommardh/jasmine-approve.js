jasmine-approve.js 
==================


This is a rough approval testing implementation for jasmine ment to run in the browser. I like the approval testing approach a lot
and when I started writing JavaScript i constantly wanted to assert json structures in my tests but i found no easy way to do approval testing style tests in the browser. So this is my first go at solving this. 

this solution needs a http server to serve files to the browser I use 
https://github.com/nodeapps/http-server for this purpose 
and start http-server from the project root


###Limitations
* The discribe description is not added to file names so it descriptions must be unique.
* since the approve files is downloaded by the browser you need to save them to the right folder (approvals) and remove eventual numbers added to the file name by the browser

###Test pattern

the patten for tests is like this
```javascript
 //approval test
approveIt("should approve object", function(approvals) {
    var object = {};
    object.id = 100;
    object.name = "testObject";
    object.href = "http://url.com/test.txt";
    approvals.verify(object);
  });
 ```
###Approve
* Output from failed tests are shown in line with a simple diff view
* Below the outputs from a failed test there is an "Approve recieved output" button that will download the output from the test as a file with name "test_description.approved.txt"
* Approved outputs needs to be saved to approvals folder (beware that browsers tend to add numbers to files if downloaded multiple times)

