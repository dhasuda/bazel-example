import Koa from 'koa'

export interface ServiceConfig {
  routes: Route[]
}

interface Route {
  path: string
  body: string
}


export class Service {
  private koa: Koa
  constructor(private serviceConfig: ServiceConfig) {
    this.koa = new Koa()
  }

  public serve() {
    this.koa.use(ctx => {
      ctx.status = 200
      ctx.body = 'Running example!'
      // const route = this.serviceConfig.routes.find(config => config.path === ctx.path)
      // if (!route) {
      //   ctx.body = 'Not found'
      //   ctx.status = 404
      // } else {
      //   ctx.body = route?.body
      //   ctx.status = 200
      // }
    })

    this.koa.listen(3000)
  }
}
