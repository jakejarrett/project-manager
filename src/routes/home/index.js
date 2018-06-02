import { h, Component } from 'preact';
import Card from 'preact-material-components/Card';
import 'preact-material-components/Card/style.css';
import 'preact-material-components/Button/style.css';
import style from './style';
import { route } from 'preact-router';

export default class Home extends Component {
	
	onClickViewProject (e) {
		route(`/project/${e.target.getAttribute('data-id')}`);
	}

	render ({ projects }) {
		return (
			<div class={style.home}>
				<h1>Home route</h1>
				{projects.length >= 1 && (
					<div class="row">
						{projects.map(project => (
							<Card data-id={project.id} onClick={this.onClickViewProject.bind(this)}>
								<div class={style.cardHeader}>
									<h2 class=" mdc-typography--title">
										{project.name}
									</h2>
									<div class=" mdc-typography--caption">
										{project.owner}
									</div>
								</div>
								<div class={style.cardBody}>
									{project.description}
								</div>
							</Card>
						))}
					</div>
				)}

				{projects.length <= 0 && (
					<div class="">
						Oh no
					</div>
				)}
			</div>
		);
	}
}
