const API_GET_TASK = 'https://easydev.club/api/v1/todos?filter=all'; 

export async function getData() {
    const response = await fetch(API_GET_TASK);
    const data = await response.json();

    return data;
}