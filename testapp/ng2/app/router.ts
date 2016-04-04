import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {HomeComponent} from './home/home_component';
import {ColumnsComponent} from './columns/columns_component';

@Component({
  selector: 'my-app',
  templateUrl: 'app/router.html',
  directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
  {path:'/', name: 'Home', component: HomeComponent},
  {path:'/columns', name: 'Columns', component: ColumnsComponent},
])
export class Router {
}
