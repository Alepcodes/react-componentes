const BoasVindas = (props) => {
  return (
    <h1>Seja Bem-Vindo(a) {props.nome} {props.genero && `do genero ${props.genero}`}</h1>
  );
}

const Card = ({titulo, texto, children}) => {
  return(
    <div>
      {children}
      <h5>{titulo}</h5>
      <p>{texto}</p>
    </div>
  );
}

const Lista = ({children}) => {
  return(
    <div style={{display: 'flex'}}>
      {children}
    </div>
  );
}

const App = () => {
  const alunos = ['Matheus', 'Paulo', 'Marcus', 'Luciana'];
  return (
    <>
    {/* <BoasVindas nome="Ludmilo" genero= "Masculino"/>
    <BoasVindas nome="Irineu"/>
    <BoasVindas nome="Calabreso"/>
    <BoasVindas nome="Goku"/>
    <BoasVindas nome="Sara" genero= "Feminino"/>
    {
      alunos.map(aluno => (
        <BoasVindas nome={aluno} />
      ))
    } */}
    <Lista>
    <Card
    titulo={'noticia 1'}
    texto={'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'}
    >
      <img src="https://upload.wikimedia.org/wikipedia/pt/thumb/c/cd/Nazar%C3%A9_Confusa.jpg/640px-Nazar%C3%A9_Confusa.jpg" alt="" />
    </Card>
    <Card
    titulo={'noticia 1'}
    texto={'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'}
    >
      <img src="https://upload.wikimedia.org/wikipedia/pt/thumb/c/cd/Nazar%C3%A9_Confusa.jpg/640px-Nazar%C3%A9_Confusa.jpg" alt="" />
    </Card>
    </Lista>
    </>
  );
}

export default App;