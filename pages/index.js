import Link from '../components/PrefixedLink';
import Utils from '../util/Utils';

import './index.scss';

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
            </div>
        );
    }
}

export default Home;