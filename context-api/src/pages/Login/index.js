import {Button, Input, InputAdornment, InputLabel} from '@material-ui/core';
import {Container, InputContainer, Titulo} from './styles';
import {useNavigate} from 'react-router-dom';
import {useUsuarioContext} from "../../common/context/Context";

function Login() {
    const navigate = useNavigate();
    const {nome, setNome, saldo, setSaldo} = useUsuarioContext();
    return (
        <Container>
            <Titulo>
                Insira o seu nome
            </Titulo>
            <InputContainer>
                <InputLabel>
                    Nome
                </InputLabel>
                <Input
                    value={nome}
                    onChange={event => setNome(event.target.value)}
                    type="text"
                />
            </InputContainer>
            <InputContainer>
                <InputLabel>
                    Saldo
                </InputLabel>
                <Input
                    value={saldo}
                    onChange={event => setSaldo(event.target.value)}
                    type="number"
                    startAdornment={
                        <InputAdornment position="start">
                            R$
                        </InputAdornment>
                    }
                />
            </InputContainer>
            <Button
                variant="contained"
                color="primary"
                onClick={() => navigate('/feira')}
            >
                Avançar
            </Button>
        </Container>
    )
}

export default Login;