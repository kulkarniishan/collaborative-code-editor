const mongoose = required("mongoose")

const FileSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    extension : {
        type : String,
        required : true,
        maxLength : 10
    },
    owner_id : {
        type : String,
        required : true,
    },
    contributors : [
        {
            id : {
                type : String,
                required : true
            },
            access_rights : {
                type : String,
                required : false,
                defaultValue : "read/write"
            }
        }
    ],
    data : {
        type : String,
        required : false
    }
})

FileSchema.post('save',(doc,next)=>{
    console.log("New file created & saved ",doc)
    next()
})


FileSchema.pre('save',()=>{
    // Validation
})

FileSchema.pre('remove',(doc)=>{
    console.log(`Removing ${doc._id}...`)
})

FileSchema.post('remove',()=>{
    console.log(`${doc._id} has been removed !!`)
})

module.exports = {FileSchema};