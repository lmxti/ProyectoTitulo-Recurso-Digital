const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

const userSchema = new mongoose.Schema({
    username: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    completedLessons: [
        {
          lessonId: { type: String }, // Lesson ID like '4-0' for stage 4, lesson 0
          completed: { type: Boolean, default: false },
        },
      ],
})

// Hash the user's password before saving
userSchema.pre('save', async function (next) {
    try {
        if (this.isNew) {
            const salt = await bcrypt.genSalt(10)
            const hashedPassword = await bcrypt.hash(this.password, salt)
            this.password = hashedPassword
        }
        
        next()
    } catch (error) {
        next(error)
    }
})

const User = mongoose.model('User', userSchema)

module.exports = User
