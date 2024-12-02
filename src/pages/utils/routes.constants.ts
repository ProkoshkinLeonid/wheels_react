class ORIGIN {
  static ROOT = "/"
}

class MAIN extends ORIGIN {
  static INDEX = `${this.ROOT}main`

  static SERVICES = `${this.INDEX}/services`

  static CATALOG = `${this.INDEX}/catalog`

  static DISCOUNT = `${this.INDEX}/discount`

  static CONTACTS = `${this.INDEX}/contact`
}

export class PAGES extends ORIGIN {
  static MAIN = MAIN
}

export const PARAM_NAMES = {}

export const ROUTES = {
  LOGIN: {},
  MAIN: {},
}
