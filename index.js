<<<<<<< HEAD
console.log("Creating the app")
console.log("Will be up soon")
console.log("Git testing -1")
=======
let express =require('express')
let app=express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))

const port=3000
let name=[]

app.listen(port,()=>{
    console.log(`Listening to port number ${port}`)
})

app.get('/',(req,res)=>{
    res.send('Data: '+name)

})
app.post('/',(req,res)=>{
    name.push(req.body.name)
    res.send(req.body.name+' is be added')
})
>>>>>>> ab701ff (Added basic get and post api)
