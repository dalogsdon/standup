import Link from './PrefixedLink';
import Utils from '../util/Utils';

import '../styles/navbar.scss';

export default class Navbar extends React.Component {
    componentDidMount() {
        Utils.loadVoices();
    }
    render() {
        return (
            <div className="navbar">
                <div className="navbar_main">
                    <a href="https://go.indeed.com/prime-standup-zoom" target="_blank" rel="noopener noreferrer">zoom</a>

                    <div className="title" onClick={() => Utils.say('Time for standup')}>
                        time for standup
                        </div>

                    <a href="https://go.indeed.com/prime-kanban-overall" target="_blank" rel="noopener noreferrer">kanban</a>
                </div>
                <div className="navbar_links">
                    <Link href="/name"><a>Pick a Card</a></Link>
                    <Link href="/name"><a>Spin the Wheel</a></Link>
                    <Link href="/name"><a>Plinko</a></Link>
                    <Link href="/grid"><a>Grid</a></Link>
                </div>
            </div>
        );
    }
}