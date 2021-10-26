// contained data for different purposes
var serviceStrings = ["time and date", "operating system", "pages you visited"];
var securityStrings = ["IP address", "port", "browser", "operating system", "pages you visited", "respests", "responses", "HTTP Status Codes", "time and date"];
var legalRequirementsStrings = ["IP address", "email address", "name", " browser", "device", "operating system", "pages you visited", "time and date", "port", "requests", "responses", "HTTP Status Codes"];
var contactStrings = ["email address", "name", "time and date", "personal information"];
var improveTheWebsiteStrings = ["IP address", "browser", "pages you visited", "time and date"];
// var personaliseYourAdsStrings (to be defined)

//print YaPPL whenever toggle changes
function print_YaPPL(cur_tgl, rel_toggles){
    var YaPPL_string = `{
        "_id": 123,
        "preference":[]
    }`
    var YaPPL_json = JSON.parse(YaPPL_string);
    if (rel_toggles =="entry2"){
        ids = ["tglAnnoyed1", "tglAnnoyed2"];
        for (var i=0; i<ids.length; i++){
            id = ids[i];
            if ((id == cur_tgl && !document.getElementById(id).checked) || (id!= cur_tgl && document.getElementById(id).checked)){
                if (id=="tglAnnoyed1" && (document.getElementById("annoyed1").style.display=="block" || document.getElementById("personaliseAds").style.display=="block")){
                    var purpose = "Personalise your ads";
                    var rule = {
                        "rule": {
                            "purpose": {
                                "permitted": [
                                    purpose
                                ]
                            }
                        }
                    };
                    YaPPL_json["preference"].push(rule);
                }
                else if (id=="tglAnnoyed2" && (document.getElementById("annoyed2").style.display=="block" || document.getElementById("improveWebsite").style.display=="block")){
                    var purpose = "Improve the website";
                    var rule = {
                        "rule": {
                            "purpose": {
                                "permitted": [
                                    purpose
                                ]
                            }
                        }
                    };
                    YaPPL_json["preference"].push(rule);
                }

            }
        }
    }
    if (rel_toggles =="modal"){
        ids = ["tglPersAdsModal", "tglWebsiteModal"];
        for (var i=0; i<ids.length; i++){
            id = ids[i];
            if ((id == cur_tgl && !document.getElementById(id).checked) || (id!= cur_tgl && document.getElementById(id).checked)){
                if (id=="tglPersAdsModal" && document.getElementById("personaliseAds2").style.display=="block"){
                    var purpose = "Personalise your ads";
                    var rule = {
                        "rule": {
                            "purpose": {
                                "permitted": [
                                    purpose
                                ]
                            }
                        }
                    };
                    YaPPL_json["preference"].push(rule);
                }
                else if (id=="tglWebsiteModal" && document.getElementById("improveWebsite2").style.display=="block"){    
                    var purpose = "Improve the website";
                    var rule = {
                        "rule": {
                            "purpose": {
                                "permitted": [
                                    purpose
                                ]
                            }
                        }
                    };
                    YaPPL_json["preference"].push(rule);
                }  
            }
        }
    }
    console.log(YaPPL_json);      
}


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


function activate_btn(id){
    el = document.getElementById(id);
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    el.classList.add('active');
    hide_components(['contentContainer2']);
    show_components('contentContainer1');
}

