import { Modal, Button } from "react-bootstrap";
import { excluirCliente } from "../../api/clienteApi";
import 'bootstrap/dist/css/bootstrap.min.css';

interface ExcluirModalProps {
    onHide: () => void;
    clientId: string;
    show: boolean;
}

function ExcluirModal({ clientId, onHide, show }: ExcluirModalProps) {
    
    async function handleDeleteChanges(){
        try{
            const id = parseInt(clientId)
            const resultado = await excluirCliente(id)
            if(resultado?.success){
                alert(resultado.message)
                onHide()
                window.location.reload();
            }
            onHide()
        }catch(error){
            console.error(`Erro ao excluir cliente: ${error}`)
        }
    }


    return(
        <Modal show={show} onHide={onHide} centered style={{  background: 'none',border: 'none', overflowX: 'hidden', boxShadow: 'none',zIndex: 1050   }}  >
        <Modal.Header >
            <Modal.Title style={{  fontSize:'22px', textAlign: 'center', fontWeight: '500'}}>Confirmar Exclusão</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ fontSize: '20px' }}>
            <p>Tem certeza de que deseja excluir?</p>
        </Modal.Body>
        <Modal.Footer style={{ background: 'none' }}>
            <Button variant="dark"  onClick={onHide} style={{ margin:'0.5rem', boxShadow: 'none', border: 'none' }}>
                Cancelar
            </Button>
            <Button variant="danger" onClick={handleDeleteChanges} style={{ margin:'0.5rem', boxShadow: 'none', border: 'none' }}>
                Excluir
            </Button>
        </Modal.Footer>
    </Modal>
    )
}

export default ExcluirModal