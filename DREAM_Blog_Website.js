var tabButtons=document.querySelectorAll(".tab-container .buttons button")
var tabPanels=document.querySelectorAll(".tab-container .tab-panel")

function show_panel(panelIndex, colorCode) {
    tabButtons.forEach(function(node) {
        node.style.backgroundColor=""; 
        node.style.color="";
    });
    tabButtons[panelIndex].style.backgroundColor=colorCode; 
    tabButtons[panelIndex].style.color="white";
    tabPanels.forEach(function(node){
        node.style.display="none"
    });
    tabPanels[panelIndex].style.display="block"; 
    tabPanels[panelIndex].style.backgroundColor=black;  
}