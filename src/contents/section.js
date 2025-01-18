function section () {
    let article=[];
    for (let i=1;i<5;i++) article.push(<img src={`./article${i}.png`}/>)
    return (
        <div className="section">
            <div class="article">
                    <p>01</p>
                    <p>BATTLE ROYAL</p>
                    <p>The battle is building! Drop into the Battle Royale. Loot, build, explore, and fight in a game of 100 players competing to be the last one standing.</p>
                    {article[0]}
                </div>
                <div class="article">
                    <p>02</p>
                    <p>ZERO BUILD</p>
                    <p>All battle, no building! Zero Build is all the action, loot, and progression of classic Battle Royale, without the Building!</p>
                    {article[1]}
                </div>
                <div class="article">
                    <p>03</p>
                    <p>ARENA MODES</p>
                    <p>Test your skills against the best! During each match, you'll earn Hype by either achieving high placements or eliminating opponents.</p>
                    {article[2]}
                </div>
                <div class="article">
                    <p>04</p>
                    <p>ARENA MODES</p>
                    <p>Test your skills against the best! During each match, you'll earn Hype by either achieving high placements or eliminating opponents.</p>
                    {article[3]}
                </div>
        </div>
    )
};

export default section;