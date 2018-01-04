const { send } = require('micro')
const { router, get } = require('microrouter')
const fetch = require('node-fetch')

const index = async function (req, res) {
    send(res, 200, { message: 'Hello from mirco!' })
}

const fetchAPI = async (req, res) => {
    const response = await fetch('https://httpbin.org/get')
    const json = await response.json()
    return json
}

const params = async (req, res) => {
    return { value: parseInt(req.params.value) }
}

module.exports = router (
    get('/', index),
    get('/fetchAPI', fetchAPI),
    get('/params/:value', params)
)