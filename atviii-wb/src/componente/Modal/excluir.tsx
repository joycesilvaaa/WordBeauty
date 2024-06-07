import { Modal, Button } from "react-bootstrap"

interface ModalExclusãoProps{
    tipo: 'cliente' | 'produto' | 'servico'
    onHide : () =>void
    id: string
    show: boolean
}

function ModalExcluir({tipo, onHide,  show, id }: ModalExclusãoProps){
    function handleDeleteChanges(){
        alert(`Deletado!`)
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
            <Button variant="danger" onClick={handleDeleteChanges} style={{ margin:'0.5rem', boxShadow: 'none', border: 'none' }}>
                Excluir
            </Button>
        </Modal.Footer>
    </Modal>
    )
}
export default ModalExcluir