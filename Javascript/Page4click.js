$(document).ready(function() {
  if ($(window).width() < 767) {
  // Put all the images in a JavaScript array
  var $imgs = $(".section-link");

  // If you store your content in an array of objects, you can do this without creating
  // more than one display div. You'll just get the content from the object in the
  // array that has the same index as the image (within a different array)
  var data = [{
      title: "Fair trade",
      text: "The Process from start is fair to all who are included in making our clothes."
    },
    {
      title: "Toxicfree",
      text: "Our clothes does not contain any toxic materials and are made under toxicfree conditions."
    },
    {
      title: "Quality",
      text: "Our clothes have sustainable and high quality."
    },
    {
      title: "Organic",
      text: "All the materials and processes are fully organic and friendly to our planet."
    },
    {
      title: "Vegan",
      text: "We care about the animals, all clothes are crueltyfree and vegan."
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
      text: "The Process from start is fair to all who are included in making our clothes."
    },
    {
      title: "Toxicfree",
      text: "Our clothes does not contain any toxic materials and are made under toxicfree conditions."
    },
    {
      title: "Fair Trade",
      text: "The Process from start is fair to all who are included in making our clothes."
    },
    {
      title: "Toxicfree",
      text: "Our clothes does not contain any toxic materials and are made under toxicfree conditions."
    },
    {
      title: "Quality",
      text: "Our clothes have sustainable and high quality."
    },
    {
      title: "Organic",
      text: "All the materials and processes are fully organic and friendly to our planet."
    },
    {
      title: "Vegan",
      text: "We care about the animals, all clothes are crueltyfree and vegan."
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
