let express=require('express')
let router=express.Router()

let name=[]

router.get('/',(req,res)=>{
    res.send('Data: '+name)
})

router.post('/',(req,res)=>{
    name.push(req.body.name)
    res.send(req.body.name+' is be added')
})

router.put('/:id',(req,res)=>{
    let i=parseInt(req.params.id)
    let prevname=name[i]
    name[i]=req.body.name
    res.send(`Changed the name from ${prevname} to ${name[i]}`)
})

router.delete('/:id',(req,res)=>{
    let deleted=name.splice(req.params.id,1)
    res.send(`Deleted ${deleted} from database`)
})



module.exports=router