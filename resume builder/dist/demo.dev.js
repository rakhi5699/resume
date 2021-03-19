"use strict";

$(document).ready(function () {
  $("#name").show();
  $("#education-info").hide();
  $("#objective-info").hide();
  $("#tskills-info").hide();
  $("#projects-info").hide();
  $("#activite-info").hide();
  $("#pskills-info").hide();
  $("#about-info").hide(); //names for slide

  $("#object-name").hide();
  $("#education-name").hide();
  $("#tskills-name").hide();
  $("#projects-name").hide();
  $("#activite-name").hide();
  $("#pskills-name").hide();
  $("#about-name").hide(); //career objective

  $("#objective").click(function () {
    $("#objective-info").show(3000);
    $("#about-info").hide(1000);
    $("#education-info").hide(1000);
    $("#tskills-info").hide(1000);
    $("#projects-info").hide(1000);
    $("#activite-info").hide(1000);
    $("#pskills-info").hide(1000);
    $(this).css('color', 'red'); //name hiding and showing

    $("#name").hide(1000); //it showing bcs objective clicked

    $("#object-name").show(3000);
    $("#education-name").hide(1000);
    $("#tskills-name").hide(1000);
    $("#projects-name").hide(1000);
    $("#activite-name").hide(1000);
    $("#pskills-name").hide(1000);
    $("#about-name").hide(1000);
  }); //education information

  $("#education").click(function () {
    $("#education-info").show(3000);
    $("#objective-info").hide(1000);
    $("#about-info").hide(1000);
    $("#tskills-info").hide(1000);
    $("#projects-info").hide(1000);
    $("#activite-info").hide(1000);
    $("#pskills-info").hide(1000);
    $(this).css('color', 'red'); //name hiding and showing

    $("#name").hide(1000);
    $("#object-name").hide(1000); //it showing bcs education clicked

    $("#education-name").show(3000);
    $("#tskills-name").hide(1000);
    $("#projects-name").hide(1000);
    $("#activite-name").hide(1000);
    $("#pskills-name").hide(1000);
    $("#about-name").hide(1000);
  }); //Technical skils info

  $("#tskills").click(function () {
    $("#tskills-info").show(3000);
    $("#education-info").hide(1000);
    $("#objective-info").hide(1000);
    $("#about-info").hide(1000);
    $("#projects-info").hide(1000);
    $("#activite-info").hide(1000);
    $("#pskills-info").hide(1000);
    $("#name").hide(1000);
    $(this).css('color', 'red'); //name hiding and showing

    $("#name").hide(1000);
    $("#object-name").hide(1000);
    $("#education-name").hide(1000); //it showing bcs technical skills clicked

    $("#tskills-name").show(3000);
    $("#projects-name").hide(1000);
    $("#activite-name").hide(1000);
    $("#pskills-name").hide(1000);
    $("#about-name").hide(1000);
  }); //projects undertaken

  $("#projects").click(function () {
    $("#projects-info").show(3000);
    $("#education-info").hide(1000);
    $("#objective-info").hide(1000);
    $("#tskills-info").hide(1000);
    $("#about-info").hide(1000);
    $("#activite-info").hide(1000);
    $("#pskills-info").hide(1000);
    $("#name").hide(1000);
    $(this).css('color', 'red'); //name hiding and showing

    $("#name").hide(1000);
    $("#object-name").hide(1000);
    $("#education-name").hide(1000);
    $("#tskills-name").hide(1000); //it showing bcs projects clicked 

    $("#projects-name").show(3000);
    $("#activite-name").hide(1000);
    $("#pskills-name").hide(1000);
    $("#about-name").hide(1000);
  }); // achivements/activites

  $("#activite").click(function () {
    $("#activite-info").show(3000);
    $("#education-info").hide(1000);
    $("#objective-info").hide(1000);
    $("#tskills-info").hide(1000);
    $("#projects-info").hide(1000);
    $("#about-info").hide(1000);
    $("#pskills-info").hide(1000);
    $("#name").hide(1000);
    $(this).css('color', 'red'); //name hiding and showing

    $("#name").hide(1000);
    $("#object-name").hide(1000);
    $("#education-name").hide(1000);
    $("#tskills-name").hide(1000);
    $("#projects-name").hide(1000); //it showing bcs activites clicked 

    $("#activite-name").show(3000);
    $("#pskills-name").hide(1000);
    $("#about-name").hide(1000);
  }); // personal skills

  $("#pskills").click(function () {
    $("#pskills-info").show(3000);
    $("#education-info").hide(1000);
    $("#objective-info").hide(1000);
    $("#tskills-info").hide(1000);
    $("#projects-info").hide(1000);
    $("#about-info").hide(1000);
    $("#activite-info").hide(1000);
    $("#name").hide(1000);
    $(this).css('color', 'red'); //name hiding and showing

    $("#name").hide(1000);
    $("#object-name").hide(1000);
    $("#education-name").hide(1000);
    $("#tskills-name").hide(1000);
    $("#projects-name").hide(1000);
    $("#activite-name").hide(1000); //it showing bcs personal skills clicked 

    $("#pskills-name").show(3000);
    $("#about-name").hide(1000);
  }); //about/personal information

  $("#about").click(function () {
    $("#about-info").show(3000);
    $("#objective-info").hide(1000);
    $("#education-info").hide(1000);
    $("#skills-info").hide(1000);
    $("#projects-info").hide(1000);
    $("#activite-info").hide(1000);
    $("#pskills-info").hide(1000);
    $("#name").hide(1000);
    $(this).css('color', 'red'); //name hiding and showing

    $("#name").hide(1000);
    $("#object-name").hide(1000);
    $("#education-name").hide(1000);
    $("#tskills-name").hide(1000);
    $("#projects-name").hide(1000);
    $("#activite-name").hide(1000);
    $("#pskills-name").hide(1000); //it showing bcs personal skills clicked 

    $("#about-name").show(3000);
  });
});