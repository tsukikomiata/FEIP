export default function deleteRequest(data, API_URL) {
    return  fetch( API_URL, {
        method: "DELETE",
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res.json())
}