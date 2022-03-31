import axios from "axios";

const clienteApi = "http://localhost:8080/cliente"
class clienteAxios {
    
    getCliente() { return axios.get(clienteApi) }
    
    getClientebyid(id) {
        return axios.get(clienteApi + "/" + id)
    }
    postCliente(cliente) {
        return axios.post(clienteApi, cliente)
    }
    putCliente(cliente, id) {
        return axios.put(clienteApi + "/" + id, cliente)
    }
    deleteCliente(id) {
        return axios.delete(clienteApi + "/" + id)
    }

}
export default new clienteAxios();