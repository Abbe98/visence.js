#visence.js
*Making Licenses Stand Out*

Visence.js turns inline licenses into links.

##Usage
```
<script type="text/javascript" src="dir/visence.js"></script>
<script>
var licenses = {
  cc0: {
    // link href value
    link: 'https://creativecommons.org/publicdomain/zero/1.0/',
    // link text
    text: 'CC0',
    // license specific CSS class
    class: 'cc0',
    // strings to convert
    strings: [
      'CC0',
      'CC 0',
      'CC-0',
      'Zero (0)',
      'CC0 1.0 Universal (CC0 1.0)',
      'Public Domain Dedication',
      'Creative Commons Zero',
      'Creative Commons 0',
      'Creative Commons Public Domain Dedication'
    ]
  },
  ccby: {
    // link href value
    link: 'https://creativecommons.org/licenses/by/2.0/',
    // link text
    text: 'CCBY',
    // license specific CSS class
    class: 'ccby',
    // strings to convert
    strings: [
      'CCBY',
      'CC BY',
      'CC-BY',
      'CC Attribution'
    ]
  },
};
</script>
<script>
  // target-id the id of the element you want to run visence.js on 
  visence.init('target-id', licenses);
</script>
```
