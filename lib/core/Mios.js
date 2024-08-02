'use strict'

import InterceptorManager from './InterceptorManager';

/**
 * @param {Object} instanceConfig
 * 
 * @return {Mios} 
 */
class Mios {
    constructor(instanceConfig) {
        this.defaults = instanceConfig;
        this.interceptors = {
            request: new InterceptorManager(),
            response: new InterceptorManager()
        }
    }

    async request(configOrUrl, config) {
        try {
            return await this._request(configOrUrl, config);
        } catch (err) {
            // 错误处理
        }
    }

    _request(configOrUrl, config) {
        if (typeof configOrUrl === 'string') {
            config = config || {};
            config.url = configOrUrl;
        } else {
            config = configOrUrl || {};
        }

        config = mergeConfig(this.defaults, config);

        const { success, complete, error, async, data, timeout, method } = config;

        config.method = (config.method || this.defaults.method || 'get').toLowerCase();

        const requestInterceptorChain = [];
        // 请求拦截默认是同步的
        let synchronousRequestInterceptors = true;
        // this.interceptors.request
    }

    
}

export default Mios;