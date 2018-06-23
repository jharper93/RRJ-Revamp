/*$(document).ready(function(){

  /*var myArticles = $('.articles-column1').children('article');


  myArticles.on({
    mouseenter: function() {$(this).animate({height: auto}, 5000);},
    mouseleave: function() {$(this).animate({height: '240px'}, 1000)}
  });

  /*$('article').mouseover( 
    
    
    $('article').animate({
    height: $('article').get(0).scrollHeight
}, 1000, function(){
    $(this).height('auto'); 
}));*/

/*$(document).ready(function() {

  $("article").hover(function() {$(this).animate({height: '100%'}, 1000);}, function() {$(this).animate({height: '240px'});});

});*/


/*$(document).ready(function(){

  var boxHeight = $("article").height();

  $("article").mouseenter(function(){
      $(this).animate({
     /*this is the problem height: "400px" /*This is problem
      }, 700);
  }).mouseleave(function(){
      $(this).animate({
          height: boxHeight
      }, 400);
  });



  $('.info-box-left').click(function() {
    alert( "Handler for .click() called." );
  });



});

 

//});
  





























  /* Fade in Content 

  $('h1, h2, h3, p').animate({opacity: 1}, 1600);

/*---------------------------------------------- New Site -----------*/


//* article text show



    



/* Mobile burger menu display 

    $('.burgerButton').on('click', function(){
      
      $('.burgerMenuList').toggleClass('open');
      
    });
     */
    // Interview tab expansion 

$(".interview-tab").click(function(){
  

  $('.interview-tab-info', this).slideUp(0);
  $('.interview-top', this).slideDown(1000);
  $(this).next().slideDown(1000);
  

  //.next().slideDown(3000);

}); 

  /* Interview close button close 

$(".closeBtn").click(function(){

  $(this).parent().fadeOut(700);

}) */

//
// -------------------------------------------------------------------------INFO BOX OPEN ON SCROLL //
/*$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    var os = $('.head-banner p').offset().top;
    var ht = $('.info-box').height();
    if(scroll > os + ht){
        $('.info-box-left').animate({height: "360px", padding: "30px 0px"}, 1000);
        $('.info-box-right').animate({height: "215px", padding: "40px 0px"}, 1000).css('overflow-y: visible');


    }

});





/*------------------------------------English strings-----------------------------------------*/ 



