//const { isNullableType } = require("graphql");

// contained data for different purposes
var serviceStrings = ["time and date", "operating system", "pages you visited"];
var securityStrings = ["IP address", "port", "browser", "operating system", "pages you visited", "respests", "responses", "HTTP Status Codes", "time and date"];
var legalRequirementsStrings = ["IP address", "email address", "name", " browser", "device", "operating system", "pages you visited", "time and date", "port", "requests", "responses", "HTTP Status Codes"];
var contactStrings = ["email address", "name", "time and date", "personal information"];
var improveTheWebsiteStrings = ["IP address", "browser", "pages you visited", "time and date"];
// var personaliseYourAdsStrings (to be defined)


let yappl;


function load_purposes(cur_tgl, rel_toggles) { // gets called by load yappl
    var purposes = [];
    if (rel_toggles == "entry2") { // if rel_toggles is entry2 
        ids = ["tglAnnoyed1", "tglAnnoyed2"]; //iterate over these ids
        for (var i = 0; i < ids.length; i++) {
            id = ids[i];  // the style.display == "block" is just a signal that the element is visible. 
            if ((id == cur_tgl && !document.getElementById(id).checked) || (id != cur_tgl && document.getElementById(id).checked)) {
                if (id == "tglAnnoyed1" && (document.getElementById("annoyed1").style.display == "block" || document.getElementById("personaliseAds").style.display == "block")) {
                    var purpose = "personalise your ads";
                    purposes.push(purpose);
                }
                else if (id == "tglAnnoyed2" && (document.getElementById("annoyed2").style.display == "block" || document.getElementById("improveWebsite").style.display == "block")) {
                    var purpose = "improve the website";
                    purposes.push(purpose);
                }

            }
        }
    }
    else if (rel_toggles == "modal") {
        ids = ["tglPersAdsModal", "tglWebsiteModal"];
        for (var i = 0; i < ids.length; i++) {
            id = ids[i];
            if ((id == cur_tgl && !document.getElementById(id).checked) || (id != cur_tgl && document.getElementById(id).checked)) {
                if (id == "tglPersAdsModal" && document.getElementById("personaliseAds2").style.display == "block") {
                    var purpose = "personalise your ads";
                    purposes.push(purpose);
                }
                else if (id == "tglWebsiteModal" && document.getElementById("improveWebsite2").style.display == "block") {
                    var purpose = "improve the website";
                    purposes.push(purpose);
                }
            }
        }
    }
    return purposes;
}


function update_yappl(cur_tgl, rel_toggles) {
    var today = new Date();
    var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var cur_time = date + ' ' + time;
    var purpose_list = ["personalise your ads", "improve the website"];
    var purpose_permitted = load_purposes(cur_tgl, rel_toggles);
    var purpose_excluded = [];
    for (i = 0; i < purpose_list.length; i++) {
        if (purpose_permitted.includes(purpose_list[i]) == false) {
            if (purpose_list[i] == "personalise your ads" && (document.getElementById("personaliseAds2").style.display == "block" || document.getElementById("annoyed1").style.display == "block" || document.getElementById("personaliseAds").style.display == "block")) {
                purpose_excluded.push(purpose_list[i]);
            }
            else if (purpose_list[i] == "improve the website" && (document.getElementById("improveWebsite2").style.display == "block" || document.getElementById("annoyed2").style.display == "block" || document.getElementById("improveWebsite").style.display == "block")) {
                purpose_excluded.push(purpose_list[i]);
            }
        }
    }
    // which toggle invokes an update in the purpose. fixes issue: when we update the yappl; we go through all rules and remove the purposes to all rules
    if (cur_tgl == 'tglPersAds' || cur_tgl == 'annoyed1' || cur_tgl == 'tglAnnoyed1' || purpose_excluded.includes('personalise your ads')){
        var change_pur = "personalise your ads";
    }
    else if (cur_tgl == 'tglWebsite' || cur_tgl == 'annoyed2' || cur_tgl == 'tglWebsiteModal' || purpose_excluded.includes('improve the website')){
        var change_pur = "improve the website";
    }
    else {
        var change_pur = '';
    }

    for (var i = 0; i < yappl["preference"].length; i++) {
        rule = yappl["preference"][i]["rule"];
        // if the toggle has touched that purpose, we change the yapple 
        if (rule["purpose"]["permitted"].includes(change_pur) || rule["purpose"]["excluded"].includes(change_pur)) {
            rule["valid_from"] = cur_time;
            rule["purpose"]["permitted"] = purpose_permitted;  
            rule["purpose"]["excluded"] = purpose_excluded;
        }
    }
    window.localStorage.setItem('YaPPL', JSON.stringify(yappl))
    //document.cookie = "YaPPL=" + JSON.stringify(yappl) + ";";
}

