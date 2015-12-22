//front end finder of events based on categories
categoryBuild = function(searchText){
  var categoryArray = recommend(searchText);
  return categoryArray
};



//frontend displayer for
categoryDisplayer = function(categories){
var eventType = "";

  if (categories.length > 1){
    eventType = categories.join(" and");
  }

  if (categories.length == 1){
    eventType = categories[1];
  }

  return "Here are some " + eventType + " activities and events suggestions: "
};
