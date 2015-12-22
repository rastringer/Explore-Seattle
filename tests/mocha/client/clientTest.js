MochaWeb.testOnly(function(){
  describe("the home page", function(){
    it("shows the navigation tabs", function(){
      chai.assert.equal($("li.active").length, 3);
    })
  });
});
