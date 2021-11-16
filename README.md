# Transparency Privacy Banner
Add transparent privacy information to your website using your privacy policy in tilt-format. And saving the privacy preferences in a YaPPL format.
Designed according to the approach of the Privacy Icons Forum headed by Max von Grafenstein. 
For more information: 
- Privacy Icons Forum: https://www.privacy-icons.info/
- Tilt: https://github.com/Transparency-Information-Language
- YaPPL: https://github.com/yappl, https://emidd.de/material

## Structure and Functionality
- The funcionality is built using Bootstrap and jQuery
- Relevant privacy information is loaded from tilt documents
- Depending on the purposes and data types specified in the tilt document, the corresponding privacy banner is rendered
- Users can then specify their privacy settings by changing the toggles
- These privacy preferences are saved as a YaPPL file in a cookie
- tilts/ folder contains privacy policies in tilt-format
- Icons/ folder contains privacy icons
- Img/ folder contains background images

## Usage
- Clone repository with `git clone`

### Demo
- Open file `index_demo.html`
- Click on the buttons or enter a custom tilt to show the transparency information for the different services
![tempsnip](https://user-images.githubusercontent.com/33124461/141969386-fa4cfcae-c330-4dcb-b423-d515c378ad81.png)


### Embed it to your own page
For an example check the `index_get_started.html`.

 - Save your tilt file as a String named `tilt`:
 ```
 tilt = `{"meta": ...}`
 ```
- Add jQuery and load your tilt as a script in your `<head>` tag:
```
<script src='https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js'></script>
<script type="text/javascript" src=path_to_tilt></script>
 ```
 - Add the function call `load_tilt(tilt)` to your `<body>` tag and start your body with a div for the privacy banner:
 ```
 <body onload="load_tilt(tilt);">
	<div id="privacy_info"></div>
 ```
 - At the end of your body add the scripts to load the privacy banner
 ```
<script type="text/javascript" language="javascript" src="privacy-banner-code.js"></script>
<script type="text/javascript" src="privacy-banner.js"></script>
```
 

