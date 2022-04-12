// contained data for different purposes
var serviceStrings = ["time and date", "operating system", "pages you visited"];
var securityStrings = ["IP address", "port", "browser", "operating system", "pages you visited", "respests", "responses", "HTTP Status Codes", "time and date"];
var legalRequirementsStrings = ["IP address", "email address", "name", " browser", "device", "operating system", "pages you visited", "time and date", "port", "requests", "responses", "HTTP Status Codes"];
var contactStrings = ["email address", "name", "time and date", "personal information"];
var improveTheWebsiteStrings = ["IP address", "browser", "pages you visited", "time and date"];
// var personaliseYourAdsStrings (to be defined)


let yappl;


function load_purposes(cur_tgl, rel_toggles){
    var purposes=[];
    if (rel_toggles =="entry2"){
        ids = ["tglAnnoyed1", "tglAnnoyed2"];
        for (var i=0; i<ids.length; i++){
            id = ids[i];
            if ((id == cur_tgl && !document.getElementById(id).checked) || (id!= cur_tgl && document.getElementById(id).checked)){
                if (id=="tglAnnoyed1" && (document.getElementById("annoyed1").style.display=="block" || document.getElementById("personaliseAds").style.display=="block")){
                    var purpose = "Personalise your ads";
                    purposes.push(purpose);
                }
                else if (id=="tglAnnoyed2" && (document.getElementById("annoyed2").style.display=="block" || document.getElementById("improveWebsite").style.display=="block")){
                    var purpose = "Improve the website";
                    purposes.push(purpose);
                }

            }
        }
    }
    else if (rel_toggles =="modal"){
        ids = ["tglPersAdsModal", "tglWebsiteModal"];
        for (var i=0; i<ids.length; i++){
            id = ids[i];
            if ((id == cur_tgl && !document.getElementById(id).checked) || (id!= cur_tgl && document.getElementById(id).checked)){
                if (id=="tglPersAdsModal" && document.getElementById("personaliseAds2").style.display=="block"){
                    var purpose = "Personalise your ads";
                    purposes.push(purpose);
                }
                else if (id=="tglWebsiteModal" && document.getElementById("improveWebsite2").style.display=="block"){    
                    var purpose = "Improve the website";
                    purposes.push(purpose);
                }  
            }
        }
    }
    return purposes;
}


function update_yappl(cur_tgl, rel_toggles){
    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var cur_time = date+' '+time;
    var purpose_list = ["Personalise your ads", "Improve the website"];
    var purpose_permitted = load_purposes(cur_tgl, rel_toggles);
    var purpose_excluded = []
    for (i=0; i<purpose_list.length; i++){
        if (purpose_permitted.includes(purpose_list[i])==false){
            if (purpose_list[i]=="Personalise your ads" && (document.getElementById("personaliseAds2").style.display=="block" || document.getElementById("annoyed1").style.display=="block" || document.getElementById("personaliseAds").style.display=="block")){
                purpose_excluded.push(purpose_list[i]);
            }
            else if(purpose_list[i]=="Improve the website" && (document.getElementById("improveWebsite2").style.display=="block" || document.getElementById("annoyed2").style.display=="block" || document.getElementById("improveWebsite").style.display=="block")){
                purpose_excluded.push(purpose_list[i]);
            }
        }
    }
    for (var i=0; i<yappl["preference"].length; i++){
        rule=yappl["preference"][i]["rule"];
        rule["valid_from"] = cur_time;
        rule["purpose"]["permitted"] = purpose_permitted;
        rule["purpose"]["excluded"] = purpose_excluded;
    }
    console.log(yappl);
    document.cookie = "YaPPL=" + JSON.stringify(yappl) + ";";
}
function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}

var cookie_content;
function load_YaPPL_cookie(){
    cookie_content = getCookie("YaPPL");
    if (typeof(cookie_content) != 'undefined'){
        cookie_content = JSON.parse(cookie_content);
        update_toggles(cookie_content);
    } 
}

//update toggle state
function update_toggles(cookie_content){
    permitted = cookie_content["preference"][0]["rule"]["purpose"]["permitted"]
    excluded = cookie_content["preference"][0]["rule"]["purpose"]["excluded"]
    if (permitted.length != 0){
        for(i=0; i<permitted.length; i++){
            if (permitted[i]==="Improve the website"){
                tgl_list = ['tglWebsite', 'tglAnnoyed2', 'tglWebsiteModal'];
                for(j=0;j<tgl_list.length; j++){
                    id = tgl_list[j];
                    if (document.getElementById(id).checked == false){
                        $('#'+id).bootstrapToggle('on');
                    }
                }
            }
            else{
                tgl_list = ['tglPersAds', 'tglAnnoyed1', 'tglPersAdsModal'];
                for(j=0;j<tgl_list.length; j++){
                    id = tgl_list[j];
                    if (document.getElementById(id).checked == false){
                        $('#'+id).bootstrapToggle('on');
                    }
                }
            }
        }
    }
    if (excluded.length != 0){
        for(i=0; i<excluded.length; i++){
            if (excluded[i]==="Improve the website"){
                tgl_list = ['tglWebsite', 'tglAnnoyed2', 'tglWebsiteModal'];
                for(j=0;j<tgl_list.length; j++){
                    id = tgl_list[j];
                    if (document.getElementById(id).checked == true){
                        $('#'+id).bootstrapToggle('off');
                    }
                }
            }
            else{
                tgl_list = ['tglPersAds', 'tglAnnoyed1', 'tglPersAdsModal'];
                for(j=0;j<tgl_list.length; j++){
                    id = tgl_list[j];
                    if (document.getElementById(id).checked == true){
                        $('#'+id).bootstrapToggle('off');
                    }
                }
            }
        }
    }
}

