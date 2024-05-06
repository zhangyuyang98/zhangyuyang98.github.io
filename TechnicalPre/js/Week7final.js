document.addEventListener('DOMContentLoaded', () => {
    const uuid = document.getElementById('ochreContainer').getAttribute('data-uuid');//Retrieves the uuid once the HTML has loaded completely.
    const ochre_url = "https://ochre.lib.uchicago.edu/ochre?uuid=";
    const link = ochre_url + uuid;
    loadXML();
    function loadXML() {
      requestXML(link, {redirect: 'follow'});
      console.log('loadXML -- OK');
    }    // Create first function to load the XML

    // Create function to call from OCHRE API and retrieve results using an XHR object
    function requestXML(link) {
      var connect = new XMLHttpRequest();
      connect.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          parseXML(this.responseXML);  // This passes the XML file we requested to next function
        }
      };
      connect.open("GET", link, true);
      connect.send();
      console.log('requestXML -- OK');
    };

 // Create third function to extract properties and desired images from
    // OCHRE XML
    function parseXML(sourceXML) {
        var textTitle = sourceXML.getElementsByTagName('identification');//title
        var title_string = document.createTextNode(textTitle[1].textContent);
        document.getElementById('title').appendChild(title_string);
        if (sourceXML.getElementsByTagName('property').length > 1) {
          const properties = sourceXML.querySelectorAll('property');
          i = 0;
          properties.forEach(p => {
            var tr = document.createElement('tr');
            tr.setAttribute('class', 'ochreTableRows');
            tr.setAttribute('id', 'row_' + i);
            document.getElementById('ochreTableBody').appendChild(tr);
  
            var property = document.createElement('td');
            property.setAttribute('id', 'property_' + i);
            property.textContent = p.querySelector('string').textContent;
            document.getElementById('row_' + i).appendChild(property);
  
            var value = document.createElement('td');
            value.setAttribute('id', 'property_value_' + i);
            value.textContent = p.querySelector('value').textContent;
            document.getElementById('row_' + i).appendChild(value);
            i++;
          });
        }
        
        if (sourceXML.getElementsByTagName('resource')[0].getAttribute("format") == 'image/jpeg') {
          var img = document.createElement('img');
          var src = link + "&preview";
          img.src = src;
          document.getElementById('preview').appendChild(img);  // Extract preview image of item for the webpage
        }
      };
  });