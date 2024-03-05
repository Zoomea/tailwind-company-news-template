import WorkImg from './assets/work.jpg';

const NewsDisplay = () => {
    return <div className="flex flex-col items-center h-full my-4">
        <div className="text-xs" style={{color: '#d8d8d8'}}>DEC 20, 18</div>
        <img className="my-4" src={WorkImg} alt="works image" />
        <div className="text-red-400 w-2/3 text-center" style={{ fontFamily: 'parasupreme-lightfine' }}>Etiam porta sem malesuada magna mollis euismod.</div>
    </div>
}

export default NewsDisplay;