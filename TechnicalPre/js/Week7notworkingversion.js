document.addEventListener('DOMcontentLoaded',function(){
    const fetch_id = document.body.getAttribute('data-uuid'); //Retrieves the uuid once the HTML has loaded completely.
    const ochre_url= 'https://ochre.lib.uchicago.edu/ochre?uuid=';
    var display = document.getElementById('called-container'); //stores the intended 'display' element as a variable.
    var table = null; //This is a flag to prevent the duplication of inner display elements.


function getXml(uuid){
    return fetch(ochre_url + uuid, {redirect:'follow'}) //Initiates the network request.
    .then(output =>{
        if(!output.ok) throw new Error(`Request Invalid ${error}`); // Indicates if the request was not '200' HTTP.
        return output.text();//Extracts text content(XML strings).
    })
        .then(text_output => {
            const parser = new DOMParser();
            return parser.parseFromString(text_output,'text/xml'); //Returns XL document.
        });}

    function xml(data) {
        const property = data.querySelectorAll('property'); //Extracts all 'property' tags from new XML Doc
        let add_uuid ='';

        if(!table){ //Verifies that a table hasn't been created yet.
        table = document.createElement('table');
        table.setAttribute('class','table table-hover');
        tbody = document.createElement('tbody');
        table.appendchild(tbody);
        display.appendChild(table);
        }

        property.forEach(p =>{ //This iterates over each property tag.
        const string = p.querySelector('string');//Stores string tags.
        const value = p.querySelector('value'); //Stores value tags. 
    
    if(string && value){ //Verifies that no data is missing.
        var row=document.createElement('tr');
        var strCell= document.createElement('td');
        var valCell = document.createElement('td');
        strCell.innerHTML=`<strong>${string.textContent}</strong>`;
        valCell.innerHTML=`<strong>${value.textContent}</strong>`;
        row.appendchild(strcell);
        row.appendchild(valcell);
        tbody.appendchild(row);

if(string.textContent =='Associated text'){
    const titleLocation = document.getElementById('api-fetch-title');
    titleLocation.innerHTML =`<u><strong>~ ${value.textContent} ~</strong></u><br><br>`;
    add_uuid = value.getAttribute('uuid');//Stores nested uuid for second iteration.
}}});

display.appendchild(table);//Appends new table to the HTML display.
return add_uuid; //Ensures nested uuid is accessible.
    }})