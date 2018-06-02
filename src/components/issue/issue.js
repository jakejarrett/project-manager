import { Component } from "preact";
import Card from 'preact-material-components/Card';
import 'preact-material-components/Card/style.css';
import Goku from '../../assets/goku.png';
import { Tags } from '../tags';
import { Assignee } from '../assignee';
import style from './style';

export class IssueCard extends Component {

	dialogRef = {};

	// Abstract these into util component
	getPriorityColor (priority) {
		return {
			'': style['low-priority'],
			low: style['low-priority'],
			medium: style['medium-priority'],
			high: style['high-priority']
		}[priority];
	}

	capitalize (word) {
		return `${word.split("")[0].toLocaleUpperCase()}${word.slice(1)}`
	}

	render ({ issue, onClickIssue }) {
		return (
			<Card onClick={onClickIssue}>
				<h1 class={style['card-title']}>
					{issue.title}
					{/* Tags component */}
					<div class={style.tags}>
						<Tags tags={issue.tags} />
					</div>
				</h1>
				<p class={style['reporter-text']}>
					<Assignee issue={{ assignee: issue.assignee, image: Goku }} />
					{/* Priority component */}
					<span class={`${style.priority} ${this.getPriorityColor(issue.priority)}`}>{this.capitalize(issue.priority)}</span>
				</p>
			</Card>
		);
	}
}