function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}

// invoked in main HTML before dashboard is built
// variable is not kept 
var cookie_content;
function load_YaPPL_cookie() {
    cookie_content = JSON.parse(window.localStorage.getItem('YaPPL'));
    if (cookie_content != null) {
        update_toggles(cookie_content);
    }
}

//update toggle state
function update_toggles(cookie_content) {
    for (var ru = 0; ru < cookie_content['preference'].length; ru++){
        var permitted = cookie_content["preference"][ru]["rule"]["purpose"]["permitted"];
        var excluded = cookie_content["preference"][ru]["rule"]["purpose"]["excluded"];
        if (permitted.length != 0) {
            for (i = 0; i < permitted.length; i++) {
                if (permitted[i] === "improve the website") {
                    tgl_list = ['tglWebsite', 'tglAnnoyed2', 'tglWebsiteModal'];
                    for (j = 0; j < tgl_list.length; j++) {
                        id = tgl_list[j];
                        if (document.getElementById(id).checked == false) {
                            $('#' + id).bootstrapToggle('on');
                        }
                    }
                }
                else if (permitted[i] === "personalise your ads"){
                    tgl_list = ['tglPersAds', 'tglAnnoyed1', 'tglPersAdsModal'];
                    for (j = 0; j < tgl_list.length; j++) {
                        id = tgl_list[j];
                        if (document.getElementById(id).checked == false) {
                            $('#' + id).bootstrapToggle('on');
                        }
                    }
                }
            }
        }
        if (excluded.length != 0) {
            for (i = 0; i < excluded.length; i++) {
                if (excluded[i] === "improve the website") {
                    tgl_list = ['tglWebsite', 'tglAnnoyed2', 'tglWebsiteModal'];
                    for (j = 0; j < tgl_list.length; j++) {
                        id = tgl_list[j];
                        if (document.getElementById(id).checked == true) {
                            $('#' + id).bootstrapToggle('off');
                        }
                    }
                }
                else {
                    tgl_list = ['tglPersAds', 'tglAnnoyed1', 'tglPersAdsModal'];
                    for (j = 0; j < tgl_list.length; j++) {
                        id = tgl_list[j];
                        if (document.getElementById(id).checked == true) {
                            $('#' + id).bootstrapToggle('off');
                        }
                    }
                }
            }
        }
    }
}

function add_rule(yappl, category, recipients_list, cur_time, purpose = []) {
    var rule = {
        "rule": {
            "valid_from": cur_time,
            "utilizer": {
                "permitted": recipients_list,
                "excluded": []
            },
            "purpose": {
                "permitted": purpose,
                "excluded": []
            },
            "transformation": [
                {
                    "tr_func": "",
                    "attribute": category
                }
            ]
        }
    };
    yappl["preference"].push(rule)
}


function load_yappl(obj) { // obj is the parsed tilt
    if (obj.meta == undefined) { // if it does not have any content
        var _id = "01"; // then the id in the cookie is 01
        yappl = { // we fill the yappl with this info 
            "_id": _id,
            "preference": [] // there are no preferences 
        }
        add_rule(yappl, "", [], ""); // we add an empty rule to the yappl
        load_purposes("", "entry2");
    }
    else { // when we have a tilt
        var _id = obj.meta._id.replace(/[^\d.-]/g, '');
        yappl = { // we construct a YaPPL
            "_id": _id,
            "preference": []
        }
        var dataDisclosedLength = obj.dataDisclosed.length; // iterate over the disclosed data
        for (var i = 0; i < dataDisclosedLength; i++) { 
            var category = obj.dataDisclosed[i].category; //get category
            var recipientsLength = obj.dataDisclosed[i].recipients;
            var recipients_list = []; //get recipients
            for (var j = 0; j < recipientsLength.length; j++) {
                var recipient_name = recipientsLength[j].name;
                
                recipients_list.push(recipient_name);
            }
            add_rule(yappl, category, recipients_list, "", [obj.dataDisclosed[i].purposes[0].purpose]);
        }
        //load_purposes("", "entry2");
    }
}


function show_components(id) {
    document.getElementById(id).style.display = 'block';
}

function hide_components(idList) {
    for (var i = 0; i < idList.length; i++) {
        document.getElementById(idList[i]).style.display = 'none';
    }
}

