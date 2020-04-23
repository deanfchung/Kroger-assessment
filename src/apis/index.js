const BASE_URL = 'http://stream-restaurant-menu-svc.herokuapp.com'

export const getCategory = async () => {
	try {
		const response = await fetch(BASE_URL + '/category')
		const result = await response.json()
		return new Promise((resolve) => {
			return resolve(result)
		})
	} catch (e) {
		console.error('error getting categories from api', e)
	}
}

export const getItemsByShortName = async (name) => {
	try {
		const response = await fetch(BASE_URL + `/item?category=${name}`)
		const result = await response.json()
		return new Promise((resolve) => {
			return resolve(result)
		})
	} catch (e) {
		console.error('error fetching short name data from api', e)
	}
}
