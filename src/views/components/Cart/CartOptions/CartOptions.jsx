export default function CartOptions({handleDelete, id, quantity}){
    return(
        <p onClick={() => handleDelete(id, quantity)}>Borrar</p>
    )
}