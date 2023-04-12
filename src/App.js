import React, { useContext } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from "./components/header";
import Menu from "./components/menu";
import { userContext } from './contexts/userContext';
import History from './pages/history';
import Home from './pages/home';
import Library from './pages/library';
import Login from './pages/login';
import LogOut from './components/logOut';

function App() {

  const {openMenu, setOpenMenu, logOut} = useContext(userContext)

  return (
    <BrowserRouter>
     <div className="App">
      <Header openMenu={openMenu} setOpenMenu={setOpenMenu}/>
        <div style={{ display: 'flex', boxSizing: 'border-box'}}>
          <Menu openMenu={openMenu}/>
          <div style={{width: 'calc(100% - 210px)', padding: '20px 0px', boxSizing: 'border-box', display: 'flex'}}>
            <Routes>
              <Route path='/' element={<Home openMenu={openMenu} />}/>
              <Route path='/library' element={<Library />}/>
              <Route path='/history'element={<History />}/>
              <Route path='/login'element={<Login />}/>
              <Route path='/logOut'element={<LogOut />}/>
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;


// Deixar a tela de login no padrão - OK
// Implementar sozinho um drop down menu a partir do ícone de usuário(menuzinho que aparece) - OK
// Criar tela a integração para cadastro de usuário
// Criar a tela de integração para cadastro de vídeo
// Implementação de pesquisa
