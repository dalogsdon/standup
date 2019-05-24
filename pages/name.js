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
        .name {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            height: 100vh;
            font-size: 24px;
        }
        .winner {
            color: #95fb65;
        }
    `}</style>
);

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
            <div className="name">
                <span>Sorry, that doesn't work right now.</span>
                <span>Let's just say <span className="winner">{winner.value}</span> is the winner.</span>
                {style}
            </div>
        );
    }
}