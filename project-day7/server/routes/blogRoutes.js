import express from "express";
import { addBlog, addCommnet, delteBlogById, getAllBlogs, getBlogByID, getBlogComments, togglePublish } from "../controllers/blogController.js";
import upload from "../middleware/multer.js";
import auth from "../middleware/auth.js";


const blogRouter = express.Router();

blogRouter.post('/add', upload.single('image') ,addBlog);
blogRouter.get('/all', getAllBlogs);
blogRouter.get('/:blogId', getBlogByID);
blogRouter.post('/delete', auth, delteBlogById);
blogRouter.post('/toggle-publish', auth, togglePublish);


blogRouter.post('/add-comment', addCommnet);
blogRouter.post('/comments', getBlogComments);


export default blogRouter;