//get and set height
function get_set_height(id_get, id_set){
    var element_get = document.getElementById(id_get);
    var positionInfo = element_get.getBoundingClientRect();
    var h = positionInfo.height;
    var element_set = document.getElementById(id_set);
    element_set.style.height = String(Math.round(h))+"px";
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

//show model if click on annoyed message (except for click on toggles)
document.addEventListener('click', function(ev){
    if ($(ev.target).closest('.toggle').length || ev.target.className == "toggle"){
        return;
    }
    if($(ev.target).closest('.annoyed_message').length){
        show_components('myModal');
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

  //stick navbar to top when scrolling
  document.addEventListener("DOMContentLoaded", function(){
    window.addEventListener('scroll', function() {
        if (window.scrollY > 0) {
          document.getElementById('navbar_top').classList.add('fixed-top');
          // add padding top to show content behind navbar
          navbar_height = document.querySelector('.navbar').offsetHeight;
          document.body.style.paddingTop = navbar_height + 'px';
        } else {
          document.getElementById('navbar_top').classList.remove('fixed-top');
           // remove padding top from body
          document.body.style.paddingTop = '0';
        } 
    });
  }); 

let myData;
//load relevant components
function load_components(obj){
    var service=0;
    var security=0;
    var legalRequirements=0;
    var contact=0;
    var improveTheWebsite=0;
    var personaliseYourAds=0;
    var recipients = [];
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
        var recLength = obj.dataDisclosed[i].recipients.length;
        for (var j=0; j<recLength; j++){
            if (obj.dataDisclosed[i].recipients[j].name != undefined && obj.dataDisclosed[i].recipients[j].name != ""){
                recipients.push(obj.dataDisclosed[i].recipients[j].name);
            }
        }
        
    }
    //load third country component
    var thirdCountries = obj.thirdCountryTransfers;
    document.getElementById('thirdCountry').innerHTML ="";
    if (thirdCountries.length > 0){
        for (var i=0; i<thirdCountries.length; i++){
            var transfer = thirdCountries[i];
            //var flag = document.createElement('img');
            //flag.id = transfer.country.toLowerCase();
            //flag.src = 'https://www.countryflags.io/' + transfer.country.toLowerCase() + '/shiny/24.png';
            //document.getElementById('thirdCountry').innerHTML = "Your data is transferred to the following countries: ";
            //document.getElementById('thirdCountry').appendChild(flag);
        }
    }else{
        document.getElementById('thirdCountry').innerHTML = "Your data is not transferred to other countries."
    }
    //load controller component
    /*document.getElementById('controller').innerHTML ="";
    if (obj.controller.name != undefined){
        document.getElementById("controller").innerHTML = `Controller: <b>${obj.controller.name}</b></br>`;
        show_components('controller');
    }else{
        hide_components(['controller']);
    }*/
    //load data protection component
    document.getElementById('dpo').innerHTML ="";
    if (obj.dataProtectionOfficer.name != undefined){
        document.getElementById("dpo").innerHTML = `Data Protection Officer: <b>${obj.dataProtectionOfficer.name}</b></br>`;
        show_components('dpo');
    }else{
        hide_components(['dpo']);
    }
    //load automated decision making component
    var aD = document.getElementById('automatedDec');
    aD.innerHTML = "";
    if (obj.automatedDecisionMaking.inUse){
        aD.innerHTML="Automated Decision Making: "
        var badge = document.createElement('span');
        badge.textContent = 'in use';
        badge.className = 'badge bg-success';
        aD.appendChild(badge);
    }else{
        aD.innerHTML="Automated Decision Making: "
        var badge = document.createElement('span');
        badge.textContent = 'not in use';
        badge.className = 'badge bg-danger';
        aD.appendChild(badge);
    }

    //load mindmap
    
    //var myMindmap = ForceGraph();
    cur_service=obj.meta.name;
        
    myData = {
        nodes: [ {id: cur_service, group:1}],
        links: []
    };
    for (var i=0; i< recipients.length; i++){
        myData['nodes'].push({id: recipients[i], group:2});
        myData['links'].push({source: cur_service, target: recipients[i]})
    }
      
      

    //if no purpose given, show session cookies component
    if (service==0 && security==0 && legalRequirements==0 && contact==0 && improveTheWebsite==0 && personaliseYourAds==0){
        show_components("entry1ID");
    }
    else {
        show_components("entry2ID");
    }
}

function load_mindmap(){
    var myMindmap = ForceGraph();
    myMindmap(document.getElementById('mindmap'))
      .graphData(myData)
      .width(400)
      .height(300)
      .centerAt(0,18)
      .nodeLabel('id')
      .nodeColor(n => n.group==2 ? '#3650fe': '#a2adf1')
      .nodeRelSize(6)
}

function load_tilt(tilt){
    try{
        hide_components(["entry1ID", "entry2ID", "service", "contact", "improveWebsite", "personaliseAds", "improveWebsite2", "personaliseAds2", "legalRequirements", "security"]);
        if (tilt == "test"){
            var obj = JSON.parse(test);
            show_components("entry1ID");
            document.getElementById('mindmap').innerHTML="";
        }
        else if (tilt == "bmjv"){
            var obj = JSON.parse(bmjv);
            load_components(obj);  
        }
        else if (tilt=="bvg"){
            var obj = JSON.parse(bvg);
            load_components(obj); 
        }
        else if (tilt=="priv-icons"){
            var obj = JSON.parse(priv_icons);
            load_components(obj); 
        }
        else if (tilt=="cust_tilt"){
            var c_tilt = document.getElementById("custom_tilt").value;
            var obj = JSON.parse(c_tilt);
            load_components(obj);
        }
    }
    catch (e){
        alert(e)
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
        document.getElementById(id).classList.add("inverse-toggle");
    }

}

