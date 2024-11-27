class ORIGIN {
    static ROOT = "/"
}


class MAIN extends ORIGIN {
    static INDEX = `${this.ROOT}main`
}

export class PAGES extends ORIGIN {
    static MAIN = MAIN
}


export const PARAM_NAMES = {

}


export const ROUTES = {
    LOGIN: {

    },
    MAIN: {

    },
}