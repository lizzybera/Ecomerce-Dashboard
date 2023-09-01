import express from "express";
import { createProduct, detailedProject, getProducts, payment } from "../controller/EcommerceController";


const router = express.Router();

router.route("/view-products").get(getProducts)
router.route("/create-products").post(createProduct)
router.route("/:productID/product-detail").get(detailedProject)
router.route("/make-payment").post(payment)

export default router