import * as database from "./database.js"

let letters = database.getLetters()
let letterTopics = database.getLetterTopics()

const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "send--letter") {
        let topicId=[]
        // Get what the user filled into form fields
        const authorId = parseInt(document.querySelector("#author").value)
        const recipientId = document.querySelector("#recipient").value
        //const topicId = document.querySelector("input[name='topic']:checked").value
        // take out single topic selection to make way for multiples
        topicId = document.querySelectorAll("input[name='topic']:checked")
        const letterText = document.querySelector("input[name='letter']").value
        let date = new Date().toDateString()
        const timestamp = date.toLocaleString('en-GB',{timeZone: 'UTC'})
        // Make an object out of the user input+a timestamp
        const dataToSendToAPI = {
            authorId: authorId,
            recipientId: parseInt(recipientId),
            // topicId: topicId,
            letterText: letterText,
            timestamp: timestamp
        }
        
        let checkedTopics = []
        topicId.forEach(id=>{checkedTopics.push(parseInt(id.value))})
        let topicDataToSendToAPI = {
            timestamp: timestamp,
            topics: checkedTopics
        }
        // Send the data to the API for permanent storage
        database.sendLetter(dataToSendToAPI)
        
        database.sendLetterTopics(topicDataToSendToAPI)
    }
})

export const WriteLetter = () => {
    let topics = database.getTopics()
    let pals = database.getPals()
    const letterForm = () =>{
        //what does <select class="author" id="author"/> do?
        let html = `
            <div class="field">
                <label class="label" for="author">Author</label>
                <select class="author" id="author"/>
                <option value="author">Who are you?</option>
                ${pals.map(pal => {
                    return `<option name="author" value=${pal.id}>${pal.name}</option>`
                }).join("")}
                </select>
            </div>
                <div class="field">
                <label class="label" for="letter">Letter</label>
                <input type="text" name="letter" class="input" />
            </div>
            <div class="field">
                <label class="label" for="topic--selection">Topic Selection</label>
                ${topics.map(topic => {
                    return `<input type="checkbox" name="topic" id="checkbox--${topic.id}" value="${topic.id}"/>${topic.topic}</input>`
                }).join("")}
            </div>
            <div class="field">
                <label class="label" for="recipient">Recipient</label>
                <select class="recipient" id="recipient"/>
                <option value="topic">Choose Recipient...</option>
                    ${pals.map(pal => {
                        return `<option name="recipient" value="${pal.id}">${pal.name}</option>`
                    }).join("")}
                    </select>
            </div>
            </select><button class="send--letter" id="send--letter">Send</button></li>`
        
        return html
    }
    const html = letterForm()
    return html
}
