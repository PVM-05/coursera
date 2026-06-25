function upDate(previewPic){

    console.log("Mouse Over Event");

    console.log("Alt Text: " + previewPic.alt);
    console.log("Image Source: " + previewPic.src);

    let imageDiv = document.getElementById("image");

    imageDiv.style.backgroundImage =
        "url('" + previewPic.src + "')";

    imageDiv.innerHTML = previewPic.alt;
}

function undo(){

    let imageDiv = document.getElementById("image");

    imageDiv.style.backgroundImage = "url('')";

    imageDiv.innerHTML =
        "Hover over an image below to display here.";
}