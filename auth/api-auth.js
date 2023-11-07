let apiURL = 'http://localhost:3000';

const signin = async (user) => {
    try {
        console.log('kkkkkkkk kkkk')

        console.log(user)
        let response = await fetch(apiURL + '/auth/signin/', {
            mode: 'cors',
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        debugger
        return await response.json()
    } catch (err) {
        console.log(err)
    }
}
const signout = async () => {
    try {
        let response = await fetch(apiURL + '/auth/signout/', {
            mode: 'cors',
            method: 'GET'
        })
        return await response.json()
    } catch (err) {
        console.log(err)
    }
}
export { signin, signout }
