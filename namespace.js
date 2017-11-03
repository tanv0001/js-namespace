var TANV0001 = {

    init: function(){

    var div = document.createElement("div");
    div.className = "div";
    div.textContent = "TANV0001";
    document.getElementById("boxes").appendChild(div);

    div.addEventListener("mouseover", BARI0053.mouse);
    div.addEventListener("mouseout", BARI0053.mouse);
    div.addEventListener("click", BARI0053.Click) 
    },

    mouse: function(ev){
    ev.currentTarget.classList.toggle("highlight");
    },
        
    Click: function(ev){
    ev.currentTarget.style.backgroundColor = "blue";
    ev.currentTarget.style.borderColor = "pink";
    },
    
    };
