describe("Converters", function() {
  
  beforeEach(function() {
    
  });

  //approval test
  approveIt("should approve object", function() {
    var object = {};
    object.id = 100;
    object.name = "testObject";
    object.href = "http://url.com/test.txt";
    return object;
  });

  //approval test
  approveIt("should not be approved yet", function() {
    var object = {};
    object.id = 100;
    object.name = "testObject";
    object.href = "http://url.com/test.txt";
    return object;
  });

  //regular test
  it("should convert number to int string", function() {
    var number = 10.3;
    var integerString = "" + Math.floor(number);
    expect(integerString).toEqual("10");
  });
});

 