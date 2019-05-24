import Link from 'next/link';
import Utils from '../util/Utils';

const style = (
    <style jsx>{`
        @import url('https://fonts.googleapis.com/css?family=Bungee&display=swap');

        body {
            background-color: #2f2b2b;
            color: white;
            font-family: 'Bungee', cursive;
            height: 100vh;
            padding: 0;
            margin: 0;
        }
        a {
            color: white;
            text-decoration: none;
        }
        a:hover {
            color: #65bafb;
        }
        p {
            position: relative;
        }
        .standup-home {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            position: relative;
        }
        .side {
            display: flex;
            flex-direction: column;
            white-space: nowrap;
        }
        .left-side {
            text-align: right;
            position: absolute;
            right: 100%;
            top: 28%;
            font-size: 24px;
        }
        .right-side {
            text-align: left;
            position: absolute;
            left: 100%;
            top: 24%;
            font-size: 24px;
        }
        .title {
            font-size: 70px;
            text-align: center;
            padding: 0 1em;
            display: flex;
            flex-direction: column;
        }
        .bell {
            cursor: pointer;
            text-shadow: 0 0 0 white;
            color: transparent;
        }
        .bell:hover {
            text-shadow: 0 0 0 #ffc107;
        }
    `}</style>
);

class Home extends React.Component {
    componentDidMount() {
        Utils.loadVoices();
    }
    render() {
        return (
            <div className="standup-home">
                <p className="title">
                    <span className="side left-side">
                        <a href="https://go.indeed.com/prime-standup-zoom" target="_blank" rel="noopener noreferrer">Standup Zoom</a>
                        <a href="https://go.indeed.com/prime-kanban-overall" target="_blank" rel="noopener noreferrer">Kanban Overall</a>
                    </span>

                    <span>time</span>
                    <span>for</span>
                    <span>standup</span>
                    <span
                        className="bell"
                        role="img"
                        onClick={() => Utils.say('Time for standup')}
                        aria-label="Time for standup!">🔔</span>

                    <span className="side right-side">
                        <Link href="/name"><a>Pick a Card!</a></Link>
                        <Link href="/name"><a>Spin the Wheel!</a></Link>
                        <Link href="/name"><a>Plinko!</a></Link>
                    </span>
                </p>

                {style}
            </div>
        );
    }
}

export default Home;