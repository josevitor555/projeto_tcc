// Componente principal do Chat
// Vai conter CSS grid de três colunas

// 1. Linha do Cabeçalho
import Header from '../components/system/Header';

// 2. Coluna do SideBar Lateral
import SidebarTeam from '../components/system/SidebarTeam';

// 3. Coluna do Meio (Chat Principal)
import ChatTutor from '../components/system/ChatTutor';

// 4. Coluna da direita (Mural de Progresso)
import ProgressPanel from '../components/system/ProgressPanel';

// 5. Rodapé
import Footer from '../components/system/Footer';

// Componente do Jogo Principal
const MainGame = () => {
    return (
        <div className="grid grid-cols-8 grid-rows-10 gap-2 h-screen p-2 box-border bg-gray-100">
            
            {/* Cabeçalho */}
            <Header />

            {/* Menu Lateral com as salas ativas */}
            <SidebarTeam />
            
            {/* Chat Principal */}
            <ChatTutor />

            {/* Painel de Progresso */}
            <ProgressPanel />

            {/* Rodapé */}
            <Footer />
        </div>
    )
}

export default MainGame;
