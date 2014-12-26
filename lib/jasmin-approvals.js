beforeEach(function(){
  jasmine.addMatchers({
    approve: function() {
    return {
      compare: function(actual, expected) {
        var result;
        var actualString = actual;
        var expectedString = expected;

        if(typeof actual !== "string"){
            actualString = jsonEncode(actual);
        }
        
        if(typeof expected !== "string"){
            expectedString = jsonEncode(expectedString);
        }
        result  = {pass:actualString===expectedString};
        result. message = "Result   = "+ actualString + "\nApproved = " +expectedString;
        return result;
      }
    };
    }
  });
});


function approveIt(description, test){
    function avoidCache(){
      return "?"+new Date().getTime();
    }
    it("(approval) " + description,function(done){
        var testOutput = test();
        var url = encodeURIComponent(description.split(" ").join("_"))+".approved.txt";
        var xmlhttp = new XMLHttpRequest();
        var approvedResult = '{"approval":"no approval file available"}';
        if(typeof testOutput !== "string"){
            testOutput = jsonEncode(testOutput);
        }
            xmlhttp.onreadystatechange = function(){
              if (xmlhttp.readyState===4) {
                if(xmlhttp.status === 200){
                      approvedResult = xmlhttp.responseText;
                }
                approvals[description] = {"approved" : approvedResult,
                                          "actual" : testOutput,
                                          "fileName" : url,
                                          "description":description};
                expect(testOutput).approve(approvedResult);
                done();
              }
            };
         xmlhttp.open("GET","approvals/" + url+ avoidCache(), true);
        xmlhttp.send();
    });

}




function setDiff(){
  
  function approve(description){
    var approval = approvals[description];
    var blob = new Blob([approval.actual], {type: "data:application/txt;charset=utf-8"});
    saveAs(blob, approval.fileName);
  }
  
  var $failedTests = $(".spec-detail.failed");
  _.forEach($failedTests,function($failedTest){
    var $resultMessage = $($failedTest).find(".result-message")[0];
    var description = $($failedTest).find("a").attr("title").split(" (approval) ")[1];
    var innerHTML = $resultMessage.innerHTML;
    var approvalDescriptions = Object.keys(approvals);
    
    if(description && !$($failedTest).hasClass("handled")){
      innerHTML = innerHTML.replace("Result   = ","");
      messageParts = innerHTML.split("\nApproved = ");
      //messageParts[1]=messageParts[1].replace("'.","");
      var diffArgs   = {
          source: messageParts[1],
          diff  : messageParts[0],
          lang  : "JavaScript"
        };
        $resultMessage.innerHTML= prettydiff(diffArgs)+"<br>"+"Result   = " + diffArgs.diff + "\nApproved = " + diffArgs.source;
        $($resultMessage).append("<button description='"+ description + "'>Approve</button>");
        $("button").attr("description",description).click(function(){
            approve(description);
        });

    }
    $($failedTest).addClass("handled");

  });
  setTimeout(setDiff,1000);
}
setTimeout(setDiff,1000);
var approvals = {};