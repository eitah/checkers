import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const schema = new Schema({
  id: { type: Number,
          required: true,
          min: 1,
          max: 12,
        },
  status: { type: String,
            enum: ['alive', 'dead', 'king'],
            required: true,
          },
  location: { type: Object, required: true,
          },
  color: { type: String, enum: ['white', 'black'], required: true },
});

module.exports = mongoose.model('Piece', schema);
