function closeModal()
{
    let modal = document.getElementsByClassName("modal")[0];
    modal.style.display = "none";
    modal.removeChild(modal.getElementsByClassName("modal-body")[0]);
    // modal.removeChild(modal.firstChild);
}

function openModal(contentHTML)
{
    let modal = document.getElementsByClassName("modal")[0];
    // modal.style.display = "contents";
    

    let body = document.createElement("div");
    body.classList.add("modal-body");
    // content.classList.add("modal");

    // let close = document.createElement("button");
    // close.innerText = "×";
    // // close.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    // close.classList.add("modal-close-btn");
    // close.onclick = closeModal;
    // body.appendChild(close);

    let content = document.createElement("div");
    content.classList.add("modal-content");
    content.innerHTML = contentHTML;
    body.appendChild(content);

    // close.classList.add("modal-close-btn");
    
    // body.innerHTML = `<div><button onclick=closeModal();>×</button></div><div><iframe>$contentHTML</iframe></div>`;
    // content.style.position = "relative";
    // content.style.margin = "auto";
    // content.style.marginTop = "5%";
    // content.style.padding = "20px";
    // content.style.width = "60%";
    // content.style.height = "80%";
    // content.style.backgroundColor = "var(--base-bg-color)";
    // content.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.5)";
    // content.style.overflowY = "auto";


    
    // let close = document.createElement("button");
    // close.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    // close.classList.add("modal-close-btn");
    // close.onclick = closeModal;
    // content.appendChild(close);
    // close.classList.add("modal-close-btn");

    // close.id = "modal-close-btn";
    
    // close.innerText = "닫기";
    // close.style.position = "absolute";
    // close.style.bottom = "10px";
    // close.style.right = "15px";
    // close.onclick = closeModal;

    // content.appendChild(close);

    modal.appendChild(body);
    modal.style.display = "block";

    // fn(content);
}