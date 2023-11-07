let apiURL = 'http://localhost:3000';

const create = async (user) => {
    try {
        let response = await fetch(apiURL + '/api/users/', {
            mode: 'cors',
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        return await response.json()
    } catch (err) {
        console.log(err)
    }
}
const list = async (signal) => {
    try { // http://localhost:3000/api/users/
        let response = await fetch(apiURL + '/api/users/', {
            mode: 'cors',
            method: 'GET',
            signal: signal,
        })
        return await response.json();
    } catch (err) {
        console.log(err)
    }
}
const read = async (params, credentials, signal) => {
    try {
        let response = await fetch(apiURL + '/api/users/' + params.userId, {
            mode: 'cors',
            method: 'GET',
            signal: signal,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + credentials.t
            }
        })
        return await response.json()
    } catch (err) {
        console.log(err)
    }
}
const update = async (params, credentials, user) => {
    try {
        let response = await fetch(apiURL + '/api/users/' + params.userId, {
            mode: 'cors',
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + credentials.t
            },
            body: JSON.stringify(user)
        })
        return await response.json()
    } catch (err) {
        console.log(err)
    }
}
const remove = async (params, credentials) => {
    try {
        let response = await fetch(apiURL + '/api/users/' + params.userId, {
            mode: 'cors',
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + credentials.t
            }
        })
        return await response.json()
    } catch (err) {
        console.log(err)
    }
}
export { create, list, read, update, remove }