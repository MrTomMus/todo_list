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

export async function createTask(task: string) {
    const response = await fetch(`${API_TASK}/todos`, {
        method: 'POST',
        headers: {
            "Content-Type": 'application/json',
        },
        body: JSON.stringify({
            isDone: false,
            title: task,
        })
    })

    if(!response.ok) {
        throw new Error(`Error ${response.status}`)
    }

    const result = await response.json();
    return result;
}

export async function deleteTask(id: string) {
    const response = await fetch(`${API_TASK}/todos/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-type': 'application/json',
        }
    })

    if(!response.ok) {
        throw new Error(`Удаление не удалось ${response.status}`);
    }

    const result = await response.text();

    return result
}
