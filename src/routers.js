import controller from './controllers/controller';
import Router from 'express';

const router = Router();

router.get('/', controller.evnt); 
router.post('/', controller.post);
router.get('/:nome', controller.get);

export default router;


