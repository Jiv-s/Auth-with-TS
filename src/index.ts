import {createServer} from 'node:http'
import createApplication from './app/index.js'

async function main(){
    try {
        const server = createServer(createApplication())
        const PORT:number = 8080
        
        server.listen(PORT,()=>{
            console.log(`server running on ${PORT}`)
        })

    } catch (error) {
        console.log('error running server')
        throw error
    }
}

main()