var enStrings = {

  /* Navigation Bar */

  "nav1" : "Home",
  "nav2" : "About Us",
  "nav3" : "Our Research",
  "nav4" : "Media &amp; Publications",
  "nav5" : "Get Involved",
  "nav6" : "Interviews",

  /* Footer */ 

  "footer-title-1" : "Get involved",
  "footer-title-1-l1": "We are always looking for new",
  "footer-title-1-l2": "opportunities to engage with people",
  "footer-title-1-l3": "across Jakarta. Contact us at the",
  "footer-title-1-l4": "following places",

  "footer-title-2" : "Address",
  "footer-title-2-l1" : "Jakan Sukabakti 1,",
  "footer-title-2-l2" : "Bintaro Green Village no. E16,",
  "footer-title-2-l3" : "Tangerang Selatan 15414",


  "footer-title-3" : "Email",
  "footer-title-3-l1" : "jakartaurbandiversity@gmail.com",

  "footer-title-4" : "Social Media",
  

  /* --------------------- About Us Page ------------------------- */

  "about-title": "About Us",
  "about-subtitle": "An Urban Diversity Agenda for a Living City",
  "about-textbox-title": "What is &#39;the roots economy&#39; and what does it mean for Jakarta?",

  "about-textbox-p1": "RRJ began through our daily experience of life in Jakarta. There was something all around us, obvious but unrecognised. We saw it as many single events, but as we explored more a pattern began to emerge. A dense network of interaction between citizens of all walks of life. Jakarta&#39;s &#39;roots economy.&#39;",

  "about-textbox-p2": "Almost all of Jakarta&#39;s people engage with the roots economy on a daily basis, it is an important component of the city&#39;s food, rent, transportation, business and services market. As central as it is to the lives of so many in the city, the roots economy is often misunderstood, or not included in discussions about the city&#39;s future.",

  "about-textbox-p3": "RRJ is an ongoing publication and knowledge base dedicated to the daily lives of people living in Jakarta, for whom the roots economy is a way of life. Jakarta&#39;s informal entrepreneurs provide a range of supporting services to a city struggling with modern challenges, using local expertise and innovative business strategies. Our project strives to better understand the networks and stories behind these services, and bring the roots economy actors into the narrative of urban transformation as equal partners in trade and development.",

  "about-textbox-p4": "Everyone is an expert, and we invite you to share your ideas, opinions and perspectives.",

  "about-ws-title": "Our Manifesto",


  "about-textbox2-title": "Who We Are",
  "about-textbox2-p1": "A team of local and international contributors who care deeply about life in Indonesia&#39;s capital. We come from all walks of life, and have diverse backgrounds including architecture, design, urban planning, activism, geography, economics, media, video and the arts. We want to tell your story.",
  "about-textbox2-p2": "We are always looking for help and contributions, from local experience to video techs and social media masters, so whatever your skills, interest or background, contact us to see how you can get involved!",

  "partners-title": "Our Local Partners",
  "partners-hover-tab-rujak": "Center for Urban Studies",
  "partners-hover-tab-kampungesia": "Kampungesia",
  "partners-hover-tab-kom": "Komunitas Desakota",
  

  /* ----------------- Get Involved ---------------- */


  "get-involved-title": "Get Involved",
  "get-involved-textbox-title" : "Getting Involved with Public Research",
  "get-involved-textbox-p1": "The UDP gives everyone the opportunity to shape the future of Jakarta. Whatever your interests, background or experiences we invite you to become a member of our public research community, and build our city together!",
  "get-involved-contact-subtitle": "Contact Us",
  "get-involved-contact-subtitle2": "Interested in our organization? Want to get involved?",
  "get-involved-contact-p1": "The UDP is a public research movement, and we invite everyone to get involved. Whatever your background, interests or experience",
  "get-involved-contact-p2": "Send an email to jakartaurbandiversity@gmail.com (we usually respond with 5 working days)",
  "get-involved-tab-social-media-title": "Social Media",
  "get-involved-tab-social-media-subtitle": "Connect with us",

  /* ------------------ Home Page ------------------ */

  "home-title": "Rame Rame Jakarta",
  "home-subtitle": "<i>&#39;&#39;Hidup bersama dalam kota berkembang terbesar di dunia&#39;&#39;</i>",
  "home-textbox-title": "We all have a different perspective on the city. Everyone is an expert.",
  "home-tab-title-essentials": "Rame Rame Essentials",

  /* ------------------Interview---------------------- */

  "interview-title": "Our Interviews",
  "interview-subtitle": "The actors sharing their stories. Our city from their perspective.",
  "interview-textbox-title": "Urban Living Interviews Series",
  "interview-textbox-p1": "A living city is, by necessity, one which is best designed to support the daily lives of those who make it their home. At RR-JKT, we know that raw data cannot capture a true picture of what it means to live in Jakarta, and we rely on first-hand interviews with residents from all walks of life to develop our research topics and inform our urban diversity agenda priorities.",
  "interview-recent-title": "Recent Interviews",
  "interview-food-title": "Food and Drink",
  "interview-scroll": "(scroll right)",
  

  /* Recent Interviews */

                                  /*---------------------------Pak Ono*/

  "interview-recent-name-1": "Name",
  "interview-recent-name-ans-1": "Pak Ono",
  "interview-recent-business-1": "Business",
  "interview-recent-business-ans-1": "Warung Cigarettes + Food (Tenda)",
  "interview-recent-since-1": "Trading Since",
  "interview-recent-since-ans-1": "~ 1999",
  "interview-recent-loc-1": "Lacation",
  "interview-recent-loc-ans-1": "Pasar Baru",

  "interview-recent-q1-1": "Where do you live, pak?",
  "interview-recent-a1-1": "I sleep here (pointing to the activity space in the middle of the stall). At night, the tarpaulin is closed and I sleep amongst merchandise. When my wife and child are here they stay in a rented house not far away.",

  "interview-recent-q2-1": "So this business is operated by the three of you?",
  "interview-recent-a2-1": "Yes. but every 2 months I go back to the village in Kuningan, West Java, for 2 months also. My brother or relatives will come and take over the operation. That&#39;s the system.",

  "interview-recent-q3-1": "Why start this business? Is there any change in the form of business since its inception started up to now?",
  "interview-recent-a3-1": "Initially it was a small businesses selling cigarettes and drinking water on the roadside, after a long time we expanded into other areas and the products multiplied. Like now, we sell rice and side dishes as well. I buy my ingredients in the vegetable market not far from here, near the railroad tracks.",

  "interview-recent-q4-1": "How does this business make profit?",
  "interview-recent-a4-1": "The most expensive and profitable is the business of buying and selling cigarettes, then food business. The tax is high but selling individual cigarettes outside of the box makes good profit.",

  "interview-recent-q5-1": "What about the future? There is a plan to make a more permanent warung?",
  "interview-recent-a5-1": "Yes, I would still like to do that y&#39;know, but I don&#39;t think so yet. There still enough capital for the investment.",

                            /*----------------------- Pak Rofi + Ibu Marwiti */
  
  "interview-recent-name-2": "Name",
  "interview-recent-name-ans-2": "Pak Rofi + Ibu Marwiti",
  "interview-recent-business-2": "Business",
  "interview-recent-business-ans-2": "Warteg",
  "interview-recent-since-2": "Trading Since",
  "interview-recent-since-ans-2": "1985 (setiabudi) 1997 (Karet)",
  "interview-recent-loc-2": "Lacation",
  "interview-recent-loc-ans-2": "Kampung Karet",

  "interview-recent-q1-2": "Where do you live, pak and ibu?",
  "interview-recent-a1-2": "We live here; there is an upper floor. It is very expensive, IDR35.000.000 per year, but the location is strategic and our warteg is open 24 hours so we have to always stay close",

  "interview-recent-q2-2": "So this business is operated by the two of you?",
  "interview-recent-a2-2": "Yes. The whole family lives here. We are both from this area so we don&#39;t have to go very far. The children&#39;s school is nearby as well.",

  "interview-recent-q3-2": "Why start this business? Is there any change in the form of business since its inception started up to now?",
  "interview-recent-a3-2": "This is a family business. My family is originally from Tegal, and started this business in Jakarta more than 30 years ago. Previously we had a warteg in Setiabudi, then relocated here. Everything has changed since the business started, but nasi warteg is still popular!",

  "interview-recent-q4-2": "How does this business make profit?",
  "interview-recent-a4-2": "It depends. On a good day the profit could be IDR 1,000,000 per day, but it&#39;s not certain. The cost is high, and each day we spend IDR 150,000 for vegetables and IDR700,000 for chicken, fish or meat. We buy the ingredients in monces market between the hours of 3 and 6 am because this business is always open.",

  "interview-recent-q5-2": "Do you have any plans for the future?",
  "interview-recent-a5-2": "Yes, maybe we can take a photo together?",

                              /*-------------------------------- Pak Ajay */


  "interview-recent-name-ans-3": "Pak Ajay",

  "interview-recent-business-ans-3": "Chicken Noodles",

  "interview-recent-since-ans-3": "Around 1990",

  "interview-recent-loc-ans-3": "Bundaran HI (CFD)",

  "interview-recent-q1-3": "Where do you live, pak?",
  "interview-recent-a1-3": "I live in a rented property close to Tanah Abang Station. It&#39;s at jalan Petamburan 3. Usually I sell my chicken noodles at Tanah Abang Market Block A, so it&#39;s a good location. Rarely I go back to my home in Kuningan, maybe just once a year on Idul Fitri.",

  "interview-recent-q2-3": "So you come here every week?",
  "interview-recent-a2-3": "Yeah, that&#39;s right. There are many customers here so the profits are high. Bundaran HI is a little far from my house, I have to walk for around an hour, but I will definitely sell everything!",

  "interview-recent-q3-3": "Why start this business? Is there any change in the form of business since its inception started up to now?",
  "interview-recent-a3-3": "I have been selling mie ayam since 1990, so I&#39;ve seen a lot of changes. The Business is still profitable, making around IDR50.000-100.000 per day. It&#39;s enough to pay for my family&#39;s rent.",

  "interview-recent-q4-3": "How does this business make profit?",
  "interview-recent-a4-3": "I buy cheap ingredients from pasar Palmerah, then wake up at 3AM to prepare the food. Usually I start selling around 6AM, and if I&#39;m successful I can make profit from the investment of IDR450.000 every day.",

  "interview-recent-q5-3": "What about the future?  Do you have any plans for your business?",
  "interview-recent-a5-3": "I have two children. My plans are for their education and daily life.",

  /*-------------------------------- Pak Iding */

  "interview-recent-name-ans-4": "Pak Iding",
  "interview-recent-business-ans-4": "Chicken porridge",
  "interview-recent-since-ans-4": "Around 1978",
  "interview-recent-loc-ans-4": "CFD - Bundaran HI",

  "interview-recent-q1-4": "Where do you live, pak? ",
  "interview-recent-a1-4": "I live in the Tanah Abang area, in a shared Kost it&#39;s a strategic location for my business. My family is still in Cirebon, so I go home to visit them for one week every two months.",

  "interview-recent-q2-4": "So are you always in this position?",
  "interview-recent-a2-4": "No. Normally on Monday-Friday I sell my bubur at the Mandiri tower in Tanah Abang. Every week I come to CFD on Sunday, and I always set up in the same position.",

  "interview-recent-q3-4": "Why start this business? Is there any change in the form of business since its inception started up to now?",
  "interview-recent-a3-4": "I started selling bubur more than forty years ago; everything has changed! But people still want to eat delicious bubur, and that&#39;s the reason my business is still profitable. Since the start my cart has been replaced four times, and we have to pay a cleaning charge of IDR30,000 to sell at bundaran HI.",

  "interview-recent-q4-4": "How does this business make profit?",
  "interview-recent-a4-4": "CFD is really important to my business; it&#39;s the most profitable day. On a Sunday there are many customers here, but its a little far from my house, and sometimes very hot, so the bubur price is IDR10.000. Normally I wakse up at 2AM, and start selling at the Mandiri Tower for breakfast around 4AM. The price there is just IDR8.000",

  "interview-recent-q5-4": "What about the future?  Do you have any plans for your business?",
  "interview-recent-a5-4": "Hopefully I can keep working this business and support my family. If the regulations prevent carts from selling on CFD this would really make my life harder.",

 /*-------------------------Pak Kris */


 "interview-recent-name-ans-5": "Pak Kris",
 "interview-recent-business-ans-5": "Car seats and interior upholstery repairs",
 "interview-recent-since-ans-5": "~ 1997",
 "interview-recent-loc-ans-5": "Jl. Kebon Sirih Timur Dalam",

 "interview-recent-q1-5": "Sir, what is your job on Kebun Sirih Timur Dalam Street?",
 "interview-recent-a1-5": "I sell car seats and also sew or fix broken ones. I also sell car interiors as per customer orders.",

 "interview-recent-q2-5": "Why are you selling on this street?",
 "interview-recent-a2-5": "Because from my grandparents time this street has been very famous for selling vehicle seating and interiors.",

 "interview-recent-q3-5": "How long have you been selling seat car in that place?",
 "interview-recent-a3-5": "Around 20 years, I am the third generation working here.",

 "interview-recent-q4-5": "Do you want to your son to continue this business?",
 "interview-recent-a4-5": "I don&#39;t think so. I want my son and his children to get a better job, and income, than this one.",

 "interview-recent-q5-5": "Who are your customers here?",
 "interview-recent-a5-5": "So many, I get individual clients and also regular business from companies.",

 "interview-recent-q6-5": "Where do you buy your business materials?",
 "interview-recent-a6-5": "I usually buy it around Tanah Abang Market.",

 "interview-recent-q7-5": "Do you pay rent to operate here?",
 "interview-recent-a7-5": "Ya, of course I pay rent.",

 "interview-recent-q8-5": "After a long 20 years selling here, what changes have you noticed?",
 "interview-recent-a8-5": "I feel some changes in my life because of the tight competition from other places on this street, and the stock purchasing price is increasing and increasing from year to year",


 /*-------------------------------------------------Pak Nusrin */

 
 "interview-recent-name-ans-6": "Pak Nusrin",

 "interview-recent-business-ans-6": "Selling and repairing car seats and upholstery",

 "interview-recent-since-ans-6": "~ 1982",

 "interview-recent-loc-ans-6": "Jl. Kebon Sirih Timur Dalam",

 "interview-recent-q1-6": "Sir, what is your job on Kebun Sirih Timur Dalam Street?",
 "interview-recent-a1-6": "I sell new car seats and also repair the fabric of broken seats.",

 "interview-recent-q2-6": "How long have you been selling car seats here?",
 "interview-recent-a2-6": "Around 35 years",

 "interview-recent-q3-6": "Who are your customers?",
 "interview-recent-a3-6": "There are many. Individual persons come to my place with their car. and hen some companies too. For example, showrooms often come and find a seat for the car that they will sell.",

 "interview-recent-q4-6": "Where do you buy your material for selling?",
 "interview-recent-a4-6": "I usually buy it at either Senen or Tanah Abang markets.",

 "interview-recent-q5-6": "Do you keep some inventory for your selling stock?",
 "interview-recent-a5-6": "No, I use the &#39;Just in Time&#39; method. When I have an order I will buy that inventory because each order is unique. It can differ in color and size.",



/* -------------------------------------------------- Pak Syaifudin */




 "interview-recent-name-ans-7": "Pak Syaifudin",
 
  "interview-recent-business-ans-7": "Cart Merchant",
 
  "interview-recent-since-ans-7": "~ 2012",
 
  "interview-recent-loc-ans-7": "Kebon Sirih",
 
  "interview-recent-q1-7": "Sir, what is your job on Kebon Sirih Timur Dalam Street?",
  "interview-recent-a1-7": "I sell hats, bags, tape measures and other things",
 
  "interview-recent-q2-7": "Why are you selling on this street?",
  "interview-recent-a2-7": "Because there are many building projects around here; the workers are my customers.",
 
  "interview-recent-q3-7": "This is a vending cart, right? Do you sell anywhere else?",
  "interview-recent-a3-7": "TI sell on Jaksa street too.",
 
  "interview-recent-q4-7": "How long have you been doing this?",
  "interview-recent-a4-7": "Around 5 years.",
 
  "interview-recent-q5-7": "Why did you choose to become trader?",
  "interview-recent-a5-7": "Because I like a flexible job. I have worked as labourer but the time is not flexible. Work like this is more free, and no one controls me.",

  "interview-recent-q6-7": "Where do you buy the stock materials?",
  "interview-recent-a6-7": "I have a coordinator who provides them for us",

  "interview-recent-q7-7": "Where do you live?",
  "interview-recent-a7-7": "I live in Manggarai in a rented room.",

  "interview-recent-q8-7": "Why don&#39;t you sell near your living place, Manggarai? Is nearer, isn&#39;t it?",
  "interview-recent-a8-7": "There just aren&#39;t enough construction projects around there, so I come to this part of the city every day to find custom.",

  "interview-recent-q9-7": "Where would you usually take lunch?",
  "interview-recent-a9-7": "It&#39;s easy for me because there are so many warung around here. I just choose whichever one I like.",

 /* ------------------------------------------ Mas Yana ------------*/


 "interview-recent-name-ans-8": "Mas Yana",
 
  "interview-recent-business-ans-8": "Gado-gado",
 
  "interview-recent-since-ans-8": "2011",
 
  "interview-recent-loc-ans-8": "Kampung Karet",
 
  "interview-recent-q1-8": "Where do you live, pak?",
  "interview-recent-a1-8": "I sleep in a local boardinghouse, with my relative and uncle. My uncle taught me how to prepare gado-gado, and we all work in the business but in different places.",
 
  "interview-recent-q2-8": "So this business is operated by the three of you?",
  "interview-recent-a2-8": "Yes. I used to trade cigarettes and indomie in some locations, then my uncle invited me to join this business. We’re already looking for someone else to join too, but they don’t like it or can’t operate their own work schedule.",
 
  "interview-recent-q3-8": "Is there any change in the form of business since its inception up to now?",
  "interview-recent-a3-8": "I am happy and secure in this location; I pay some retribution to the local RT, but I have to help with community activities too. Currently, the merchant next door (formerly a Gorengan trader) is no longer allowed to trade by the RT, because he was considered undisciplined and dirty. The RT is no longer allowing additional tradesmen in this area.",
 
  "interview-recent-q4-8": "How does this business make profit?",
  "interview-recent-a4-8": "Right now this gado-gado business actually consists of 3 different locations. My uncle is in the cafeteria at the health department building, one relative at the front of Karet neighbourhood, and I’m in the back street here. We all buy the materials together from a local market, but the same ingredients are sold at different prices. In my Uncle’s cafeteria the price for gado-gado is 25rb, but from a cart like mine just 12rb.",
 
  "interview-recent-q5-8": "What about the future for your business?",
  "interview-recent-a5-8": "Plan ahead? Maybe if I got married I would want the business to be in a more permanent place like the cafeteria. But right now I still feel more comfortable working from the cart because the schedule is more flexible. Sitting outside is better too, right?",










  /* Food and Drink */

  "interview-food-est-1": "<strong>Establishment:</strong> Gado Gado",
  "interview-food-price-1": "<strong>Price:</strong> 12.000 (15.000) inc drink",
  "interview-food-quote-1": "I buy all my ingredients fresh from the local market in the kampung, and I prepare my peanut sauce fresh to order; it keeps the taste good and makes sure my customers come back. I live in a kamar kos not far from here, the rent is rp 1.000.000 a month but it means I can be close to the best area to sell my food there are cheaper rooms available but I live space. The Kampung is important to me because it helps keep my costs low, and living nearby means I can come here every day and pass those savings on to my customers, which keeps them happy too!",

  "interview-food-est-2": "<strong>Establishment:</strong> Nasi Tegal",
  "interview-food-price-2": "<strong>Price:</strong> 14.000 (17.000 inc extra drink)",
  "interview-food-quote-2": "We&#39;ve been here a long time; more than ten years, and we&#39;ve really seen the area change. We serve all kinds of customers - business people, construction workers, kampung residents and studentsall eat our food. We have limited space for seating but people like the local atmosphere so they are happy to sit outside and we even compete well with the more expensive restaurant opposite. We are all friends around here, and keep close connections in the local community; it helps us give the best and fastest service. We can always ask each other for help or for some small change. We live very close by, and even take our plates and cutlery back to our house to wash them. It helps us keep the place clean.",

  "interview-food-est-3": "<strong>Establishment:</strong> Bakso Spesial",
  "interview-food-price-3": "<strong>Price:</strong> 15.000 (18.000 inc drink)",
  "interview-food-quote-3": "I don&#39;t live in the kampung, I have to commute every day from bogor because I live with my family. I work on several major projects in the area so I always come to the kampung vendors for lunch and normally for breakfast as well - there are many great options for food. I really love the spicy bakso because it is so full of flavour Soto here is also good, and the kampung has many delicious options. Some of my projects employ more than one thousand people in the area, so they provide plenty of business for the vendors. The kampung being so close to the projects is good for the workers because they have enough time to enjoy their breaks, so it keeps them happy and helps the industry",

  "interview-food-est-4": "<strong>Establishment:</strong> Mie Ayam",
  "interview-food-price-4": "<strong>Price:</strong> 12.000",
  "interview-food-quote-4": "We all stay together in a rented studio apartment nearby. It&#39;s only 1.200.000 per month between us,so even cheaper than renting a kost. We need to be close to this location because almost all of our customers come from the big office buildings, and they only get a short break time so its understandable that they don&#39;t want to travel far. We are lucky that we can use this spot, and the combination of cheap local rent and regular customers mean we can offer a good price for our mie ayam, and good service. We even offer people the option to order using SMS before they arrive to save time - but make sure you don&#39;t wait too long after you order or the noodles will be soggy! We are only open here for lunch until around 3pm, then we relocate to Dukuh Atas station to service the evening commuter rush. We have to make sure everything is washed for reuse and enough food is cooked because we are open there until quite late. It&#39;s a busy day but we maximise our customer base, and all the city workers can have our delicious noodles.",

  "interview-food-est-5": "<strong>Establishment:</strong> Maskan Padang",
  "interview-food-price-5": "<strong>Price:</strong> 15.000 (18.000 inc extra drink)",
  "interview-food-quote-5": "We do good business here in the kampung - lunch is our busiest time but we operate until 20.00 and still get customers because of our great location on the main food selling street directly outside some of the largest office complexes. Food from padang is extremely popular, and all kinds of people come here, from office workers who come here for lunch, and the construction teams who come later when they change shifts. We normally buy our ingredients from Pasar Seni but if we run out we can always get some more from nearby in the kampung. We all rent kost here too - its cheap and we don&#39;t have to travel far to work. Kampung karet has become our home",

  "interview-food-est-6": "<strong>Establishment:</strong> Street Vendor",
  "interview-food-price-6": "<strong>Price:</strong> 3.000-10.000",
  "interview-food-quote-6": "We live in kampung Setiabdi, but we come here to Karet because of all the construction work going on in the area. Its not far for us to travel and there are a lot of customers here. We sell coffees, ciggarettes, snacks and other drinks, and bring some plastic chairs so that people have somewhere to sit. We are right outside a major construction site so most of our customers throughout the day are manual workers but we also get many people from the office buildings. This is a perfect location for us; at the intersection of the busiest lunch time area and the main access point for the kampung. Maybe when the construction here is finished we will move to a different area with our customers.",

  "interview-food-est-7": "<strong>Establishment:</strong> Various",
  "interview-food-price-7": "<strong>Price:</strong> ~16.000 (18.500 inc drink)",
  "interview-food-quote-7": "I have been running my business from this location for a long time; maybe fifteen years or more. It&#39;s technically a parking area but I rent it to sell freshly cooked food and drinks for the workers in this area. We operate from 07.00 until 14.00, catering for breakfast and lunch, and the business is good because of high demand from the surrounding offices. We aren&#39;t located on the main street for buying lunch, so the business couldn&#39;t survive unless there were many people needed to come and find our place. All of our food is cooked to order, so we have to operate a very fast system to wash the tables and plates ready for new customers. We are always crowded at lunch so we offer many different kinds of food and everyone can eat something they like. We also provide a delivery service to the nearby area so people can enjoy our food in their office if they are too busy to come and visit us. The relationship between the formal and informal sector is the foundation of our business!",

  /* Rent And Space */

  "interview-rent-name-1": "Ruhludin Kudus, 26",
  "interview-rent-job-1": "Architect",
  "interview-rent-quote-1": "I started working in Karet in April 2015 for Ong &amp; Ong Design office, and moved into a rented kost room soon after in May. After just one month of commuting from my old house in Bintaro I was exhausted; the long commute and overtime hours were unbearable. Sometimes I would work untill midnight and then wake up again at 4.30 am to arrive at the office for 8am. I needed to find a place closer to my office I share a kost room with my brother, we split the monthly rent of rp1.800.000, but If you want a room to yourself the price is rp1.500.000. Previously I stayed in a room nearer to my office for just 800.000/month but without AC and only a shared bathroom. At the new place I get better facilities, and because I don&#39;t mind sharing the room it&#39;s not too expensive. Its also close to the commuter line which is fast and cheap so I can easily get to my office every day. Much better than the old commute from Bintaro! There are kost available within walking distance from my office but these are too expensive; nothing less than 1jt/month. I like the atmosphere in my place - its just like a regular house and the landlord lives with us downstairs. If there were no affordable kost in central Jakarta I guess I&#39;ll have to quit my job and go elsewhere - there&#39;s no way I can commute like before, and other renting options are just too expensive for my salary.",

  "interview-rent-name-2": "Nurul Nurhadiyani, 27",
  "interview-rent-job-2": "Architect",
  "interview-rent-quote-2": "I&#39;m originally from bandung but I moved to Jakarta in 2010 after I graduated, for work. At first I stayed at my family&#39;s house in Kebon Jeruk but I found the commute exhausting, even over this small distance. I decided I had to find a place closer to my office. At first I was nervous to stay in Kampung Karet, but I have actually found it quite comfortable, and not as scary as I thought before I came here My room costs rp1.500.000/month and is just a five minute walk from my office. Karet is a really strategic location, close to the malls and the weekend car free area on Jalan Sudirman, but being close to work is the most important for me. Now that gojek and other transport apps are widely used I could move a little further from my office but a short walk is ideal if the cheap kost was not available in Karet I would move somewhere else, as long as the journey to work was less than 30 minutes. I don&#39;t know what I would do if areas like Kampung Karet didn&#39;t exist in central Jakarta however, because the maximum I would be willing to pay for rent each month would be 2.000.000, and there aren&#39;t apartments for that price in good locations.",

  "interview-rent-job-3": "Construction Site Managers",
  "interview-rent-quote-3": "We both have families so we stay with them back in bintaro; there isn&#39;t enough space in the kampung for my wife and children to live with us. There are a huge number of workers on our projects who do stay in the kampung, however - its normal for the company to rent kost rooms for them in the nearyb area. Usually they will rent for the whole group, and try to work out a deal with the owner to get a good price; maybe even let them share rooms if it is a big group. Staying there means they keep well rested, and don&#39;t have to commute so they are always at work on time - its important for the construction industry.",

  "interview-rent-job-4": "Construction Site Worker",
  "interview-rent-quote-4": "I work at one of the major construction projects in the Karet area; my company rents a compound for me and the other workers inside the nearby kampung, so it makes sense for me to come and eat here too. When the construction is finished and the new offices open it will be even busier in this area, so I hope the kampung can meet the new demand. The building I am working on alone is 44-storeys, so it could bring thousands of new workers. Having the kampung so close to the construction sites is good for us, because we have access to food, drink, shops and nearby social spaces. If we had to stay in on-site accommodation sometimes the options are extremely limited.",

  /* -------------- Karet Page -------------------- */

  "karet-title": "Karet",
  "karet-subtitle": "Located in the centre of one of Jakarta&#39;s busiest business areas, Karet is home to a large kampung community",
  "karet-textbox-title": "The Cost of Living: The roots economy&#39;s role in providing food, drink and somewhere safe to sleep",
  "karet-textbox-p1": "For our first piece of independent research demonstrating the benefits of mixed income living, we focus on the Karet neighbourhood; a strategic location in the centre of one of Jakarta&#39;s busiest business areas, and also home to a large kampung community. The ways in which commercial life in this area and the interior settlement interact and influence each other will be the core of this investigation.",
  "karet-tabs-title": "Reports",
  "karet-raw-data-tab-title": "Raw Data",
  "interview-food-title": "Food and Drink",
  "interview-rent-title": "Rent and Space",

  /* --------------- Media & Publications ------------*/

  "media-title": "Media &amp; Publications",
  "media-subtitle": "Sharing our agenda and findings as widely as possible is important to us. Here you can access our publications, media and other online platforms for your own use, or to share on social media",
  "media-textbox-title": "Public Information on Your Terms",
  "media-textbox-p1": "We want our research, priorities and agenda to reach as many people as possible, from many different walks of life. We share our activities, raw data, conclusions and further questions using a variety of platforms, and encourage everyone to explore our published work.",
  "media-textbox-p2": "Access to the discussion for all, regardless of background, is important to us, and our social media profiles are the best way to get involved, ask questions and follow our activities.",
  "media-textbox-p3": "Got an interesting photo or video showing life in Jakarta which might help people think differently about the city? Submit it to be featured in one of our online galleries.",
  "media-tab-title": "Media &amp; Publications ",

  /* ------------------- Our Research ---------------------*/

  "our-research-title": "Our Research",
  "our-research-subtitle": "Independent, local research, available to all, is the foundation of the Urban Diversity Agenda.",
  "our-research-textbox-title": "Real stories and real data. Jakarta&#39;s roots economy in our daily lives.",
  "our-research-tab-title": "Research Sites",
  "our-research-tab-text":"These sites represent the first phase of our urban research program, but we are always expanding our areas of research. If you have an idea for a new research topic or study site, or want to contribute research of your own, <a href='getInvolved.html'>contact us</a> to find out more!",

  /* -------------------- Photo -----------------------*/

  "photo-title": "Rame Rame Photography",
  "photo-subtitle": "Coming Soon...",
  "photo-textbox-title": "A picture can speak a thousand words. To see is to understand.",
  "photo-textbox-p1": "Submit your shots to our <a href='https://www.instagram.com/rameramejakarta/' target='_blank'><u>instagram!</u></a>",
  "photo-textbox-p2": "All our images are free to download and for non-commercial use by anyone, just tag #rameramejakarta",

  /* -------------------- Video -----------------------*/

  "video-title": "Rame Rame Video",
  "video-textbox-title": "Video Library",
  "video-textbox-p1": "Jakarta is a city in motion - day or night, the rhythms of daily life in this vast metropolis never stop, and facilitating these movements is a central aim of the urban diversity agenda. From the streets and from the sky, we try to capture the dynamic energy of our city on film. This helps us to better understand Jakarta&#39;s important spatial relationships and networks of association.",
  "video-textbox-p2": "Are you a budding videographer, a professional with some spare time or just in the right place at the right time with a video phone in your hand? If you have some footage you would like to contribute to our video library, contact us; we accept everything from mini documentaries, time lapse footage,interviews or short clips of life in Jakarta.",

  "video-v1-title": "Walk the Talk Promo",
  "video-v1-subtitle": "The Karet/Setiabudi Transect",
  "video-v1-caption": "In this video we take a walk inside one of Jakarta&#39;s central kampung areas to provide a human perspective on kampung life",

  "video-v2-title": "Formal-Informal Interaction",
  "video-v2-subtitle": "Lunchtime in Karet",
  "video-v2-caption": "In this video we demonstrate the high volume of formal-informal sector interactions during lunch hours at a single site in Karet.",

    /* ------------------- Social Media ---------------- */

    "social-media-title": "Social Media",
    "social-media-subtitle": "Connect with us",

    /* ------------------- Heavy Stuff/Reports ---------------- */

    "reports-page-title": "The Heavy Stuff",
    "reports-page-textbox-title": "Outlining the Urban Diversity Agenda (Coming 2017)",
    "reports-page-textbox-p1": "Our research movement to better understand the city of Jakarta is based on learning every day through interaction and observation, and throughout the course of our investigations certain trends and patterns begin to emerge which allow us to identify important factors in Jakarta&#39;s daily life. We use these observations to construct a narrative of Jakarta&#39;s development and draw important conclusions regarding our city&#39;s future. The reports produced below summarise these key findings as part of our urban diversity agenda, and represent an evolution in our urban understanding. They will be continually expanded and updated as our knowledge grows.",
    "reports-page-tab-title": "Reports",
    "reports-page-tab-coming-soon": "Coming Soon...",

/* ---------------- 'Hover Tabs' ------------------ */

            //----Reports page report tabs "Comgin Soon..." --- //

            "report-tab-gojek-title": "#4 Online Transportation and the Kampung",
            "report-tab-gojek-l1": "RRJ Special Case Study",

            "report-tab-urban-trans-title": "#5 Online transportation: the roots economy and supporting services",
            "report-tab-urban-trans-l1": "A Case Study from Manggarai",

            "report-tab-support-network-title": "#6 A City supported by its roots",
            "report-tab-support-network-l1": "Who relies on what in Jakarta?",

            //----Research Sites----//

            "research-site-karet-title": "Karet",
            "research-site-karet-l1": "The cost of urban living",
            "research-site-karet-l2": "Informal sector as natural subsidies",
            "research-site-karet-l3": "New arrivals and the living city",
            "research-site-karet-l4": "The roots economy and big business",
            "research-site-karet-l4": "Roots economy: drivers of urban development",

            "research-site-Manggarai-title": "Manggarai: Coming 2018",
            "research-site-Manggarai-l1": "Online transport in Jakarta",
            "research-site-Manggarai-l2": "Supporting services",
            "research-site-Manggarai-l3": "Combined formal-informal journeys",
            "research-site-Manggarai-l4": "The power of proximity",
            "research-site-Manggarai-l5": "Multi-sector journeys",

            "research-site-Kalibata-title": "Kalibata: Coming Soon",
            "research-site-Kalibata-l1": "Apartment life and the roots economy",
            "research-site-Kalibata-l2": "Planned accommodation?",
            "research-site-Kalibata-l3": "Residential Symbiosis",
            "research-site-Kalibata-l4": "Access to the city",


            "research-site-Tugu-title": "Tugu: Coming Soon",
            "research-site-Tugu-l1": "The domestic roots economy",
            "research-site-Tugu-l2": "The extent of roots networks",
            "research-site-Tugu-l3": "Proximity benefits",
            "research-site-Tugu-l4": "Who needs the roots economy?",

            //----Social Media----//

            "social-media-tab-title": "Media Sosial",
            "social-media-tab-l1": "Facebook",
            "social-media-tab-space":"-",
            "social-media-tab-l2": "Twitter",
            "social-media-tab-space":"-",
            "social-media-tab-l3": "Instagram",

            //------Photo--------//

            "photo-tab-title": "Photo",
            "photo-tab-l1": "Where we compile all of our pictures of people and places around Central Jakarta",

            //-------Video-------//

            "video-tab-title": "Video",
            "video-tab-l1": "Follow us on a trip around Jakarta or see the Karet at lunchtime",

            //-------Report-------//

            "reports-tab-title": "Research Reports",
            "reports-tab-l1": "Official Reports, conclusions and publications",
            "reports-tab-l2": "Rent and Social Mobility in a Developing Megacity",
            "reports-tab-l3": "Informal economy as social security for urban citizens",
            "reports-tab-l4": "Upcoming Reports",


            //----Reports----//

            "report-tab-eat-title": "#1 Eating and Drinking in a Living City",
            "report-tab-eat-l1": "Pilot research report",
            "report-tab-eat-l2": "Formal/Informal eatery comparison",
            "report-tab-eat-l3": "Informal eatery analysis",
            "report-tab-eat-l4": "What this means for customers and business&#39; in the city",
          
          
            "report-tab-rent-title": "#2 Rent and Social Mobility in a Developing Megacity",
            "report-tab-rent-l1": "Formal/Informal rental comparison",
            "report-tab-rent-l2": "What this means for renting in Jakarta",
          
            "report-tab-roots-title": "#3 The Roots economy: Flexibility, Stability, Security",
            "report-tab-roots-l1": "How does the roots economy make life more secure for everyone?",
          
            //----Raw Data----//
          
            "raw-data-formal-property": "Formal Property",
            "raw-data-formal-subtitle": "A quantitative compiling of rented properties in the Karet area",
          
            "raw-data-kost-property": "Kost Property",
            "raw-data-kost-property-subtitle": "A compiling of rental properties in the Karet area, size, cost and facilities",
          
            "raw-data-formal-food": "Formal Food&amp;Drink",
            "raw-data-formal-food-subtitle": "A compiling of rental properties in the Karet area, size, cost and facilities",
          
            "raw-data-food-vendor": "Food&amp;Drink Vendors",
            "raw-data-food-vendor-subtitle": "A compiling of rental properties in the Karet area, size, cost and facilities",
          

          //----Manifesto---//

          "about-tab-title-manifesto": "Our Manifesto 2016/17",
          "about-tab-manifesto-l1": "Redefining the role of the informal sector",
          "about-tab-manifesto-l2": "Sustainability in a Mega City",
          "about-tab-manifesto-l3": "Study Sites",
          "about-tab-manifesto-l4": "Methodology",
          "about-tab-manifesto-l5": "Urban Development Dictionary",

          //----Social Media----//

          "social-tab-fb-p1": "Our main social media network. Like our page to keep up to date with our activities, engage with the UDP community and participate in the ongoing discussions around Jakarta&#39;s future",

          "social-tab-twit-p1": "Our page for news and live updates on the developing urban diversity agenda. Follow us on twitter to recieve daily updates from UDP events, ask important questions and share your opinions.",

          "social-tab-insta-p1": "Our community media feed. Join our followers on Instagram for photos and videos from our team and community contributors which highlight the vibrant diversity of daily life in the city of Jakarta",

          //-----Interviews-----//

          "interviews-tab-title": "Interviews",
          "interviews-tab-l1": "The actors sharing their stories. The city from their perspective. Updated regularly.",

          //-----Karet-----//

          "karet-tab-title": "Karet Study",
          "karet-tab-l1": "Our most recent Study into the cost of living in Karet, an intersection of formal business and the Kampung community.",

          //-----Research Reports-----//

          "heavy-tab-title": "Research Reports",
          "heavy-tab-l1": "Official Reports, conclusions and publications",


//------ Documentation Download --------//

"documentation-manifesto": "<a href='../documentation/manifesto1617.pdf' target='_blank'>",


}

























