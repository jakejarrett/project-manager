import { h, Component } from 'preact';
import { Sprint } from '../../components/sprint';
import style from './style';

export default class Project extends Component {

	state = { project: {} };

	componentDidMount () {
		this.setState({ project: this.props.getProject(this.props.projectID) });
	}


	render(props, { project }) {
		return (
			<div class={style.project}>
				<h1 class={style['project-title']}>
					{project.name}
					<small class={style.sprint}>
						Sprint {project.currentSprint}
					</small>
				</h1>
				<p class={style.owner}>{project.owner}</p>
				{/*
					Add in tabs so that it's not a long mess here
				*/}
				<div class={style.projects}>
					{project.sprints && project.sprints.length >= 1 && project.sprints.map(sprint => <Sprint sprint={sprint} />)}
					
					{project.sprints && project.sprints.length <= 0 && (
						<div class={style['no-sprints']}>
							No sprints
						</div>
					)}
					{/* 
						When tabs are done, implement releases
						{project.releases != null && project.releases.length >= 1 && project.releases.map(release => (
							<div class={style.releases}>
								{release.version}
								<a href={release.url} download={true}>
									<Icon>cloud_download</Icon>
								</a>
							</div>
						))} */}
				</div>
			</div>
		);
	}
}
