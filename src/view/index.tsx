import axios from 'axios'

function getApi() {
    axios.get('http://0.0.0.0:7000', {})
}
getApi()