function show_hide_textarea(id) {
    if (document.getElementById(id).style.display == 'block') {
        document.getElementById(id).style.display = 'none';
    }
    else {
        document.getElementById(id).style.display = 'block';
    }
}


function activate_btn(id) {
    el = document.getElementById(id);
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    el.classList.add('active');
    hide_components(['contentContainer2']);
    show_components('contentContainer1');
}

//get and set height
function get_set_height(id_get, id_set) {
    var element_get = document.getElementById(id_get);
    var positionInfo = element_get.getBoundingClientRect();
    var h = positionInfo.height;
    var element_set = document.getElementById(id_set);
    element_set.style.height = String(Math.round(h)) + "px";
}


//hide Entrypoints when clicked on page (except for click on buttons)
document.addEventListener('click', function (ev) {
    if (ev.target.id == 'btns-part' || $(ev.target).closest('#btns-part').length || $(ev.target).closest('.toggle').length || ev.target.id == 'custom_field' || $(ev.target).closest('#custom_field').length) {
        return;
    }
    entry2 = document.getElementById('entry2ID')
    if (entry2.style.display == 'block') {
        hide_components(['entry2ID']);
        show_components('entry1ID');
    }
})

//show model if click on annoyed message (except for click on toggles)
document.addEventListener('click', function (ev) {
    if ($(ev.target).closest('.toggle').length || ev.target.className == "toggle") {
        return;
    }
    if ($(ev.target).closest('.annoyed_message').length) {
        show_components('myModal');
    }
})


//hide Entrypoints when scrolled on page
document.addEventListener('scroll', function () {
    entry2 = document.getElementById('entry2ID')
    if (entry2.style.display == 'block') {
        hide_components(['entry2ID']);
        show_components('entry1ID');
    }
})


//update toggle state
function update_toggle_state(id, id_change) {
    if (document.getElementById(id).checked != document.getElementById(id_change).checked) {
        //alert("hi")
        if (document.getElementById(id).checked == false) {
            $('#' + id_change).bootstrapToggle('off');
        }
        else {
            $('#' + id_change).bootstrapToggle('on');
        }
    }
}
function update_toggle_state_inv(id, id_change) {
    if (document.getElementById(id).checked == document.getElementById(id_change).checked) {
        //alert("hi2")
        if (document.getElementById(id).checked == true) {
            $('#' + id_change).bootstrapToggle('off');
        }
        else {
            $('#' + id_change).bootstrapToggle('on');
        }
    }
}

//collapse navbar
$(document).ready(function () {
    //--Navbar_Toggle_icon--//
    NavItemsStatus = '';
    $('.navbar-toggler-icon').click(function () {
        //---Check if the NavItems are opened, if so then close them, otherwise open them--//
        if ((NavItemsStatus == "") || (NavItemsStatus == undefined)) {
            NavItemsStatus = 'on';
            //--Do nothing here as the nav items are sliding down after clicked for the first time--// 
        } else if ((NavItemsStatus == "off")) {
            NavItemsStatus = 'on';
            $("#navbarNav").show(); //the id which was called on data-bs-target
        } else {
            NavItemsStatus = 'off';
            $("#navbarNav").hide();
            $("#navbarNav").css('height', '0px');
        }
    })

});

