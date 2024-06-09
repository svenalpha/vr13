import mongoose from 'mongoose';


const Schema = mongoose.Schema;

const workoutSchema= new mongoose.Schema({
title:{type: String,
      required: true
      },
reps: {type: Number,
         required: true
        },
load: {type: Number,
       required: true
      },
date:{type: Date,
      default: Date.now
     }                                         
}, {timestamps: true});


/* module.exports = mongoose.model('WorkoutModel', workoutSchema);  */


//export const WorkoutModelDb= mongoose.model("WorkoutModel",workoutSchema);
const WorkoutModelDb= mongoose.model("WorkoutModel",workoutSchema);  
// module.exports = WorkoutModelDb;   
export default WorkoutModelDb;


/* const db_model_User = mongoose.model('db_model_User',UserSchema); */
/* module.exports = db_model_User; */


