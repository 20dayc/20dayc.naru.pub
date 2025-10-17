// import { CharacterInfo } from "../skin/js/character";
//const reader = new FileReader();

// function initialize()
// {
//     //reader.addEventListener("loadend", makeCharacterInfo);
//     setBGM();
// }

function postPage(link)
{
    let iframe = document.getElementsByClassName("content")[0].getElementsByTagName("iframe")[0];
    iframe.setAttribute("src", link);
    iframe.contentWindow.location.reload();
    iframe.onload = function()
    {
        console.log("page loaded");
    }
}

function setBGM()
{
    let parent = document.getElementById('bgm');
    let status = document.getElementById('bgmStatus');
    let check = 'stop' == status.value;

    let youtube = document.getElementById('youtube');
    if (null == youtube)
    {
        let src = "https://www.youtube.com/embed/XEnPnVh2-c0?si=Wml0ViXTLihRMKfY";
        //let option = "?autoplay=1&mute=1&controls=0&enablejsapi=1&loop=1&playlist=XEnPnVh2-c0";
        let option = "?autoplay=1&enablejsapi=1&loop=1&playlist=XEnPnVh2-c0";

        let newEle = document.createElement("iframe");
        newEle.setAttribute("id", "youtube");
        newEle.setAttribute("src", src + option);
        newEle.setAttribute("allow", "autoplay; encrypted-media");

        parent.appendChild(newEle);
        status.setAttribute("value","play");

        youtube = document.getElementById('youtube');
    }

    if (check)
    {
        youtube.contentWindow.postMessage('{"event":"command","func":"startVideo","args":""}', '*');
    }
    else
    {
        youtube.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
    }
}

function openCharacterInfoModal(name)
{
    let modal = document.getElementById("modal-bg");
    modal.style.display = "contents";
    openCharacterInfoFile(name);
}

function closeCharacterInfoModal()
{
    let modal = document.getElementById("modal-bg");
    modal.style.display = "none";
}

function openCharacterInfoFile(name)
{
    const fileName = `../../data/character/${name}.json`;
    fetch(fileName)
        .then(res => res.json())
        .then(makeCharacterInfo);
    //reader.readAsText(fileName);
}

function makeCharacterInfo(data)
{
    const character = new CharacterInfo(data);

    let char_name = document.getElementById("modal-char-name");
    char_name.innerText = character.name;
}

// function makeCharacterInfo(evt)
// {
//     const character = new CharacterInfo(reader.result);
// }