/*------------------------------------Indonesian strings-----------------------------------------*/ 


var indStrings = {


  /* Navigation Bar */

  "nav1" : "Home",
  "nav2" : "Tentang Kami",
  "nav3" : "Penelitian",
  "nav4" : "Media &amp; Publikasi",
  "nav5" : "Ingin Terlibat?",
  "nav6" : "Wawancara",

  /* Footer */ 

  "footer-title-1" : "Terlibat",
  "footer-title-1-l1": "Kami selalu mencari peluang",
  "footer-title-1-l2": "baru untuk terlibat dengan orang-orang",
  "footer-title-1-l3": "di seluruh Jakarta",
  "footer-title-1-l4": "",

  "footer-title-2" : "Alamat",
  "footer-title-2-l1" : "Jakan Sukabakti 1,",
  "footer-title-2-l2" : "Bintaro Green Village no. E16,",
  "footer-title-2-l3" : "Tangerang Selatan 15414",


  "footer-title-3" : "Email",
  "footer-title-3-l1" : "jakartaurbandiversity@gmail.com",

  "footer-title-4" : "Media Sosial",


  /* About Us Page */

  "about-title": "Tentang Kami",
  "about-subtitle": "Agenda Urban Diversity untuk Kota yang Hidup",
  "about-textbox-title": "Apa itu Agenda Kebhinekaan Kota dan apa manfaatnya?",

  "about-textbox-p1": "RRJ dimulai berdasarkan pengalaman hidup kami sehari-hari di Jakarta. Ada sesuatu di sekitar kita, jelas namun tidak disadari. Kita melihatnya sebagai hal-hal tunggal, namun saat kami menjelajahi lebih banyak lagi sebuah pola mulai muncul. Jaringan interaksi yang padat antar warga dari semua lapisan masyarakat. &#39;Ekonomi serabut&#39; Jakarta. &#39;Ekonomi serabut&#39;.",

  "about-textbox-p2": "Hampir semua masyarakat Jakarta terlibat dengan ekonomi serabut setiap hari, ini merupakan komponen penting dari siklus makanan, sewa properti, transportasi, bisnis dan jasa di kota. Seiring dengan banyaknya kehidupan di kota, ekonomi serabut sering disalahpahami, atau tidak termasuk dalam pembahasan tentang masa depan kota.",

  "about-textbox-p3": "RRJ adalah sebuah wadah publikasi berbasis pengetahuan yang terus menerus didedikasikan untuk kehidupan sehari-hari orang-orang yang tinggal di Jakarta, yang mana ekonomi serabut adalah cara salah satu cara hidup mereka. Pengusaha sektor informal Jakarta menyediakan berbagai layanan pendukung untuk sebuah kota yang berjuang menghadapi tantangan modernisasi, dengan menggunakan keahlian lokal dan strategi bisnis yang inovatif. Proyek kami berusaha untuk lebih memahami jaringan dan cerita di balik layanan ini, dan membawa pelaku ekonomi serabut ke dalam narasi transformasi perkotaan sebagai mitra setara dalam perdagangan dan pembangunan.",

  "about-textbox-p4": "Setiap orang adalah seorang ahli, dan kami mengundang Anda untuk membagikan gagasan, pendapat, dan perspektif Anda",

  "about-ws-title": "Our Manifesto",

  "about-textbox2-title": "Siapakah Kami",
  "about-textbox2-p1": "Kami adalah sebuah tim kontributor lokal dan internasional yang sangat peduli dengan kehidupan di ibukota Indonesia. Kami berasal dari seluruh lapisan masyarakat, dan memiliki latar belakang yang beragam termasuk arsitektur, desain, perencanaan kota, aktivisme, geografi, ekonomi, media, video dan seni. Kami ingin menceritakan kisahmu.",
  "about-textbox2-p2": "Kami selalu mencari bantuan dan kontribusi, dari pengalaman lokal hingga video tech dan master media sosial, jadi apapun keahlian, minat, atau latar belakang Anda, hubungi kami untuk melihat bagaimana Anda bisa terlibat!  Mitra Lokal Kami",

  "partners-title": "Our Local Partners",
  "partners-hover-tab-rujak": "Center for Urban Studies",
  "partners-hover-tab-kampungesia": "Kampungesia",
  "partners-hover-tab-kom": "Komunitas Desakota",


  

/* --------------- Get Involved --------------------- */


"get-involved-title": "Ayo Gabung",
"get-involved-textbox-title" : "Ingin terlibat dalam penelitian ini?",
"get-involved-textbox-p1": "RR-JKT meneydiakan ruang bagi siapa saja untuk turut membangun narasi tentang masa depan Jakarta. Apapun latar belakang dan ketertarikanmu, kmai mengajak semuanya untuk turut membangun kota ini bersama-sama.",
"get-involved-contact-subtitle": "Hubungi Kami",
"get-involved-contact-subtitle2": "Tertarik dengan organisasi kami? Anda ingin terlibat?",
"get-involved-contact-p1": "RRJ adalah gerakan penelitian publik, dan kami mengundang semua orang untuk terlibat. Apapun latar belakang, minat atau pengalaman Anda",
"get-involved-contact-p2": "Kirimkan email ke jakartaurbandiversity@gmail.com (kami biasanya merespon dalam waktu 5 hari kerja)",
"get-involved-tab-social-media-title": "Media Sosial",
"get-involved-tab-social-media-subtitle": "",




/* ------------------ Home Page --------------------- */

  "home-title": "Rame Rame Jakarta",
  "home-subtitle": "<i>&#39;&#39;Hidup bersama dalam kota berkembang terbesar di dunia&#39;&#39;</i>",
  "home-textbox-title": "Kita semua memiliki perspektif yang berbeda mengenai kota. Setiap orang adalah seorang ahli.",
  "home-tab-title-essentials": "Rame Rame Essentials",

  /* --------------- Interview Page ----------------- */

  "interview-title": "Wawancara",
  "interview-subtitle": "Para pelaku berbagi cerita. Kota kita dari sudut pandang mereka.",
  "interview-textbox-title": "Serial Wawancara",
  "interview-textbox-p1": "Kota yang hidup adalah, berdasar kebutuhan, yang paling mampu menyokong kehidupan warga yang tinggal di dalamnya. Di RRJ, kami menyadari bahwa data mentah saja tidak mampu menangkap gambaran sesungguhnya tentang apa artinya hidup di Jakarta, dan kami mengandalkan wawancara langsung dengan penduduk dari beragam latar belakang guna membangun topik penelitian kami. ",
  "interview-recent-title": "Wawancara terbaru",

  "interview-scroll": "(gulir ke kanan)",

  /*----- Recent Interviews ------*/

                                              /* ------------------------ Pak Ono */








  "interview-recent-name-1": "Nama:",
  "interview-recent-name-ans-1": "Pak Ono",
  "interview-recent-business-1": "Bisnis/Servis:",
  "interview-recent-business-ans-1": "Warung Rokok + Makanan (Tenda)",
  "interview-recent-since-1": "Usaha sejak:",
  "interview-recent-since-ans-1": "~ 1999",
  "interview-recent-loc-1": "Lokasi:",
  "interview-recent-loc-ans-1": "Pasar Baru",

  "interview-recent-q1-1": "Bapak tinggal dimana?",
  "interview-recent-a1-1": "Saya tidur disini (menunjuk ruang kegiatan ditengah warung). Kalau malam, terpalnya tinggal diturunin (ditutup) lalu saya tidur di dalam, diantara barang dagangan. Kalau Anak dan isteri sih tinggal di rumah kontrakan tidak jauh dari sini.",

  "interview-recent-q2-1": "Jadi bapak usaha ini bertiga?",
  "interview-recent-a2-1": "Iya. tapi setiap 2 bulan sekali saya pulang ke kampung di Kuningan, Jawa Barat selama 2 bulan juga disana. Yang ngejalanin usahanya gantian sama saudara saya. Aplusan lah.",

  "interview-recent-q3-1": "Kenapa mulai usaha ini ? Apakah ada perubahan bentuk usaha sejak awal dimulai hingga sekarang?",
  "interview-recent-a3-1": "Awalnya usaha kecil-kecilan jualan rokok dan air minum di pinggir jalan, lalu lama-lama jenis dan jumlah barang dagangannya bertambah banyak. Seperti sekarang ini, jual nasi dan lauk-pauk juga. Kalau bahan-bahan makanan saya beli di pasar sayur tidak jauh dari sini, di dekat rel kereta.",

  "interview-recent-q4-1": "Bagaimana usaha ini memeberikan keuntungan?",
  "interview-recent-a4-1": "Yang paling mahal dan menguntungkan itu usaha jual beli rokoknya, baru kemudian usaha makanan.",

  "interview-recent-q5-1": "Kalau mengenai rencana ke depannya ? Ada rencana bikin warung?",
  "interview-recent-a5-1": "Ya pengennya sih begitu, tapi belum kepikir lah, belum cukup modalnya.",









                                /*----------------------- Pak Rofi + Ibu Marwiti */











                                
  "interview-recent-name-2": "Nama:",
  "interview-recent-name-ans-2": "Pak Rofi &amp; Ibu Marwiti",
  "interview-recent-business-2": "Bisnis/Servis:",
  "interview-recent-business-ans-2": "Warteg",
  "interview-recent-since-2": "Usaha sejak:",
  "interview-recent-since-ans-2": "1985 (setiabudi) 1997 (Karet)",
  "interview-recent-loc-2": "Lokasi:",
  "interview-recent-loc-ans-2": "Kampung Karet",

  "interview-recent-q1-2": "Bapak dan Ibu, tinggal dimana?",
  "interview-recent-a1-2": "Kami tinggal di sini, ada lantai atasnya. Biaya sewanya sangat mahal, harga IDR35.000.000 per tahun, tapi lokasi ini strategis sekali, dan Wartegnya buka 24 jam jadi kami harus sedekat mungkin.",

  "interview-recent-q2-2": "Jadi usaha ini dijalankan berdua?",
  "interview-recent-a2-2": "Iya. Kami sekeluarga tinggal di sini. Kami berdua tinggal di daerah ini, jadi tidak harus pulang jauh. Sekolah anak-anak juga dekat.",

  "interview-recent-q3-2": "Kenapa mulai usaha ini? Apakah ada perubahan bentuk usaha sejak awal dimulai hingga sekarang?",
  "interview-recent-a3-2": "Ini usaha turun-temurun. Keluarga saya asli dari Tegal. Kami memulai usaha  di Jakarta selama lebih dari 30 tahun. Dulunya ada warteg di Setiabudi, kemudian direlokasi ke sini. Banyak yang sudah berubah selama kami berjualan, tapi warteg kami masih terkenal.",

  "interview-recent-q4-2": "Bagaimana usaha ini memberikan keuntungan?",
  "interview-recent-a4-2": "Tergantung. Kalau lagi ramai, keuntungannya bisa IDR1.000.000 per hari, tapi tidak menentu. Harga sewanya tinggi dan setiap hari kami menghabiskan IDR150.000 untuk sayur dan IDR700.000 untuk ayam, ikan atau daging. Beli bahan-bahannya di Pasar Monces antara jam 3 sampai jam 6 pagi karena usahanya selalu dibuka.",

  "interview-recent-q5-2": "Bagaimana mengenai rencana ke depannya?",
  "interview-recent-a5-2": "Iya… boleh minta photo kami diambil?",






                                                  /*-------------------------------- Pak Ajay */





  "interview-recent-name-1": "Nama:",
  "interview-recent-name-ans-3": "Pak Ajay",
  "interview-recent-business-1": "Bisnis/Servis:",
  "interview-recent-business-ans-3": "Mie Ayam",
  "interview-recent-since-1": "Usaha sejak:",
  "interview-recent-since-ans-3": "1990",
  "interview-recent-loc-1": "Lokasi:",
  "interview-recent-loc-ans-3": "CFD - bun HI",

  "interview-recent-q1-3": "Bapak tinggal dimana?",
  "interview-recent-a1-3": "Saya tinggal di kontrakan dekat dari Stasiun Tanah Abang. Letaknya di Jl. Petamburan 3. Biasanya saya berjualan mie ayam di Pasar Tanah Abang Blok A, jadi lokasinya strategis. Saya jarang bisa pulang ke Kuningan, mungkin hanya setahun sekali setiap Idul Fitri.",

  "interview-recent-q2-3": "Jadi bapak ke CFD setiap minggu?",
  "interview-recent-a2-3": "Iya, betul. Ada banyak pelanggan di sini, jadi keuntungannya tinggi. Bundaran HI sedikit jauh dari rumah saya, butuh jalan kaki hampir satu jam, tapi saya yakin pasti terjual. ",

  "interview-recent-q3-3": "Kenapa mulai usaha ini ? Apakah ada perubahan bentuk usaha sejak awal dimulai hingga sekarang?",
  "interview-recent-a3-3": "Saya berjualan mie ayam sejak 1990, jadi saya melihat banyak perubahan. Usahanya masih menguntungkan, menghasilkan IDR50.000-100.00 per hari. Itu cukup untuk sewa kontrakan.",

  "interview-recent-q4-3": "Bagaimana usaha ini memberikan keuntungan?",
  "interview-recent-a4-3": "Saya beli bahan-bahannya murah di Pasar Palmerah lalu bangun jam 3 pagi setiap hari untuk mulai memasak. Biasanya mulai berjualan sekitar jam 6 pagi. Kalau laku, saya bisa memperoleh untung dari modal IDR450.000.",

  "interview-recent-q5-3": "Kalau mengenai rencana ke depannya?",
  "interview-recent-a5-3": "Ada 2 anak. Saya berencana membiayai pendidikan dan keseharian mereka",







                                                /*---------------------------Pak Iding*/





  "interview-recent-name-1": "Nama:",
  "interview-recent-name-ans-4": "Pak Iding",
  "interview-recent-business-1": "Bisnis/Servis:",
  "interview-recent-business-ans-4": "Bubur ayam",
  "interview-recent-since-1": "Usaha sejak:",
  "interview-recent-since-ans-4": "kira2 1978",
  "interview-recent-loc-1": "Lokasi:",
  "interview-recent-loc-ans-4": "CFD - bun HI",

  "interview-recent-q1-4": "Bapak tinggal dimana?",
  "interview-recent-a1-4": "Saya tinggal di Tanah Abang, sewa kos bersama di sana. Lokasinya strategis untuk usaha saya. Keluarga saya tinggal di Cirebon, jadi saya pulang ke sana setiap dua bulan sekali selama satu minggu.",

  "interview-recent-q2-4": "Jadi bapak selalu berjualan di sini?",
  "interview-recent-a2-4": "Tidak. Biasanya setiap Senin s/d Jumat berjualan bubur di Menara Mandiri, Tanah Abang. Setiap Minggu ke Bundaran HI saat CFD dan selalu di lokasi ini.",

  "interview-recent-q3-4": "Kenapa mulai usaha ini? Apakah ada perubahan bentuk usaha sejak awal dimulai hingga sekarang?",
  "interview-recent-a3-4": "Saya mulai jualan bubur selama 40 tahun. Semua berubah. Tapi, banyak orang yang masih berminat makan bubur ayam dan ini alasan usaha saya masih menguntungkan. Sejak pertama kali dimulai, gerobak sudah diganti empat kali, dan sekarang harus bayar biaya kebersihan IDR30.000 kalau mau berjualan di sekitar Bundaran HI.",

  "interview-recent-q4-4": "Bagaimana usaha ini memberikan keuntungan?",
  "interview-recent-a4-4": "CFD adalah hari yang sangat penting bagi usaha saya karena paling menguntungkan. Hari Minggu banyak pelanggan yang datang, tapi terlalu jauh dari rumah saya dan panas sekali, jadi saya jual di harga IDR10.000. Di hari biasa, saya bangun jam 2 pagi untuk memasak bubur, lalu mulai berjualan di Menara Mandiri jam 4 pagi saat jam sarapan. Sehingga, harga jualnya IDR8.000 aja.",

  "interview-recent-q5-4": "Kalau mengenai rencana ke depannya?",
  "interview-recent-a5-4": "Saya berharap bisa terus berjualan dan menghidupi keluarga. Jika timbul aturan melarang berjualan dengan gerobak, akan sulit bagi saya.",







                                          /* -----------------------------------Pak Kris*/








  "interview-recent-name-ans-5": "Pak Kris",
  "interview-recent-business-ans-5": "Jual Jok mobil dan Tukan Jahit",
  "interview-recent-since-ans-5": "kira2 1997",
  "interview-recent-loc-ans-5": "Jl. Kebon Sirih Timur Dalam",
 
  "interview-recent-q1-5": "Apakah pekerjaan yang Bapak lakukan di jalan Kebun Sirih Timur Dalam?",
  "interview-recent-a1-5": "Saya berjualan jok mobil dan menjahit (memperbaiki) jok yang rusak atau sobek. Saya juga menjual interior mobil sesuai pesanan.",
 
  "interview-recent-q2-5": "Kenapa berjualan di jalan ini?",
  "interview-recent-a2-5": "arena dari sejak kakek nenek saya sudah terkenal jalan ini yang berjualan jok mobil",
 
  "interview-recent-q3-5": "Sudah berapa lamakah Bapak berjualan disini?",
  "interview-recent-a3-5": "Sekitar 20 tahun. Saya generasi ketiga disini.",
 
  "interview-recent-q4-5": "Apakah bapak ingin anak bapak melanjutkan usaha Bapak ini?",
  "interview-recent-a4-5": "Saya rasa tidak karena saya ingin anak saya mendapatkan penghasilan yang lebih baik daripada pekerjaan ini",
 
  "interview-recent-q5-5": "Siapa yang menjadi pelanggan Bapak selama berjualan disini?",
  "interview-recent-a5-5": "Banyak, ada individual dan perusahaan",
 
  "interview-recent-q6-5": "Dimanakah Bapak membeli bahan baku untuk jualan?",
  "interview-recent-a6-5": "Dari Pasar Tanah Abang.",
 
  "interview-recent-q7-5": "Jualan disini apakah Bapak membayar uang sewa tempat?",
  "interview-recent-a7-5": "Ya, ada lah, bayar sewa tempat",
 
  "interview-recent-q8-5": "Selama Bapak berjualan disini 20an tahun, apakah Bapak merasakan banyak perubahan?",
  "interview-recent-a8-5": "Ya, saya merasakan beberapa perubahan seperti customer yang makin sedikit karena persaingan di tempat lain dan harga beli yang semakin mahal.",





  /*--------------------------------Pak Nursin */

  "interview-recent-name-ans-6": "Pak Nusrin",
  
   "interview-recent-business-ans-6": "Jual Jok mobil dan Tukan Jahit",
  
   "interview-recent-since-ans-6": "kira2 1982",
  
   "interview-recent-loc-ans-6": "Jl. Kebon Sirih Timur Dalam",
  
   "interview-recent-q1-6": "Apakah pekerjaan yang Bapak lakukan di jalan Kebun Sirih Timur Dalam?",
   "interview-recent-a1-6": "Saya berjualan jok mobil dan menjahit (memperbaiki) jok yang rusak atau sobek.",
  
   "interview-recent-q2-6": "Sudah berapa lamakah Bapak berjualan disini?",
   "interview-recent-a2-6": "Sekitar 35 tahun",
  
   "interview-recent-q3-6": "Siapa yang menjadi pelanggan Bapak selama berjualan disini?",
   "interview-recent-a3-6": "Banyak, ada yang dari individual, yang membawa mobilnya sendiri untuk diganti joknya. Ada juga dari perusahaan seperti Showroom yang mencari jok untuk mobil yang akan mereka jual",
  
   "interview-recent-q4-6": "Dimanakah Bapak membeli bahan baku untuk jualan?",
   "interview-recent-a4-6": "Dari Pasar Tanah Abang dan Pasar Senen",
  
   "interview-recent-q5-6": "Apakah Bapak menyimpan persediaan untuk penjualan Bapak?",
   "interview-recent-a5-6": "Tidak, saya membeli jok baru sesuai dengan pesanan dari pelanggan karena pesanan pelanggan bisa berbeda-beda baik dari sisi ukuran maupun warna.",





/* -------------------------------------------------- Pak Syaifudin */




"interview-recent-name-ans-7": "Pak Syaifudin",

 "interview-recent-business-ans-7": "Pedagang Gerobak",

 "interview-recent-since-ans-7": "2012",

 "interview-recent-loc-ans-7": "Kebon Sirih",

 "interview-recent-q1-7": "Apakah pekerjaan yang Bapak lakukan di jalan Kebun Sirih Timur Dalam?",
 "interview-recent-a1-7": "Saya berjualan banyak hal, dari tas, topi, meteran dan lain.",

 "interview-recent-q2-7": "Kenapa berjualan di jalan ini?",
 "interview-recent-a2-7": "Karena disini ada proyek bangunan, pelanggan saya adalah pekerja bangunan.",

 "interview-recent-q3-7": "Ada gerobak, ya? Selain berjualan disini, berjualan dimana saja?",
 "interview-recent-a3-7": "Saya berjualan di jalan Jaksa juga.",

 "interview-recent-q4-7": "Sudah berapa lamakah Bapak berjualan?",
 "interview-recent-a4-7": "Sekitar 5 tahun.",

 "interview-recent-q5-7": "Kenapa Bapak memilih berjualan?",
 "interview-recent-a5-7": "Karena saya lebih suka pekerjaan yang fleksibel. Saya pernah kerja menjadi buruh, namun waktunya tidak fleksibel. Kerja seperti ini lebih bebas, tidak ada yang ngatur",

 "interview-recent-q6-7": "Dari mana bapak mendapatkan bahan jualan?",
 "interview-recent-a6-7": "Ada bos yang mengkordinasi semuanya, saya ambil barang dari dia.",

 "interview-recent-q7-7": "Dimana Bapak tinggal?",
 "interview-recent-a7-7": "Saya tinggal di Manggarai, Kost.",

 "interview-recent-q8-7": "Kenapa tidak jualan di Manggarai, kan lebih dekat ke tempat tinggal?",
 "interview-recent-a8-7": "Karena disana tidak terdapat proyek bangunan. Saya jalan kaki ke daerah ini setiap hari untuk pelanggannya",

 "interview-recent-q9-7": "Untuk makan siang dan sebagainya, biasanya bapak makan dimana?",
 "interview-recent-a9-7": "Saya sih gampang, warung disekitar sini banyak, tinggal milih.",





  /* ------------------------------------------ Mas Yana ------------*/


  "interview-recent-name-ans-8": "Mas Yana",
  
   "interview-recent-business-ans-8": "Gado-gado",
  
   "interview-recent-since-ans-8": "2011",
  
   "interview-recent-loc-ans-8": "Kampung Karet",
  
   "interview-recent-q1-8": "Bapak tinggal dimana?",
   "interview-recent-a1-8": "Saya tinggal di kos dengan saudara dan Paman. Paman saya mengajarkan kami cara membuat gado-gado. Lalu, kami berjualan gado-gado menyebar di tempat yang berbeda-beda.",
  
   "interview-recent-q2-8": "Jadi usaha ini dijalankan bertiga?",
   "interview-recent-a2-8": "Ya. Dulu saya dagang rokok dan mie instan di beberapa tempat. Kemudian Paman saya mengajak untuk ikut usaha gado-gado. Kita juga mengajak orang lain untuk bergabung, tapi beberapa kurang berminat atau sulit mengatur jadwal berjualan.",
  
   "interview-recent-q3-8": "Apakah ada perubahan bentuk usaha sejak awal dimulai hingga sekarang?",
   "interview-recent-a3-8": "Saya senang dan nyaman di lokasi ini. Saya bayar semacam retribusi ke RT setempat, tapi diharuskan ikut bantu kegiatan warga seperti kerja bakti juga. Saat ini, tukang dagang di sebelah (dulu pedagang gorengan) tidak lagi diizinkan berjualan oleh Ketua RT, karena dinilai tidak disiplin dan membuat kotor. Ketua RT saat ini tidak lagi mengizinkan adanya tambahan tukang dagang di wilayahnya.",
  
   "interview-recent-q4-8": "Bagaimana usaha ini memberikan keuntungan?",
   "interview-recent-a4-8": "Usaha gado-gado saat ini sebenarnya terdiri dari 3 tempat usaha yang berbeda. Paman saya di kantin Gedung Departemen Kesehatan, satu orang saudara saya di depan gang kampung Karet, dan saya di gang belakang. Kami belanja bahan-bahannya bersama di pasar, tapi harga jualnya berbeda tergantung tempat berjualannya. Di kantin Departemen Kesehatan, harga jual mencapai 25rb, sedangkan di gerobak seperti saya hanya 12rb.",
  
   "interview-recent-q5-8": "Kalau mengenai rencana ke depannya?",
   "interview-recent-a5-8": "Rencana ke depan? Mungkin kalau nanti saya berkeluarga, saya ingin pindah berjualan di tempat yang lebih permanen seperti kantin. Tapi saat ini saya masih merasa lebih nyaman usaha pakai gerobak karena jadwal kerja lebih fleksibel. Sambil duduk-duduk di luar lebih enak juga, kan?",

















  /*---- Food And Drink ----*/

  "interview-food-est-1": "<strong>Produk:</strong> Gado Gado",
  "interview-food-price-1": "<strong>Harga:</strong>12.000 (15.000 termasuk minuman)",
  "interview-food-quote-1": "Saya beli semua bahan-bahan segar dari pasar dekat sini, dan menyiapkan pembuatan saus kacangnya sesuai pesanan; agar rasanya tetap enak sehingga pelanggan suka dan selalu balik (membeli) lagi. Saya tinggal di kost dekat sini, sewanya 1 juta per bulan. lumayan mahal, tapi saya bisa tinggal dekat dengan tempat terbaik untuk menjual makanan ada kamar yang lebih murah tersedia disini, tapi aku tinggal bersama istri dan anak-anak jadi saya membutuhkan ruang tambahan. Kampung ini penting bagi saya karena membantu menjaga pengeluaran tetap rendah, dan tinggal di dekatnya berarti saya bisa datang ke sini setiap hari dan menyediakan makanan murah ke pelanggan saya, yang membuat mereka senang juga!",

  "interview-food-est-2": "<strong>Produk:</strong> Nasi Tegal",
  "interview-food-price-2": "<strong>Harga:</strong>14.000 (17.000 termasuk minum)",
  "interview-food-quote-2": "Kami sudah disini cukup lama, sekitar 10 tahun, dan melihat memang situasi disini sudah sangat berubah dibanding dulu. Kami melayani beragam pelanggan - pebisnis, pekerja konstruksi, warga kampung dan pelajar semuanya seneng makan disini. Meskipun tempatnya sempit tapi pada betah aja kami bahkan bisa bersaing dengan restoran sebelah yang lebih mahal. Disini kami semua adalah teman, dan punya hubungan yang dekat dengan komunitas lokal; hal itu membrikan layanan yang cepat dan terbaik. Kita selalu bisa minta tuker duit ke sesamam penjual untuk uang receh kembalian. Kami tinggal berdekatan, bahkan kegiatan mencuci piring dan alat-alat makan pun bisa kami lakukan di rumah karena dekat.",

  "interview-food-est-3": "<strong>Produk:</strong> Bakso Spesial",
  "interview-food-price-3": "<strong>Harga:</strong>15.000 (18.000 termasuk minum)",
  "interview-food-quote-3": "Saya tidak tinggal di kampung dekat sini, tapi saya tinggalnya di Bogor. Saat ini saya bekerja di beberapa proyek besar di sekitar sini jadi saya selalu datang kesini untuk sarapan dan makan siang - banyak pilihan. Favorit saya bakso pedas, karena rasanya rame Sotonya juga enak, banyak pilihan. Proyek tempat saya bekerja setidaknya mempekerjakan 100 orang, jadi potensi pelanggan yang banyak buat para penjual makanan. Keberadaan kampung yang sangat dekat dengan proyek baik bagi pekerja, karena mereka biasanya tidak sempat sarapan sebelum berangkat kerja. Hal itu (bisa beli makanan) bikin pekerja senenag dan proyek pun lancar.",

  "interview-food-est-4": "<strong>Produk:</strong> Mie Ayam",
  "interview-food-price-4": "<strong>Harga:</strong> 12.000",
  "interview-food-quote-4": "Kami (pekerja) ngontrak rumah bareng-bareng di deket sini. Harganya 1,2 juta per bulan untuk kami semua (ber3) , jadi lebih murah dari kost. Kita perlu tempat dagang dan tinggal yang deket-deket sini soalnya pelanggannya juga dari sekitar sini, klo pas jam istirahat yang sebentar, gak bisa jauh-jauhga bisa jauh-jauh. Beruntung juga bisa dapet tempat disini, karena harga sewa yang murah maka harga makannya juga bis amurah. Kami juga menyediakan layanan pesan terlebih dahulu pakai SMS  - jadi begitu mereka sampai ke warung makanannya sudah siapdisini kami buka sampai jam 3 sore, lalu setelahny apindah ke sekitar halte Dukuh Atas. Kami harus memastikan kalau makananya cukup dan alat-alat makanannya bersih supaya bisa buka sampai malam. Sibuk banget sih tapi kita selalu berusaha melayani pelanggan dengan baik, supaya mereka puas dan bisa makan mie yang enak",

  "interview-food-est-5": "<strong>Produk:</strong> Maskan Padang",
  "interview-food-price-5": "<strong>Harga:</strong>  15.000 (18.000 termasuk minum)",
  "interview-food-quote-5": "Disini (kampung) bisnis oke - jam makan siang adalah waktu tersibuk tapi kami buka sampai jam 8 malam dan masih dapat pelanggan karena lokasi kami yang dekat jalan utama, berhadapan langsung dengan perkantoran. Makanan padang sangat terkenal, dan semua orang datang kesinipekerja kantor yang datang ke sini untuk makan siang,lau setelahnya datang pekerja konstruksi. Kami biasanya membeli bahan-bahan kami dari Pasar dekat sini tetapi jika kita kehabisan kita selalu bisa mendapatkan lebih dari dekat di kampung. Kita semua sewa kost di sini juga - yang murah dan kami tidak perlu melakukan perjalanan jauh untuk bekerja. Kampung karet telah menjadi rumah kami.",

  "interview-food-est-6": "<strong>Produk:</strong> Street Vendor",
  "interview-food-price-6": "<strong>Harga:</strong> 3.000-10.000",
  "interview-food-quote-6": "Kami tinggal di kampung Setiabdi, tapi kami dagang di Karet soalnya pekerja konstruksi banyak disini. Kami jual rokok, kopi, makanan ringan dan minuman, juga menyediakan beberapa bangku plastik untuk tempat duduk pembeli. Lokasi kami pas di pintu keluar proyek jadi banak pembeli kami adalah pekerja konstruksi, tapi tidak sedikit juag para pekerja kantoran beli kesini. Lokasi ini sangat pas buat kami; di persimpangan yang sangat ramai dan dekat dengan Kampung. Mungkin kalo proyek konstruksi disini sudah selesai, kami akan pindah mencari lokasi lain yang pas.",

  "interview-food-est-7": "<strong>Produk:</strong>  Beragam",
  "interview-food-price-7": "<strong>Harga:</strong> ~16.000 (18.500 termasuk minum)",
  "interview-food-quote-7": "Saya telah membuka usaha disini sejak lama sekali; mungkin sekitar 15 tahun lebih. Sebenarnya ini tempat parkir tapi saya sewa untuk menjual makanan dan minuman bagi para pekerja disini. Kami buka jam 07.00 sampai jam 14.00, untuk melayani sarapan dan makan siang... bisnis disini oke karena permintaan yang tinggi dari kantor sekitarnya. Kami tidak terletak di jalan utama, sehingga bisnis tidak bisa bertahan hidup kecuali ada banyak orang yang datang dan menemukan tempat kami. Semua makanan kita dimasak dadakan, jadi kita harus mengoperasikan sistem yang sangat cepat untuk mencuci meja dan piring siap untuk pelanggan baru. Kami selalu ramai saat makan siang kami menawarkan berbagai macam makanan dan semua orang bisa makan sesuatu yang mereka sukai. Kami juga menyediakan layanan pengiriman ke daerah terdekat sehingga orang dapat menikmati makanan kami di kantor mereka jika mereka terlalu sibuk untuk datang kesini. Hubungan antara sektor formal dan informal adalah dasar dari bisnis kami!",

  /*----Rent and Space-----*/

  "interview-rent-name-1": "Ruhludin Kudus, 26",
  "interview-rent-job-1": "Arsitek",
  "interview-rent-quote-1": "Saya mulai bekerja di daerah Karet pada bulan April 2015 untuk sebuah kantor desain, dan pindah ke ruang kost kontrakan segera setelahnya. Namun, setelah satu bulan, capek juga. Penyebabnya adalah perjalanan panjang dan jam lembur yang tak tertahankan. Kadang-kadang saya akan bekerja sampai tengah malam dan kemudian bangun lagi di 4:30 untuk tiba di kantor untuk 08:00. Intinya, saya perlu untuk menemukan tempat lebih dekat ke kantor saya. Aku berbagi kamar kost dengan saudara, kami membagi sewa bulanan Rp1.800.000, tetapi Jika Anda ingin kamar untuk diri sendiri harga Rp1.500.000. Sebelumnya saya tinggal di dekat kantor, hanya 800.000 / bulan, tapi tanpa AC dan kamar mandi di luar. Di tempat baru saya mendapatkan fasilitas yang lebih baik, dan karena saya tidak keberatan berbagi kamar itu tidak terlalu mahal, juga dekat dengan commuter line yang cepat dan murah. Jauh lebih baik daripada bolak-balik dari Bintaro! Ada kost tersedia di dekat kantor saya tapi terlalu mahal; lebih dari 1jt / bulan. Saya suka suasana di tempat saya - seperti rumah biasa dan pemilik tinggal bersama kami di lantai bawah. Jika.. tidak ada kost terjangkau di Jakarta pusat saya kira saya harus berhenti dari pekerjaan saya dan pergi ke tempat lain - tidakmungkin bisa bolak-balik seperti sebelumnya, dan pilihan menyewa kost lainnya terlalu mahal untuk gaji saya.",

  "interview-rent-name-2": "Nurul Nurhadiyani, 27",
  "interview-rent-job-2": "Arsitek",
  "interview-rent-quote-2": "Saya berasal dari bandung tapi saya pindah ke Jakarta pada tahun 2010 setelah saya lulus, untuk bekerja. Pada awalnya saya tinggal di rumah keluarga saya di Kebon Jeruk tapi perjalanannya melelahkan. Saya memutuskan untuk menemukan tempat lebih dekat ke kantor saya. Pada awalnya saya gugup untuk tinggal di Kampung Karet, tapi saya benar-benar menemukan itu cukup nyaman, dan tidak menakutkan seperti yang saya pikir sebelum saya datang ke sini. Kamarku harganya Rp1.500.000 / bulan dan hanya lima menit berjalan kaki dari kantor saya. Karet adalah lokasi yang sangat strategis, dekat dengan pusat dan &#39;car free day&#39; di Jalan Sudirman, tetapi menjadi dekat dengan pekerjaan adalah yang paling penting bagi saya. Sekarang ada gojek dan aplikasi transportasi lainnya jadi aku bisa bergerak sedikit lebih jauh dari kantor. Jika kost murah tidak tersedia di Karet saya akan pindah ke tempat lain, asal perjalanan untuk bekerja adalah kurang dari 30 menit. Saya tidak tahu apa yang akan saya lakukan jika daerah seperti Kampung Karet tidak ada di Jakarta pusat namun, karena maksimum saya akan bersedia untuk membayar sewa setiap bulan akan 2.000.000, dan tidak ada apartemen untuk harga di lokasi yang baik.",

  "interview-rent-job-3": "Manajer Konstruksi",
  "interview-rent-quote-3": "Kami masing-masing sudah berkeluarga sehingga kami tinggal bersama mereka di bintaro;. Tidak ada cukup ruang di kota untuk istri saya dan anak-anak untuk tinggal bersama kami. Ada sejumlah besar pekerja pada proyek-proyek kami yang tinggal di kampung, namun, biasanya perusahaan menyewakan kamar kost bagi mereka di daerah dekat sini. Biasanya mereka akan menyewa untuk seluruh kelompok, dan. Mencoba untuk bernegosiasi dengan pemilik untuk mendapatkan harga yang baik; kadang pemilik rumah mengizinkan sistem berbagi kamar jika itu adalah kelompok besar. Pekerja yang tinggal di dekat tempat konstruksi berarti mereka tetap beristirahat dengan baik, dan tidak perlu bolak-balik sehingga mereka selalu bekerja tepat waktu. penting untuk industri konstruksi",

  "interview-rent-job-4": "Pekerja konstruksi",
  "interview-rent-quote-4": "Saya bekerja di salah satu kontraktor besar di wilayah Karet; kantor kami menyewa sebuah rumah untuk dijadikan tempat tinggal untuk kami di dekat kampung, jadi kamipun kalau makan di dekat-dekat sini juga. Ketika proyek disini selesai dan kantornya buka, daerah ini akan semakin ramai dan sibuk the new demand. The building I am working on alone is 44-storeys, so it could bring thousands of new workers. Having the kampung so close to the construction sites is good for us, because we have access to food, drink, shops and nearby social spaces. If we had to stay in on-site accommodation sometimes the options are extremely limited.",

  /* -------------- Karet Page -------------------- */

  "karet-title": "Karet",
  "karet-subtitle": "Terletak di pusat salah satu kawasan bisnis tersibuk di Jakarta, Karet adalah rumah bagi komunitas kampung yang besar",
  "karet-textbox-title": "Biaya Hidup: Peran ekonomi serabut dalam menyediakan makanan, minuman dan tempat yang aman untuk tidur",
  "karet-textbox-p1": "Untuk penelitian independen pertama kami yang menunjukkan manfaat dari pendapatan campuran (formal-informal), kami fokus pada lingkungan Karet; sebuah lokasi strategis di pusat salah satu kawasan bisnis tersibuk di Jakarta, dan juga merupakan rumah bagi komunitas kampung yang besar. Bagaimana kedua dunia ini berinteraksi, dan seberapa jauh kedekatan keduanya bagi orang-orang yang tinggal dan bekerja di sana?",
  "karet-tabs-title": "Laporan",
  "interview-food-title": "Makanan dan Minuman",
  "interview-rent-title": "Sewa dan Ruang",
  "karet-raw-data-tab-title": "Raw Data",

  /*---------------- Media And Publications ------------------*/

  "media-title": "Media &amp; Publikasi Kami",
  "media-subtitle": "Berbagi agenda dan temuan seluas mungkin itu penting bagi kami. Di sini Anda dapat mengakses publikasi, media dan platform online lainnya untuk digunakan sendiri, atau untuk berbagi di media sosial",

  "media-textbox-title": "Informasi Publik tentang Persyaratan Anda",

  "media-textbox-p1": "Kami ingin penelitian, prioritas dan agenda kami menjangkau sebanyak mungkin orang, dari berbagai lapisan masyarakat. Kami berbagi aktivitas, data mentah, kesimpulan dan pertanyaan lanjutan dengan menggunakan berbagai platform, dan mendorong setiap orang untuk mengeksplorasi karya kami yang telah diterbitkan.",

  "media-textbox-p2": "Akses ke diskusi bagi semua orang, terlepas dari latar belakangnya, penting bagi kami, dan profil media sosial kami adalah cara terbaik untuk terlibat, mengajukan pertanyaan dan mengikuti aktivitas kami.",

  "media-textbox-p3": "Punya foto atau video menarik yang menampilkan kehidupan di Jakarta yang bisa membantu orang berpikiran berbeda tentang kota ini? Kirimkan ke fitur di salah satu galeri online kami.",

  "media-tab-title": "Media &amp; Publikasi Kami",

  /*------------------ Our Research -------------------------*/

  "our-research-title": "Penelitian Kami",
  "our-research-subtitle": "Independen, lokal, dan tersedia bagi semua, adalah dasar dari Rame-Rame Jakarta",
  "our-research-textbox-title": "Cerita nyata dan data nyata. Ekonomi serabut di Jakarta dalam kehidupan kita sehari-hari.",

  "our-research-tab-title": "Lokasi Penelitian",
  "our-research-tab-text":"Situs ini menampilkan fase pertama dari program penelitian kota kami, namun selalu terbuka atas perluasan area penelitian. Jika kamu punya ide tentang topik datau lokasi baru, atau ingin mengontribusikan penelitiannya, <a href='contactUs.html'>kontak kami</a>.",


  /* -------------------- Photo -----------------------*/

  "photo-title": "Rame Rame Fotografi",
  "photo-subtitle": "Segera akan datang...",
  "photo-textbox-title": "Sebuah gambar dapat berbicara seribu kata. Dengan melihat maka kita dapat mengerti.",
  "photo-textbox-p1": "Kirimkan fotomu ke instagram kami!",
  "photo-textbox-p2": "Semua gambar kami bebas untuk diunduh dan untuk penggunaan non-komersial oleh siapapun, cukup tag #rameramejakarta",


  /* -------------------Social Media ---------------- */

  "social-media-title": "Media Sosial",
  "social-media-subtitle": "Terhubung dengan kami",

    /* -------------------- Video -----------------------*/

    "video-title": "Rame Rame Video",
    "video-textbox-title": "Pustaka Video",
    "video-textbox-p1": "Jakarta adalah kota yang bergerak - siang atau malam, irama kehidupan sehari-hari di kota metropolitan yang luas ini tidak pernah berhenti. Dari jalanan maupun dari ketinggian, kami mencoba menangkap energi dinamis kota kita melalui film/video.",
    
    "video-v1-title": "Walk the Talk Promo",
    "video-v1-subtitle": "The Karet/Setiabudi Transect",
    "video-v1-caption": "Dalam video ini kita berjalan-jalan di dalam salah satu daerah kampung pusat Jakarta untuk memberikan perspektif manusia pada kehidupan kampung.",
    
    "video-v2-title": "Formal-Informal Interaction",
    "video-v2-subtitle": "Lunchtime in Karet",
    "video-v2-caption": "Dalam video ini kita menunjukkan tingginya volume interaksi sektor formal-informal selama jam makan siang di satu lokasi di Karet",

    /* ------------------- Heavy Stuff/Reports ---------------- */

    "reports-page-title": "Laporan",
    "reports-page-textbox-title": "Menggarisbawahi Agenda Kebhinnekaan Kota (diterbitkan 2017)",
    "reports-page-textbox-p1": "Gerakan riset kami untuk lebih memahami kota Jakarta berdasarkan belajar setiap hari melalui interaksi dan observasi, dan sepanjang perjalanan investigasi kami tren dan pola-pola tertentu mulai muncul yang memungkinkan kita untuk mengidentifikasi faktor-faktor penting dalam kehidupan sehari-hari di Jakarta. Kami menggunakan pengamatan ini untuk membangun narasi pembangunan Jakarta dan menarik kesimpulan penting tentang masa depan kota kita. Laporan yang dihasilkan di bawah merangkum temuan kunci sebagai bagian dari agenda keanekaragaman perkotaan kami, dan mewakili sebuah evolusi dalam pemahaman perkotaan kita. Mereka akan terus diperluas dan diperbarui sebagai pengetahuan kita tumbuh.",
    "reports-page-tab-title": "Laporan &amp; Penelitian",
    "reports-page-tab-coming-soon": "Segera akan datang",

/* ---------------- 'Hover Tabs' ------------------ */

            //----Heavy Stuff/Reports --- //

            "report-tab-gojek-title": "#4 Transportasi Online dan Kampung Studi Kasus Khusus RRJ",
            "report-tab-gojek-l1": "Enter tab tag lines for the report here",

            "report-tab-urban-trans-title": "#5 Transportasi online: ekonomi serabut dan layanan pendukung",
            "report-tab-urban-trans-l1": "Studi Kasus dari Manggarai",

            "report-tab-support-network-title": "#6 Kota yang didukung oleh serabutnya",
            "report-tab-support-network-l1": "Siapa yang mengandalkan apa di jakarta?",


            //----Research Sites----//

            "research-site-karet-title": "Karet",
            "research-site-karet-l1": "Biaya Hidup",
            "research-site-karet-l2": "Layanan sektor informal sebagai subsidi alami",
            "research-site-karet-l3": "Pendatang baru dan kota yang hidup",
            "research-site-karet-l4": "Ekonomi informal dan bisnis besar",
            "research-site-karet-l4": "Ekonomi serabut: pendorong pembangunan perkotaan",

            "research-site-Manggarai-title": "Manggarai: Coming 2018",
            "research-site-Manggarai-l1": "Transportasi online di Jakarta",
            "research-site-Manggarai-l2": "Layanan pendukung",
            "research-site-Manggarai-l3": "menggabungkan perjalanan formal-informal",
            "research-site-Manggarai-l4": "Kekuatan proximity",
            "research-site-Manggarai-l5": "Perjalanan multi-sektor",

            "research-site-Kalibata-title": "Kalibata: Coming Soon",
            "research-site-Kalibata-l1": "Kehidupan apartemen dan ekonomi serabut",
            "research-site-Kalibata-l2": "Akomodasi terencana &amp; kebutuhan nyata",
            "research-site-Kalibata-l3": "Simbiosis Residensial",
            "research-site-Kalibata-l4": "Akses atas kota",


            "research-site-Tugu-title": "Tugu: Coming Soon",
            "research-site-Tugu-l1": "Ekonomi sreabut domestik",
            "research-site-Tugu-l2": "Luasnya jaringan serabut",
            "research-site-Tugu-l3": "Manfaat kedekatan (proximity)",
            "research-site-Tugu-l4": "Siapa yang butuh ekonomi serabut?",

/* ---------------- 'Hover Tabs' ------------------ */

  //----Social Media------//

  "social-media-tab-title": "Media Sosial",
  "social-media-tab-l1": "Facebook",
  "social-media-tab-space":"-",
  "social-media-tab-l2": "Twitter",
  "social-media-tab-space":"-",
  "social-media-tab-l3": "Instagram",

  //------Photo--------//

  "photo-tab-title": "Foto",
  "photo-tab-l1": "Dimana kita menyusun semua foto orang dan tempat di sekitar Jakarta Pusat.",

  //-------Video-------//

  "video-tab-title": "Video",
  "video-tab-l1": "Ikuti kami dalam perjalanan mengelilingi Jakarta atau melihat Karet saat makan siang Laporan",

  //-------Tab to Reports Page-------//

  "reports-tab-title": "Laporan",
  "reports-tab-l1": "Makan dan Minum di Living City",
  "reports-tab-l2": "Sewa-menyewa dan Mobilitas Sosial dalam Mengembangkan Megacity",
  "reports-tab-l3": "Ekonomi informal sebagai jaminan sosial bagi warga kota",
  "reports-tab-l4": "Laporan Mendatang",


  //----Tab to Reports download----//

  "report-tab-eat-title": "#1 Makan dan Minum di Living City",
  "report-tab-eat-l1": "Laporan penelitian percontohan",
  "report-tab-eat-l2": "Perbandingan restoran formal / Informal",
  "report-tab-eat-l3": "Analisis restoran informal",
  "report-tab-eat-l4": "Apa artinya ini bagi pelanggan dan perbisnisan &#39;di kota",


  "report-tab-rent-title": "#2 Sewa-menyewa and Mobilitas Sosial dalam Mengembangkan Megacity",
  "report-tab-rent-l1": "Perbandingan sewa formal / informal",
  "report-tab-rent-l2": "Apakah artinya pada sektor sewa-menyewa di Jakarta",

  "report-tab-roots-title": "#3 Ekonomi Serabut sebagai jaminan sosial bagi warga kota",
  "report-tab-roots-l1": "Bagaimana ekonomi serabut membuat hidup lebih aman untuk semua orang?",

  //----Raw Data----//

  "raw-data-formal-property": "Formal Property",
  "raw-data-formal-subtitle": "A quantitative compiling of rented properties in the Karet area",

  "raw-data-kost-property": "Kost Property",
  "raw-data-kost-property-subtitle": "A compiling of rental properties in the Karet area, size, cost and facilities",

  "raw-data-formal-food": "Formal Food&amp;Drink",
  "raw-data-formal-food-subtitle": "A compiling of rental properties in the Karet area, size, cost and facilities",

  "raw-data-food-vendor": "Food&amp;Drink Vendors",
  "raw-data-food-vendor-subtitle": "A compiling of rental properties in the Karet area, size, cost and facilities",


  //----Manifesto----//

  "about-tab-title-manifesto": "Our Manifesto 2016/17",
  "about-tab-manifesto-l1": "Mendefinisikan ulang peran sektor informal",
  "about-tab-manifesto-l2": "Keberlanjutan di Mega City",
  "about-tab-manifesto-l3": "Kajian Kasus",
  "about-tab-manifesto-l4": "Metodologi",
  "about-tab-manifesto-l5": "Kamus Pembangunan Perkotaan",

  //----Social Media----//

  "social-tab-fb-p1": "Jaringan media sosial utama kami. Like halaman kami untuk selalu mengikuti kegiatan kami, terlibat dengan komunitas UDP dan berpartisipasi dalam diskusi yang sedang berlangsung seputar masa depan Jakarta.",
  
  "social-tab-twit-p1": "Halaman kami untuk berita dan live update tentang agenda keragaman perkotaan yang sedang berkembang. Ikuti kami di twitter untuk menerima update harian dari acara UDP, mengajukan pertanyaan penting dan berbagi pendapat Anda.",
  
  "social-tab-insta-p1": "Halaman media komunitas kami. Bergabunglah dengan para followers kami di Instagram untuk update foto dan video dari tim kami serta kontributor dari masyarakat yang menyoroti keragaman kehidupan sehari-hari di kota Jakarta.",

  //-----Interviews-----//

  "interviews-tab-title": "Wawancara",
  "interviews-tab-l1": "Para pelaku kota berbagi cerita. Kota dari sudut pandang mereka. Diperbarui secara teratur.",

  //-----Karet-----//

  "karet-tab-title": "Kajian Kawasan Karet",
  "karet-tab-l1": "Kajian terbaru kami mengenai biaya hidup di Karet, sebuah kawasan persimpangan bisnis formal dan komunitas Kampung.",

  //-----Heavy-----//

  "heavy-tab-title": "Laporan Penelitian",
  "heavy-tab-l1": "Laporan Resmi, kesimpulan dan publikasi",

//------ Documentation Download --------//

"documentation-manifesto": "<a href='../documentation/manifesto1617Indo.pdf' target='_blank'>",


};































