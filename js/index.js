$(window).scroll(function(){
    var bodyScroll = $(window).scrollTop();
    var nextSec=$("#details").offset().top
    console.log(bodyScroll,nextSec);
    if(bodyScroll>=nextSec-290){
        $(".box-right span ").css("color","black")
        $(".box-right span ").css(" font-weight",800)
    }
 else{
  $(".box-left").animate({ left: -x }, 1000);
  $(".box-right").animate({ left: -x }, 1000);
  $(".box-right span").animate({color:"white"},{'background-color':'black'})
    $(".box-right span ").css("color","white")
 }
})

let x=$(".box-left").innerWidth()  
$(".box-left").animate({ left: -x }, 1);
$(".box-right").animate({ left: -x }, 1);


$(".box-right").click(function () {
      let boxLeftWidth = $(".box-left").css("left");
    if (boxLeftWidth == "0px") {
        $(".box-left").animate({ left: -x }, 1000);
        $(".box-right").animate({ left: -x }, 1000);
      } else {
        $(".box-left").animate({ left: "0px" }, 1000);
        $(".box-right").animate({ left: "0px" }, 1000);
      }

})
$(".closeIcon").click(function () {
    $(".box-left").animate({ left: -x }, 1000);
    $(".box-right").animate({ left: -x }, 1000);
  });



$("a[href^='#']").click(function (e) {
  let aHref = e.target.getAttribute("href");
  let sectionOffset = $(aHref).offset().top;
  $("html , body").animate({ scrollTop: sectionOffset }, 1000);
});



$(".singers-total h4").click(function(){
let x=$(this).next().animate({display:"block"}).slideToggle()
console.log( $(".singer-content").not(x).animate({display:"none"}).slideUp())

})

function countDown() {
  let currentDate = new Date().getTime();
  let futureDate = new Date("Wed Mar 08 2024 17:28:18").getTime();
  let gap = futureDate - currentDate;

  let second = 1000;
  let minute = second * 60;
  let hour = minute * 60;
  let day = hour * 24;

  let textDay = Math.floor(gap / day);
  let textHour = Math.floor((gap % day) / hour);
  let textMinute = Math.floor((gap % hour) / minute);
  let textSecond = Math.floor((gap % minute) / second);

  if (textMinute < 10) {
    textMinute = `0${textMinute}`;
    if (textMinute == 0) {
      return;
    }
  }

  if (textSecond < 10) {
    textSecond = `0${textSecond}`;
    if (textSecond == 0) {
      return;
    }
  }
  if (textHour < 10) {
    textHour = `0${textHour}`;

  }
  $("#day").html(`<h5>${textDay} D </h5>`);
  $("#hour").html(`<h5>${textHour} h </h5>`);
  $("#minute").html(`<h5>${textMinute} m </h5>`);
  $("#second").html(`<h5>${textSecond} s </h5>`);
  setInterval(countDown, 1000);
}
countDown();

let maxChars = 100;
$("textarea").on("keyup", function () {
  let textLength = $("textarea").val().length;
  let remainChar = maxChars - textLength;
  $("#charRemain").html(remainChar);
  if (remainChar <= 0) {
    $("#charRemain").html("your available character finished");
  }
});
