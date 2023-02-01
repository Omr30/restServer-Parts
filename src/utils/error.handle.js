import {response} from 'express'

const handleHttp = (res = response, error, errorRaw) => {
    if (errorRaw !== undefined) {
        console.log(errorRaw)
    }
    res.status(500).json({
        error
    })
}

export default handleHttp