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

  var dataString = $('#input').val().replace(/\n/g, '|');
  console.log('This stuff will be POSTed:', dataString);

  $('#submit').click(function(event) {
    $.ajax({
      type: "POST",
      url: '/parse',
      data: {
        dataString: dataString
      },
      success: function() {
        console.log('Success');
      },
      dataType: 'json'
    });
  });
};

if (window.location.href.match(/\//)) {
  frontapp.init();
}
