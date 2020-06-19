import axios from 'axios'
import jwtDecode from 'jwt-decode'

// instantiate axios
const httpClient = axios.create()

httpClient.getToken = function() {
	return localStorage.getItem('token');
}

httpClient.setToken = function(token) {
	localStorage.setItem('token', token)
	return token;
}

httpClient.setStore = function(store) {
	localStorage.setItem('store', JSON.stringify(store))
}

httpClient.getStore = function(store) {
	return JSON.parse(localStorage.getItem('store'));
}

httpClient.getCurrentUser = function() {
	const token = this.getToken();
	if(token) return jwtDecode(token);
	return null;
}

httpClient.logOut = function() {
	localStorage.removeItem('token')
	localStorage.removeItem('store')
	delete this.defaults.headers.common.token
	return true
}

httpClient.defaults.headers.common.token = httpClient.getToken()
export default httpClient;