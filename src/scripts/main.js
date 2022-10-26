import * as form from "./FormBox.js"

const formContainer = document.querySelector(".flights__list")
formContainer.innerHTML = form.WriteJournal()
import { userForm, passwordRequirements } from "./userLogin.js";
import { fetchUsers } from "./dataAccess.js";

const render = () => {
    fetchUsers()
     .then(
         () => {
             document.querySelector("#container").innerHTML = userForm()
         })
 }
 
 render()
 
 document.querySelector("#container").addEventListener("stateChanged", customEvent => {
    console.log("State has changed...") 
    render()
 })

 document.querySelector("#container").addEventListener("passwordRequirementsNotMet", customEvent => {
    document.querySelector("#container").innerHTML = passwordRequirements()
 })
