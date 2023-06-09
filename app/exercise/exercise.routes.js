import express from 'express'

import { protect } from '../middleware/auth.middleware.js'

import { createNewExercise, getExercise } from './exercise.controller.js'

const router = express.Router()

router.route('/').post(protect, createNewExercise)
router.route('/').post(protect, createNewExercise).get(protect, getExercise)

export default router
