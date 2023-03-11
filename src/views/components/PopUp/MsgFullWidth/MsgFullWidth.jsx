import './MsgFullWidth.css';

export function MsgFullWidth({ msg, type }) {
    return (
        <div className={type + '-msg' +' alert__div'}>
            <p>{msg}</p>
        </div>
    )
}