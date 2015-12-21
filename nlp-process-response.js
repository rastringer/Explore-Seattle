var recommend = function (text) {
  var scores = {
  music : 0,
  movie : 0,
  family: 0,
  outdoors: 0,
  nightlife: 0,
  }

  var musicTokens = new RegExp("^(rock|jazz|grunge|classical|band|bands|concert|performance)$");
  var movieTokens = new RegExp("^(cinema|film|movie|Hollywood|blockbuster|actor|entertainment|actress|star)$");
  var familyTokens = new RegExp("^(family|fun|children|child|parents|married|park|performance|play|pantomime|entertainer|stories)$");
  var outdoorsTokens = new RegExp("^(|nature|hike|hiking|walk|fish|camp|trekking|mountain|ski|snowboard)$");
  var nightlifeTokens = new RegExp("^(bar|club|DJ|party|disco|drugs|drunk|high|cocktail)$");

  var tokenize = function (text) {
         text = text.toLowerCase().replace(/\W/g, ' ').replace(/\s+/g, ' ').trim().split(' ');

     for (var i = 0; i < text.length; i++) {
           if (text[i].match(musicTokens)) {
             scores.music++;
           }
           if (text[i].match(movieTokens)) {
             scores.movie++;
           }
            if (text[i].match(familyTokens)) {
             scores.family++;
           }
            if (text[i].match(outdoorsTokens)) {
             scores.family++;
           }
            if (text[i].match(nightlifeTokens)) {
             scores.nightlife++;
           }
         }
     return text;
     };
     tokenize (text);

  var winner = "";
  var count = 0;

  for(var prop in scores){
    if (scores[prop] > count){
      count = scores[prop];
      winner = prop;
    }

    if(scores[prop] == count && winner.indexOf(prop)){
      winner = winner + "," + prop;
    }
  }

  return "Here are some " + winner + " activities and events suggestions: "

}

//console.log(recommend(text));
if (Meteor.isClient) {

    Template.body.events ({
      "submit .recommendedText": function (event) {
         //Prevent default browser form submit
        event.preventDefault();

        // Get value from form element
         var text  = event.target.text.value;


        //Meteor.subscribe("textFromUser", text);
        // Clear form
        event.target.text.value = "";
       var result = recommend(text)
       return result;
      }
    });

  Template.body.helpers({

  });
}

if (Meteor.isServer) {

    Meteor.publish('textFromUser', function(text){
    return {text: "bubub"}


  });

}
