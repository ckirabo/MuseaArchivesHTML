


function createCard(name,address1,postcode,admission,email,link){

let cardlocation = document.getElementById("locationForCards");

let card = document.createElement("div");

let img = document.createElement("img");

let cardBody = document.createElement("div");
cardBody.class="cardBody";

let header = document.createElement("h2");
header.innerHTML = name;



let ul = document.createElement("ul");

let lAddress = document.createElement("li");
lAddress.innerHTML = address1;

let lpost = document.createElement("li");
lpost.innerHTML = postcode;

let ladmission = document.createElement("li");
ladmission.innerHTML = admission;

let lemail = document.createElement("li");
lemail.innerHTML = email;

let lLink = document.createElement("li");

let alink = document.createElement("a");

alink.href = link;
alink.innerHTML = link;


ul.appendChild(lAddress);
ul.appendChild(lpost);
ul.appendChild(ladmission);
ul.appendChild(lemail);

lLink.appendChild(alink);
ul.appendChild(lLink);

cardBody.appendChild(header);
cardBody.appendChild(ul);

card.appendChild(img);
card.appendChild(cardBody);

cardlocation.appendChild(card);

}




function getMuseums(){
	let request = new XMLHttpRequest();
request.open("GET" ,"http://localhost:9090/Museums/AllMuseums");
request.setRequestHeader("Access-Control-Allow-Origin","*");
request.send();

request.onload = function(){

let museums = JSON.parse(request.response);


for (let i = 0 ; i < museums.length; i++) {
	createCard(
		museums[i].name,
		museums[i].address_Line_1,
		museums[i].postCode,
		museums[i].admission,
		museums[i].contact_Email,
		museums[i].website
		//console.log(museums[i].website)
		);
}

}
}