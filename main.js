// contained data for different purposes
var serviceStrings = ["time and date", "operating system", "pages you visited"];
var securityStrings = ["IP address", "port", "browser", "operating system", "pages you visited", "respests", "responses", "HTTP Status Codes", "time and date"];
var legalRequirementsStrings = ["IP address", "email address", "name", " browser", "device", "operating system", "pages you visited", "time and date", "port", "requests", "responses", "HTTP Status Codes"];
var contactStrings = ["email address", "name", "time and date", "personal information"];
var improveTheWebsiteStrings = ["IP address", "browser", "pages you visited", "time and date"];
// var personaliseYourAdsStrings (to be defined)


function show_components(id){
    document.getElementById(id).style.display = 'block';
}

function hide_components(idList){
    for (var i=0; i<idList.length; i++){
        document.getElementById(idList[i]).style.display = 'none';
    }  
}

function load_components(obj){
    var service=0;
    var security=0;
    var legalRequirements=0;
    var contact=0;
    var improveTheWebsite=0;
    var personaliseYourAds=0;
    var dataDisclosedLength = obj.dataDisclosed.length;
    for (var i=0; i<dataDisclosedLength; i++){
        var purposesLength = obj.dataDisclosed[i].purposes.length;
        for (var j=0; j<purposesLength; j++){
            //check for service component
            if (obj.dataDisclosed[i].purposes[j].purpose == "service" && service==0){
                for (k=0; k<serviceStrings.length; k++){
                    var data = serviceStrings[k];
                    if (obj.dataDisclosed[i].category.includes(data)){
                        show_components("service");
                        service=1;
                        break;
                    }
                }
            }
            //check for security component
            if (obj.dataDisclosed[i].purposes[j].purpose == "security" && security==0){
                for (k=0; k<securityStrings.length; k++){
                    var data = securityStrings[k];
                    if (obj.dataDisclosed[i].category.includes(data)){
                        show_components("security");
                        security=1;
                        break;
                    }
                }
            }
            //check for legal requirement component
            if (obj.dataDisclosed[i].purposes[j].purpose == "legal requirements" && legalRequirements==0){
                for (k=0; k<legalRequirementsStrings.length; k++){
                    var data = legalRequirementsStrings[k];
                    if (obj.dataDisclosed[i].category.includes(data)){
                        legalRequirements=1;
                        show_components("legalRequirements");
                        break;
                    }
                }
            }
            //check for contact component
            if (obj.dataDisclosed[i].purposes[j].purpose == "contact" && contact==0){
                for (k=0; k<contactStrings.length; k++){
                    var data = contactStrings[k];
                    if (obj.dataDisclosed[i].category.includes(data)){
                        show_components("contact");
                        contact=1;
                        break;
                    }
                }
            }
            //check for improve the website component
            if (obj.dataDisclosed[i].purposes[j].purpose == "improve the website" && improveTheWebsite==0){
                for (k=0; k<improveTheWebsiteStrings.length; k++){
                    var data = improveTheWebsiteStrings[k];
                    if (obj.dataDisclosed[i].category.includes(data)){
                        improveTheWebsite=1;
                        show_components("improveWebsite");
                        show_components("improveWebsite2");
                        break;
                    }
                }
            }
            //check for personalise your ads component
            if (obj.dataDisclosed[i].purposes[j].purpose == "personalise your ads" && personaliseYourAds==0){
                show_components("personaliseAds");
                show_components("personaliseAds2");
                personaliseYourAds=1;
            }
        }
    }
    //if no purpose given, show session cookies component
    if (service==0 && security==0 && legalRequirements==0 && contact==0 && improveTheWebsite==0 && personaliseYourAds==0){
        show_components("entry1ID");

    }
    else {
        show_components("entry2ID");
    }
}


function load_tilt(tilt){
    if (tilt == "test"){
        hide_components(["entry1ID", "entry2ID", "service", "contact", "improveWebsite", "personaliseAds", "improveWebsite2", "personaliseAds2", "legalRequirements", "security"]);
        var obj = JSON.parse(test);
        show_components("entry1ID");
    }
    else if (tilt == "bmjv"){
        hide_components(["entry1ID", "entry2ID", "service", "contact", "improveWebsite", "personaliseAds", "improveWebsite2", "personaliseAds2", "legalRequirements", "security"]);
        var obj = JSON.parse(bmjv);
        load_components(obj);  
    }
    else if (tilt=="bvg"){
        hide_components(["entry1ID", "entry2ID", "service", "contact", "improveWebsite", "personaliseAds", "improveWebsite2", "personaliseAds2", "legalRequirements", "security"]);
        var obj = JSON.parse(bvg);
        load_components(obj); 
    }

// Get the modal
var modal = document.getElementById("myModal");

// Get the buttons that opens the modal
var btn = document.getElementById("modalBtn");
var btn2 = document.getElementById("modalBtn2");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on one of the buttons, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}
btn2.onclick = function() {
    modal.style.display = "block";
  }

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
} 
}
