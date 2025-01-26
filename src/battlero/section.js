import './battlero.css';

function section() {
    let hero=[];
    for (let i=1;i<33;i++) hero.push(i<10 ? <p className='hero'><img src={`hero0${i}.png`}/></p> : <p className='hero'><img src={`hero${i}.png`}/></p>)
    return (
        <div id="section">
            {hero}
        </div>
    )
};

export default section;