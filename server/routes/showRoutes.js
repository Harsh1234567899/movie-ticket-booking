import express from "express";

import { protectAdmin } from "../middleware/auth.js";
import { addShow, getNowPlayingMovies, getShow, getShows } from "../controllers/showCotroller.js";

const showRouter = express.Router();

showRouter.get('/now-playing',protectAdmin, getNowPlayingMovies)
showRouter.post('/add', protectAdmin, addShow)
showRouter.get("/all", getShows)
showRouter.get("/:movieId", getShow)

export default showRouter;