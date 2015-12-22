if (!(typeof MochaWeb === 'undefined')){
  MochaWeb.testOnly(function(){
    describe("Server initialization", function(){
      it("should insert events into the database after server start", function(){
        chai.assert(Events.find().count() > 0);
      });
    });

    describe("Database contains data for different APIs", function(){
      it("should contain data from Eventbrite", function(){
        chai.assert(Events.find({company_name: 'Eventbrite'}).count() > 0);
      });

      it("should contain data from Eventful", function(){
        chai.assert(Events.find({company_name: 'Eventful'}).count() > 0);
      });

      it("should contain data from Meetup", function(){
        chai.assert(Events.find({company_name: 'Meetup'}).count() > 0);
      });

      // it("should contain data from Seattle Stranger", function(){
      //   chai.assert(Events.find({company_name: 'Seattle Stranger'}).count() > 0);
      // });
    });

  });
}
