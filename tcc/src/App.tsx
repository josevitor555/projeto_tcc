
// Estilos CSS
import './App.css';

// Componentes do Shadcn
import { Button } from "@/components/ui/button";

// Componente principal da Aplicação
const App = () => {

  return (
    <div className="app flex flex-col items-center justify-center h-screen gap-2">
      <h1 className='text-black text-3xl font-semibold underline'> Bem vindo ao meu TCC! </h1>
      <Button onClick={() => alert('Bem Vindo ao meu TCC! :D')}> Saiba Mais </Button>
    </div>
  );
}

export default App;
