export default async function apiCall({
    url, 
    method  = "get", 
    body, 
    headers,
}){

    try{
        const respose = await fetch(url,{
            method,
            body,
            headers,
        });

        return respose.json();


    } catch(error){

        Promise.reject(error)

    }


}