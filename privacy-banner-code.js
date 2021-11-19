var loadedScripts = {"scripts":"\n  <!-- stylesheet and script for toggles-->\n  <link href=\"https://cdn.jsdelivr.net/gh/gitbrent/bootstrap4-toggle@3.6.1/css/bootstrap4-toggle.min.css\" rel=\"stylesheet\">\n  <script src=\"https://cdn.jsdelivr.net/gh/gitbrent/bootstrap4-toggle@3.6.1/js/bootstrap4-toggle.min.js\"></script>\n\n  <!-- add personal stylesheet-->\n  <link href=\"style_privacy.css\" rel=\"stylesheet\">\n  <!-- add personal javascript-->\n  <script src=\"main_privacy.js\"></script>\n\n  <!-- add HTMLcontent-->\n  </script>\n\n  <!-- add force graph script-->\n  <script src=\"https://unpkg.com/force-graph\"></script>\n  <!-- Required Stylesheets -->\n  <link\n    type=\"text/css\"\n    rel=\"stylesheet\"\n    href=\"https://unpkg.com/bootstrap/dist/css/bootstrap.min.css\"\n  />\n  <link\n    type=\"text/css\"\n    rel=\"stylesheet\"\n    href=\"https://unpkg.com/bootstrap-vue@latest/dist/bootstrap-vue.css\"\n  />\n\n  <!-- Load polyfills to support older browsers -->\n  <script src=\"https://polyfill.io/v3/polyfill.min.js?features=es2015%2CIntersectionObserver\"></script>\n",
"HTML_content":"\n  <div id=\"content\">\n    <!-- Our application root element -->\n    <div id=\"app\">\n\n      <!--Entrypoint 1: session cookies-->\n      <div class=\"container entry1\" id=\"entry1ID\" onmouseover=\"show_components('close1')\" onmouseout=\"hide_components(['close1'])\">\n        <button type=\"button\" class=\"btn-close close-entry close-entry1\" id=\"close1\" aria-label=\"Close\" onclick=\"hide_components(['entry1ID', 'entry2ID', 'service', 'contact', 'improveWebsite2', 'personaliseAds2', 'legalRequirements', 'security'])\"></button>\n          <div class=\"card mb-4 shadow-sm background2 p-0\" onclick=\"show_components('myModal'); update_yappl('','modal')\">\n            <div class=\"borderbox1 centering p-0\">\n              <button class=\"transparentBtn\" id=\"modalBtn2\">\n              <img src=\"Icons/data-protection.svg\" alt=\"SVG mit img Tag laden\" width=\"30\" >\n              </button>\n            </div>\n          </div>\n      </div>\n      <!--Entrypoint 2: functional cookies -->\n      <div class=\"container entry2a entry2asize\" id=\"entry2ID\" onmouseover=\"show_components('close2')\" onmouseout=\"hide_components(['close2'])\">\n        <button type=\"button\" class=\"btn-close close-entry\" id=\"close2\" aria-label=\"Close\" onclick=\"hide_components(['entry1ID', 'entry2ID', 'service', 'contact', 'improveWebsite2', 'personaliseAds2', 'legalRequirements', 'security'])\"></button>\n        <div class=\"card-deck text-center\">\n          <div class=\"card mb-2 shadow-sm\">\n            <div class=\"borderbox centering background1 borderRad\">\n              <div class=\"row gy-5 w-100 p-3\">\n                <div class=\"col-3 p-0 order-1\" style=\"text-align: left;\">\n                  <img src=\"Icons/data-protection.svg\" alt=\"SVG mit img Tag laden\" width=\"50\" >\n                </div>\n                <div class=\"col-9 p-0 order-2 vertikal-flex\" style=\"display:flex; align-items: center; justify-content: center;\">\n                  <h5 class=\"my-0 font-weight-normal\" style=\"color:white\"><b>Data Protection</b></h4>\n                </div>\n              </div>\n            </div>\n            <!--Purpose \"Personalise your ads\"-->\n            <div class=\"container\" id=\"personaliseAds\">\n              <div class=\"card-deck text-center\" onmouseenter=\"hide_components(['personaliseAds']); show_components('annoyed1'); update_toggle_state('tglPersAds', 'tglAnnoyed1'); switchColors('tglPersAds')\">\n                <div class=\"card mb-2 shadow-sm paddingleft purpose-box\" id=\"purpose-box-ads\">\n                  <p style=\"font-size: 13px; text-align: left;\"><b>Personalise your ads</b></p>\n                  <div class=\"row gy-5 w-100 paddingbottom \" id=\"box-content-ads\">\n                    <div class=\"col-2 order-1 paddingleft\" style=\"text-align: left;\">\n                      <img src=\"Icons/privacy-icon.svg\" alt=\"SVG mit img Tag laden\" width=\"20\" >\n                    </div>\n                    <div class=\"col-2 order-1 paddingleft\" style=\"text-align: left;\">\n                      <img src=\"Icons/fairness-icon.svg\" alt=\"SVG mit img Tag laden\" width=\"20\" >\n                    </div>\n                    <div class=\"col-2 order-1 paddingleft\" style=\"text-align: left;\">\n                      <img src=\"Icons/freedom-icon.svg\" alt=\"SVG mit img Tag laden\" width=\"20\" >\n                    </div>\n                    <div class=\"col-6 p-0 order-2\" style=\"text-align: right;\" onclick=\"update_yappl('tglPersAds', 'entry2'); update_toggle_state('tglPersAds', 'tglAnnoyed1'); update_toggle_state('tglPersAds', 'tglPersAdsModal');\">\n                      <input class=\"toggle-btn-ads\" type=\"checkbox\" data-toggle=\"toggle\" data-size=\"xs\" data-style=\"ios\" data-on=\" \" data-off=\" \" id=\"tglPersAds\" >\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <!--Annoyed message 1-->\n            <div class=\"container\" >\n              <div class=\"card-deck text-center annoyed_message\" >\n                <div class=\"card mb-2 shadow-sm paddingleft purpose-box\" id=\"annoyed1\" onmouseleave=\"hide_components(['annoyed1']); show_components('personaliseAds'); update_toggle_state('tglAnnoyed1', 'tglPersAds');\">\n                  <p style=\"font-size: 13px; text-align: left; margin-bottom: 2px;\"><b>Personalize your ads</b></p>\n                  <div class=\"row gy-5 w-100 paddingbottom\" id=\"box-content-ads\">\n                    <p style=\"font-size: 11px; text-align: left; margin-bottom: 0px;\">You're annoyed from cookie banners?<br> Click here and control once</p>\n                    <div class=\"col-6 p-0 order-2\" style=\"text-align: right; margin-top: 0px; width: 100%; position: relative; top: -17px;\" onclick=\"update_yappl('tglAnnoyed1', 'entry2'); update_toggle_state_inv('tglAnnoyed1', 'tglPersAdsModal')\">\n                      <input class=\"toggle-btn-ads\" type=\"checkbox\" data-toggle=\"toggle\" data-size=\"xs\" data-style=\"ios\" data-on=\" \" data-off=\" \" id=\"tglAnnoyed1\">\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <!--Purpose \"Improve the Website\"-->\n            <div class=\"container\" id=\"improveWebsite\" onmouseenter=\"hide_components(['improveWebsite']); show_components('annoyed2'); update_toggle_state('tglWebsite', 'tglAnnoyed2')\">\n              <div class=\"card-deck text-center\">\n                <div class=\"card mb-2 shadow-sm paddingleft purpose-box\" id=\"purpose-box\" onmouseover=\"switchColors('tglWebsite')\">\n                  <p style=\"font-size: 13px; text-align: left;\"><b>Improve the website</b></p>\n                  <div class=\"row gy-5 w-100 paddingbottom\">\n                    <div class=\"col-6 order-1 paddingleft\" style=\"text-align: left;\">\n                      <img src=\"Icons/privacy-icon.svg\" alt=\"SVG mit img Tag laden\" width=\"20\" >\n                    </div>\n                    <div class=\"col-6 p-0 order-2\" style=\"text-align: right;\" onclick=\"update_yappl('tglWebsite', 'entry2');\">\n                      <input class=\"toggle-btn-wbs\" type=\"checkbox\" id=\"tglWebsite\" data-toggle=\"toggle\" data-size=\"xs\" data-style=\"ios\" data-on=\" \" data-off=\" \" checked>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <!--Annoyed message 2-->\n            <div class=\"container\" >\n              <div class=\"card-deck text-center annoyed_message\" id=\"annoyed_message\">\n                <div class=\"card mb-2 shadow-sm paddingleft purpose-box\" id=\"annoyed2\" onmouseleave=\"hide_components(['annoyed2']); show_components('improveWebsite'); update_toggle_state('tglAnnoyed2', 'tglWebsite');\" onmouseover=\"switchColors('tglAnnoyed2')\">\n                  <p style=\"font-size: 13px; text-align: left; margin-bottom: 2px;\"><b>Improve the website</b></p>\n                  <div class=\"row gy-5 w-100 paddingbottom\" id=\"box-content-ads\">\n                    <p style=\"font-size: 11px; text-align: left; margin-bottom: 0px;\">You're annoyed from cookie banners?<br> Click here and control once</p>\n                    <div class=\"col-6 p-0 order-2\" style=\"text-align: right; margin-top: 0px; width: 100%; position: relative; top: -17px;\" onclick=\"update_yappl('tglAnnoyed2','entry2'); update_toggle_state_inv('tglAnnoyed2', 'tglWebsiteModal')\">\n                      <input class=\"toggle-btn-wbs\" type=\"checkbox\" data-toggle=\"toggle\" data-size=\"xs\" data-style=\"ios\" data-on=\" \" data-off=\" \" id=\"tglAnnoyed2\">\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <button type=\"button\" id=\"modalBtn\" onclick=\"show_components('myModal'); update_yappl('','modal')\" class=\"btn btn-outline-light btn-sm\" style=\"color: rgb(115, 122, 122); font-family: Batang; font-size:large; width:100%;\">=</button>\n          </div>\n        </div>\n      </div>\n      <div id=\"myModal\" class=\"modal\">\n  <div class=\"modal-content\">\n  <!--Privacy Dashboard -->\n  <div class=\"row gy-0 w-100 privDash\" id=\"modalContent\" style=\"overflow: hidden; display:flex; align-items: stretch !important;\">\n    <div class=\"col p-0 privDash\" style=\"max-width:270px; box-shadow: #e0d0cd 0px 2px 8px 0px;\">\n      <div class=\"container entry2a privDash\">\n        <div class=\"card-deck text-center privDash\">\n            <div class=\"borderbox centering background1 borderRad\">\n              <div class=\"row gy-5 w-100 p-3\">\n                <div class=\"col-3 p-0 order-1\" style=\"text-align: left;\">\n                  <img src=\"Icons/data-protection.svg\" alt=\"SVG mit img Tag laden\" width=\"50\" >\n                </div>\n                <div class=\"col-9 p-0 order-2 vertikal-flex\" style=\"display:flex; align-items: center; justify-content: center;\">\n                  <h5 class=\"my-0 font-weight-normal\" style=\"color:white; text-align: center;\"><b>Data Protection</b></h4>\n                </div>\n              </div>\n            </div>\n            <!--Purpose \"Personalize your ads\"-->\n            <div class=\"container\" id=\"personaliseAds2\" style=\"padding:7px;\">\n              <div class=\"card-deck text-center\">\n                <div class=\"card mb-2 shadow-sm paddingleft purpose-box\" id=\"purpose-box\">\n                  <p style=\"font-size: 13px; text-align: left;\"><b>Personalize your ads</b></p>\n                  <div class=\"row gy-2 w-100 paddingbottom\">\n                    <div class=\"col-2 order-1 paddingleft\" style=\"text-align: left;\">\n                      <img src=\"Icons/privacy-icon.svg\" alt=\"SVG mit img Tag laden\" width=\"20\" >\n                    </div>\n                    <div class=\"col-2 order-1 paddingleft\" style=\"text-align: left;\">\n                      <img src=\"Icons/fairness-icon.svg\" alt=\"SVG mit img Tag laden\" width=\"20\" >\n                    </div>\n                    <div class=\"col-2 order-1 paddingleft\" style=\"text-align: left;\">\n                      <img src=\"Icons/freedom-icon.svg\" alt=\"SVG mit img Tag laden\" width=\"20\" >\n                    </div>\n                    <div class=\"col-6 p-0 order-2\" style=\"text-align: right;\" onclick=\"update_yappl('tglPersAdsModal','modal'); update_toggle_state_inv('tglPersAdsModal', 'tglAnnoyed1'); update_toggle_state_inv('tglPersAdsModal', 'tglPersAds')\">\n                      <input class=\"toggle-btn-ads\" id=\"tglPersAdsModal\" type=\"checkbox\" data-toggle=\"toggle\" data-size=\"xs\" data-style=\"ios\" data-on=\" \" data-off=\" \" checked>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <!--Purpose \"Improve the Website\"-->\n            <div class=\"container\" id=\"improveWebsite2\" style=\"padding:7px;\">\n              <div class=\"card-deck text-center\">\n                <div class=\"card mb-2 shadow-sm paddingleft purpose-box\" id=\"purpose-box\">\n                  <p style=\"font-size: 13px; text-align: left;\"><b>Improve the website</b></p>\n                  <div class=\"row gy-5 w-100 paddingbottom\">\n                    <div class=\"col-6 order-1 paddingleft\" style=\"text-align: left;\">\n                      <img src=\"Icons/privacy-icon.svg\" alt=\"SVG mit img Tag laden\" width=\"20\" >\n                    </div>\n                    <div class=\"col-6 p-0 order-2\" style=\"text-align: right;\" onclick=\"update_yappl('tglWebsiteModal','modal'); update_toggle_state_inv('tglWebsiteModal', 'tglAnnoyed2'); update_toggle_state_inv('tglWebsiteModal', 'tglWebsite')\">\n                      <input class=\"toggle-btn-wbs\" id=\"tglWebsiteModal\" type=\"checkbox\" checked data-toggle=\"toggle\" data-size=\"xs\" data-style=\"ios\" data-on=\" \" data-off=\" \">\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            \n            <!--Purpose \"Security\"-->\n            <div class=\"container\" id=\"security\" style=\"padding:7px;\">\n              <div class=\"card-deck text-center\">\n                <div class=\"card mb-2 shadow-sm paddingleft purpose-box\" id=\"purpose-box\">\n                  <p style=\"font-size: 13px; text-align: left;\"><b>Security</b></p>\n                  <div class=\"row gy-2 w-100 paddingbottom\">\n                    <div class=\"col-2 order-1 paddingleft\" style=\"text-align: left;\">\n                      <img src=\"Icons/privacy-icon.svg\" alt=\"SVG mit img Tag laden\" width=\"20\" >\n                    </div>\n                    <div class=\"col-2 order-1 paddingleft\" style=\"text-align: left;\">\n                      <img src=\"Icons/fairness-icon.svg\" alt=\"SVG mit img Tag laden\" width=\"20\" >\n                    </div>\n                    <div class=\"col-2 order-1 paddingleft\" style=\"text-align: left;\"></div>\n                    <div class=\"col-6 p-0 order-2\" style=\"text-align: right;\"></div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <!--Purpose \"Legal Requirements\"-->\n            <div class=\"container\" id=\"legalRequirements\" style=\"padding:7px;\">\n              <div class=\"card-deck text-center\">\n                <div class=\"card mb-2 shadow-sm paddingleft purpose-box\" id=\"purpose-box\">\n                  <p style=\"font-size: 13px; text-align: left;\"><b>Legal Requirements</b></p>\n                  <div class=\"row gy-2 w-100 paddingbottom\">\n                    <div class=\"col-2 order-1 paddingleft\" style=\"text-align: left;\">\n                      <img src=\"Icons/privacy-icon.svg\" alt=\"SVG mit img Tag laden\" width=\"20\" >\n                    </div>\n                    <div class=\"col-2 order-1 paddingleft\" style=\"text-align: left;\">\n                      <img src=\"Icons/fairness-icon.svg\" alt=\"SVG mit img Tag laden\" width=\"20\" >\n                    </div>\n                    <div class=\"col-2 order-1 paddingleft\" style=\"text-align: left;\">\n                      <img src=\"Icons/freedom-icon.svg\" alt=\"SVG mit img Tag laden\" width=\"20\" >\n                    </div>\n                    <div class=\"col-6 p-0 order-2\" style=\"text-align: right;\"></div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <!--Purpose \"Contact\"-->\n            <div class=\"container\" id=\"contact\" style=\"padding:7px;\">\n              <div class=\"card-deck text-center\">\n                <div class=\"card mb-2 shadow-sm paddingleft purpose-box\" id=\"purpose-box\">\n                  <p style=\"font-size: 13px; text-align: left;\"><b>Contact</b></p>\n                  <div class=\"row gy-5 w-100 paddingbottom\">\n                    <div class=\"col-6 order-1 paddingleft\" style=\"text-align: left;\">\n                      <img src=\"Icons/privacy-icon.svg\" alt=\"SVG mit img Tag laden\" width=\"20\" >\n                    </div>\n                    <div class=\"col-6 p-0 order-2\" style=\"text-align: right;\"></div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <!--Purpose \"Service\"-->\n            <div class=\"container\" id=\"service\" style=\"padding:7px;\">\n              <div class=\"card-deck text-center\">\n                <div class=\"card mb-4 shadow-sm paddingleft purpose-box\" id=\"purpose-box\">\n                  <p style=\"font-size: 13px; text-align: left;\"><b>Service</b></p>\n                  <div class=\"row gy-5 w-100 paddingbottom\">\n                    <div class=\"col-6 order-1 paddingleft\" style=\"text-align: left;\">\n                      <img src=\"Icons/privacy-icon.svg\" alt=\"SVG mit img Tag laden\" width=\"20\" >\n                    </div>\n                    <div class=\"col-6 p-0 order-2\" style=\"text-align: right;\"></div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n            <!--Close window button-->\n            <div class=\"container\" style=\"padding:7px; bottom: 9px; position:absolute\"> <!--position:absolute-->\n              <div class=\"card-deck text-center\">\n                <div class=\"card shadow-sm paddingleft\">\n                  <span class=\"close p-1\" style=\"color:black; font-size: 13px;\"><b>Close window</b></span>\n                </div>\n              </div>\n            </div>\n      </div>\n    </div>\n    \n    <div class=\"col p-0\">\n      <!--search bar (fix icon)-->\n      <div class=\"form-group has-search\">\n        <input type=\"text\" class=\"form-control\" placeholder=\"Search\" style=\"border:none !important;\">\n      </div>\n      <div class=\"p-3\" id=\"bigContainer\" style=\"background-color: whitesmoke; padding-top: 0.5rem !important; position: relative; height:100%;\">\n      <!--Navbar-->\n        <nav class=\"navbar navbar-expand-lg navbar-light\">\n          <div class=\"container-fluid\" style=\"box-shadow: #e0d0cd 0px 2px 8px 0px; padding:3px;\">\n            <div class=\"collapse navbar-collapse\" >\n              <ul class=\"navbar-nav flex-fill\">\n                <li class=\"nav-item flex-fill\">\n                  <button id=\"control_btn\" class=\"btn btn-outline-primary active btn-block btn-control\" style=\"width:100%; padding:0px; color: white !important;\" onclick='var current = document.getElementsByClassName(\"active\");\n                  current[0].className = current[0].className.replace(\" active\", \"\");\n                  this.className += \" active\"; hide_components([\"contentContainer2\"]); show_components(\"contentContainer1\")'>Control</button>\n                </li>\n                <li class=\"nav-item flex-fill\">\n                  <button id=\"navbar\" class=\"btn btn-outline-primary btn-block btn-arrow-right btn-arrow-right-after\" style=\"width:100%; padding:0px\" onclick='var current = document.getElementsByClassName(\"active\");\n                  current[0].className = current[0].className.replace(\" active\", \"\");\n                  this.className += \" active\";'>Identity</button>\n                </li>\n                <li class=\"nav-item flex-fill\">\n                  <button id=\"navbar\" class=\"btn btn-outline-primary btn-block btn-arrow-right btn-arrow-right-before btn-arrow-right-after\" style=\"width:100%; padding:0px\" onclick='var current = document.getElementsByClassName(\"active\");\n                  current[0].className = current[0].className.replace(\" active\", \"\");\n                  this.className += \" active\";'>Interests</button>\n                </li>\n                <li class=\"nav-item flex-fill\">\n                  <button id=\"navbar\" class=\"btn btn-outline-primary btn-block btn-arrow-right btn-arrow-right-before btn-arrow-right-after\" style=\"width:100%; padding:0px\" onclick='var current = document.getElementsByClassName(\"active\");\n                  current[0].className = current[0].className.replace(\" active\", \"\");\n                  this.className += \" active\";'>Source data</button>\n                </li>\n                <li class=\"nav-item flex-fill\">\n                  <button id=\"navbar\" class=\"btn btn-outline-primary btn-block btn-arrow-right btn-arrow-right-before btn-arrow-right-after\" style=\"width:100%; padding:0px\" onclick='var current = document.getElementsByClassName(\"active\");\n                  current[0].className = current[0].className.replace(\" active\", \"\");\n                  this.className += \" active\"; get_set_height(\"modalContent\", \"modalContent\"); get_set_height(\"contentContainer1\", \"contentContainer2\"); hide_components([\"contentContainer1\"]); show_components(\"contentContainer2\"); load_mindmap();'>Data receiver</button>\n                </li>\n                <li class=\"nav-item flex-fill\">\n                  <button id=\"navbar\" class=\"btn btn-outline-primary btn-block btn-arrow-right btn-arrow-right-before btn-arrow-right-after\" style=\"width:100%; padding:0px\" onclick='var current = document.getElementsByClassName(\"active\");\n                  current[0].className = current[0].className.replace(\" active\", \"\");\n                  this.className += \" active\";'>Safeguards</button>\n                </li>\n                <li class=\"nav-item flex-fill\">\n                  <button id=\"navbar\" class=\"btn btn-outline-primary btn-block btn-arrow-right btn-arrow-right-before\" style=\"width:100%; padding:0px;\" onclick='var current = document.getElementsByClassName(\"active\");\n                  current[0].className = current[0].className.replace(\" active\", \"\");\n                  this.className += \" active\";'>Privacy Seal</button>\n                </li>\n              </ul>\n            </div>\n          </div>\n        </nav>\n        <!--Example page: Personalise your advertisements-->\n        <div class=\"container\" id=\"contentContainer1\" style=\"top: 4px; bottom:9px; position:relative;\"> <!--height: 83%;-->\n          <div class=\"card\" style=\"box-shadow: #e0d0cd 0px 2px 8px 0px; height:100%;\">\n            <div class=\"card-body\">\n              <div  style=\"float: left; width:70%\">\n                <h3><b>Personalise your advertisements (ads)</b></h3>\n                <p>Advertising companies (\"they\") personalise advertisements on websites you visit to make the advertised products more relevant for you. \n                  This <b><a style=\"color: #3650fe;\">Privacy-Seal</a></b> makes sure that you maintain control and the advertising companies (\"they\") implement all safeguards effectively.\n                </p>\n              </div>\n              <div class=\"col-md-6 p-1\" style=\"float:left; text-align:left; padding-top: 0px !important; padding-bottom: 40px !important;\">\n                <p>\n                  <!--<span id=\"controller\"></span>-->\n                  <span id=\"dpo\"></span>\n                  <span id=\"automatedDec\"></span>\n                </p>\n              </div>\n              <div class=\"col-md-6 p-1\" style=\"float:right; text-align:right;\">\n                <div class=\"card\" style=\"margin:5px 0px 5px 5px !important; border:none; width:90px; height:90px; float:right;\">\n                  <div class=\"card\" style=\"background-color: #f8f0ee; border-color: #f8f0ee; width:90px; height:90px; float:right; box-shadow: #e0d0cd 0px 2px 8px 0px;\">\n                    <div class=\"card-body centering\">\n                      <img src=\"Icons/freedom-icon.svg\" alt=\"SVG mit img Tag laden\" width=\"60\">\n                    </div>\n                  </div>\n                </div>\n                \n                <div class=\"card\" style=\"margin:5px !important; border:none; width:90px; height:90px; float:right;\">\n                  <div class=\"card\" style=\"background-color: #f8f6f1; border-color: #f8f6f1; width:90px; height:90px; float:right; box-shadow: #d3d1cd 0px 2px 8px 0px;\">\n                    <div class=\"card-body centering\">\n                      <img src=\"Icons/fairness-icon.svg\" alt=\"SVG mit img Tag laden\" width=\"60\">\n                    </div>\n                  </div>\n                </div>\n                <div class=\"card\" style=\"margin:5px !important; border:none; width:90px; height:90px; float:right;\">\n                  <div class=\"card\" style=\"background-color: #ecf2f3; border-color: #ecf2f3; width:90px; height:90px; float:right; box-shadow: #c3c8c9 0px 2px 8px 0px;\">\n                    <div class=\"card-body centering\">\n                      <img src=\"Icons/privacy-icon.svg\" alt=\"SVG mit img Tag laden\" width=\"60\">\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <div class=\"col-12 p-1\" style=\"float:right;\">\n                <div class=\"card\" style=\"background-color: rgb(221, 228, 243); border-color: rgb(221, 228, 243); box-shadow: rgb(185, 191, 204) 0px 2px 8px 0px;\">\n                  <div class=\"card-body\">\n                        <div class=\"col-xs-6\" style=\"float:left; margin-right: 15px; position:relative; top: -60px;\">\n                        <img src=\"Icons/data-protection.svg\" alt=\"SVG mit img Tag laden\" width=\"100\" style=\"float:left;\" >\n                        </div>\n                        <div class= \"col-xs-6\">\n                          <div  style=\"float: left; width:70%\">\n                            <h6><b>How our system works</b></h6>\n                            <p>To adjust the pros and cons of personalised ads to your preferences, you get the <b><a style=\"color: #3650fe;\">following information and controls.</a></b> \n                              No other risks apply.</p>\n                          </div>\n                        </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <!--Example page 2: read stuff from tilt-->\n        <div class=\"container\" id=\"contentContainer2\" style=\"top: 4px; bottom:9px; position:relative;\" ><!--height: 83%;-->\n          <div class=\"card\" style=\"box-shadow: #e0d0cd 0px 2px 8px 0px; height: 100%\">\n            <div class=\"card-body\" style=\"height:100%;\">\n              <div class=\"col-12 p-1\" style=\"float: left; width:70%\">\n                <h3><b>Who else has access to your data</b></h3>\n                <p>In the graphic below you can see which companies get access to your data that is collected on this website. </br>\n                Hover over the nodes to get more information.</p>\n                <p><span id=\"thirdCountry\"></span>\n                </p>\n              </div>\n              <div id=\"mindmap\" class=\"col-12 p-1\" style=\"bottom:9px;  float:right\">\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div> \n  </div> \n</div>  \n\n</div>\n</div>\n\t"
}