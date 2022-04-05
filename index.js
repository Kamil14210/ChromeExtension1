const inputbtnEl = document.getElementById("input-btn")
let myLeads = []
const inputEl = document.getElementById("input-el")
const listOfPage = document.getElementById("list-expl")
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
const deletebtnEl = document.getElementById("delete-btn")
const tabBtn = document.getElementById("save-btn")


if (leadsFromLocalStorage){
    myLeads = leadsFromLocalStorage
    render(myLeads)
}
//console.log(leadsFromLocalStorage)

tabBtn.addEventListener("click", function(){
    
    chrome.tabs.query({active: true, currentWindow: true }, function (tabs) {
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        render(myLeads)
    })
     
    
})
//console.log(localStorage.getItem("myLeads"))
inputbtnEl.addEventListener("click", function(){
    myLeads.push(inputEl.value)
    //inputEl.innerHTML += "<p>" + "Button was clicked" + "</p>"
    //console.log("Button was clicked!")
    //console.log(myLeads)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)
    
})

deletebtnEl.addEventListener("dblclick", function(){
    myLeads = []
    localStorage.clear()
    render(myLeads)
    
})
function render(leads){
let listItems = ""
for (let i =0; i<leads.length; i++){
        //listItems += "<li><a target='_blank' href='" + myLeads[i] + "'>" + myLeads[i] + "</a></li>"
    listItems += `
        <li>
            <a target='_blank' href=' ${leads[i]}'>
            ${leads[i]} 
            </a>
        </li>
        `
    
}
    listOfPage.innerHTML = listItems
}
