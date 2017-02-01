$(document).ready(function() {
  var $input = $('#input'),
    $button = $('#inputbutton'),
    $output = $('#output'),
    $shift = $('#shift');

  function encode() {
    var message = $input.val(),
      alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
      encoded = "",
      i = 0,
      letter = '',
      index = -1;

    message = message.toUpperCase();

    for (i = 0; i < message.length; i++) {
      index = alphabet.indexOf(message[i]);

      if (index >= 0) {
        letter = alphabet[(index + $shift.val()) % 26];
        encoded += letter;
      }
    }

    $output.val(encoded);
  }

  console.log($shift.val());

  $button.click(function() {
    encode();
  });

  $shift.change(function() {
    encode();
  });
});
