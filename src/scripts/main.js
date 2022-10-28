import * as form from "./FormBox.js"

const formContainer = document.querySelector(".flights__list")
formContainer.innerHTML = form.WriteJournal()

import { userForm, passwordRequirements } from "./userLogin.js";
import { fetchUsers } from "./dataAccess.js";

const render = () => {
    fetchUsers()
     .then(
         () => {
             document.querySelector(".login__form").innerHTML = userForm()
         })
 }
 
 render()
 
 document.querySelector(".login__form").addEventListener("stateChanged", customEvent => {
    console.log("State has changed...") 
    render()
 })

 document.querySelector(".login__form").addEventListener("passwordRequirementsNotMet", customEvent => {
    document.querySelector(".login__form").innerHTML = passwordRequirements()
 })

 import { iconBar } from "./socialNavBar.js";

 const iconBarContainer = document.querySelector(".nav_bar")

 iconBarContainer.innerHTML = iconBar()

 import { adOne } from "./adOne.js";

 const adContainer = document.querySelector(".ad_content")

 adContainer.innerHTML = adOne()

 import { adTwo } from "./adTwo.js";

 const adTwoContainer = document.querySelector(".ad_2_content")

 adTwoContainer.innerHTML = adTwo()

