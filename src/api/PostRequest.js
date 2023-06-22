export default function postRequest(data, API_URL) {
    return  fetch(API_URL, {
        method: "Post",
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res.json())
}