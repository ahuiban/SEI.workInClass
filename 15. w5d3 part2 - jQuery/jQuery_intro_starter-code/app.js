$(() => {




  if (typeof $ == 'undefined') {
    console.log('oops! I still have to link my jQuery properly!');
  } else { console.log('I did it! I linked jQuery and this js file properly!') };

  console.log($);

  // create a div in jQuery:

  const $div = $("<div>");
  console.log($div);


  // add the div to the end of the body ussing .append (at the end od Body)

  $("body").append($div)

  // add a Class to it:

  $div.addClass("meat");

  // Add a meat inside the div

  const $h3 = $("<h3>");
  $h3.text("Ostrich");
  $div.append($h3);

  // add another Class:
  $div.addClass("Desert");
  // add a desert inside
  const $h3 = $("<h3>");
  $h3.text("Ice Cream");
  $div.append($h3);





});