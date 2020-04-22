const BASE_URL = 'http://stream-restaurant-menu-svc.herokuapp.com'

export const getCategory = async () => {
	try {
		const response = await fetch(BASE_URL + '/category')
		const res = await response.json()
		return new Promise((resolve, rej) => {
			return resolve(res)
		})
	} catch (e) {
		console.error('error getting categories from api', e)
	}
}
