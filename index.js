const promise = require('request-promise');

module.exports = {

    rfc(request) {
        
        return new Promise((resolve, reject) => {

            let headers = {
                'Content-Type': 'application/json',
                'token': request.token
            }
        
            let options = {
                url: request.uri,
                method: 'POST',
                headers: headers,
                body: request.payload,
                json: true,
                encoding: 'latin1'
            }

            promise(options)
                .then(body => resolve(body))
                .catch(err => reject(err));
        });
    }
}