export default function Button({ texto, onClick }) {
    return (
        <button onClick={onClick}>
            {texto}
        </button>
    );
}