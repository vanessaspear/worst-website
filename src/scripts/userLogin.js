import { saveUser } from "./dataAccess.js"

/*Password rules:
-length must be greater than 16 characters 
-must include the ! character
-must include the phrase "Space"
*/

export const userForm = () => {
    return `
    <div id="login-box">
    <div class="createUser">
        <label for="username">Username</label>
        <input type="text" name="username">
    </div>
    <div class="createUser">
        <label for="password">Password</label>
        <input type="text" name="password">
    </div>
    <button id="submitButton">Create Login</button>
    <div>
    `
}


document.addEventListener("click", e => {
    if (e.target.id === "submitButton") {
        const createUsername= document.querySelector("input[name='username']").value
        const createPassword = document.querySelector("input[name='password']").value

        if (createPassword.includes("Space") && createPassword.includes("!") && createPassword.length >= 16) {
            
            const dataToSendToAPI = {
                username: createUsername,
                password: createPassword,
            }

            saveUser(dataToSendToAPI)

        } else {
            document.querySelector("#container").dispatchEvent(new CustomEvent("passwordRequirementsNotMet"))
        }
    }
})

export const passwordRequirements = () => {
    return `
    <div class="createUser">
        <ul>
        Your password must meet the below criteria: 
        <li>Length at least 16 characters</li>
        <li>Includes the word "Space"</li>
        <li>Includes an exclamation point</li>
        </ul>
        <p>Please refresh the page and try again.</p>
    </div>       
    `
}
