import * as express from 'express';
import { Request, Response } from 'express';
import { _getViewFolder } from '../inc/functions';
import { RouterClass } from '../inc/Router.class';
// import passport from 'passport';
// import GoogleStrategy from 'passport-google-oauth20';

// require('dotenv').config();
// const passport = require('passport');
// const GoogleStrategy = require('passport-google-oauth20');

// const router = express.Router();
// const viewFolder:string = 'auth';


// console.log('GOOGLE_CALLBACK',process.env['GOOGLE_CALLBACK']);

// passport.use(new GoogleStrategy(
// 	{
// 		clientID: process.env['GOOGLE_CLIENT_ID'],
// 		clientSecret: process.env['GOOGLE_CLIENT_SECRET'],
// 		callbackURL: process.env['GOOGLE_CALLBACK'],
// 	},
// 	function (accessToken, refreshToken, profile, cb)
// 	{
// 		console.log({accessToken, refreshToken, profile, cb});
// 	}
// ))

// router.get(`/${viewFolder}/`, (req: Request, res: Response) =>
// {
// 	res.render(`${viewFolder}/index`);
// });

// router.get(`/${viewFolder}/google`, passport.authenticate('google', {scope: ['profile']}));

// export default router;

export default class AuthRouter extends RouterClass
{
	viewFolder = _getViewFolder();
	
	protected initRoutes()
	{
		this.router.get('/',this.index.bind(this));
	}
	
	public index(req:express.Request, res: express.Response, next?: express.NextFunction)
	{
		RouterClass.defaultFunction(this.viewFolder,'index',req,res,next)
	}
	
}