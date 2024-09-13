
const tablinks = document.getElementsByClassName("tablelink");
const tabcontents= document.getElementsByClassName("tab-contents")

function opentab(tabname){
    for(tab of tablinks){
        tab.classList.remove("active-link");
    }
    for(tabcont of tabcontents){
        tabcont.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-tab"); 
    document.getElementById(tabname).classList.add("active-tab")
}
