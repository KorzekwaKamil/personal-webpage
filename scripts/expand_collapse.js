function expandCollapse(event,element) {
            var x = document.getElementById(element);
            if (x.className.indexOf("w3-show") == -1) {
                x.className += " w3-show";
            } else { 
                x.className = x.className.replace(" w3-show", "");
            }
            var y = event.currentTarget;
            if (y.innerHTML[0]=="+") {
                y.innerHTML = y.innerHTML.replace('+', '&#8722');
            }
            else {
                y.innerHTML = y.innerHTML.replace('−', '+');
            }
}