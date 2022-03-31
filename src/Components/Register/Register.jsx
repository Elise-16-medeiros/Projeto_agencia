import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Container ,Paper,Button} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
     
    },
  },
}));

export default function Cliente() {
    const paperStyle={padding:'50px 20px', width:600,margin:"20px auto"}
    const[nome,setNome]=useState('')
    const[endereco,setEndereco]=useState('')
    const[email,setEmail]=useState('')
    const[senha,setSenha]=useState('')
    const[clientes,setClientes]=useState([])
     const classes = useStyles();

  const handleClick=(e)=>{
    e.preventDefault()
    const cliente={nome,endereco}
    console.log(cliente)
    fetch("http://localhost:8080/cliente/add",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(cliente)

  }).then(()=>{
    console.log("Cadastro efetuado")
  })
}

useEffect(()=>{
  fetch("http://localhost:8080/cliente/getAll")
  .then(res=>res.json())
  .then((result)=>{
    setClientes(result);
  }
)
},[])
  return (

    <Container>
        <Paper elevation={3} style={paperStyle}>
            <h1 style={{color:"blue"}}><u> Sign up</u></h1>

    <form className={classes.root} noValidate autoComplete="off">
    
      <TextField id="outlined-basic" label="Nome" variant="outlined" fullWidth 
      value={nome}
      onChange={(e)=>setName(e.target.value)}
      />
      
      <TextField id="outlined-basic" label="Email" variant="outlined" fullWidth
      value={email}
      onChange={(e)=>setEmail(e.target.value)}
      />
      
      <TextField id="outlined-basic" label="Senha" variant="outlined" fullWidth
      value={senha}
      onChange={(e)=>setEndereco(e.target.value)}
      />
      
      <TextField id="outlined-basic" label="Endereço" variant="outlined" fullWidth
      value={endereco}
      onChange={(e)=>setEndereco(e.target.value)}
      />
      
      <Button variant="contained" color="secondary" onClick={handleClick}>
  Submit
</Button>
    </form>
   
    </Paper>
    <h1>Cliente</h1>

    <Paper elevation={3} style={paperStyle}>

      {clientes.map(cliente=>(
        <Paper elevation={6} style={{margin:"10px",padding:"15px", textAlign:"left"}} key={cliente.id}>
         Id:{cliente.id}<br/>
         Name:{cliente.name}<br/>
         Address:{cliente.address}

        </Paper>
      ))
}


    </Paper>



    </Container>
  );
}