// eslint-disable-next-line no-use-before-define
import React, { FC, ReactNode, useState } from "react"
import { Container } from "../styles/pages/Home"
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"
import CloseIcon from "@material-ui/icons/Close"
import {
  Fields2,
  Fields3,
  ForgotLink,
  LoginFrame,
  SigninButton,
  Title,
  Name,
  ViewLoginFrame,
  Close
} from "../styles/pages/RegistrationsReceive"
import axios from 'axios'

interface RegistrationReceiveProps {
  children?: ReactNode
}

const RegistrationReceive: FC<RegistrationReceiveProps> = () => {
  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      root: {
        "& > *": {
          margin: theme.spacing(1),
          width: "25ch"
        }
      }
    })
  )

  const [nomeDonatario, setNomeDonatario] = useState("")
  const [telefone, setTelefone] = useState("")
  const [celular, setCelular] = useState("")
  const [descricao, setDescricao] = useState("")

  const getNomeDonatario = e => {
    setNomeDonatario(e.target.value)
  }

  const getTelefone = e => {
    setTelefone(e.target.value)
  }

  const getCelular = e => {
    setCelular(e.target.value)
  }

  const getDescricao = e => {
    setDescricao(e.target.value)
  }

  type donationRequest = {
    nome: string,
    telefone: string,
    celular: string,
    descricao: string,
    ativo: boolean
  }

  const donationRequestToCreate: donationRequest = {
    nome: nomeDonatario,
    telefone: telefone,
    celular: celular,
    descricao: descricao,
    ativo: true
  }

  const donationRequestToApi = async () => {
    const response = await axios.post('/api/donation/orderVerification', { donationRequestToCreate })
    if (response.data.length > 0) {
      console.log(response);

      console.log("Pedido já registrado no seu nome. Entraremos em contato em breve.")
    } else {
        const registrationResponse = await axios.post('/api/donation/orderRegistration', { donationRequestToCreate })
        if (registrationResponse.data.length > 0) {
          return console.log("Pedido criado com sucesso!")
        }
      
    }
  }

  return (
    <>
      <Container>
        <ViewLoginFrame>
          <LoginFrame>
            <Close>
              <a href="/registrationOptions">
                <CloseIcon color="action" />
              </a>
            </Close>
            <Title>Cadastre-se</Title>
            {/* <SubTitle><a href="#">Faça seu cadastro AQUI</a></SubTitle> */}

            <ForgotLink> É rápido e fácil</ForgotLink>
            <Fields2>
              <Name>
                <input
                  type="usename"
                  placeholder="Nome Completo"
                  // value={user}
                  onChange={e => {
                    getNomeDonatario(e)
                  }}
                />
              </Name>
            </Fields2>
            <Fields2>
              <Name>
                <input
                  type="usename"
                  placeholder="Telefone"
                  // value={user}
                  onChange={e => { getTelefone(e) }}
                />
              </Name>
            </Fields2>
            <Fields2>
              <Name>
                <input
                  type="usename"
                  placeholder="Celular"
                  // value={user}
                  onChange={e => { getCelular(e) }}
                />
              </Name>
            </Fields2>
            <ForgotLink>Fale um pouco sobre você:</ForgotLink>
            <Fields3>
              <Name>
                <textarea onChange={e => { getDescricao(e) }} />
              </Name>
            </Fields3>
            <SigninButton onClick={donationRequestToApi}>Cadastre-se</SigninButton>
          </LoginFrame>
        </ViewLoginFrame>
      </Container>
    </>
  )
}

export default RegistrationReceive
