class conf {
    static get apps() {
        return {
            'nodetest': {
                domains: [
                    'nodetest.localhost'
                ]
            }
        }
    }

    static getAppByDomain(domain){
        for(let app in this.apps){
            let domains = config.apps[app].domains;
            if(Array.isArray(domains) && domains.indexOf(domain) >= 0){
                return app;
            }
        }
        return 'core';//Default app is "core" app
    }
}

module.exports = conf;