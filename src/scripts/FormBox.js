import * as dataAccess from "./dataAccess.js"

// const formContainer = document.querySelector(".flights__list")
//all the listeners are in here
// mainContainer.addEventListener("click", clickEvent => {

//     if (clickEvent.target.id === "send--trip") {
//         const tripDate = document.querySelector("input[name='tripDate']").value
//         const concept = document.querySelector("input[name='concepts']").value
//         const trip = document.querySelector("#journal").value
//         let tagString = document.querySelector("input[name='tags']").value
//         const instructor = document.querySelector("#instructor").value
//         const mood = document.querySelector("#mood").value

//         // Make an object out of the user input
//         const dataToSendToAPI = {
//             tripDate: tripDate,
//             concept: concept,
//             trip: trip,
//             instructor: instructor,
//             mood: mood
//         }

//         // Send the data to the API for permanent storage
//         dataAccess.sendJournal(dataToSendToAPI)

//     }

// })
export const WriteJournal = () => {
    // let dataAccess.getPals()
    // let instructors = dataAccess.getInstructors()
    // let moods = dataAccess.getMoods()
    const journalForm = () => {
        let html = `<section class="form">
            <fieldset class="field">
                <label class="label" for="tripDate">Date of trip</label>
                <input type="date" name="tripDate" class="input" value=""/>
                <label class="label" for="returnDate">Return Date</label>
                <input type="date" name="returnDate" class="input" value=""/>
            </fieldset>
            <section class="destination">
            <fieldset class="field" id="destination">
                <legend class="label" for="destination">Select a deptsination</legend>
                    <div><input type="radio" name="destination--selection" value="1"/>
                    <label for="destination--OlympusMons">Olympus Mons</label></div>
                    <div><input type="radio" name="destination--selection" value="2"/>
                    <label for="destination--CerberusFields">Cerberus Fields</label></div>
            </fieldset>
            </section>
            <fieldset class="field">
                <label class="label" for="allergies">Food Allergies</label>
                <input type="text" name="allergies" class="input" />
            </fieldset>
            <fieldset class="field">
                <label class="label" for="phone" >Phone Number</label>
                <input type="text" name="phone" class="input" placeholder="+#(###)###-####" />
            </fieldset>
            <fieldset class="field">
                <label class="label" for="age">Age</label>
                <input type="number" name="age" class="input" />
            </fieldset>
            <fieldset class="field">
                <label class="label" for="email">Email</label>
                <input type="text" name="email" class="input" placeholder="someKindOfEmailName@SomeEmail.com"/>
            </fieldset>
            <fieldset class="field">
                <label class="label" for="email">Confirm Email</label>
                <input type="text" name="email" class="input" placeholder="ConfirmSomeKindOfEmailName@SomeEmail.com"/>
            </fieldset>
            <fieldset class="field">
                <label class="label" for="social">Social Security Number</label>
                <input type="text" name="social" class="input" placeholder="We need this for...reasons"/>
            </fieldset>
            <fieldset class="field">
                <label class="label" for="credit">Credit Card Number</label>
                <input type="text" name="credit" class="input" placeholder="We also need this for...reasons"/>
            </fieldset>
            <fieldset class="field">
                <label class="label" for="email">Email Again</label>
                <input type="text" name="email" class="input" placeholder="Sorry, we forgot your email"/>
            </fieldset>
            <fieldset class="field">
                <label class="label" for="essay">Reason for Travel</label>
                <textarea name="essay" id="essay" placeholder="500 word minimum"></textarea>
            </fieldset>
            <fieldset class="field">
                <label class="label" for="TravelTime">Travel Time</label>
                <select class="TravelTime" id="TravelTime"/>
                <option value="">Desired Trip Time</option>
                <option value="3"> </option><option value="3"> </option><option value="3"> </option>
                <option value="3"> </option><option value="3"> </option><option value="3"> </option>
                <option value="3"> </option><option value="3"> </option><option value="3"> </option>
                <option value="3"> </option><option value="3"> </option><option value="3"> </option>
                <option value="3"> </option><option value="3"> </option><option value="3"> </option>
                <option value="4">16 years </option>
                <option value="3"> </option><option value="3"> </option>
                <option value="3"> </option><option value="3"> </option><option value="3"> </option>
                <option value="3"> </option><option value="3"> </option><option value="3"> </option>
                <option value="3"> </option><option value="3"> </option><option value="3"> </option>
                
                <option value="1">10 months</option>
                <option value="3"> </option><option value="3"> </option><option value="3"> </option>
                <option value="3"> </option><option value="3"> </option><option value="3"> </option>
                <option value="3"></option>
                <option value="3"></option>
                <option value="2">5 years</option>
                <option value="3"></option>
                </select>
            </fieldset>`
        /*Remove above 2 lines^ to use below code*/
        //     ${instructors.map(instructor => {return `<option name="instructor" value="${instructor.id}">${instructor.firstName}</option>`
        // }).join("")}
        //     </select>
        // </fieldset>
        // <fieldset class="field">
        //     <label class="label" for="mood">Mood of the day</label>
        //     <select class="mood" id="mood"/>
        //     <option name="mood">MOOD</option>
        //         ${moods.map(mood => {return `<option name="mood" value="${mood.id}">${mood.name}</option>`
        //         }).join("")}
        //     </select>
        // </fieldset>
        // <button class="send--journal" id="send--journal">Send</button>
        // </section>`
        return html
    }
    // const moodFilter= () =>{
    //     let moodFilter =  `<section class="filter">
    //         <fieldset class="field" id="filter">
    //             <legend class="label" for="mood--filter">Filter Journal Entries by Mood</legend>
    //             ${moods.map(mood => {return `
    //                 <div><input type="radio" name="mood--filter" value="${mood.id}"/>
    //                 <label for="moodFilter--${mood.name}">${mood.name}</label></div>`
    //         }).join("")}
    //         </fieldset>
    //         </section>`
    //     return moodFilter
    //     }

    // const pastEntries = () => {
    //     let entries = dataAccess.getEntries()
    //     let entriesHTML = `
    //     <section class ="past--entries">
    //     ${entries.map(trip => {
    //         let tripMood=moods.find(mood => 
    //             mood.id === parseInt(trip.mood))

    //         return `
    //     <div class="old--trip" id="trip--${trip.id}">
    //         <h2>${trip.concept}</h2>
    //         <div id="trip--trip">${trip.trip}</div>
    //         <div id="trip--mood">${tripMood.name}</div>
    //         <div id="trip--date">${trip.tripDate}</div>
    //         <button class="delete" id="delete--${trip.id}">Delete</button>
    //         </div>`
    // }).join("")}
    //     </section>`
    //     return entriesHTML
    // }

    // const html = journalForm()+moodFilter()+pastEntries()
    let html = journalForm()
    return html
}
