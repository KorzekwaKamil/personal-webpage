function openField(event, field,tab_color) {
            var i, x, tablinks;
            x = document.getElementsByClassName("field");
            for (i = 0; i < x.length; i++) {
                x[i].style.display = "none";
            }
            tablinks = document.getElementsByClassName("tablink");
            for (i = 0; i < x.length; i++) {
                tablinks[i].className = tablinks[i].className.replace(" w3-border-red", "");
                tablinks[i].className = tablinks[i].className.replace(" w3-border-blue", "");
                tablinks[i].className = tablinks[i].className.replace(" w3-border-green", "");
                tablinks[i].className = tablinks[i].className.replace(" w3-border-black", "");
            }
            document.getElementById(field).style.display = "block";
            event.currentTarget.firstElementChild.className += tab_color;
}