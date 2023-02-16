
export const getData = async (url) => {
    var options = {
        method: "GET",
        headers: new Headers(),
        mode: "cors",
        credentials: "include"
    }
    const request = new Request(url, options);

    return fetch(request).then((response) => {
         return response.json()
    });
}