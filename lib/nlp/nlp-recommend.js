
recommend = function (text) {
  var scores = {
    music: 0,
    movie: 0,
    family: 0,
    outdoors: 0,
    nightlife: 0,
    education: 0,
    sports: 0,
    arts: 0,
    theatre: 0
  };

  var winner = [];
  var count = 0;

  var musicTokens = new RegExp("^(rock|jazz|grunge|classical|band|bands|concert|performance)$");
  var movieTokens = new RegExp("^(cinema|film|movie|Hollywood|blockbuster|actor|entertainment|actress|star)$");
  var familyTokens = new RegExp("^(family|fun|children|child|parents|married|park|performance|play|pantomime|entertainer|stories)$");
  var outdoorsTokens = new RegExp("^(|nature|hike|hiking|walk|fish|camp|trekking|mountain|ski|snowboard)$");
  var nightlifeTokens = new RegExp("^(bar|club|DJ|party|disco|drugs|drunk|high|cocktail)$");
  var educationTokens = new RegExp("^(class|workshop|make|learn|skill|talk|)$");
  var sportsTokens = new RegExp("^(sport|yoga|crossfit|football|running|race|run|5K|10K|marathon|swim|swimming|martial|boxing|sports)$");
  var artsTokens = new RegExp("^(painting|exhibition|pottery|art|arts|museum|exhibition)$");
  var theatreTokens = new RegExp("^(play|show|musical|actors|theatre)$");

  tokenize = function (text) {
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
             scores.outdoors++;
           }
            if (text[i].match(nightlifeTokens)) {
             scores.nightlife++;
           }
           if (text[i].match(educationTokens)) {
             scores.education++;
           }
           if (text[i].match(sportsTokens)) {
             scores.sports++;
           }
           if (text[i].match(artsTokens)) {
             scores.arts++;
           }
           if (text[i].match(theatreTokens)) {
             scores.theatre++;
           }
         }
     return text;
     };

  tokenize (text);

  for(var prop in scores){
    if (scores[prop] > count){
      count = scores[prop];
    }
  }

  for (var prop in scores){
    if (scores[prop] >= count && count != 0){
      winner.push(prop);
    }
  }

  if (winner.length == 0)
  {
    winner.push("going out");
  }

  return winner;
};

