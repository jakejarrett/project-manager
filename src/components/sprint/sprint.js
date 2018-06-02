import { Component } from "preact";
import { IssueCard } from '../issue';
import Dialog from 'preact-material-components/Dialog';
import 'preact-material-components/Dialog/style.css';
import { Tags } from '../tags';
import { Assignee } from '../assignee';
import Goku from '../../assets/goku.png';
import style from './style';

const formatDate = () => {
	return `Due in 3 weeks.`
};

export class Sprint extends Component {
	
	state = {
		showingIssue: false,
		issue: {}
	};

	onClickIssue (issue) {
		this.setState({ showingIssue: true, issue });
	}

	render ({ sprint }, { showingIssue, issue }) {
		// Wait until we've essentially painted the new contents
		window.requestAnimationFrame(_ => this.dialogRef && this.dialogRef.MDComponent.show());

		return (
			<div class={style.sprint}>
				<p class={style.sprintCode}>
					{/* Sprint component */}
					{sprint.code}
					{/* Use DayJS in this portion */}
					<small>{formatDate(sprint.dueDate)}</small>
				</p>
				{/* 
					Issues component
				*/}
				{sprint.issues.length >= 1 && (
					<div class="row">
						{sprint.issues.map(_issue => <IssueCard issue={_issue} onClickIssue={e => this.onClickIssue(_issue)} />)}
					</div>
				)}
				{sprint.issues.length <= 0 && (
					<div>
						No issues lodged
					</div>
				)}

				{showingIssue === true && (
					<Dialog ref={e => (this.dialogRef = e)}>
						<Dialog.Header>#{issue.id} {issue.title}</Dialog.Header>
						<Dialog.Body>
							<div>
								<div class={`row ${style['row-flex-between']}`}>
									<Assignee issue={{ assignee: issue.assignee, image: Goku }} />
									<Tags tags={issue.tags} />
								</div>
								<p dangerouslySetInnerHTML={{ __html: issue.description }}></p>
							</div>
						</Dialog.Body>
						<Dialog.Footer>
							<Dialog.FooterButton accept>okay</Dialog.FooterButton>
						</Dialog.Footer>
					</Dialog>
				)}
			</div>
		)
	}
}