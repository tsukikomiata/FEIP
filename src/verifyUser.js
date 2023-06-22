async function verifyUser(token) {
    if (token !== null && token !== undefined) {
        const data = {
            token: token
        }
        return fetch('http://localhost:8000/api/verify', {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
    } else return null;
}

export default verifyUser;