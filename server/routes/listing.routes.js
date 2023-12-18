import express from "express"
import {createListing, getListings, getListing, updateListing, deleteListing} from "../controllers/listing.controllers.js"
import { verifyToken } from "../utils/verifyToken.js"
const router = express.Router()

router.get("/getListings", getListings)
router.get("/getListing/:id", getListing)
router.post("/createListing", verifyToken, createListing)
router.post("/updateListing/:id", verifyToken, updateListing)
router.delete("/deleteListing/:id", verifyToken, deleteListing)



export default router