import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';



Template.header.helpers({
  displayWelcome(title) {
    return title ;
  }
});
