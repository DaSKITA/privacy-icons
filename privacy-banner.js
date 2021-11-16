console.log('Adding privacy icons...')

function setInnerHtml(elm, html) {
      elm.innerHTML = html;
      Array.from(elm.querySelectorAll("script")).forEach(oldScript => {
        const newScript = document.createElement("script");
        Array.from(oldScript.attributes)
          .forEach(attr => newScript.setAttribute(attr.name, attr.value));
        newScript.appendChild(document.createTextNode(oldScript.innerHTML));
        oldScript.parentNode.replaceChild(newScript, oldScript);
      });
}

setInnerHtml(document.querySelector("head"), loadedScripts["scripts"])
document.getElementById('privacy_info').innerHTML = loadedScripts["HTML_content"];

console.log('Successfully added privacy icons!');


	