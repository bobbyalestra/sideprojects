

document.addEventListener("DOMContent Loaded",() => {

    let h1Tag = document.createElement('h1');
    h1Tag.id = "aboutMeH1";
    h1Tag.innerText = " My name is Johnny Yarbrough, I have been playing hockey for the past 9 years. I enjoy playing all sports and hav fun doing so.  I'm competive and always try my hardest and be the best team player. Check out some of my highlighted videos.";
    document.body.appendChild(h1Tag)


let aboutMeDiv = document.getElementById("aboutMePTag");
aboutMeDiv.id = "aboutMe";
aboutMeDiv.innerText = " My name is Johnny Yarbrough, I have been playing hockey for the past 9 years. I enjoy playing all sports and hav fun doing so.  I'm competive and always try my hardest and be the best team player. Check out some of my highlighted videos."
document.body.appendChild(aboutMeDiv);

let aboutMePTag = document.createElement("p");
aboutMePTag.id = "aboutMePtag";
aboutMePTag.innerText = aboutMeDiv.innerText;
document.body.appendChild(aboutMePTag)



let dropdown = document.createElement('select');
dropdown.id = "newDropDown";
document.body.appendChild(dropdown);
})