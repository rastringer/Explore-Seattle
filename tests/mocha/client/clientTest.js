MochaWeb.testOnly(function(){
  describe("the home page", function(){
    it("shows the navigation tabs", function(){
      chai.assert.equal($("li.active").length, 3);
    })
  });

  describe("function returns correct event suggestions from entered text", function(){
    it("suggests family events", function(){
      var text = "I want to go out with my children to an amusement park";
      var results = recommend(text);
      chai.assert.equal(results, 'family');
    })

    it("suggests music events", function(){
      var text = "I want to go to a rock concert";
      var results = recommend(text);
      chai.assert.equal(results, 'music');
    })

    it("suggests movie events", function(){
      var text = "I want to watch a movie";
      var results = recommend(text);
      chai.assert.equal(results, 'movie');
    })

    it("suggests outdoors events", function(){
      var text = "I want to go on a hike on a mountain";
      var results = recommend(text);
      chai.assert.equal(results, 'outdoors');
    })

    it("suggests nightlife events", function(){
      var text = "I want to go to a bar and get some cocktails";
      var results = recommend(text);
      chai.assert.equal(results, 'nightlife');
    })

    it("suggests education events", function(){
      var text = "I need suggestions for a glass blowing workshop";
      var results = recommend(text);
      chai.assert.equal(results, 'education');
    })

    it("suggests sports events", function(){
      var text = "I need suggestions for going swimming";
      var results = recommend(text);
      chai.assert.equal(results, 'sports');
    })

    it("suggests arts events", function(){
      var text = "I need suggestions for pottery exhibition";
      var results = recommend(text);
      chai.assert.equal(results, 'arts');
    })

    it("suggests theatre events", function(){
      var text = "I need musical theatre suggestions";
      var results = recommend(text);
      chai.assert.equal(results, 'theatre');
    })

  });

  describe("categoryBuild", function(){
    it("returns category array when given text", function(){
      var text = "My family wants to have fun";
      var results = categoryBuild(text);
      chai.assert.equal(results, 'family');
    })
  })

});
