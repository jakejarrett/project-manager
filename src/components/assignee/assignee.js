import style from './style';

export const Assignee = ({ children, ...props }) => (
    <span class={style['reporter-info']}>
        {/*
            Add in images & tooltip for image
        */}
        <div class={style['image-container']} style={`background-image: url(${props.issue.image})`}></div>
        {props.issue.assignee}
    </span>
);