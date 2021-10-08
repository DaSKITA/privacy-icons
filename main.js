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

function show_hide_textarea(id){
    if (document.getElementById(id).style.display == 'block'){
        document.getElementById(id).style.display = 'none';
    }
    else{
        document.getElementById(id).style.display = 'block';
    }
}

//hide Entrypoints when clicked on page (except for click on buttons)
document.addEventListener('click', function(ev){
    if (ev.target.id == 'btns-part' || $(ev.target).closest('#btns-part').length || $(ev.target).closest('.toggle').length || ev.target.id=='custom_field'|| $(ev.target).closest('#custom_field').length){
        return;
    }
    entry2 = document.getElementById('entry2ID')
    if (entry2.style.display == 'block'){
        hide_components(['entry2ID']);
        show_components('entry1ID');  
    } 
})

//hide Entrypoints when scrolled on page
document.addEventListener('scroll', function(){
    entry2 = document.getElementById('entry2ID')
    if (entry2.style.display == 'block'){
        hide_components(['entry2ID']);
        show_components('entry1ID');  
    } 
})


//update toggle state
function update_toggle_state(id, id_change){
    if (document.getElementById(id).checked != document.getElementById(id_change).checked){
        if (document.getElementById(id).checked == false){
            $('#'+id_change).bootstrapToggle('off');
        }
        else{
            $('#'+id_change).bootstrapToggle('on');
        }
    }
}

//collapse navbar
$(document).ready(function(){
    //--Navbar_Toggle_icon--//
    NavItemsStatus = '';
    $('.navbar-toggler-icon').click(function(){
      //---Check if the NavItems are opened, if so then close them, otherwise open them--//
      if((NavItemsStatus == "")|| (NavItemsStatus == undefined)){
        NavItemsStatus = 'on';
        //--Do nothing here as the nav items are sliding down after clicked for the first time--// 
      }else if((NavItemsStatus == "off")){
        NavItemsStatus = 'on';
        $("#navbarNav").show(); //the id which was called on data-bs-target
      }else{
        NavItemsStatus = 'off';
        $("#navbarNav").hide();
        $("#navbarNav").css('height','0px');
      }
    })
  
  });


//load relevant components
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
                show_components("purpose-box-ads");
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
    try{
        hide_components(["entry1ID", "entry2ID", "service", "contact", "improveWebsite", "personaliseAds", "improveWebsite2", "personaliseAds2", "legalRequirements", "security"]);
        if (tilt == "test"){
            var obj = JSON.parse(test);
            show_components("entry1ID");
        }
        else if (tilt == "bmjv"){
            var obj = JSON.parse(bmjv);
            load_components(obj);  
        }
        else if (tilt=="bvg"){
            var obj = JSON.parse(bvg);
            load_components(obj); 
        }
        else if (tilt=="cust_tilt"){
            var c_tilt = document.getElementById("custom_tilt").value;
            var obj = JSON.parse(c_tilt);
            load_components(obj);
        }
    }
    catch (e){
        alert("Wrong tilt format.")
    }

// Get the modal
var modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

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


//change colour of toggle, if checked and hovered (does not work)
function switchColors(id){
    if (document.getElementById(id).checked == true){
        toggles = document.getElementsByClassName("toggle-on");
        for (i=0; i<toggles.length; i++){
            toggles[i].style.backgroundColor="red !important";
            toggles[i].style.borderColor = "red !important";
        }
    }

}
