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
    winner = Utils.names[0];
    componentDidMount() {
        Utils.loadVoices();
        window.addEventListener('keypress', (evt) => {
            Utils.say((this.winner.spoken || this.winner.value) + ' is the winner.');
        });
    }
    render() {
        return (
            <div className="name">
                <span>Sorry, that doesn't work right now.</span>
                <span>Let's just say <span className="winner">{this.winner.value}</span> is the winner.</span>
                {style}
            </div>
        );
    }
}