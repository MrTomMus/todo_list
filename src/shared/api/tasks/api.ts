const API_TASK = 'https://easydev.club/api/v1'; 

export async function getData() {
    const response = await fetch(`${API_TASK}/todos?filter=all`);
    const data = await response.json();

    return data;
}

export async function getDataCompleted() {
    const response = await fetch(`${API_TASK}/todos?filter=completed`)
    const data = await response.json()

    return data
}

export async function getDataInWork() {
    const response = await fetch(`${API_TASK}/todos?filter=inWork`)
    const data = await response.json()

    return data;
}