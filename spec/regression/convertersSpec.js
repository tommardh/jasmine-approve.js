describe("Converters", function() {
  
  beforeEach(function() {
    
  });

  it("failing regular test", function() {
    var object = {};
    object.id = 100;
    object.name = "testObject";
    object.href = "http://url.com/test.txt";
    expect(object).toBe({"id":101,"name":"testObject","href":"http://url.com/test.txt"});
  });

  it("should convert number to int string", function() {
    var number = 10.3;
    var integerString = "" + Math.floor(number);
    expect(integerString).toEqual("10");
  });
});

 