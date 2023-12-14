import express from 'express'
import { categoriesController } from './controllers/categoriesController'
import { coursesController } from './controllers/coursesController'
import { episodesController } from './controllers/episodesController'
import { authController } from './controllers/authController'
import { ensureAuth, ensureAuthViaQuery } from './middlewares/auth'
import { favoritesController } from './controllers/favoritesController'
import { likesController } from './controllers/likesController'
import { usersController } from './controllers/usersController'

//Atribuindo a função Router do express na constante router, essa função é a responsável de definiar as rotas
const router = express.Router()

//Rotas para registrar e fazer login 
router.post('/auth/register', authController.register)
router.post('/auth/login', authController.login)

//Rota de todas as categorias e de uma especificada através do id
router.get('/categories', ensureAuth, categoriesController.index)
router.get('/categories/:id',ensureAuth, categoriesController.show)

//Rotas de listagem dos cursos
router.get('/courses/featured', ensureAuth, coursesController.featured)
router.get('/courses/newest', coursesController.newest)
router.get('/courses/popular', ensureAuth, coursesController.popular)
router.get('/courses/search', ensureAuth, coursesController.search)
router.get('/courses/:id', ensureAuth, coursesController.show)

router.get('/episodes/stream', ensureAuthViaQuery, episodesController.stream)

router.get('/episodes/:id/watchTime', ensureAuth, episodesController.getWatchTime)
router.post('/episodes/:id/watchTime', ensureAuth, episodesController.setWatchTime)

//Rotas dos cursos favoritos
router.get('/favorites', ensureAuth, favoritesController.index)
router.post('/favorites', ensureAuth, favoritesController.save)
router.delete('/favorites/:id', ensureAuth, favoritesController.delete)

//Rotas dos cursos curtidos
router.post('/likes', ensureAuth, likesController.save)
router.delete('/likes/:id', ensureAuth, likesController.delete)

//Rotas relacionadas aos usuários
router.get('/users/current/watching', ensureAuth, usersController.watching)
router.get('/users/current', ensureAuth, usersController.show)
router.put('/users/current', ensureAuth, usersController.update)

export { router }