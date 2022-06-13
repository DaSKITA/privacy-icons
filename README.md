# Effective Transparency Information and Control
Add transparency information according to the GDPR to your website using your privacy policy in [TILT format](https://github.com/Transparency-Information-Language/schema) and save the privacy preferences using [YaPPL](https://emidd.de/material).
Designed according to _[Effective regulation through design](https://www.researchgate.net/profile/Elias-Belgacem/publication/355394794_Effective_regulation_through_design_-_Aligning_the_ePrivacy_Regulation_with_the_EU_General_Data_Protection_Regulation_GDPR_Tracking_technologies_in_personalised_internet_content_and_the_data_protectio/links/616e850225467d2f005ab081/Effective-regulation-through-design-Aligning-the-ePrivacy-Regulation-with-the-EU-General-Data-Protection-Regulation-GDPR-Tracking-technologies-in-personalised-internet-content-and-the-data-protectio.pdf)_ (by Grafenstein et al. 2021) proposed by the Privacy Icons Forum and technically powered by the _[Transparency Information Language and Toolkit](https://dl.acm.org/doi/10.1145/3442188.3445925)_ (Grünewald and Pallas 2021). 

For more information, see also: 
- Privacy Icons Forum: https://www.privacy-icons.info/
- Tilt: https://github.com/Transparency-Information-Language/meta
- YaPPL: https://github.com/yappl

_Disclaimer: This is a very prototypical implementation and not yet recommended for production use cases._

## Structure and Functionality
- The framework is built using Bootstrap and jQuery
- Relevant privacy information is loaded from tilt documents
- Depending on the purposes and data categories specified in the tilt document, the corresponding privacy banner is rendered
- Users can then specify their privacy settings by changing the toggle buttons
- These privacy preferences are output as a YaPPL preference, e.g, in a (functional) cookie
- tilts/ folder contains exemplary privacy policies in tilt-format
- Icons/ folder contains preliminary privacy icons
- Img/ folder contains background images
- For adding other purposes change `main_privacy.js` function `load_components` in line 335

## Usage
- Clone repository with `git clone`

### Demo
- Open file `index_demo.html`
- Click on the buttons or enter a custom tilt to show the transparency information for the different services
![tempsnip](https://user-images.githubusercontent.com/33124461/141969386-fa4cfcae-c330-4dcb-b423-d515c378ad81.png)


### Embed it to your own page
For an example check out the `index_get_started.html`.

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
 - At the end of your body add the following scripts to load the privacy banner
 ```
<script type="text/javascript" language="javascript" src="privacy-banner-code.js"></script>
<script type="text/javascript" src="privacy-banner.js"></script>
```
- Alternatively, load them via a CDN from Github
```
<script src='https://cdn.jsdelivr.net/gh/DaSKITA/privacy-icons@master/privacy-banner-code.js'></script>
<script src='https://cdn.jsdelivr.net/gh/DaSKITA/privacy-icons@master/privacy-banner.js'></script>
```

## Authors & Acknowledgement
- [Elias Grünewald](https://www.ise.tu-berlin.de/eg) \[Corresponding Author]
- [Johannes Halkenhäußer](halkenhaeusser@tu-berlin.de)

We thank Flora Muscinelli for initial development. 
