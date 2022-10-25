const applicationState = {
    users: {}
}

const API = "http://localhost:8088"

export const fetchUsers = () => {
    return fetch(`${API}/users`)
        .then( (data) => {
            applicationState.users = data
        })
}

export const getUsers = (newUser) => {
    return applicationState.users.map(user => ({...user}))
}

export const sendUser = () => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newUser)
    }

    return fetch(`${API}/users`, fetchOptions)
        .then(res => res.json())
        .then(document.querySelector("#container").dispatchEvent(new CustomEvent("stateChanged")))
    }