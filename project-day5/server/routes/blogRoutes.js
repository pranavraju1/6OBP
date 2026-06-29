import express from "express";
import { addBlog, getAllBlogs, getBlogByID } from "../controllers/blogController.js";
import upload from "../middleware/multer.js";


const blogRouter = express.Router();

blogRouter.post('/add', upload.single('image') ,addBlog);
blogRouter.get('/all', getAllBlogs);
blogRouter.get('/:blogId', getBlogByID);

export default blogRouter;