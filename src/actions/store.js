import httpClient from './httpClient';

httpClient.create = function(data) {
	return this({ method: 'post', url: 'https://4k0cn.sse.codesandbox.io/api/stores/create', data: data })
		.then((res) => {
            return res.data.success;
		})
}

export default httpClient;