describe("Converters", function() {
  
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

  it("failing regular test", function() {
    var object = {};
    object.id = 100;
    object.name = "testObject";
    object.href = "http://url.com/test.txt";
    expect(object).toBe({"id":101,"name":"testObject","href":"http://url.com/test.txt"});
  });

  //regular test
  it("should convert number to int string", function() {
    var number = 10.3;
    var integerString = "" + Math.floor(number);
    expect(integerString).toEqual("10");
  });
});

 