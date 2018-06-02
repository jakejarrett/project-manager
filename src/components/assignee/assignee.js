import style from './style';

export const Assignee = ({ children, ...props }) => (
    <span class={style['reporter-info']}>
    {   console.log(props.issue)}
        {/*
            Add in images & tooltip for image
            Assignee component
        */}
        <div class={style['image-container']} style={`background-image: url(${props.issue.image})`}></div>
        {props.issue.assignee}
    </span>
);