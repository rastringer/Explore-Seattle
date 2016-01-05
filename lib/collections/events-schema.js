Events = new Mongo.Collection('events');

Schemas = {};

Schemas.Event = new SimpleSchema({
  name: {
    type: String,
    label: "Name",
    optional: true
  },
  description: {
    type: String,
    label: "Description",
    optional: true
  },
  time: {
    type: String,
    label: "Time",
    optional: true
  },
  date:{
    type: String,
    label: "Date",
    optional: true

  },
  address:{
    type: String,
    label: "Address",
    optional: true

  },
  url: {
    type: String,
    label: "Url",
    optional: true
  },
  city: {
    type: String,
    label:"City",
    optional: true
  },
  state: {
    type: String,
    label:"State",
    optional: true
  },
  zip:{
    type: String,
    label: "Zip",
    optional: true

  },
  company_name: {
    type: String,
    label: "Company_Name",
    optional: true
  },

  category:{
    type: [String],
    label: "Category",
    optional:true
  },
  venue_url:{
    type: String,
    label: 'Venue_Url',
    optional:true
  },
  price:{
    type: String,
    label:"Price",
    optional: true
  }
});

Events.attachSchema(Schemas.Event);
