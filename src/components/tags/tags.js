import style from './style';

/**
 * TODO;
 *  Make each tag a link if it's rendered in a way that allows it.
 */
export const Tags = ({ children, ...props }) => (
    <span class={style.tags}>
        {props.tags.split(',').map(tag => (
            <span>{tag}</span>
        ))}
    </span>
);