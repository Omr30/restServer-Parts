import {Schema, model} from 'mongoose'

const PartSchema = Schema({
    brand: {
        type: String,
        require: [true, 'La marca es obligatorio']
    },
    model: {
        type: String,
        require: [true, 'El modelo es obligatorio']
    },
    description: {
        type: String
    },
    price: {
        type: Number
    },
    condition: {
        type: Boolean,
        default: true
    }
},
{
    versionKey: false,
    timestamps: true
}
)

PartSchema.methods.toJSON = function() {
    const {_id, condition, ...parts} = this.toObject()
    parts.uid = _id
    return parts
}

const PartModel = model('Part', PartSchema)

export default PartModel