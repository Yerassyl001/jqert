$(document).ready(function(){
//1 ex
  $("#hideshow").click(function(){
    $("#text1").toggle();
  });
//2ex
  $(function() {
        $('#checkbox').click(function() {
            if ($(this).is(':checked')) {
                $('#subm').removeAttr('disabled');
            } else {
                $('#subm').attr('disabled', 'disabled');
            }
        });
    });
//ex4
$('body').css('background-image', 'url(https://images.unsplash.com/photo-1553095066-5014bc7b7f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80.jpg)');
//ex3
$("#scroll").click(function(event) {
        $("html, body").animate({ 
            scrollTop: 0 
        }, "slow");
        return false;
    });
//ex6
$("#fadetext").click(function(event){
    $("#fadetext").fadeTo(1500, 0.15);
});
//ex7
$("#btn1").click(function(){
    $("#toanimate").animate({
    height: '200px',
    width: '100px'
  });
    $("#toanimate").animate({
    height: '100px',
    width: '100px',
    left:'+=250px',
  });
    $("#toanimate").animate({
    height: '100px',
    width: '200px',
    left:'-=250px'
});
$("#btn2").click(function(){
    $("#toanimate").animate({
    height: '100px',
    width: '100px'
  });
}); 
//ex5
var len = 100;
$('textarea').keyup(function() {
  var textlen = len - $(this).val().length;
  $('#anyid').text(textlen);
});
});
