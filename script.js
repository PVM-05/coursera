function upDate(previewPic){

    console.log("Mouse or Keyboard Event Triggered");

    console.log("Alt Text:", previewPic.alt);
    console.log("Source:", previewPic.src);

    let imageDiv = document.getElementById("image");

    imageDiv.innerHTML = previewPic.alt;

    imageDiv.style.backgroundImage =
        "url('" + previewPic.src + "')";
}

function undo(){

    let imageDiv = document.getElementById("image");

    imageDiv.style.backgroundImage = "url('')";

    imageDiv.innerHTML =
        "Hover over an image below to display here.";
}

function addTabFocus(){

    console.log("Page Loaded");

    let images = document.querySelectorAll(".preview");

    for(let i = 0; i < images.length; i++){

        console.log(
            "Adding tabindex to image " + i
        );

        images[i].setAttribute("tabindex","0");
    }
}