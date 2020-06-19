import httpClient from './httpClient';

httpClient.getAllBook = function(data) {
	return this({ method: 'get', url: 'https://4k0cn.sse.codesandbox.io/api/books'})
		.then((res) => {
			if(res.data.success){
				return res.data.books;
			}else{
				return res.data.success;
			}
		})
}

httpClient.getBookStore = function(storeId) {
	return this({ method: 'get', url: 'https://4k0cn.sse.codesandbox.io/api/books/' + storeId + '/store'})
		.then((res) => {
			if(res.data.success){
				return res.data.books;
			}else{
				return res.data.success;
			}
		})
}

httpClient.create = function(data) {
	return this({ method: 'post', url: 'https://4k0cn.sse.codesandbox.io/api/books/create', data: data })
		.then((res) => {
            return res.data.success;
		})
}

export default httpClient;