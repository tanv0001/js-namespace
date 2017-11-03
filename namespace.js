var TANV0001 = {
    init: function(){
        let boxess = document.getElementById("boxes");
        let D = document.createElement("div");
        D.className = "box";
        D.textContent= "croz0034";
        boxess.appendChild(cardBoard);
        D.addEventListener("click", Click);
        D.addEventListener("mouseover", Highlight);
        D.addEventListener("mouseout", Highlight); 
      
        function Click(ev){
            ev.currentTarget.style.backgroundColor = "blue";
            ev.currentTarget.style.borderColor = "orange";
        }
        
        function Highlight(ev){
            ev.currentTarget.classList.toggle("highlight");
        }
    }
};