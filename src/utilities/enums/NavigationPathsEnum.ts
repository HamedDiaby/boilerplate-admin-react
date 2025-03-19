export enum NavigationPathsEnum {
    internalApp = '/app/*',
    notFound = '*',

    //internal app pages
    dashboard = '/dashboard',
    instructions = '/instructions',
    bdd = '/database',
    collabs = '/collaborators',
    chats = '/chats',
    news = '/news',
    settings = '/settings',

    //external app pages
    login = '/',
    forgotPassword = '/forgot-password',
}