//stick navbar to top when scrolling
document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener('scroll', function () {
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

// source: https://dev.to/jorik/country-code-to-flag-emoji-a21
function getFlagEmoji(countryCode) {
    
    const codePoints = countryCode
      .toUpperCase()
      .split('')
      .map(char =>  127397 + char.charCodeAt());
    
    return String.fromCodePoint(...codePoints);
}

//load relevant components
async function load_components(obj) {
    var service = 0;
    var security = 0;
    var legalRequirements = 0;
    var contact = 0;
    var improveTheWebsite = 0;
    var personaliseYourAds = 0;
    var recipients = [];
    var dataDisclosedLength = obj.dataDisclosed.length;
    for (var i = 0; i < dataDisclosedLength; i++) {
        var purposesLength = obj.dataDisclosed[i].purposes.length;
        for (var j = 0; j < purposesLength; j++) {
            //check for service component
            if (obj.dataDisclosed[i].purposes[j].purpose == "service" && service == 0) {
                for (k = 0; k < serviceStrings.length; k++) {
                    var data = serviceStrings[k];
                    if (obj.dataDisclosed[i].category.includes(data)) {
                        show_components("service");
                        service = 1;
                        break;
                    }
                }
            }
            //check for security component
            if (obj.dataDisclosed[i].purposes[j].purpose == "security" && security == 0) {
                for (k = 0; k < securityStrings.length; k++) {
                    var data = securityStrings[k];
                    if (obj.dataDisclosed[i].category.includes(data)) {
                        show_components("security");
                        security = 1;
                        break;
                    }
                }
            }
            //check for legal requirement component
            if (obj.dataDisclosed[i].purposes[j].purpose == "legal requirements" && legalRequirements == 0) {
                for (k = 0; k < legalRequirementsStrings.length; k++) {
                    var data = legalRequirementsStrings[k];
                    if (obj.dataDisclosed[i].category.includes(data)) {
                        legalRequirements = 1;
                        show_components("legalRequirements");
                        break;
                    }
                }
            }
            //check for contact component
            if (obj.dataDisclosed[i].purposes[j].purpose == "contact" && contact == 0) {
                for (k = 0; k < contactStrings.length; k++) {
                    var data = contactStrings[k];
                    if (obj.dataDisclosed[i].category.includes(data)) {
                        show_components("contact");
                        contact = 1;
                        break;
                    }
                }
            }
            //check for personalise your ads component
            if (obj.dataDisclosed[i].purposes[j].purpose == "personalise your ads" && personaliseYourAds == 0) {
                show_components("personaliseAds");
                show_components("personaliseAds2");
                show_components("purpose-box-ads");
                personaliseYourAds = 1;
            }
            //check for improve the website component
            if (obj.dataDisclosed[i].purposes[j].purpose == "improve the website" && improveTheWebsite == 0) {
                for (k = 0; k < improveTheWebsiteStrings.length; k++) {
                    var data = improveTheWebsiteStrings[k];
                    if (obj.dataDisclosed[i].category.includes(data)) {
                        improveTheWebsite = 1;
                        show_components("improveWebsite");
                        show_components("improveWebsite2");
                        break;
                    }
                }
            }
        }
        var recLength = obj.dataDisclosed[i].recipients.length;
        for (var j = 0; j < recLength; j++) {
            var individual_recipient = [];
            if (obj.dataDisclosed[i].recipients[j].name != undefined && obj.dataDisclosed[i].recipients[j].name != "") {
                individual_recipient.push(obj.dataDisclosed[i].recipients[j].name); // loc 0 = id 
            } else {
                continue;
            }
            if (obj.dataDisclosed[i].recipients[j].country != undefined && obj.dataDisclosed[i].recipients[j].country != "") {
                individual_recipient.push(obj.dataDisclosed[i].recipients[j].country);
            } else {
                individual_recipient.push("");  // loc 1 = country
            }
            var purLength = obj.dataDisclosed[i].purposes.length; // loop over all the different purposes in one piece of data disclosed
            var purposes_list = []; // empty list of purposes for one recipient
            for (var p = 0; p < purLength; p++) { // for each purpose iterate
                purposes_list.push(obj.dataDisclosed[i].purposes[p].purpose); // record the purpose
            }
            individual_recipient.push(purposes_list);  // append the purpose list to loc 2 = purposes 
            recipients.push(individual_recipient); // add the individual row to the node list
            
        }
    }

    //load third country component
    var thirdCountries = obj.thirdCountryTransfers;
    document.getElementById('thirdCountry').innerHTML = "";
    if (thirdCountries.length > 0) {
        for (var i = 0; i < thirdCountries.length; i++) {
            var transfer = thirdCountries[i];
            //console.log(`third country ${i}`)
            //var flag = document.createElement('img');
            //flag.id = transfer.country.toLowerCase();
            //flag.src = 'https://www.countryflags.io/' + transfer.country.toLowerCase() + '/shiny/24.png';
            //document.getElementById('thirdCountry').innerHTML = "Your data are transferred to the following countries: ";
            //document.getElementById('thirdCountry').appendChild(flag);
        }
    } else {
        document.getElementById('thirdCountry').innerHTML = "Your data are not transferred to other countries."
    }

    //load data protection component
    document.getElementById('dpo').innerHTML = "";
    if (obj.dataProtectionOfficer.name != undefined) {
        document.getElementById("dpo").innerHTML = `Data Protection Officer: <b>${obj.dataProtectionOfficer.name}</b></br>`;
        show_components('dpo');
    } else {
        hide_components(['dpo']);
    }
    //load automated decision making component
    var aD = document.getElementById('automatedDec');
    aD.innerHTML = "";
    if (obj.automatedDecisionMaking.inUse) {
        aD.innerHTML = "Automated Decision Making: "
        var badge = document.createElement('span');
        badge.textContent = 'in use';
        badge.className = 'badge bg-success';
        aD.appendChild(badge);
    } else {
        aD.innerHTML = "Automated Decision Making: "
        var badge = document.createElement('span');
        badge.textContent = 'not in use';
        badge.className = 'badge bg-danger';
        aD.appendChild(badge);
    }

    //load mindmap
    
    var cur_service = obj.meta.name;
    var cur_purpose = [];
    for (r of recipients) {
        if (cur_purpose.includes(r[2][0])) {
            continue;
        }
        else{
            cur_purpose.push(r[2][0]);
        }
    }
    /*myData = {
        nodes: [{ id: cur_service, country: obj.controller.country, purpose: cur_purpose }],
        links: []
    };
    for (var i = 0; i < recipients.length; i++) {
        myData['nodes'].push({ id: recipients[i][0], country: recipients[i][1], purpose: recipients[i][2] });
        myData['links'].push({ source: cur_service, target: recipients[i][0] })
    }*/
    myCyt = [
        { data: { id: cur_service, group: 'nodes', country: obj.controller.country, purpose: cur_purpose, europe: isEU(obj.controller.country), level:0 } }
    ];


    for (var i = 0; i < recipients.length; i++) {

        //avoid infinite loop -> no infinite loop as only second degree nodes are being requested. 

        myCyt.push({ data: { id: recipients[i][0], group: 'nodes', country: recipients[i][1], purpose: recipients[i][2], europe: isEU(recipients[i][1]), level:1} });
        myCyt.push({ data: { id: i, source: cur_service, target: recipients[i][0], group: 'edges' , lty:'solid'} });

        var secondary = await secondary_nodes(recipients[i][0]);

        if (secondary === 400){
            continue;
        }
        else{
        for (var elem of secondary){
            myCyt.push(elem);
        }       
        }
    }



    //if no purpose given, show session cookies component
    if (service == 0 && security == 0 && legalRequirements == 0 && contact == 0 && improveTheWebsite == 0 && personaliseYourAds == 0) {
        show_components("entry1ID");
    }
    else {
        show_components("entry2ID");
    }
}


async function secondary_nodes(thirdPartyName) {

    async function fetchTilt(name){
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Basic YWRtaW46c2VjcmV0");
        
        var requestOptions = {
          method: 'GET',
          headers: myHeaders,
          redirect: 'follow'
        };
        
        try {
           const response = await fetch("http://ec2-3-64-237-95.eu-central-1.compute.amazonaws.com:8080/tilt/tilt?filter={'meta.name' :'"+name+"'}&keys={'dataDisclosed' : 1}&keys={'dataProtectionOfficer' : 1}", requestOptions);
           let result = await processFetch(name, await response.json());

           return await result
        }
        catch(error) {
            console.log('error', error); 
        }
    }; 

    // use a fetch request to retrieve the tilt
    var processedFetchResult = await fetchTilt(thirdPartyName); 
    return processedFetchResult
    
    function processFetch(thirdPartyName, thirdPartyTilt){
        try {
            var obj_tt = thirdPartyTilt[0];
        }
        catch (e) {
            alert(e)
            alert("Inside Fetch Wrong pasted tilt format.")
        }

        if (typeof obj_tt === 'undefined') {
            return 400 // return 400 to the load elements function in case there is no tilt in database 
        };
        
        var dataDisclosedLength = obj_tt.dataDisclosed.length;
        var recipients = [];
        for (var i = 0; i < dataDisclosedLength; i++) {
            var recLength = obj_tt.dataDisclosed[i].recipients.length;
            for (var j = 0; j < recLength; j++) {
                var individual_recipient = [];
                if (obj_tt.dataDisclosed[i].recipients[j].name != undefined && obj_tt.dataDisclosed[i].recipients[j].name != "") {
                    individual_recipient.push(obj_tt.dataDisclosed[i].recipients[j].name); // loc 0 = id 
                } else {
                    continue;
                }
                if (obj_tt.dataDisclosed[i].recipients[j].country != undefined && obj_tt.dataDisclosed[i].recipients[j].country != "") {
                    individual_recipient.push(obj_tt.dataDisclosed[i].recipients[j].country);
                } else {
                    individual_recipient.push("");  // loc 1 = country
                }
                var purLength = obj_tt.dataDisclosed[i].purposes.length; // loop over all the different purposes in one piece of data disclosed
                var purposes_list = []; // empty list of purposes for one recipient
                for (var p = 0; p < purLength; p++) { // for each purpose iterate
                    purposes_list.push(obj_tt.dataDisclosed[i].purposes[p].purpose); // record the purpose
                }
                individual_recipient.push(purposes_list);  // append the purpose list to loc 2 = purposes 
                recipients.push(individual_recipient); // add the individual row to the node list
            }
        }

        thirdPartyNodes = [];
        for (var k = 0; k < recipients.length; k++) {
            thirdPartyNodes.push({ data: { id: recipients[k][0], group: 'nodes', country: recipients[k][1], purpose: recipients[k][2], europe: isEU(recipients[k][1]), level:2} });
            thirdPartyNodes.push({ data: { id: thirdPartyName+k, source: thirdPartyName, target: recipients[k][0], group: 'edges', lty:'dashed' } })
        }

        return thirdPartyNodes 
    }
}

function load_cytoscape() {
    var cy = cytoscape({


        container: document.getElementById('cy'), // container to render in

        elements: myCyt,



        style: [ // the stylesheet for the graph
            {
                selector: 'node', // fix color and fix width
                style: {
                    'width': '100%',
                    'height': '75%',
                    'shape':'ellipse',
                    'color': 'black',
                    'background-color': function (node) {
                        return `${node_color(node.data('level'))}`
                    }, 
                    'background-opacity': function (node) {
                        return `${1/(node.data("level")+1)}`
                    }, 
                    //'content': `${node.data("id")}`,
                    // all this refers to the label only. it overlays the actual node. 
                    'label': function (node) {
                        return `${node.data("id")}` 
                    }, // html text to go inside the node label. */
                    // add flags (check), icons for purposes
                    'color': 'rgb(0,0,0)',
                    'text-wrap': 'wrap',
                    'text-background-color': "#fff",
                    'text-background-opacity': '1',
                    'text-background-shape': 'roundrectangle',
                    'text-halign': 'center',
                    'text-valign': 'center', 
                },
            },

            {
                selector: 'edge',
                style: {
                    'width': 2,
                    'line-color': '#ccc',
                    'target-arrow-color': '#ccc',
                    'target-arrow-shape': 'triangle',
                    'curve-style': 'bezier',
                    'line-style': function(ele){return ele.data('lty')},
                },
            },
            {
                selector: '.hidden',
                css: {
                    'display': 'none'
                }
            }
        ],

        layout: {
            name: 'breadthfirst',
            rows: 3
        }

        
    });

    cy.nodes().forEach(function( ele ){

        // add toggle button to third party nodes. 
        if (ele.data("level") == 1) {
            var myButton = document.createElement("div");

            myButton.innerHTML = `<div class=\"col-12 p-1\"">\n
            <div id="switch${ele.id()}" class="form-check form-switch\">\n
            <input id="switch_input${ele.id()}" class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked>\n
            <label class="form-check-label" for="flexSwitchCheckChecked">${ele.id()}</label> \n
            </div> \n</div>`; 
            document.getElementById('comp_switches').appendChild(myButton);

            document.getElementById(`switch_input${ele.id()}`).addEventListener('change', function () {
                ele.toggleClass("hidden");
                ele.successors().toggleClass("hidden");
                update_yappl_utilizer(ele.id(), ele.data("purpose"))
            });
        }

        // disable toggle for tertiary level of nodes.
        // not sure if it is possible to disagree with a third party passing my data to someone else afterwards. 
        else if (ele.data("level") == 2) {
            var myButton = document.createElement("div");
            myButton.innerHTML = `<div class=\"col-12 p-1\"">\n
            <div id="switch${ele.id()}" class="form-check form-switch\">\n
            <input id="switch_input${ele.id()}" class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked disabled>\n
            <label class="form-check-label" for="flexSwitchCheckChecked">${ele.id()}</label> \n
            </div> \n</div>`; 
            document.getElementById('comp_switches').appendChild(myButton);
        }

        //begin yappl
        // check that node has a switch
        if (ele.data('level') ==1){
            var touched = 0
            //check if utilizer is explicitely excluded
            if (cookie_content != null){
                for (var c =0; c < cookie_content['preference'].length; c++){
                    if (cookie_content['preference'][c]['rule']['utilizer']['excluded'].includes(ele.id())){
                        const touched_button = document.getElementById(`switch_input${ele.id()}`);
                        touched_button.toggleAttribute('checked');
                        ele.toggleClass("hidden");
                        ele.successors().toggleClass("hidden");
                        update_yappl_utilizer(ele.id(), ele.data("purpose"))
                        touched = 1
                    }
                }
            }

            // check if their purpose is excluded on the primary toggles
            // also check if already switched off from yappl
            if (touched == 0 && ele.data('purpose') == "personalise your ads" && (document.getElementById("tglPersAds").checked == false || document.getElementById("tglAnnoyed1").checked == false || document.getElementById("tglPersAdsModal").checked == false)) {
                const touched_button = document.getElementById(`switch_input${ele.id()}`);
                touched_button.toggleAttribute('checked');
                ele.toggleClass("hidden");
                ele.successors().toggleClass("hidden");
                update_yappl_utilizer(ele.id(), ele.data("purpose"))
            }
            
            else if (touched == 0 && ele.data('purpose') == "improve the website" && (document.getElementById("tglWebsite").checked == false || document.getElementById("tglAnnoyed2").checked == false || document.getElementById("tglWebsiteModal").checked == false)) {
                const touched_button = document.getElementById(`switch_input${ele.id()}`);
                touched_button.toggleAttribute('checked');
                ele.toggleClass("hidden");
                ele.successors().toggleClass("hidden");
                update_yappl_utilizer(ele.id(), ele.data("purpose"))
            }
        
            // end yappl section
        }

    }); 
    
        // toggle EU states
        document.getElementById("europe").addEventListener('change', function () {
            cy.nodes('[!europe]').toggleClass("hidden");
            cy.nodes('[!europe]').forEach(function (node){
                const non_eu_button = document.getElementById(`switch_input${node.id()}`);
                non_eu_button.toggleAttribute('checked'); // the toggle somehow gets disconnected if I toggle manually on the page. 
            })
        cy.nodes('[?europe]').each(function (node) {
            if (node.connectedEdges().hidden()) {
                node.toggleClass("hidden");
            }

        });
        

    });

    function makePopper(ele) {
        let ref = ele.popperRef(); // used only for positioning
        let dummyDom = document.createElement('div')
    
        ele.tippy = tippy(dummyDom, { // tippy options:
          //getReferenceClientRect: ref,
          followCursor: true,
          allowHTML: true,
          content: () => {
            let content = document.createElement('div');

            if (ele.data("europe")){
                var eu_flag = getFlagEmoji("EU")
                }
            else{
                var eu_flag = ""
            }
            
            content.innerHTML = `<div class=\"node-label\" style=\"height:100%; width:100%\"> 
                                    <div><b>${ele.data("id")} </b> </div> 
                                    <div style="text-align: left">Country of Origin: ${getFlagEmoji(ele.data("country"))} ${eu_flag}</div>
                                    <div id = purpose_${ele.data("purpose")} style="text-align: left"> Purpose of Transfer:\n ${purpose_icon(ele.data("purpose"))} </div> 
                                    </div>    
                                ` ;
    
            return content;
          },
          trigger: 'manual' // probably want manual mode
        });
      }
    
    function makeEdgePopper(ele) {
        let ref = ele.popperRef(); // used only for positioning
        let dummyDom = document.createElement('div')
    
        ele.tippy = tippy(dummyDom, { // tippy options:
          //getReferenceClientRect: ref,
          followCursor: true,
          allowHTML: true,
          content: () => {
            let content = document.createElement('div');

            content.innerHTML = `<div class=\"node-label\" style=\"height:100%; width:100%\"> 
                                    <div> Dashed lines lead to orgs. only known through other TILT.</div> 
                                    <div> There is no certainty which data is transferred.</div> 
                                    </div>    
                                ` ;
    
            return content;
          },
          trigger: 'manual' // probably want manual mode
        });
      }
      cy.ready(function() {
        cy.nodes().forEach(function(ele) {
          makePopper(ele);
        });
      });

      cy.ready(function() {
        cy.edges().forEach(function(ele) {
            if(ele.data("lty")=='dashed'){
                makeEdgePopper(ele);  
            };
        });
      });
    
      cy.elements().unbind('mouseover');
      cy.elements().bind('mouseover', (event) => event.target.tippy.show());
    
      cy.elements().unbind('mouseout');
      cy.elements().bind('mouseout', (event) => event.target.tippy.hide());
    
}

//update yappl for utilizer function 
function update_yappl_utilizer(org_name, purpose){

    // redo the date
    var today = new Date();
    var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var cur_time = date + ' ' + time;
    var included = 0
    // update the utilizer
    var numRules = yappl['preference'].length; //get length of yappl rules
    for (var r = 0; r < numRules; r++ ){ // iterate over the rules
        // in case the org is permitted in one of the rules, remove it and add to excluded
        if (yappl['preference'][r]['rule']['utilizer']['permitted'].includes(org_name)){ // 
            for(var i = 0; i < yappl['preference'][r]['rule']['utilizer']['permitted'].length; i++){ 
    
                if ( yappl['preference'][r]['rule']['utilizer']['permitted'][i] === org_name) { 
            
                    yappl['preference'][r]['rule']['utilizer']['permitted'].splice(i, 1);
                    yappl['preference'][r]['rule']['utilizer']['excluded'].push(org_name);
                    yappl['preference'][r]['rule']['valid_from'] = cur_time 
                    included = 1
                    continue
                    //continue // continue to skip the next step
                }
            }
        }
        // if the company is on the excluded list, change then switch again 
        else if (yappl['preference'][r]['rule']['utilizer']['excluded'].includes(org_name)){ // 
            for(var i = 0; i < yappl['preference'][r]['rule']['utilizer']['excluded'].length; i++){ 
    
                if ( yappl['preference'][r]['rule']['utilizer']['excluded'][i] === org_name) { 
                    yappl['preference'][r]['rule']['utilizer']['excluded'].splice(i, 1);
                    yappl['preference'][r]['rule']['utilizer']['permitted'].push(org_name);
                    yappl['preference'][r]['rule']['valid_from'] = cur_time 
                    included = 1
                    continue
                }
            }
        }   
    }

    //add new rule if there is no YaPPL rule yet
    // this is intentionally so, as we default to consent to service / contact cookies
    if (included == 0){
            // initialise the rule
            add_rule(yappl, '', [], cur_time);
            var loc_lastRule = [yappl['preference'].length - 1] 
            // add the company after because the function is written to allow permitted comps to be added
            yappl['preference'][loc_lastRule]['rule']['purpose']['permitted'] = purpose
            yappl['preference'][loc_lastRule]['rule']['utilizer']['excluded'].push(org_name)
    }
    //console.log(yappl)
    //update the cookie
    window.localStorage.setItem('YaPPL', JSON.stringify(yappl));
    //document.cookie = "YaPPL=" + JSON.stringify(yappl) + ";";

}


function load_tilt(tilt) {
    try {
        hide_components(["entry1ID", "entry2ID", "service", "contact", "improveWebsite", "personaliseAds", "improveWebsite2", "personaliseAds2", "legalRequirements", "security"]);
        var obj = JSON.parse(tilt);
        load_components(obj);
        load_yappl(obj);
    }
    catch (e) {
        alert(e)
        alert("Wrong tilt format.")
    }

    // Get the modal
    var modal = document.getElementById("myModal");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}

//get svg for puposes in tilt
function purpose_icon(purpose){

    var purpose_div = document.createElement('ul');
    //purpose_div.classList = 'card-group';
    // got these icons from https://www.svgrepo.com/vectors/service/outlined/1 //
    var purpose_dict = {'service': '<iframe src="Icons/service.svg" width="12px" height="12px"> </iframe> Service', 
                        'improve the website':'<iframe src="Icons/improve.svg" width="12px" height="12px"> </iframe> Improving the website'}

    //let unique_purposes = purpose.filter((v, i, a) => a.indexOf(v) === i);
    for (var pur of purpose){
        
        var item = document.createElement('li');
        //card.classList = 'card-body';

        var icon_content = purpose_dict[pur] ;
        item.innerHTML = icon_content;


        purpose_div.appendChild(item);
    }
    
    return purpose_div.outerHTML
}

//change colour of toggle, if checked and hovered (does not work)
function switchColors(id) {
    if (document.getElementById(id).checked == true) {
        document.getElementById(id).classList.add("inverse-toggle");
    }

}

function isEU(code){
    const EU = [
        'AL',
        'AD',
        'AT',
        'AZ',
        'BY',
        'BE',
        'BA',
        'BG',
        'HR',
        'CY',
        'CZ',
        'DK',
        'EE',
        'FI',
        'FR',
        'GE',
        'DE',
        'GR',
        'HU',
        'IS',
        'IE',
        'IT',
        'KZ',
        'XK',
        'LV',
        'LI',
        'LT',
        'LU',
        'MK',
        'MT',
        'MD',
        'MC',
        'ME',
        'NL',
        'NO',
        'PL',
        'PT',
        'RO',
        'RU',
        'SM',
        'RS',
        'SK',
        'SI',
        'ES',
        'SE',
        'CH',
        'TR',
        'UA',
        //'GB', removed even though they adopted GDPR after they left the EU
        'VA',
      ]
      var inEU = EU.includes(code);
      return inEU
}

function node_color(degree){
    
    if (degree == 0){
        return '#3650fe'
    }
    else if (degree == 1){
        return '#3650fe'
    }
    else if (degree == 2){
        return '#888'
    }

}