import Koa from 'koa'
import logger from "koa-logger"
import cors from "koa2-cors"
import serve from "koa-static"
// import bodyParser from "koa-bodyparser"
// import router from "./route"
// import Router from "koa-router"
import { config } from "dotenv"
import { createReadStream } from 'fs'

// import path from 'path'

const app = new Koa()
// const router = new Router()

config() // bring in env variables from the .env file on root

app.use(logger((str) => { console.log(new Date().toISOString() + str)})) // placed at the top of `use`
  .use(cors({ origin: "*" }))
  // .use(bodyParser())
  .use(async (ctx, next) => {
  //.use(async (ctx, next) => {
    ctx.set('X-Content-Type-Options', 'nosniff')
    ctx.type = "html"
    ctx.body = createReadStream('./public/index.html')

    await next()
  })
  .use(serve('public')) //CORRECT! Automatically look for files at the same directory or sub-directories located underneath of this calling script.
  // .use(serve('public/static'))

  // .use(router.routes())
  // .use(router.allowedMethods) // this line must come AFTER router.routes(), otherwise 404 error
  
const port = process.env.PORT

app
  .listen(port)
  .on('listening', () => {
    console.log(`listening to ${port}`)
    console.log(process.cwd())
  }).on('error', (err) => {
    console.error('soomething wrong:' + err.message)
  })


// router.get("/", async (ctx) => {
//   if (ctx.is('html')) {
//     ctx.type = "html"
//     ctx.body = createReadStream('index.html')
//   } else {
//     ctx.type = 'text/*'
//     // ctx.set('Content-Type', 'text/javascript')
//   }
// })

// /* 
// TO-DOS

// 1. write a functon to effectivley perform catcth error in try ...catch 
// the error in catch (error) is now default to 'unknown' look at kentcdodds.com

// 2. change launch.json file so that automaticlaly opens a browser when debugging a server program
//   refer to vode.visualstudio.com/docs/editor/debugging with serverReadyaction

// 3. Once in production, use `npm i pm2` (for load balancing), debug?

// 4. never use `koa-session` as this can be accessible only by one thread and not secure

// 4. bcrypt (password hashing) fs-extra, compression, helmet

// 5. Copy non-ts or tsx files from /src to /dist: refer to stackoverflow No. 70725217. 
// */