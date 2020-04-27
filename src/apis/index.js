const getData = async (...args) => {
	let URL = process.env.REACT_APP_BASE_URL
	args.length ? (URL += `/item?category=${args[0]}`) : (URL += '/category')
	try {
		const response = await fetch(URL)
		const result = await response.json()
		return new Promise((resolve) => {
			return resolve(result)
		})
	} catch (e) {
		console.error('error getting data from api', e)
	}
}

export default getData
