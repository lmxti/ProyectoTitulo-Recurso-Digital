
const User = require('../models/User');

const GetUser = async (req, res) => {
    try {
        const user = await User.findById((req.params.id != 'a' ? req.params.id : req.user), {password : 0});
        res.status(200).json(user);
    } catch (error) {
        console.error('Error fetching user information:', error);
        res.status(500).json({ error: error.message });
    }
}

const CompleteLesson = async (req, res) => {
    try {
        // Assuming you have implemented authentication middleware to check the token
        const user = await User.findById(req.user);
        const lessonId = req.params.lessonId
        console.log(user)

        // Check if the lesson is not already marked as completed
        if (!user.completedLessons.some((completedLesson) => completedLesson.lessonId === lessonId)) {
            user.completedLessons.push({ lessonId : String(lessonId), completed: true });
        }
        
        console.log(user)
        await user.save();

        res.status(200).json(user.completedLessons);
    } catch (error) {
        console.error('Error fetching user information:', error);
        res.status(500).json({ error: error.message });
    }
}



module.exports = {
    GetUser,
    CompleteLesson
};