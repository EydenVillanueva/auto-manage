import api from './base';

export const getTasks = async () => {
	const { data } = await api.get('tasks');
	return data;
}