import 'reflect-metadata';
import * as express from 'express';
import {expressEngine} from 'angular2-universal-preview';

let web = express();

import {Application} from './type/components/application';

web.engine('.html', expressEngine);
web.set('views', "./");
web.set('view engine', 'express-engine');
web.use(express.static("./"));
web.use('/', function(req, res) {
    res.render("index.html", { Application });
});
web.listen(3000, () => {
    console.log("listening")
});
