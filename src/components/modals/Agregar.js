import {useState} from 'react';
import {retornarVehiculos} from '../../services/vehiculos_service';
import Vehiculos from '../vehiculos';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Table,
    Button,
    Container,
    Modal,
    ModalHeader,
    ModalBody,
    FormGroup,
    ModalFooter,
  } from "reactstrap";



function Agregar({modalEsVisible, cerrarModal, insertar, editar, registroEnEdicion}) {
    const [form, setForm] = useState({
        marca: "",
        modelo: "",
        segmento: "",
        color: "",
        ano: "",
        cantidad: "",
        valor: ""
    });
   
    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    return(
        <Modal isOpen={modalEsVisible}>
          <ModalHeader>
           <div>
                <h3>
                    {registroEnEdicion?'Editar Vehiculo' : 'Insertar Vehiculo'}
                </h3>
            </div>
          </ModalHeader>

          <ModalBody>
            <FormGroup>
              <label>
                Marca:
              </label>
              <input
                className="form-control"
                name="marca"
                type="text"
                onChange={handleChange}
                value={form.marca}
              />
            </FormGroup>
            
            <FormGroup>
              <label>
                Modelo: 
              </label>
              <input
                className="form-control"
                name="modelo"
                type="text"
                onChange={handleChange}
                value={form.modelo}
              />
            </FormGroup>
            
            <FormGroup>
              <label>
                Segmento: 
              </label>
              <input
                className="form-control"
                name="segmento"
                type="text"
                onChange={handleChange}
                value={form.segmento}
              />
            </FormGroup>

            <FormGroup>
              <label>
                Color: 
              </label>
              <input
                className="form-control"
                name="color"
                type="text"
                onChange={handleChange}
                value={form.color}
              />
            </FormGroup>

            <FormGroup>
              <label>
                Año: 
              </label>
              <input
                className="form-control"
                name="ano"
                type="text"
                onChange={handleChange}
                value={form.ano}
              />
            </FormGroup>

            <FormGroup>
              <label>
                Cantidad: 
              </label>
              <input
                className="form-control"
                name="cantidad"
                type="text"
                onChange={handleChange}
                value={form.cantidad}
              />
            </FormGroup>

            <FormGroup>
              <label>
                Valor: 
              </label>
              <input
                className="form-control"
                name="valor"
                type="text"
                onChange={handleChange}
                value={form.valor}
              />
            </FormGroup>
          </ModalBody>

          <ModalFooter>
            <Button
              color="primary"
              onClick={() =>{
                if (registroEnEdicion) {
                    Object.assign(registroEnEdicion, form);
                    editar(registroEnEdicion)
                } else { 
                    insertar(form) 
                }
              }}
            >
              {registroEnEdicion?'Editar' : 'Insertar'}
            </Button>
            <Button
              className="btn btn-danger"
              onClick={() => cerrarModal()}
            >
              Cancelar
            </Button>
          </ModalFooter>
        </Modal>

    );
}


export default Agregar;
