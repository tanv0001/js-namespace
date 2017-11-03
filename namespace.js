var TANV0001 = {

    init: function () {
        var div = document.createElement("div");
        div.className = "box";
        div.textContent = "TANV0001";
        document.getElementById("boxes").appendChild(div);

        div.addEventListener("click", klickbutton);
        div.addEventListener("mouseover", mouseListen);
        div.addEventListener("mouseout", mouseListen);

        function klickbutton(ev) {
            this.style.backgroundColor = "blue";
            this.style.borderColor = "pink";
        }

        function mouseListen(ev) {
            ev.currentTarget.classList.toggle("highlight");
        }
    }
}