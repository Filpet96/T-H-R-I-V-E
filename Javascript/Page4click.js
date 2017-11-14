$(document).ready(function() {
 if ($(window).width() < 767) {
  // Put all the images in a JavaScript array
  var $imgs = $(".section-link");
  // If you store your content in an array of objects, you can do this without creating
  // more than one display div. You'll just get the content from the object in the
  // array that has the same index as the image (within a different array)
  var data = [{
    title: "Fair trade",
    text: "The process from start to finish is fair to all parties. Our collections are free from inhuman working conditions under slave wages for those who manufacture our clothes."
   },
   {
    title: "Toxicfree",
    text: "Our collections are made without chemicals, pesticides and toxic dyeing processes. We have a 100% poison and chemical free store! Great for both environment, employees and our customers."
   },
   {
    title: "Quality",
    text: "We carefully sort out the best in organic, fair and sustainable fashion. A carefully selected assortment in small collections from some of the most innovative and conscious designers, manufacturers and brands right now."
   },
   {
    title: "Organic",
    text: "Organic clothing is made from organic cotton, jute or ramie that has been cultivated according to the guidelines of organic farming without genetically modified seeds, pesticides, or other chemical yielding aids. This positively affects the environment, agriculture and the health of planters worldwide."
   },
   {
    title: "Vegan",
    text: "Like factory farming in the food industry, raising animals for clothing and accessories is often cruel to the animals and harmful to the environment.<br> Veganism is not a crash diet or cleanse. It’s a lifestyle choice that’s all about protecting animals by avoiding animal products. This is one of our core belifes at THRIVE, so all our clothes are 100% Vegan."
   },
  ];

  // Get reference to the output area
  var $outputDiv = $(".section-display");
  var defaulttext = $outputDiv.find(".text").text()
  var defaultTitle = $outputDiv.find(".title").text();


  // Set a click event handler for each of the images
  $imgs.on("click", function() {
   // Find the child elements within the output div that need updating and
   // extract the content from the array of objects that correspond
   // to the index of the image that was clicked.
   $This = $(this)
   $(".title", $outputDiv).animate({
    opacity: 0
   }, function() {
    $(".title", $outputDiv).text(data[$This.index() - 1].title)
     .animate({
      opacity: 1
     });
   });
   $(".text", $outputDiv).animate({
    opacity: 0
   }, function() {
    $(".text", $outputDiv).text(data[$This.index() - 1].text)
     .animate({
      opacity: 1
     });
   })
  });

  $(document).on("click", function(e) {
   if ($(e.target).closest('.section-display').length != 1 && $(e.target).closest(".section-link").length != 1) {
    $(".title", $outputDiv).animate({
     opacity: 0
    }, function() {
     $(".title", $outputDiv).text(defaultTitle)
      .animate({
       opacity: 1
      });
    });
    $(".text", $outputDiv).animate({
     opacity: 0
    }, function() {
     $(".text", $outputDiv).text(defaulttext)
      .animate({
       opacity: 1
      });
    })
   }
  })
 }
 // DESKTOP
 if ($(window).width() > 767) {
  // Put all the images in a JavaScript array
  var $imgs = $(".section-link");

  // If you store your content in an array of objects, you can do this without creating
  // more than one display div. You'll just get the content from the object in the
  // array that has the same index as the image (within a different array)
  var data = [{
    title: "Fair trade",
    text: "The process from start to finish is fair to all parties. Our collections are free from inhuman working conditions under slave wages for those who manufacture our clothes."
   },
   {
    title: "Toxicfree",
    text: "Our collections are made without chemicals, pesticides and toxic dyeing processes. We have a 100% poison and chemical free store! Great for both environment, employees and our customers."
   },
   {
    title: "Fair Trade",
    text: "The process from start to finish is fair to all parties. Our collections are free from inhuman working conditions under slave wages for those who manufacture our clothes."
   },
   {
    title: "Toxicfree",
    text: "Our collections are made without chemicals, pesticides and toxic dyeing processes. We have a 100% poison and chemical free store! Great for both environment, employees and our customers."
   },
   {
    title: "Quality",
    text: "We carefully sort out the best in organic, fair and sustainable fashion. A carefully selected assortment in small collections from some of the most innovative and conscious designers, manufacturers and brands right now."
   },
   {
    title: "Organic",
    text: "Organic clothing is made from organic cotton, jute or ramie that has been cultivated according to the guidelines of organic farming without genetically modified seeds, pesticides, or other chemical yielding aids. This positively affects the environment, agriculture and the health of planters worldwide."
   },
   {
    title: "Vegan",
    text: "Like factory farming in the food industry, raising animals for clothing and accessories is often cruel to the animals and harmful to the environment.<br> Veganism is not a crash diet or cleanse. It’s a lifestyle choice that’s all about protecting animals by avoiding animal products. This is one of our core belifes at THRIVE, so all our clothes are 100% Vegan."
   },
  ];

  // Get reference to the output area
  var $outputDiv = $(".section-display");
  var defaulttext = $outputDiv.find(".text1").html()
  var defaultTitle = $outputDiv.find(".title1").html();


  // Set a click event handler for each of the images
  $imgs.on("click", function() {
   // Find the child elements within the output div that need updating and
   // extract the content from the array of objects that correspond
   // to the index of the image that was clicked.
   $This = $(this)
   $(".title1", $outputDiv).animate({
    opacity: 0
   }, function() {
    $(".title1", $outputDiv).html(data[$This.index() - 1].title)
     .animate({
      opacity: 1
     });
   });
   $(".text1", $outputDiv).animate({
    opacity: 0
   }, function() {
    $(".text1", $outputDiv).html(data[$This.index() - 1].text)
     .animate({
      opacity: 1
     });
   })
  });

  $(document).on("click", function(e) {
   if ($(e.target).closest('.section-display').length != 1 && $(e.target).closest(".section-link").length != 1) {
    $(".title1", $outputDiv).animate({
     opacity: 0
    }, function() {
     $(".title1", $outputDiv).html(defaultTitle)
      .animate({
       opacity: 1
      });
    });
    $(".text1", $outputDiv).animate({
     opacity: 0
    }, function() {
     $(".text1", $outputDiv).html(defaulttext)
      .animate({
       opacity: 1
      });
    })
   }
  })
 }
});