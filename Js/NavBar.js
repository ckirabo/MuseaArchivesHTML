/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
  let topNavID = document.getElementById("topNavJS");
  if (topNavID.className === "topNav") {
    topNavID.className += " responsive";
  } else {
    topNavID.className = "topNav";
  }
}