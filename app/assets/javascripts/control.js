$(".alphanumeric").keyup(function() {
  var input = $(this).val();
  var regex = new RegExp("^((?:\\w|[\\-_ ](?![\\-_ ])|[\\u00C0\\u00C1\\u00C2\\u00C3\\u00C4\\u00C5\\u00C6\\u00C7\\u00C8\\u00C9\\u00CA\\u00CB\\u00CC\\u00CD\\u00CE\\u00CF\\u00D0\\u00D1\\u00D2\\u00D3\\u00D4\\u00D5\\u00D6\\u00D8\\u00D9\\u00DA\\u00DB\\u00DC\\u00DD\\u00DF\\u00E0\\u00E1\\u00E2\\u00E3\\u00E4\\u00E5\\u00E6\\u00E7\\u00E8\\u00E9\\u00EA\\u00EB\\u00EC\\u00ED\\u00EE\\u00EF\\u00F0\\u00F1\\u00F2\\u00F3\\u00F4\\u00F5\\u00F6\\u00F9\\u00FA\\u00FB\\u00FC\\u00FD\\u00FF\\u0153])+)$", "i");
  if (regex.test(input)) {} else {
    $(this).val(input.substr(0, input.length - 1));
  }
});

$(".lowercase").keyup(function() {
  var input = $(this).val();
  var regex = new RegExp("^[a-z0-9 ,]+$");
  if (regex.test(input)) {} else {
    $(this).val(input.substr(0, input.length - 1));
  }
});

$(".nothing").keyup(function() {
  var input = $(this).val();
  var regex = new RegExp("^[]+$");
  if (regex.test(input)) {} else {
    $(this).val(input.substr(0, input.length - 1));
  }
});

$(function() {
  $('form').submit(function() {
    if ($('input').val() === "") {
      alert('Please enter Username and Password.');
      return false;
    }
  });
});
