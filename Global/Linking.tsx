const config:any = {
    screens: {
        Home: {
            path: 'home'
        },
        Profile: {
            path: 'profile/:id',
            parse: {
                id: (id:string)=> `${id} of user eiei`
            }
        },
        Setting: {
            path: 'setting/:id'
        },
        Success: {
            path: 'success/:token/:id/:exp',
            parse: {
                token: (token:string)=> `${token}`,
            }
        },
    }
}

const linking = {
    prefixes: ['mylogin://'],
    config,
}

export default linking;