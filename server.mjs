import { createServer } from 'node:http'
createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' })
  res.end(JSON.stringify(
    req.url === '/health' ? { status: 'ok' } : { app: 'demo-api' }
  ))
}).listen(Number(process.env.PORT ?? 3000))
