/*
visence.init('element-id');
*/

var visence = {
  init: function(id) {
    var licenses = {
      c00: {
        link: '#',
        text: 'text',
        strings: [
          'cc0',
          'cc 0',
          'cc-0',
          'Zero (0)'
        ]
      },
      ccby: {
        link: '#',
        text: 'text',
        strings: [
          'ccby',
          'cc by',
          'cc-by',
          'Attribution (BY)'
        ]
      },
      ccsa: {
        link: '#',
        text: 'text',
        strings: [
          'ccsa',
          'cc sa',
          'cc-sa',
          'Share-alike (SA)'
        ]
      },
      ccnc: {
        link: '#',
        text: 'text',
        strings: [
          'ccnc',
          'cc nc',
          'cc-nc',
          'Non-commercial (NC)'
        ]
      },
      ccnd: {
        link: '#',
        text: 'text',
        strings: [
          'ccnc',
          'cc nc',
          'cc-nc',
          'No Derivative Works (ND)'
        ]
      }
    };

    for (var license in licenses) {
      var keyStrings = licenses[license]['strings'];
      for (var string in keyStrings) {
        var newLicenseString = '<a href="' + licenses[license]['link'] + '">' + licenses[license]['text'] + '</a>';
        var targetString = document.getElementById(id).innerHTML;
        if (targetString.indexOf(licenses[license]['strings'][string]) != -1) {
          document.getElementById(id).innerHTML = targetString.split(licenses[license]['strings'][string]).join(newLicenseString);
        };
      };
    };
  }
};
