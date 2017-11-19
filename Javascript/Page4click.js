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
    text: "Like factory farming in the food industry, raising animals for clothing and accessories is often cruel to the animals and harmful to the environment. Veganism is a lifestyle choice that’s all about protecting animals by avoiding animal products. This is one of our core belifes at THRIVE, so all our clothes are 100% Vegan."
   },
  ];

  // Get reference to the output area
  var $outputDiv = $(".section-display");
  var defaultText = $outputDiv.find(".text").html();
  var defaultTitle = $outputDiv.find(".title").html();

  $imgs.on("click", function() {
   var $this = $(this);
   if (!$this.hasClass('clicked')) {
    $imgs.removeClass('clicked');
    setItem($this.addClass('clicked').index());
   }
  });

  $(document).on("click", function(e) {

   if ($(e.target).closest('.section-display').length != 1 && $(e.target).closest(".section-link").length != 1 && $imgs.hasClass('clicked')) {
    $imgs.removeClass('clicked');
    setItem();
   }
  })

  function setItem(index) {
   var title = index ? data[index - 1].title : defaultTitle;
   var text = index ? data[index - 1].text : defaultText;

   $outputDiv.find(".title").fadeOut(function() {
    $(this).html(title).fadeIn();
   });
   $outputDiv.find(".text").fadeOut(function() {
    $(this).html(text).fadeIn();
   });
  }
 }
 // DESKTOP
 if ($(window).width() > 767) {
  // Put all the images in a JavaScript array
  var $imgs = $(".section-link");

  // If you store your content in an array of objects, you can do this without creating
  // more than one display div. You'll just get the content from the object in the
  // array that has the same index as the image (within a different array)
  var data = [{
    title: "NOT WORKING",
    text: "NOT WORKING"
   },
   {
    title: "NOT WORKING",
    text: "NOT WORKING"
   },
   {
    title: "Fair Trade",
    text: "The process from start to finish is fair to all parties.<br><br>Our collections are free from inhuman working<br>conditions under slave wages for those who<br>manufacture our clothes."
   },
   {
    title: "Toxicfree",
    text: "Our collections are made without chemicals,<br>pesticides and toxic dyeing processes.<br><br>We have a 100% poison and chemical free store!<br>Great for both environment, employees and our<br>customers."
   },
   {
    title: "Quality",
    text: "We carefully sort out the best in organic, fair and<br>sustainable fashion.<br><br>A carefully selected assortment in small collections<br>from some of the most innovative and conscious<br>designers, manufacturers and brands right now."
   },
   {
    title: "Organic",
    text: "Organic clothing is made from organic cotton, jute or ramie that has been cultivated according to the guidelines of organic farming without genetically modified seeds, pesticides, or other chemical yielding aids.<br><br> This positively affects the environment, agriculture and the health of planters worldwide."
   },
   {
    title: "Vegan",
    text: "Like factory farming in the food industry, raising animals for clothing and accessories is often cruel to the animals and harmful to the environment.<br><br> Veganism is not a crash diet or cleanse. It’s a lifestyle choice that’s all about protecting animals by avoiding animal products. This is one of our core belifes at THRIVE, so all our clothes are 100% Vegan."
   },
  ];

  // Get reference to the output area
  var $outputDiv = $(".section-display");
  var defaultText = $outputDiv.find(".text1").html();
  var defaultTitle = $outputDiv.find(".title1").html();

  $imgs.on("click", function() {
   var $this = $(this);
   if (!$this.hasClass('clicked')) {
    $imgs.removeClass('clicked');
    setItem($this.addClass('clicked').index());
   }
  });

  $(document).on("click", function(e) {
   if ($(e.target).closest('.section-display').length != 1 && $(e.target).closest(".section-link").length != 1) {
    $imgs.removeClass('clicked');
    setItem();
   }
  })

  function setItem(index) {
   var title = index ? data[index - 1].title : defaultTitle;
   var text = index ? data[index - 1].text : defaultText;

   $outputDiv.find(".title1").fadeOut(function() {
    $(this).html(title).fadeIn();
   });
   $outputDiv.find(".text1").fadeOut(function() {
    $(this).html(text).fadeIn();
   });
  }
 }
});