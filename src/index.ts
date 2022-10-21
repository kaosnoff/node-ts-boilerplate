import * as express from 'express';
import MainRouter from './routers/main.router';
// Use different Routers to organize yout path groups
// import mainRouter from './routers/main.router';
const path = require('path');
const fs = require('fs');
const cookieParser = require('cookie-parser');
const cors = require('cors');

async function getRouter(routerName:string, dependencies?:any)
{
	
}

async function main ()
{
	const app = express();
	
	// The line below is added to format JSON output
	app.set('json spaces', 2);
	
	const PORT = process.env.PORT || 3000;
	
	app.use(cors());
	
	const dirs:string[] = fs.readdirSync(path.join(__dirname,'routers'));
	for (let dir of dirs)
	{
		const name = dir.split('.').shift();
		const file = path.join(__dirname, 'routers', `${name}.router`);
		if (!fs.existsSync(`${file}.ts`) && !fs.existsSync(`${file}.js`)) return;
		const routerImport = await import(file);
		const controller = new (routerImport.default)();
		const baseUrl = `/${name != 'main' ? name : ''}`;
		
		if (controller) app.use(baseUrl, controller.router);
	}
	
	// Use this if Global view variables are needed
	app.use(function(req,res,next) {
		//res.locals.foo = "bar";
		res.locals.title = "YOUR TITLE HERE";
		next();
	});
	
	// view engine setup
	app.set('views', path.join(__dirname, 'views'));
	app.set('view engine', 'hbs');
	
	app.use(express.json());
	app.use(express.urlencoded({ extended: false }));
	app.use(cookieParser());
	
	// Setup public folder for static content
	app.use(express.static(path.join(__dirname, '..', 'public')));
	
	// Fallback error if route not found
	app.use((req, res, next) => {
		const err = new Error('Not Found');
		res.status(404).json({message:'Route not found!'});
		//next(err);
	});
	
	app.listen(PORT, ()=>
	{
		console.log('Server started at http://localhost:'+PORT);
	});
	
}

try {
	main();
} catch (error) {
	console.error(error);
}