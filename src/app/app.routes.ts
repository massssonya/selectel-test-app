import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { TestTask } from './pages/test-task';


export const routes: Routes = [
	{
		path: '',
		component: Home
	},
	{
		path: 'test-task',
		component: TestTask
	}
];
