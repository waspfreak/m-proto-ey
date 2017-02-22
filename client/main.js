import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

Router.route('/', {
    // options for the route
    template: 'home'
});

var employeeProfile = { "name": "Lisa Wiltz", "imageUrl": "../images/Lisa_Employee.jpg"};
var mobilityManagerProfile = { "name": "Hans Stinssen", "imageUrl": "../images/Hans_MobilityManager.jpg"};
var headMobilityProfile = { "name": "Emma Fort", "imageUrl": "../images/Emma_HeadOfMobility.jpg"};

Router.route('/dashboard', {data: employeeProfile});
Router.route('/dashboardMobilityManager', {data: employeeProfile});
Router.route('/loginEmployee');
Router.route('/loginMobility');
Router.route('/loginHeadMobility');
Router.route('/repatriationEmployee', {data: employeeProfile});
Router.route('/taskManager', {data: mobilityManagerProfile});
Router.route('/knowledgeCenter', {data: mobilityManagerProfile});
Router.route('/dashboardEmployeeOn', {data: employeeProfile});
Router.route('/dashboardModalUpload', {data: employeeProfile});

// Router.configure({
//     layoutTemplate: 'layout'
// });

import './main.html';

  WebFontConfig = {
     google: { families: [ "Bitter:400,700,400italic","Noto Sans:regular,italic,700,700italic"] }
   };
   (function() {
     var wf = document.createElement('script');
     wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
       '://ajax.googleapis.com/ajax/libs/webfont/1.4.7/webfont.js';
     wf.type = 'text/javascript';
     wf.async = 'true';
     var s = document.getElementsByTagName('script')[0];
     s.parentNode.insertBefore(wf, s);
     console.log("async fonts loaded", WebFontConfig);
   })();


Template.navLeft.helpers({
  item: [
    {text: 'Home', icon: 'home', link: '/dashboard'},
    {text: 'My Trips', icon: 'flight', link: ''},
    {text: 'Calendar', icon: 'today', link: ''},
    {text: 'Documents', icon: 'library_books', link: ''},
    {text: 'Tasks', icon: 'done_all', link: ''},
    {text: 'Resources', icon: 'local_library', link: ''},
   {text: 'Contacts', icon: 'phone', link: ''},
 ],
});



/**click add active class nav*/
   Template.nav.events({
       'click .ey-nav-link-bloc': function(event, template){

           // Remove the class 'active' from potentially current active link.
           var activeLink = template.find('.ey-nav-link-bloc')
           if(activeLink){
               activeLink.classList.remove('active')
           }

           // Add the class 'active' to the clicked link.
           event.currentTarget.classList.add('active')
       }
   });

/**click add active class nav*/
   Template.navMob.events({
       'click .ey-nav-link-bloc': function(event, template){

           // Remove the class 'active' from potentially current active link.
           var activeLink = template.find('.ey-nav-link-bloc')
           if(activeLink){
               activeLink.classList.remove('active')
           }
           // Add the class 'active' to the clicked link.
           event.currentTarget.classList.add('active')

       }
   })

   Template.dashboard.events({
       'click .ey-travel-card__btn': function(event, template){

           // Remove the class 'active' from potentially current active link.
           var activeLink = template.find('.overlay')
           if(activeLink){
               activeLink.classList.add('show');
               //console.log("ey-travel-card__btn");
           }
           // Add the class 'active' to the clicked link.
           event.currentTarget.classList.remove('show');


       }
   })
   Template.dashboard.events({
       'click .ey-travel-card__btn': function(event, template){

           // Remove the class 'active' from potentially current active link.
           var activeLink = template.find('.overlay')
           if(activeLink){
               activeLink.classList.add('show');
               //console.log("ey-travel-card__btn");
           }
           // Add the class 'active' to the clicked link.
           event.currentTarget.classList.remove('show');


       }
   })

