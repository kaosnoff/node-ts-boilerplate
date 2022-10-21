import * as express from 'express';
import { _getViewFolder } from '../inc/functions';
import { RouterClass } from '../inc/Router.class';

// const router = express.Router();
// const viewFolder:string = 'main';

// router.get('/api', (req: Request, res: Response,) =>
// {
// 	res.render(`${viewFolder}/index`);
// });

// export default router;

export default class MainRouter extends RouterClass
{
	viewFolder = _getViewFolder();
	
	protected initRoutes()
	{
		this.router.get('/',this.index.bind(this));
	}
	
	public index(req:express.Request, res: express.Response, next?: express.NextFunction)
	{
		MainRouter.defaultFunction(this.viewFolder,'index',req,res,next)
	}
	
}