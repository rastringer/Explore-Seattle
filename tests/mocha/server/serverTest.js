if (!(typeof MochaWeb === 'undefined')){
  MochaWeb.testOnly(function(){
    describe("Server initialization", function(){
      it("should insert events into the database after server start", function(){
        chai.assert(Events.find().count() > 0);
      });
    });
  });
}
