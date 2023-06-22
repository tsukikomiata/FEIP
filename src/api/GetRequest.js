export const GetRequest = (defaultData, setData, URL) => {
    setData(defaultData)
    fetch(URL, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json'
        },
    })
        .then((response) => response.json())
        .then((response) => {setData(response)})
}