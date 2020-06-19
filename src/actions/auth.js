import httpClient from './httpClient';
import jwtDecode from 'jwt-decode';

httpClient.logIn = function(credentials) {
	return this({ method: 'post', url: 'https://4k0cn.sse.codesandbox.io/api/users/authenticate', data: credentials })
		.then((serverResponse) => {
			const token = serverResponse.data.token
			const store = serverResponse.data.store
			if(serverResponse.data.success) {
				// sets token as an included header for all subsequent api requests
				this.defaults.headers.common.token = this.setToken(token)
				this.setStore(store)
				return jwtDecode(token)
			} else {
				return false
			}
		})
}

httpClient.signUp = function(userInfo) {
	return this({ method: 'post', url: 'https://4k0cn.sse.codesandbox.io/api/users/create', data: userInfo})
		.then((serverResponse) => {
			const token = serverResponse.data.token
			if(token) {
				// sets token as an included header for all subsequent api requests
				this.defaults.headers.common.token = this.setToken(token)
				return jwtDecode(token)
			} else {
				return false
			}
		})
}

export default httpClient;