/*Modal Mobilit Manager Dashboard*/
Template.dashboardMobilityManager.events({
    'click .my-task-btn': function(event, template){

        // Remove the class 'show' from potentially current show link.
        var activeLink = template.find('.overlay')
        if(activeLink){
            activeLink.classList.add('show');
        }
        // Add the class 'show' to the clicked link.
        event.currentTarget.classList.remove('show');

    }
})
Template.dashboardMobilityManager.events({
    'click .close': function(event, template){

        // Remove the class 'show' from potentially current show link.
        var activeLink = template.find('.overlay')
        if(activeLink){
            activeLink.classList.remove('show');
        }
        // Add the class 'show' to the clicked link.
        event.currentTarget.classList.add('hidden');

    }
})


   Template.modal.events({
       'click .modal-btn': function(event, template){

           // Remove the class 'show' from potentially current show link.
           var activeLink = template.find('.dni')
           if(activeLink){
               activeLink.classList.add('show');
           }
           // Add the class 'show' to the clicked link.
           event.currentTarget.classList.remove('show');

       }
   })

   Template.modal.events({
       'click .ey-primary-button': function(event, template){

           // Remove the class 'show' from potentially current show link.
           var activeLink = template.find('.modal-done')
           if(activeLink){
               activeLink.classList.add('show');
           }
           // Add the class 'show' to the clicked link.
           event.currentTarget.classList.remove('show');

       }
   })

   Template.modal.events({
       'click .btn-done': function(event, template){

           // Remove the class 'show' from potentially current show link.
           var activeLink = template.find('.overlay')
           if(activeLink){
               activeLink.classList.add('close');
           }
           // Add the class 'show' to the clicked link.
           event.currentTarget.classList.remove('close');

       }
   })

   Template.dashboard.events({
       'click .btn-done': function(event, template){

           // Remove the class 'show' from potentially current show link.
           var activeLink = template.find('.ey-employee-status-card__alert')
           if(activeLink){
               activeLink.classList.add('hidden');
           }
           // Add the class 'show' to the clicked link.
           event.currentTarget.classList.remove('hidden');

       }
   })

   Template.dashboard.events({
       'click .btn-done': function(event, template){

           // Remove the class 'show' from potentially current show link.
           var activeLink = template.find('.card-imi-1');
           var activeSecLink = template.find('.card-imi-2');
           var active3Link = template.find('.pending-before');
           var active4Link = template.find('.pending-after');
           if(activeLink){
               activeLink.classList.add('hidden');
               activeSecLink.classList.add('show');
               active3Link.classList.add('hidden');
               active4Link.classList.add('show');
           }
           // Add the class 'show' to the clicked link.
           event.currentTarget.classList.remove('hidden');

       }
   })



Template.home.created = function() {
  $('html, body').addClass('home');
};

   //  Template.loginEmployee.created = function() {
   //   $('html, body').addClass('loginEmployee');
   //   $('html, body').removeClass('home');
   // };

Template.dashboard.created = function() {
  $('html, body').addClass('dashboard');
  $('html, body').removeClass('home');
};

Template.dashboard.rendered = function() {
  var cardImmigrationTwo = template.find('.card-imi-2');
  cardImmigrationTwo.classList.add('hidden');
}


Template.dashboardMobilityManager.created = function() {
  $('html, body').addClass('dashboard');
  $('html, body').removeClass('home');
 };

 Template.loginMobility.created = function() {
  $('html, body').addClass('home');
  $('html, body').removeClass('dashboard');
};

Template.loginEmployee.created = function() {
 $('html, body').addClass('home');
 $('html, body').removeClass('dashboard');
};

Template.loginHeadMobility.created = function() {
 $('html, body').addClass('home');
 $('html, body').removeClass('dashboard');
};

Template.dashboardEmployeeOn.rendered = function() {
  $('.ey-card-travel-bar-tax').animate({
          marginLeft: '0'
      }, 1000);

  $('.ey-card-travel-bar-vat').animate({
          marginLeft: '0'
      }, 1000);
}
