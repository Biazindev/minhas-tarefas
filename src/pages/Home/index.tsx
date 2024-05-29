import BotaoAdicionar from "../../components/BoataoAdicionar"
import BarraLateral from "../../containers/BarraLateral"
import ListaDeTarefas from "../../containers/BarraLateral/ListaDeTarefas"


const Home = () => {
    return (
    <>
    <BarraLateral mostrarFiltros/>
    <ListaDeTarefas />
    <BotaoAdicionar />
    </>
    )
}


export default Home
