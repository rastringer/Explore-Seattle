Meteor.publish('eventData', function(userCategories, dateInfo ){
  console.log("Date info is" + dateInfo);

  if(userCategories.length > 1){
    console.log("Categories are " + userCategories[0] + " and " + userCategories[1]);


  return  Events.find({
    $and:[{date:dateInfo},{$or: [ { category: userCategories[0]},{ category: userCategories[1]}]}]});
  }

  if(userCategories.length == 1){
    console.log("Categories are " + userCategories[0]);
    return Events.find({
      $and:[
          {date:dateInfo}, {category:userCategories[0]}]});

  }
});
