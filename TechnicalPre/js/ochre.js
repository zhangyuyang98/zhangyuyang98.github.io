// ochre.js

// Function to fetch and process data from OCHRE API
function fetchData(uuid) {
    const baseURL = "https://ochre.lib.uchicago.edu/ochre?uuid=";
    const url = baseURL + uuid;

    fetch(url)
        .then(response => response.text())
        .then(xml => {
            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(xml, "text/xml");

            // Extract information from XML
            const title = xmlDoc.querySelector("title").textContent;
            const props = xmlDoc.querySelectorAll("prop > prop > prop");
            let properties = "";

            props.forEach(prop => {
                properties += `<li>${prop.textContent}</li>`;
            });

            // Display data on the page
            document.getElementById("title").innerText = title;
            document.getElementById("properties").innerHTML = properties;
        })
        .catch(error => console.error("Error fetching data:", error));
}

// Call fetchData function with the appropriate UUID
const urlParams = new URLSearchParams(window.location.search);
const uuid = urlParams.get('uuid');
fetchData(uuid);