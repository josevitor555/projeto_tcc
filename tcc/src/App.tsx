
// Estilos CSS
import './App.css';

// Importar o React Route Dom para Roteamento de páginas
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Importar páginas

// 1.Página de Autenticação
import AuthPage from './pages/AuthPage';

// 2.Página de Seleção de Liderança
import LeadershipSelection from './pages/LeadershipSelection';

// Componente MainGame
import MainGame from './pages/MainGame';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>

        {/* Página Não Encontrada */}
        <Route path="/" element={<AuthPage />} />

        {/* Rota Para a Página de Autenticação */}
        <Route path="/autenticacao" element={<AuthPage />} />

        {/* Rota Para a Página de Seleção de Liderança */}
        <Route path="/selecao-de-lideranca" element={<LeadershipSelection />} />

        {/* Rota Para o Componente Principal (Jogo) - Tela de Chat */}
        <Route path="/jogo" element={<MainGame />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
