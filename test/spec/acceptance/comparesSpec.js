describe("Compares", function() {
  
  beforeEach(function() {
    
  });

  approveIt("should approve object", function(approvals) {
    var object = {};
    object.id = 100;
    object.name = "testObject";
    object.href = "http://url.com/test.txt";
    approvals.verify(object);
  });

  approveIt("should not be same as approved", function(approvals) {
    var object = {};
    object.id = 100;
    object.name = "testObject";
    object.href = "http://url.com/test.txt";
    approvals.verify(object);
  });

  approveIt("should have no approved output yet", function(approvals) {
    var object = {};
    object.id = 100;
    object.name = "testObject";
    object.href = "http://url.com/test.txt";
    approvals.verify(object);
  });

});

 