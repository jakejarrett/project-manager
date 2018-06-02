import { h, Component } from 'preact';
import { Router } from 'preact-router';

import Header from './header';
import Home from 'async!../routes/home';
import Project from 'async!../routes/project';

const static_projects = [
	{
		name: 'Hello',
		id: '1',
		description: 'This is a test description',
		owner: 'jake',
		currentSprint: 0,
		sprints: [],
		releases: []
	},
	{
		name: 'World',
		id: '2',
		description: 'This is a test description',
		owner: 'jake',
		currentSprint: 1,
		sprints: [
			{
				issues: [
					{
						title: `Doesn't render`,
						assignee: 'jake',
						reporter: 'jake',
						priority: 'medium',
						tags: 'feature,not a bug',
						id: '1',
						description: `This is a description. <b>It has HTML inside it</b>`
					}
				],
				code: 'WOR-1',
				dueDate: '2019-09-20',
				active: true
			}
		],
		releases: [
			{
				version: 0.1,
				url: 'https://downloadme/uyyufduiy.zip'
			}
		]
	},
	{
		name: 'This',
		id: '3',
		description: 'This is a test description',
		owner: 'jake',
		currentSprint: 1,
		sprints: [],
		releases: []
	},
	{
		name: 'Is',
		id: '4',
		description: 'This is a test description',
		owner: 'jake',
		currentSprint: 1,
		sprints: [],
		releases: []
	},
	{
		name: 'A',
		id: '5',
		description: 'This is a test description',
		owner: 'jake',
		currentSprint: 1,
		sprints: [],
		releases: []
	},
	{
		name: 'Test',
		id: '6',
		description: 'This is a test description',
		owner: 'jake',
		currentSprint: 1,
		sprints: [],
		releases: []
	},
];

export default class App extends Component {
	
	header = {};

	/** Gets fired when the route changes.
	 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} event.url	The newly routed URL
	 */
	handleRoute = e => {
		this.currentUrl = e.url;
		if (e.url.indexOf('/project/') === -1) {
			this.header.allowAddingProject();
		} else {
			this.header.disallowAddingProject();
		}
	};

	getProject (projectID, r = {}) {
		const filtered = static_projects.filter(project => (project.id === projectID));
		if (filtered.length >= 1) {
			r = filtered[0];
		}
		return r;
	}

	addProject () {
		//
	}

	render() {
		return (
			<div id="app">
				<Header addProject={this.addProject.bind(this)} ref={e => (this.header = e)} />
				<Router onChange={this.handleRoute}>
					<Home path="/" projects={static_projects} />
					<Project path="/project/:projectID" getProject={this.getProject.bind(this)} />
				</Router>
			</div>
		);
	}
}
