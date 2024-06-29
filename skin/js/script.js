function bgm()
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

function openCharacter(name)
{
    let modal = document.getElementById("modal-bg");
    modal.style.display = "contents";
    let char_name = document.getElementById("modal-char-name");
    char_name.innerText = name;
}

function closeCharacter()
{
    let modal = document.getElementById("modal-bg");
    modal.style.display = "none";
}