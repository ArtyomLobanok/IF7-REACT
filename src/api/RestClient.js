class RestClient {
    constructor(baseURL) {
        this.baseURL = baseURL;
    }

    getConfig(method, body) {
        const config = {
            method: method.toUpperCase(),
            headers: {
                Accept: 'application/json',
                'Content-type': 'application/json',
            },
        };

        if (body) {
            config.body = JSON.stringify(body)
        }

        return config;
    }

    async request(endpoint, config) {
        try {
            const response = await fetch(`${this.baseURL}/${endpoint}`, config);
            const {status} = response;

            if (status === 204) {
                return {status};
            }

            if (status >= 200 && status < 300) {
                const data = await response.json();
                return data;
            }

        } catch (error) {
            return error;
        }
    }

    get(endpoint = '', params = '') {
        this.request(`${endpoint}?${params}`, this.getConfig('get', null)
        );
    }

    post(endpoint = '', body = {}) {
        this.request( endpoint, this.getConfig('post', body)
        );
    }

    put(endpoint = '', body = {}) {
        this.request( endpoint, this.getConfig('put', body)
        );
    }

    patch(endpoint = '', body = {}) {
        this.request( endpoint, this.getConfig('patch', body)
        );
    }

    delete(endpoint = '', body = {}) {
        this.request( endpoint, this.getConfig('delete', body)
        );
    }
}

export default RestClient;
