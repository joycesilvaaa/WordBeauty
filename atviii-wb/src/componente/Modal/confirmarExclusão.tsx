import { Modal, Button } from "react-bootstrap"

interface ConfirmarExclusaoProps{
    tipo: 'cliente' | 'produto' | 'servico'
    onHide : () =>void
    clienteId?:string
    produtoId?: string
    servicoId?: string
    show: boolean
    onConfirmarExclusao: (id: string | undefined) => void;
}

function ConfirmarExclusao({tipo, onHide, clienteId, produtoId, servicoId, show, onConfirmarExclusao}: ConfirmarExclusaoProps){
    let id: string | undefined
    switch(tipo){
        case 'cliente':
            id =clienteId
            break
        case "produto":
            id= produtoId
            break
        case "servico":
            id = servicoId
            break
        default :
            break
    }
    function handleConfirm(id: string | undefined){
        onConfirmarExclusao(id)
        onHide()
    }
    return(
        <Modal show={show} onHide={onHide} centered style={{ background: 'none', border: 'none', overflowX: 'hidden', boxShadow: 'none' }}>
        <Modal.Header closeButton>
            <Modal.Title>Confirmar Exclusão</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ fontSize: '20px' }}>
            <p>Tem certeza de que deseja excluir?</p>
        </Modal.Body>
        <Modal.Footer style={{ background: 'none' }}>
            <Button variant="outline-dark"  onClick={onHide} style={{ margin:'0.5rem', boxShadow: 'none', border: 'none' }}>
                Cancelar
            </Button>
            <Button variant="danger" onClick={() => handleConfirm(id)} style={{ margin:'0.5rem', boxShadow: 'none', border: 'none' }}>
                Excluir
            </Button>
        </Modal.Footer>
    </Modal>
    )
}
export default ConfirmarExclusao