function add_rule(yappl, category, recipients_list, cur_time){
    var rule = {
        "rule": {
            "valid_from": cur_time,
            "utilizer": {
                "permitted": recipients_list,
                "excluded": []
            },
            "purpose":{
                "permitted": [],
                "excluded": []
            },
            "transformation":[
                {
                    "tr_func": "",
                    "attribute": category
                }
            ]
        }
    };
    yappl["preference"].push(rule)
}


function load_yappl(obj){
    if (obj.meta == undefined){
        var _id = "01";
        yappl = {
            "_id": _id,
            "preference": []
        }
        add_rule(yappl, "", [], "");
        load_purposes("", "entry2");
    }
    else{
        var _id = obj.meta._id.replace(/[^\d.-]/g, '');
        yappl = {
            "_id": _id,
            "preference": []
        }
        var dataDisclosedLength = obj.dataDisclosed.length;
        for (var i=0; i<dataDisclosedLength; i++){
            var category = obj.dataDisclosed[i].category; //get category
            var recipientsLength = obj.dataDisclosed[i].recipients;
            recipients_list = []; //get recipients
            for (j=0; j<recipientsLength; j++){
                var recipient_name = obj.dataDisclosed[i].recipients[j].name;
                recipients_list.push(recipient_name);
            }	
            add_rule(yappl, category, recipients_list, "");
        }
        load_purposes("", "entry2");
    }
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
        //alert("hi")
        if (document.getElementById(id).checked == false){
            $('#'+id_change).bootstrapToggle('off');
        }
        else{
            $('#'+id_change).bootstrapToggle('on');
        }
    }
}
function update_toggle_state_inv(id, id_change){
    if (document.getElementById(id).checked == document.getElementById(id_change).checked){
        //alert("hi2")
        if (document.getElementById(id).checked == true){
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
            //check for personalise your ads component
            if (obj.dataDisclosed[i].purposes[j].purpose == "personalise your ads" && personaliseYourAds==0){
                show_components("personaliseAds");
                show_components("personaliseAds2");
                show_components("purpose-box-ads");
                personaliseYourAds=1;
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
        }
        var recLength = obj.dataDisclosed[i].recipients.length;
        for (var j=0; j<recLength; j++){
            var individual_recipient = [];
            if (obj.dataDisclosed[i].recipients[j].name != undefined && obj.dataDisclosed[i].recipients[j].name != ""){
                individual_recipient.push(obj.dataDisclosed[i].recipients[j].name); // loc 0 = id 
            } else {
                    continue;
                }
            if (obj.dataDisclosed[i].recipients[j].country != undefined && obj.dataDisclosed[i].recipients[j].country != ""){
                individual_recipient.push(obj.dataDisclosed[i].recipients[j].country);
            } else {
                individual_recipient.push("");  // loc 1 = country
            }
            var purLength = obj.dataDisclosed[i].purposes.length; // loop over all the different purposes in one piece of data disclosed
            var purposes_list = []; // empty list of purposes for one recipient
            for (var p = 0; p < purLength; p++){ // for each purpose iterate
                purposes_list.push(obj.dataDisclosed[i].purposes[p].purpose); // record the purpose
            }
            individual_recipient.push(purposes_list);  // append the purpose list to loc 2 = purposes 
            recipients.push(individual_recipient); // add the individual row to the node list
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
    cur_service= obj.meta.name;
    var cur_purpose= [];
    for (r of recipients){
        if (!(r[2] in cur_purpose)){
            cur_purpose.push(r[2]);
        }
    }
    myData = {
        nodes: [ {id: cur_service, country: obj.controller.country, purpose: cur_purpose, group:1}],
        links: []
    };
    for (var i=0; i< recipients.length; i++){
        myData['nodes'].push({id: recipients[i][0], country: recipients[i][1], purpose: recipients[i][2], group:2});
        myData['links'].push({source: cur_service, target: recipients[i][0]})
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
      .nodeLabel(n => `<div class='node-label'>
        <span>`+n.id+` (`+n.country+`)</span> </br>
        <span> Purpose: `+n.purpose+`</span>
      </div>`)
      .nodeColor(n => n.group==2 ? '#3650fe': '#a2adf1')
      .nodeRelSize(6)
      .linkCurvature(0.2)
}

function load_tilt(tilt){
    try{
        hide_components(["entry1ID", "entry2ID", "service", "contact", "improveWebsite", "personaliseAds", "improveWebsite2", "personaliseAds2", "legalRequirements", "security"]);
        var obj = JSON.parse(tilt);
        load_components(obj);  
        load_yappl(obj);
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