/*
  Maps an object of strings to a key 
  Example: the english strings as mapped to "en"
*/
var stringMap = {
  en: enStrings,
  ind: indStrings
}

function isLanguagePresent (lang) {
  var userLang = navigator.language;
  if (userLang) {
      return userLang.indexOf(lang) >= 0;
  }

  return false;
}

function getDefaultLanguage () {
  var isIndonesian = isLanguagePresent('id') || isLanguagePresent('in');
  return isIndonesian ? 'ind' : 'en';
}

/* Takes a key (eg. "en") and translates the application */
function translate (languageKey) {
  
  // Look up in the stringMap to find the language corresponding to the key.
  var strings = stringMap[languageKey];

  // If we couldnt find any language corresponding to the key, fallback to english.
  if (strings == null) {
      languageKey = getDefaultLanguage();
      strings = stringMap[languageKey];
  }

  // Grab all of the elements with a translate attribute
  var elems = document.querySelectorAll("[translate]");

  // Loop through all of the elements with the translate attribute
  for (var i = 0; i < elems.length; i++) {

      // 1. Grab the element corresponding to the index
      var element = elems[i];

      // 2. Get the value of the translate attribute
      var key = element.getAttribute("translate");

      // 3. Grab the translation
      element.innerHTML = strings[key];
  };

  // Save the language key in the local storage.
  // The language key is mapped to the 'lang' key in the local storage.
  localStorage.setItem('lang', languageKey);
}

/* The code below is invoked each time the page loads (navigation, reload, firstvisit) */ 

// Grab the value of the lang key in the localstorage. Fallback to english.
var key = localStorage.getItem('lang') || getDefaultLanguage();

// Set the language using the key from above.
translate (key);
   

var languageSwitch = document.querySelector("#language_input");
languageSwitch.checked = (key == 'en');

languageSwitch.addEventListener("click", function(e) {
  var isChecked = languageSwitch.checked;
  var languageKey = isChecked ? 'en' : 'ind';
  translate(languageKey);
});
















