import api from './base';

export const getTasks = async () => {
	try {
		const { data } = await api.get('tasks');
		return data;
	} catch (e) {
		throw new Error('Error while fetching tasks', e);
	}
}

export const createTask = async (body) => {
	try {
		const { data } = await api.post('tasks', body);
		return data;
	} catch (e) {
		throw new Error('Error while creating task', e);
	}
}

export const updateTaskStatus = async (id, status) => {
	try {
		const { data } = await api.put(`tasks/${id}`, { status, });
		return data;
	} catch (e) {
		throw new Error('Error while updating task status', e);
	}
}