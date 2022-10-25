import {useState} from 'react';
import Home from '../home';
import {usuarios} from '../../services/usuarios_service';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    FormGroup,
    ModalFooter,
  } from "reactstrap";



function Login({setUsuarioLogueado}) {
   const [ ingresoUsuario, setIngresoUsuario ] = useState({
    usuario: "",
    contrasena: ""
   });

   const [ mostrarModalInicioSesion, setMostrarModalInicioSesion ] = useState(true);


    const handleChange = (e) => {
        setIngresoUsuario({
            ...ingresoUsuario,
            [e.target.name]: e.target.value,
        });
    };

    return(
        <Modal isOpen={mostrarModalInicioSesion}>
          <ModalHeader>
           <div>
                <h3>
                    Inicio de Sesión
                </h3>
            </div>
          </ModalHeader>

          <ModalBody>
            <FormGroup>
              <label>
                Usuario:
              </label>
              <input
                className="form-control"
                name="usuario"
                type="text"
                onChange={handleChange}
                value={ingresoUsuario.usuario}
              />
            </FormGroup>
            
            <FormGroup>
              <label>
                Constraseña: 
              </label>
              <input
                className="form-control"
                name="contrasena"
                type="text"
                onChange={handleChange}
                value={ingresoUsuario.contrasena}
              />
            </FormGroup>
          </ModalBody>

          <ModalFooter>
            <Button
              color="primary"
              onClick={() => {
                const usu = usuarios.find(u=> 
                    ingresoUsuario.usuario === u.usuario && 
                    ingresoUsuario.contrasena === u.contrasena
                    )
                if (usu) {
                    setUsuarioLogueado(usu);
                } else { 
                    alert("Datos incorrectos, vuelve a intentarlo");
                }
              }
            }
            >
              Iniciar Sesión
            </Button>
          </ModalFooter>
        </Modal>

    );
}


export default Login;
