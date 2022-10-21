import * as express from 'express';
import * as path from 'path';
import { _getCallerFile, _getViewFolder } from './functions';

export class RouterClass
{
	public router = express.Router();
	viewFolder:string;
	
	constructor()
	{
		this.initRoutes();
	}
	
	protected initRoutes()
	{}
	
	protected static defaultFunction(
		viewFolder:string,
		fcnName: string,
		req?:express.Request, 
		res?: express.Response, 
		next?: express.NextFunction,
		renderType:RenderType = RenderType.html,
	)
	{
		if (renderType == RenderType.html)
		{
			res.render(`${viewFolder}/${fcnName}`);
			// args.res.render(`${this.viewFolder}/`)
		}
		return this;
	}
	
	public getRouter()
	{
		return this.getRouter;
	}
}

export type RouterFunctionArgs = {
	req: express.Request;
	res: express.Response;
	next?: express.NextFunction
}

export enum RenderType {
	html = 'html',
	json = 'json',
}