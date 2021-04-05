function Unload() {
    let content = document.getElementById("content");
    content.remove();
    console.log("unloading");
}
function Home(){
    Unload();
    let content = document.createElement("div");
    content.id = "content";
    const h1 = document.createElement("h1");
    const img = document.createElement("img");
    img.src = "docs/burger.jpg";
    img.alt = "A burger should be here";
    const h3 = document.createElement("h3");
    h1.innerHTML = "Jeff's Burger Joint";
    h3.innerHTML = "Finest food South of I45";
    content.appendChild(h1);
    content.appendChild(img);
    content.appendChild(h3);
    document.body.appendChild(content);
}
function Menu(){
    Unload();
    let content = document.createElement("div");
    content.id = "content";
    const list = ['Burger <br> Succulent & juicy <br> £18','Pizza <br> Very burnt <br> £10','Maccaroni and Cheese <br> Delicious <br> £5'];
    for(let i=0;i<list.length;i++){
        let listItem = document.createElement("h3");
        listItem.innerHTML = list[i];
        content.appendChild(listItem);
    };
    document.body.appendChild(content);
}
function Contact(){
    Unload();
    let content = document.createElement("div");
    content.id = "content";
    const h1 = document.createElement("h1");
    h1.innerHTML = "How to contact us:";
    content.appendChild(h1)
    const h3 = document.createElement("h3");
    h3.innerHTML = "Email: jeffs@underthebridge.com <br> Phone: 01458739874";
    content.appendChild(h3);
    document.body.appendChild(content);
}
export {
    Home,
    Menu,
    Contact
};

