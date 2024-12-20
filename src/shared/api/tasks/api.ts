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

export async function editTaskTitle(id: string, newTitle: string) {
    const response = await fetch(`${API_TASK}/todos/${id}`, {
        method: "PUT",
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            title: newTitle
        })
    })

    if(!response.ok) {
        throw new Error(`Изменение задачи не удалось ${response.status}`);
    }

    const result = response.json();

    return result;
}

export async function setIsDone(id: string, isDone: boolean) {
    const response = await fetch(`${API_TASK}/todos/${id}`, {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            isDone: !isDone
        })
    })

    if(!response.ok) {
        throw new Error(`Смена статуса задачи не удалась ${response.status}`)
    }

}
