import PageLayout from '../components/PageLayout';
import Utils from '../util/Utils';

import '../styles/name.scss';

export default class Name extends React.Component {
    state = {
        winner: Utils.getRandomName()
    };

    componentDidMount() {
        Utils.loadVoices();
        window.addEventListener('keypress', this.onKeypress);
    }
    componentWillUnmount() {
        window.removeEventListener('keypress', this.onKeypress);
    }
    onKeypress = () => {
        const { spoken, value } = this.state.winner;
        Utils.say((spoken || value) + ' is the winner.');
    };
    render() {
        const { winner } = this.state;
        return (
            <PageLayout className="name">
                <div className="page_content">
                    <span>Sorry, that doesn't work right now.</span>
                    <span>Let's just say <span className="winner">{winner.value}</span> is the winner.</span>
                </div>
            </PageLayout>
        );
    }
}