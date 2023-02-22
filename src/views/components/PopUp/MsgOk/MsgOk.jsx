import './MsgOk.css';

export default function MsgOk({ msg }) {
    return (
        <div className="sucessful-alert__div">
            <p>{msg}</p>
        </div>
    )
}