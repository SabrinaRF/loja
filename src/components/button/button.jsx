export default function Button({ texto, onClick }) {
    return (
        <button className="btn btn-primary mb-3" onClick={onClick}>
            {texto}
        </button>
    );
}