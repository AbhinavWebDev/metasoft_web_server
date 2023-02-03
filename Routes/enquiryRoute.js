import express from "express"
import { createEnquiry, deleteEnquiry, getEnquiry } from "../Controllers/enquiryController.js";
const router =express.Router()

router.post('/createEnquiry',createEnquiry)
router.get('/getEnquiry',getEnquiry)
router.delete('/deleteEnquiry/:id',deleteEnquiry)


export default router;