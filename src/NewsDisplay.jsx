import WorkImg from './assets/work.jpg';

const NewsDisplay = () => {
    return <div className="flex flex-col items-center h-full my-8">
        <div>DEC 20, 18</div>
        <img className="my-4" src={WorkImg} alt="works image" />
        <div>Etiam porta sem malesuada magna mollis euismod.</div>
    </div>
}

export default NewsDisplay;