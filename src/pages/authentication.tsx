// eslint-disable-next-line no-use-before-define
import React, { FC, ReactNode, useState } from "react"
import { createBrowserHistory } from 'history';
let history = createBrowserHistory();
import axios from 'axios'
import { LockIcon, MailIcon } from "../styles/icons"
import Link from "next/link"
import {
  Fields,
  ForgotLink,
  LoginFrame,
  Logo,
  Password,
  SigninButton,
  Title,
  Username,
  ViewLoginFrame
} from "../styles/pages/Authentication"

interface AuthenticationProps {
  children?: ReactNode
}

const Authentication: FC<AuthenticationProps> = () => {
  const [userName, setUserName] = useState("")
  const [password, setPassword] = useState("")
  

  const setUserContent = e => {
    setUserName(e.target.value)
  }

  const setPasswrodContent = e => {
    setPassword(e.target.value)
  }

  type defaultUser = {
    name: string,
    password: string
  }

  let userToVerify: defaultUser = {
    name: userName,
    password: password
  }

  const verifyUser = async () => {
    const userResponse = await axios.post('http://localhost:3000/api/user/verifyUser', {userToVerify})
  }

  return (
    <ViewLoginFrame>
      <LoginFrame>
        <a target="_blank" href="http://olhosdobem.ong.br/" rel="noreferrer">
          <Logo />
        </a>

        <Title>Olhos do Bem</Title>
        {/* <SubTitle><a href="#">Faça seu cadastro AQUI</a></SubTitle> */}
        <ForgotLink>
          <Link href="/registrationOptions">FAÇA SEU CADASTRO AQUI</Link>
        </ForgotLink>
        <Fields>
          <Username>
            <MailIcon size={2} />
            <input
              type="usename"
              placeholder="usuário"
              value={userName}
              onChange={setUserContent}
            />
          </Username>

          <Password>
            <LockIcon />
            <input
              type="password"
              placeholder="senha"
              value={password}
              onChange={setPasswrodContent}
            />
          </Password>
        </Fields>

        <SigninButton onClick={verifyUser}>Login</SigninButton>

        <ForgotLink>
          <a href="/recuperation"> Esqueci minha senha</a>
        </ForgotLink>
      </LoginFrame>
    </ViewLoginFrame>
  )
}

export default Authentication
