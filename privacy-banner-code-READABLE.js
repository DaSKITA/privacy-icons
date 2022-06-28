var loadedScripts = {"scripts":"
  <!-- stylesheet and script for toggles-->
  <link href="https://cdn.jsdelivr.net/gh/gitbrent/bootstrap4-toggle@3.6.1/css/bootstrap4-toggle.min.css" rel="stylesheet">
  <script src="https://cdn.jsdelivr.net/gh/gitbrent/bootstrap4-toggle@3.6.1/js/bootstrap4-toggle.min.js"></script>

  <!-- add personal stylesheet-->
  <link href="style_privacy.css" rel="stylesheet">
  <!-- add personal javascript--> 
 <script src="main_privacy.js"></script>

  <!-- add HTMLcontent-->
  </script>

  <!-- add force graph script -->
 <script type="module"> 
 import cytoscape from "./cytoscape.esm.min.js"; 
 </script> 
 <script type="module"> 
 import * as d3 from "https://cdn.skypack.dev/d3@7"; 
 const div = d3.selectAll("div"); 
 </script> <script src="https://cdn.jsdelivr.net/npm/d3-dispatch@3"></script> 
 <script src="https://cdn.jsdelivr.net/npm/d3-quadtree@3"></script> 
 <script src="https://cdn.jsdelivr.net/npm/d3-timer@3"></script> 
 
 <script src="https://cdn.jsdelivr.net/npm/d3-force@3"></script>  <--Required Stylesheets -->
  <link
    type="text/css"
    rel="stylesheet"
    href="https://unpkg.com/bootstrap/dist/css/bootstrap.min.css"
  />
  <link
    type="text/css"
    rel="stylesheet"
    href="https://unpkg.com/bootstrap-vue@latest/dist/bootstrap-vue.css"
  />

  <!-- Load polyfills to support older browsers -->
  <script src="https://polyfill.io/v3/polyfill.min.js?features=es2015%2CIntersectionObserver"></script>
",
"HTML_content":"
  <div id="content">
    <!-- Our application root element -->
    <div id="app">

      <!--Entrypoint 1: session cookies-->
      <div class="container entry1" id="entry1ID" onmouseover="show_components('close1')" onmouseout="hide_components(['close1'])">
        <button type="button" class="btn-close close-entry close-entry1" id="close1" aria-label="Close" onclick="hide_components(['entry1ID', 'entry2ID', 'service', 'contact', 'improveWebsite2', 'personaliseAds2', 'legalRequirements', 'security'])"></button>
          <div class="card mb-4 shadow-sm background2 p-0" onclick="show_components('myModal'); update_yappl('','modal')">
            <div class="borderbox1 centering p-0">
              <button class="transparentBtn" id="modalBtn2">
              <img src="Icons/data-protection.svg" alt="SVG mit img Tag laden" width="30" >
              </button>
            </div>
          </div>
      </div>
      <!--Entrypoint 2: functional cookies -->
      <div class="container entry2a entry2asize" id="entry2ID" onmouseover="show_components('close2')" onmouseout="hide_components(['close2'])">
        <button type="button" class="btn-close close-entry" id="close2" aria-label="Close" onclick="hide_components(['entry1ID', 'entry2ID', 'service', 'contact', 'improveWebsite2', 'personaliseAds2', 'legalRequirements', 'security'])"></button>
        <div class="card-deck text-center">
          <div class="card mb-2 shadow-sm">
            <div class="borderbox centering background1 borderRad">
              <div class="row gy-5 w-100 p-3">
                <div class="col-3 p-0 order-1" style="text-align: left;">
                  <img src="Icons/data-protection.svg" alt="SVG mit img Tag laden" width="50" >
                </div>
                <div class="col-9 p-0 order-2 vertikal-flex" style="display:flex; align-items: center; justify-content: center;">
                  <h5 class="my-0 font-weight-normal" style="color:white"><b>Data Protection</b></h4>
                </div>
              </div>
            </div>
            <!--Purpose "Personalise your ads"-->
            <div class="container" id="personaliseAds">
              <div class="card-deck text-center" onmouseenter="hide_components(['personaliseAds']); show_components('annoyed1'); update_toggle_state('tglPersAds', 'tglAnnoyed1'); switchColors('tglPersAds')">
                <div class="card mb-2 shadow-sm paddingleft purpose-box" id="purpose-box-ads">
                  <p style="font-size: 13px; text-align: left;"><b>Personalise your ads</b></p>
                  <div class="row gy-5 w-100 paddingbottom " id="box-content-ads">
                    <div class="col-2 order-1 paddingleft" style="text-align: left;">
                      <img src="Icons/privacy-icon.svg" alt="SVG mit img Tag laden" width="20" >
                    </div>
                    <div class="col-2 order-1 paddingleft" style="text-align: left;">
                      <img src="Icons/fairness-icon.svg" alt="SVG mit img Tag laden" width="20" >
                    </div>
                    <div class="col-2 order-1 paddingleft" style="text-align: left;">
                      <img src="Icons/freedom-icon.svg" alt="SVG mit img Tag laden" width="20" >
                    </div>
                    <div class="col-6 p-0 order-2" style="text-align: right;" onclick="update_yappl('tglPersAds', 'entry2'); update_toggle_state('tglPersAds', 'tglAnnoyed1'); update_toggle_state('tglPersAds', 'tglPersAdsModal');">
                      <input class="toggle-btn-ads" type="checkbox" data-toggle="toggle" data-size="xs" data-style="ios" data-on=" " data-off=" " id="tglPersAds" >
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!--Annoyed message 1-->
            <div class="container" >
              <div class="card-deck text-center annoyed_message" >
                <div class="card mb-2 shadow-sm paddingleft purpose-box" id="annoyed1" onmouseleave="hide_components(['annoyed1']); show_components('personaliseAds'); update_toggle_state('tglAnnoyed1', 'tglPersAds');">
                  <p style="font-size: 13px; text-align: left; margin-bottom: 2px;"><b>Personalize your ads</b></p>
                  <div class="row gy-5 w-100 paddingbottom" id="box-content-ads">
                    <p style="font-size: 11px; text-align: left; margin-bottom: 0px;">You're annoyed from cookie banners?<br> Click here and control once</p>
                    <div class="col-6 p-0 order-2" style="text-align: right; margin-top: 0px; width: 100%; position: relative; top: -17px;" onclick="update_yappl('tglAnnoyed1', 'entry2'); update_toggle_state_inv('tglAnnoyed1', 'tglPersAdsModal')">
                      <input class="toggle-btn-ads" type="checkbox" data-toggle="toggle" data-size="xs" data-style="ios" data-on=" " data-off=" " id="tglAnnoyed1">
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!--Purpose "Improve the Website"-->
            <div class="container" id="improveWebsite" onmouseenter="hide_components(['improveWebsite']); show_components('annoyed2'); update_toggle_state('tglWebsite', 'tglAnnoyed2')">
              <div class="card-deck text-center">
                <div class="card mb-2 shadow-sm paddingleft purpose-box" id="purpose-box" onmouseover="switchColors('tglWebsite')">
                  <p style="font-size: 13px; text-align: left;"><b>Improve the website</b></p>
                  <div class="row gy-5 w-100 paddingbottom">
                    <div class="col-6 order-1 paddingleft" style="text-align: left;">
                      <img src="Icons/privacy-icon.svg" alt="SVG mit img Tag laden" width="20" >
                    </div>
                    <div class="col-6 p-0 order-2" style="text-align: right;" onclick="update_yappl('tglWebsite', 'entry2');">
                      <input class="toggle-btn-wbs" type="checkbox" id="tglWebsite" data-toggle="toggle" data-size="xs" data-style="ios" data-on=" " data-off=" " checked>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!--Annoyed message 2-->
            <div class="container" >
              <div class="card-deck text-center annoyed_message" id="annoyed_message">
                <div class="card mb-2 shadow-sm paddingleft purpose-box" id="annoyed2" onmouseleave="hide_components(['annoyed2']); show_components('improveWebsite'); update_toggle_state('tglAnnoyed2', 'tglWebsite');" onmouseover="switchColors('tglAnnoyed2')">
                  <p style="font-size: 13px; text-align: left; margin-bottom: 2px;"><b>Improve the website</b></p>
                  <div class="row gy-5 w-100 paddingbottom" id="box-content-ads">
                    <p style="font-size: 11px; text-align: left; margin-bottom: 0px;">You're annoyed from cookie banners?<br> Click here and control once</p>
                    <div class="col-6 p-0 order-2" style="text-align: right; margin-top: 0px; width: 100%; position: relative; top: -17px;" onclick="update_yappl('tglAnnoyed2','entry2'); update_toggle_state_inv('tglAnnoyed2', 'tglWebsiteModal')">
                      <input class="toggle-btn-wbs" type="checkbox" data-toggle="toggle" data-size="xs" data-style="ios" data-on=" " data-off=" " id="tglAnnoyed2">
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button type="button" id="modalBtn" onclick="show_components('myModal'); update_yappl('','modal')" class="btn btn-outline-light btn-sm" style="color: rgb(115, 122, 122); font-family: Batang; font-size:large; width:100%;">=</button>
          </div>
        </div>
      </div>
      <div id="myModal" class="modal">
  <div class="modal-content">
  <!--Privacy Dashboard -->
  <div class="row gy-0 w-100 privDash" id="modalContent" style="overflow: hidden; display:flex; align-items: stretch !important;">
    <div class="col p-0 privDash" style="max-width:270px; box-shadow: #e0d0cd 0px 2px 8px 0px;">
      <div class="container entry2a privDash">
        <div class="card-deck text-center privDash">
            <div class="borderbox centering background1 borderRad">
              <div class="row gy-5 w-100 p-3">
                <div class="col-3 p-0 order-1" style="text-align: left;">
                  <img src="Icons/data-protection.svg" alt="SVG mit img Tag laden" width="50" >
                </div>
                <div class="col-9 p-0 order-2 vertikal-flex" style="display:flex; align-items: center; justify-content: center;">
                  <h5 class="my-0 font-weight-normal" style="color:white; text-align: center;"><b>Data Protection</b></h4>
                </div>
              </div>
            </div>
            <!--Purpose "Personalize your ads"-->
            <div class="container" id="personaliseAds2" style="padding:7px;">
              <div class="card-deck text-center">
                <div class="card mb-2 shadow-sm paddingleft purpose-box" id="purpose-box">
                  <p style="font-size: 13px; text-align: left;"><b>Personalize your ads</b></p>
                  <div class="row gy-2 w-100 paddingbottom">
                    <div class="col-2 order-1 paddingleft" style="text-align: left;">
                      <img src="Icons/privacy-icon.svg" alt="SVG mit img Tag laden" width="20" >
                    </div>
                    <div class="col-2 order-1 paddingleft" style="text-align: left;">
                      <img src="Icons/fairness-icon.svg" alt="SVG mit img Tag laden" width="20" >
                    </div>
                    <div class="col-2 order-1 paddingleft" style="text-align: left;">
                      <img src="Icons/freedom-icon.svg" alt="SVG mit img Tag laden" width="20" >
                    </div>
                    <div class="col-6 p-0 order-2" style="text-align: right;" onclick="update_yappl('tglPersAdsModal','modal'); update_toggle_state_inv('tglPersAdsModal', 'tglAnnoyed1'); update_toggle_state_inv('tglPersAdsModal', 'tglPersAds')">
                      <input class="toggle-btn-ads" id="tglPersAdsModal" type="checkbox" data-toggle="toggle" data-size="xs" data-style="ios" data-on=" " data-off=" " checked>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!--Purpose "Improve the Website"-->
            <div class="container" id="improveWebsite2" style="padding:7px;">
              <div class="card-deck text-center">
                <div class="card mb-2 shadow-sm paddingleft purpose-box" id="purpose-box">
                  <p style="font-size: 13px; text-align: left;"><b>Improve the website</b></p>
                  <div class="row gy-5 w-100 paddingbottom">
                    <div class="col-6 order-1 paddingleft" style="text-align: left;">
                      <img src="Icons/privacy-icon.svg" alt="SVG mit img Tag laden" width="20" >
                    </div>
                    <div class="col-6 p-0 order-2" style="text-align: right;" onclick="update_yappl('tglWebsiteModal','modal'); update_toggle_state_inv('tglWebsiteModal', 'tglAnnoyed2'); update_toggle_state_inv('tglWebsiteModal', 'tglWebsite')">
                      <input class="toggle-btn-wbs" id="tglWebsiteModal" type="checkbox" checked data-toggle="toggle" data-size="xs" data-style="ios" data-on=" " data-off=" ">
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <!--Purpose "Security"-->
            <div class="container" id="security" style="padding:7px;">
              <div class="card-deck text-center">
                <div class="card mb-2 shadow-sm paddingleft purpose-box" id="purpose-box">
                  <p style="font-size: 13px; text-align: left;"><b>Security</b></p>
                  <div class="row gy-2 w-100 paddingbottom">
                    <div class="col-2 order-1 paddingleft" style="text-align: left;">
                      <img src="Icons/privacy-icon.svg" alt="SVG mit img Tag laden" width="20" >
                    </div>
                    <div class="col-2 order-1 paddingleft" style="text-align: left;">
                      <img src="Icons/fairness-icon.svg" alt="SVG mit img Tag laden" width="20" >
                    </div>
                    <div class="col-2 order-1 paddingleft" style="text-align: left;"></div>
                    <div class="col-6 p-0 order-2" style="text-align: right;"></div>
                  </div>
                </div>
              </div>
            </div>
            <!--Purpose "Legal Requirements"-->
            <div class="container" id="legalRequirements" style="padding:7px;">
              <div class="card-deck text-center">
                <div class="card mb-2 shadow-sm paddingleft purpose-box" id="purpose-box">
                  <p style="font-size: 13px; text-align: left;"><b>Legal Requirements</b></p>
                  <div class="row gy-2 w-100 paddingbottom">
                    <div class="col-2 order-1 paddingleft" style="text-align: left;">
                      <img src="Icons/privacy-icon.svg" alt="SVG mit img Tag laden" width="20" >
                    </div>
                    <div class="col-2 order-1 paddingleft" style="text-align: left;">
                      <img src="Icons/fairness-icon.svg" alt="SVG mit img Tag laden" width="20" >
                    </div>
                    <div class="col-2 order-1 paddingleft" style="text-align: left;">
                      <img src="Icons/freedom-icon.svg" alt="SVG mit img Tag laden" width="20" >
                    </div>
                    <div class="col-6 p-0 order-2" style="text-align: right;"></div>
                  </div>
                </div>
              </div>
            </div>
            <!--Purpose "Contact"-->
            <div class="container" id="contact" style="padding:7px;">
              <div class="card-deck text-center">
                <div class="card mb-2 shadow-sm paddingleft purpose-box" id="purpose-box">
                  <p style="font-size: 13px; text-align: left;"><b>Contact</b></p>
                  <div class="row gy-5 w-100 paddingbottom">
                    <div class="col-6 order-1 paddingleft" style="text-align: left;">
                      <img src="Icons/privacy-icon.svg" alt="SVG mit img Tag laden" width="20" >
                    </div>
                    <div class="col-6 p-0 order-2" style="text-align: right;"></div>
                  </div>
                </div>
              </div>
            </div>
            <!--Purpose "Service"-->
            <div class="container" id="service" style="padding:7px;">
              <div class="card-deck text-center">
                <div class="card mb-4 shadow-sm paddingleft purpose-box" id="purpose-box">
                  <p style="font-size: 13px; text-align: left;"><b>Service</b></p>
                  <div class="row gy-5 w-100 paddingbottom">
                    <div class="col-6 order-1 paddingleft" style="text-align: left;">
                      <img src="Icons/privacy-icon.svg" alt="SVG mit img Tag laden" width="20" >
                    </div>
                    <div class="col-6 p-0 order-2" style="text-align: right;"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
            <!--Close window button-->
            <div class="container" style="padding:7px; bottom: 9px; position:absolute"> <!--position:absolute-->
              <div class="card-deck text-center">
                <div class="card shadow-sm paddingleft">
                  <span class="close p-1" style="color:black; font-size: 13px;"><b>Close window</b></span>
                </div>
              </div>
            </div>
      </div>
    </div>
    
    <div class="col p-0">
      <!--search bar (fix icon)-->
      <div class="form-group has-search">
        <input type="text" class="form-control" placeholder="Search" style="border:none !important;">
      </div>
      <div class="p-3" id="bigContainer" style="background-color: whitesmoke; padding-top: 0.5rem !important; position: relative; height:100%;">
      <!--Navbar-->
        <nav class="navbar navbar-expand-lg navbar-light">
          <div class="container-fluid" style="box-shadow: #e0d0cd 0px 2px 8px 0px; padding:3px;">
            <div class="collapse navbar-collapse" >
              <ul class="navbar-nav flex-fill">
                <li class="nav-item flex-fill">
                  <button id="control_btn" class="btn btn-outline-primary active btn-block btn-control" style="width:100%; padding:0px; color: white !important;" onclick='var current = document.getElementsByClassName("active");
                  current[0].className = current[0].className.replace(" active", "");
                  this.className += " active"; hide_components(["contentContainer2"]); show_components("contentContainer1")'>Control</button>
                </li>
                <li class="nav-item flex-fill">
                  <button id="navbar" class="btn btn-outline-primary btn-block btn-arrow-right btn-arrow-right-after" style="width:100%; padding:0px" onclick='var current = document.getElementsByClassName("active");
                  current[0].className = current[0].className.replace(" active", "");
                  this.className += " active";'>Identity</button>
                </li>
                <li class="nav-item flex-fill">
                  <button id="navbar" class="btn btn-outline-primary btn-block btn-arrow-right btn-arrow-right-before btn-arrow-right-after" style="width:100%; padding:0px" onclick='var current = document.getElementsByClassName("active");
                  current[0].className = current[0].className.replace(" active", "");
                  this.className += " active";'>Interests</button>
                </li>
                <li class="nav-item flex-fill">
                  <button id="navbar" class="btn btn-outline-primary btn-block btn-arrow-right btn-arrow-right-before btn-arrow-right-after" style="width:100%; padding:0px" onclick='var current = document.getElementsByClassName("active");
                  current[0].className = current[0].className.replace(" active", "");
                  this.className += " active";'>Source data</button>
                </li>
                <li class="nav-item flex-fill">
                  <button id="navbar" class="btn btn-outline-primary btn-block btn-arrow-right btn-arrow-right-before btn-arrow-right-after" style="width:100%; padding:0px" onclick='var current = document.getElementsByClassName("active");
                  current[0].className = current[0].className.replace(" active", "");
                  this.className += " active"; get_set_height("modalContent", "modalContent"); get_set_height("contentContainer1", "contentContainer2"); hide_components(["contentContainer1"]); show_components("contentContainer2"); load_cytoscape();'>Data receiver</button>
                </li>
                <li class="nav-item flex-fill">
                  <button id="navbar" class="btn btn-outline-primary btn-block btn-arrow-right btn-arrow-right-before btn-arrow-right-after" style="width:100%; padding:0px" onclick='var current = document.getElementsByClassName("active");
                  current[0].className = current[0].className.replace(" active", "");
                  this.className += " active";'>Safeguards</button>
                </li>
                <li class="nav-item flex-fill">
                  <button id="navbar" class="btn btn-outline-primary btn-block btn-arrow-right btn-arrow-right-before" style="width:100%; padding:0px;" onclick='var current = document.getElementsByClassName("active");
                  current[0].className = current[0].className.replace(" active", "");
                  this.className += " active";'>Privacy Seal</button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <!--Example page: Personalise your advertisements-->
        <div class="container" id="contentContainer1" style="top: 4px; bottom:9px; position:relative;"> <!--height: 83%;-->
          <div class="card" style="box-shadow: #e0d0cd 0px 2px 8px 0px; height:100%;">
            <div class="card-body">
              <div  style="float: left; width:70%">
                <h3><b>Personalise your advertisements (ads)</b></h3>
                <p>Advertising companies ("they") personalise advertisements on websites you visit to make the advertised products more relevant for you. 
                  This <b><a style="color: #3650fe;">Privacy-Seal</a></b> makes sure that you maintain control and the advertising companies ("they") implement all safeguards effectively.
                </p>
              </div>
              <div class="col-md-6 p-1" style="float:left; text-align:left; padding-top: 0px !important; padding-bottom: 40px !important;">
                <p>
                  <!--<span id="controller"></span>-->
                  <span id="dpo"></span>
                  <span id="automatedDec"></span>
                </p>
              </div>
              <div class="col-md-6 p-1" style="float:right; text-align:right;">
                <div class="card" style="margin:5px 0px 5px 5px !important; border:none; width:90px; height:90px; float:right;">
                  <div class="card" style="background-color: #f8f0ee; border-color: #f8f0ee; width:90px; height:90px; float:right; box-shadow: #e0d0cd 0px 2px 8px 0px;">
                    <div class="card-body centering">
                      <img src="Icons/freedom-icon.svg" alt="SVG mit img Tag laden" width="60">
                    </div>
                  </div>
                </div>
                
                <div class="card" style="margin:5px !important; border:none; width:90px; height:90px; float:right;">
                  <div class="card" style="background-color: #f8f6f1; border-color: #f8f6f1; width:90px; height:90px; float:right; box-shadow: #d3d1cd 0px 2px 8px 0px;">
                    <div class="card-body centering">
                      <img src="Icons/fairness-icon.svg" alt="SVG mit img Tag laden" width="60">
                    </div>
                  </div>
                </div>
                <div class="card" style="margin:5px !important; border:none; width:90px; height:90px; float:right;">
                  <div class="card" style="background-color: #ecf2f3; border-color: #ecf2f3; width:90px; height:90px; float:right; box-shadow: #c3c8c9 0px 2px 8px 0px;">
                    <div class="card-body centering">
                      <img src="Icons/privacy-icon.svg" alt="SVG mit img Tag laden" width="60">
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-12 p-1" style="float:right;">
                <div class="card" style="background-color: rgb(221, 228, 243); border-color: rgb(221, 228, 243); box-shadow: rgb(185, 191, 204) 0px 2px 8px 0px;">
                  <div class="card-body">
                        <div class="col-xs-6" style="float:left; margin-right: 15px; position:relative; top: -60px;">
                        <img src="Icons/data-protection.svg" alt="SVG mit img Tag laden" width="100" style="float:left;" >
                        </div>
                        <div class= "col-xs-6">
                          <div  style="float: left; width:70%">
                            <h6><b>How our system works</b></h6>
                            <p>To adjust the pros and cons of personalised ads to your preferences, you get the <b><a style="color: #3650fe;">following information and controls.</a></b> 
                              No other risks apply.</p>
                          </div>
                        </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!--Example page 2: read stuff from tilt-->
        <div class="container" id="contentContainer2" style="top: 4px; bottom:9px; position:relative;" ><!--height: 83%;-->
          <div class="card" style="box-shadow: #e0d0cd 0px 2px 8px 0px; height: 100%">
    <div class="card-group"> 
       <div class="card-body" style="height:100%;">
              <div class="col-12 p-1 border" style="float: left; width:60%">
                <h3><b>Who else has access to your data</b></h3>
                <p>In the graphic below you can see which companies get access to your data that is collected on this website. </br>
                Hover over the nodes to get more information.</p>
                <p><span id="thirdCountry"></span>
                </p>
     </div>
   </div>
   <div class="card-body" style="height:100%; border-width=3; border-color=rgb(0,0,0)">
    <div class="col-12 p-1 border" style="float: left; width:100%">
        <div class="form-check form-switch" style="float: right; size:60%">
          <input class="form-check-input" type="checkbox" id="europe" checked>
          <label class="form-check-label" for="europe">Include Non-EU</label>
      </div>
   </div>
            </div>
         </div>
       <div id="cy">
  </div>
       </div>
        </div>
      </div>
    </div>
  </div> 
  </div> 
</div>  

</div>
</div>
\t"
}