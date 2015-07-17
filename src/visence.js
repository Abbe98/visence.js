/*
visence.js
*/

var visence = {
  init: function(id, licenses) {
    for (var license in licenses) {
      var keyStrings = licenses[license]['strings'];
      for (var string in keyStrings) {
        var newLicenseString = '<a class="visence ' + licenses[license]['class'] + '" href="' + licenses[license]['link'] + '">' + licenses[license]['text'] + '</a>';
        var targetString = document.getElementById(id).innerHTML;
        if (targetString.indexOf(licenses[license]['strings'][string]) != -1) {
          document.getElementById(id).innerHTML = targetString.split(licenses[license]['strings'][string]).join(newLicenseString);
        };
      };
    };
  }
};
