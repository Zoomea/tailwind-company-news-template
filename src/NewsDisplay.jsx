import WorkImg from './assets/work.jpg';

// New container for each news on home page
const NewsDisplay = () => {
    return <div className="flex flex-col items-center h-full my-4">
        <div className="text-xs" style={{color: '#d8d8d8'}}>MAR 10, 24</div>
        <img className="my-4" src={WorkImg} alt="works image" />
        <div className="text-red-400 w-2/3 text-center" style={{ fontFamily: 'parasupreme-lightfine' }}>Partage de Compétences : Les Freelancers Créent une Communauté d'Entraide Unique.</div>
    </div>
}

export default NewsDisplay;