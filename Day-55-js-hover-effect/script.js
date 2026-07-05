let main = document.querySelector("#main");
let box1 = document.querySelector("#box1");
let h1 = document.querySelector("h1");

box1.addEventListener("mouseenter", ()=>{
    main.style.backgroundColor = "rgba(225, 218, 218, 0.87)";
    h1.style.color= "blue"
});
box1.addEventListener("mouseleave", ()=>{
    main.style.backgroundColor = "white";
    h1.style.color= "black"
});

box2.addEventListener("mouseenter", ()=>{
    main.style.backgroundColor = "rgba(228, 233, 252, 0.82)";
});
box2.addEventListener("mouseleave", ()=>{
    main.style.backgroundColor = "white";
});

box3.addEventListener("mouseenter", ()=>{
    main.style.backgroundColor = "rgba(191, 191, 193, 0.82)";
});
box3.addEventListener("mouseleave", ()=>{
    main.style.backgroundColor = "white";
});