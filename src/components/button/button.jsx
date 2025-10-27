export default function Button({ style, texto, onClick }) {
    return (
        <button className={`btn btn-${style} ms-3`} onClick={onClick}>
            {texto}
        </button>
    );
}
