import * as express from 'express';
import { Request, Response } from 'express';

const router = express.Router();
const viewFolder:string = 'main';

router.get('/', (req: Request, res: Response) =>
{
	res.render(`${viewFolder}/index`);
});

export default router;