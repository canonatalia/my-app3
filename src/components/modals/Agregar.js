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
    const mensajeDeValorVacio = "* Este campo es Obligatorio";

    const [intentoGuardar, setIntentoGuardar] = useState(false);

    const [form, setForm] = useState({
        marca: "",
        modelo: "",
        segmento: "",
        color: "",
        ano: "",
        cantidad: "",
        valor: ""
    });

    const espacioVacio = () => {
        if (!form.marca 
            || !form.modelo 
            || !form.segmento 
            || !form.color 
            || !form.ano 
            || !form.cantidad 
            || !form.valor) {
            return true;
        } 

        return false;
    }
   
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
                    <h3 class="h3">
                        {registroEnEdicion?'Editar Vehiculo' : 'Insertar Vehiculo'}
                    </h3>
                </div>
            </ModalHeader>

          <ModalBody>
            <FormGroup>
                <label class="h5">
                    Marca:
                </label>
                <input
                    className="form-control"
                    name="marca"
                    type="text"
                    onChange={handleChange}
                    value={form.marca}
                />
                {intentoGuardar && !form.marca ?
                    <span  class="text-danger">{mensajeDeValorVacio}</span>
                    : null
                }
            </FormGroup>
            
            <FormGroup>
                <label class="h5">
                    Modelo: 
                </label>
                <input
                    className="form-control"
                    name="modelo"
                    type="text"
                    onChange={handleChange}
                    value={form.modelo}
                />
                {intentoGuardar && !form.modelo ?
                    <span class="text-danger ">{mensajeDeValorVacio}</span>
                    : null
                }
            </FormGroup>
            
            <FormGroup>
                <label class="h5">
                    Segmento: 
                </label>
                <input
                    className="form-control"
                    name="segmento"
                    type="text"
                    onChange={handleChange}
                    value={form.segmento}
                />
                {intentoGuardar && !form.segmento ?
                    <span class="text-danger ">{mensajeDeValorVacio}</span>
                    : null
                }
            </FormGroup>

            <FormGroup>
                <label class="h5">
                    Color: 
                </label>
                <input
                    className="form-control"
                    name="color"
                    type="text"
                    onChange={handleChange}
                    value={form.color}
                />
                {intentoGuardar && !form.color ?
                    <span class="text-danger ">{mensajeDeValorVacio}</span>
                    : null
                }
            </FormGroup>

            <FormGroup>
                <label class="h5">
                    Año: 
                </label>
                <input
                    className="form-control"
                    name="ano"
                    type="text"
                    onChange={handleChange}
                    value={form.ano}
                />
                {intentoGuardar && !form.ano ?
                    <span class="text-danger ">{mensajeDeValorVacio}</span>
                    : null
                }
            </FormGroup>

            <FormGroup>
                <label class="h5">
                    Cantidad: 
                </label>
                <input
                    className="form-control"
                    name="cantidad"
                    type="text"
                    onChange={handleChange}
                    value={form.cantidad}
                />
                {intentoGuardar && !form.cantidad ?
                    <span class="text-danger ">{mensajeDeValorVacio}</span>
                    : null
                }
            </FormGroup>

            <FormGroup>
                <label class="h5">
                    Valor: 
                </label>
                <input
                    className="form-control"
                    name="valor"
                    type="text"
                    onChange={handleChange}
                    value={form.valor}
                />
                {intentoGuardar && !form.valor ?
                    <span class="text-danger ">{mensajeDeValorVacio}</span>
                    : null
                }
            </FormGroup>
        </ModalBody>

        <ModalFooter>
            <Button
              color="primary"
              onClick={() =>{
                setIntentoGuardar(true);
                if (espacioVacio()) {
                    return;
                }

                if (registroEnEdicion) {
                    Object.assign(registroEnEdicion, form);
                    editar(registroEnEdicion);
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
