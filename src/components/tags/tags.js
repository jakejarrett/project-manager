import style from './style';

export const Tags = ({ children, ...props }) => (
    <span class={style.tags}>{props.tags.split(',').map(tag => (
        <span>{tag}</span>
    ))}</span>
);