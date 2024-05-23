document.addEventListener('DOMContentLoaded', () => {
  window.addEventListener('load', loadXML);
})

//Define parent element
var parentElement = document.getElementById('ochreTableBody');
//Define API url
// var url = "https://ochre.lib.uchicago.edu/ochre?uuid=accd571b-bae3-4d42-93d9-58b65ec79300";
var url = 'https://ochre.lib.uchicago.edu/ochre?uuid=6f18e3a7-a396-46d9-85cb-92674c24cfc0';

// First function, invoked with event listener
// Everything else happens in the scope of this function
function loadXML(){
  //Chain the next funtion to create the XHR
  XMLrequest(url);
  console.log('loadXML -- OK');
};

function XMLrequest(link){
  //Create XHR object
  //Open the API call
  //Send the API call
  var connect = new XMLHttpRequest();
  connect.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      //If all is well with the API call, then format the response
      //with the next chained function.
      //let xmlDoc=this,responseXML; printData(SML)

      createHeaders(this.responseXML);
      listTexts(this.responseXML);
    }
  };
//open xhr exchange
  connect.open("GET", link, true);

//send xhr exchange
  connect.send();
  console.log('XMLrequest -- OK');
}
// first 19-25, then skip to 32, then go back to 25-31


function createHeaders(sourceXML){
  document.getElementById('projectTitle').innerText = sourceXML.getElementsByTagName('metadata')[0].children[1].innerHTML;
  document.getElementById('setTitle').innerText = sourceXML.getElementsByTagName('set')[0].children[3].children[0].innerHTML;
  document.getElementById('setDescription').innerText = sourceXML.getElementsByTagName('set')[0].children[4].innerHTML;
  var licenseText = document.getElementById('license');
  licenseText.innerText = sourceXML.getElementsByTagName('availability')[0].children[0].innerHTML;
  licenseText.setAttribute('href', sourceXML.getElementsByTagName('availability')[0].children[0].attributes[0].nodeValue);
}

function listTexts(sourceXML){
  console.log(sourceXML);
  var textList = sourceXML.getElementsByTagName('text');
  console.log(textList);
  
  //textList is html collection
  for (i=0; i < textList.length; i++) {
    //create one row per item
    //tr defining variable , what attributes that thing can have
    var tr = document.createElement('tr');
    tr.setAttribute('class','ochreTableRows');
    //every row will have a unique identifier
    tr.setAttribute('id','row_'+i);
    document.getElementById('ochreTableBody').appendChild(tr);

    //populate the cells in the row
    var td = document.createElement('td');
    td.setAttribute('id','td_name_'+i);
    //i:leveraging the i in line 57
    td.textContent = textList[i].children[0].children[0].innerHTML;
    document.getElementById('row_'+i).appendChild(td);//append to the row just created, put data cell under row 0

    var td2 = document.createElement('td');
    td2.setAttribute('id','td_desc_'+i);
    td2.textContent = textList[i].children[3].innerHTML;
    document.getElementById('row_' + i).appendChild(td2);
  };
}
//search textList[i].children on the consol to find that data you want, discover which node what are you looking at

