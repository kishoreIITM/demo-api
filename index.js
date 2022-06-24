let express =require('express')
let cors=require('cors')
let studentRouter=require('./routes/student')


let app=express()
app.use(cors({
    origin: '*'
}))

app.use(express.json())
app.use(express.urlencoded({extended:true}))

const port=3000
app.use('/students/',studentRouter)

app.listen(port,()=>{
    console.log(`Listening to port number ${port}`)
})




