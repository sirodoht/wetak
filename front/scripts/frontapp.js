/**
 * @fileOverview The frontpage app
 */
// require jQuery: not needed, loads from script tag from cnd
// require('../static/components/jquery/dist/jquery.js');


var frontapp = module.exports = {};

/**
 * Boot frontapp
 */
frontapp.init = function() {

  console.log($('#input'));
  console.log($('#input').val());
  var dataString = $('#input').val();

  $('#submit').click(function(event) {
    $.ajax({
      type: "POST",
      url: '/parse',
      data: dataString,
      success: function() {
        console.log('Success?');
      },
      dataType: 'text'
    });
  });
};

if (window.location.href.match(/\//)) {
  frontapp.init();
}
