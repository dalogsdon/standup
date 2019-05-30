import Utils from '../util/Utils';

import '../styles/grid.scss';

function wrapDir(i, length) {
    const negative = i < 0 ? -1 : 1;
    const mod = negative * (i % length);
    if (mod < 0) {
        return length - mod;
    }
    return mod;
}

class Grid extends React.Component {
    state = {
        highlight: 0,
        names: Utils.getNames(),
        stopping: false,
        winner: null,
    };
    colCount = Math.ceil(Math.sqrt(this.state.names.length));
    componentDidMount() {
        Utils.loadVoices();
        this.pickName(50);
    }
    declareWinner = () => {
        const winner = this.state.names[this.state.highlight];
        Utils.say((winner.spoken || winner.value) + ' is the winner!');
        this.setState({ winner });
    };
    pickName = (timeout) => {
        if (timeout > 400) {
            this.declareWinner();
        } else {
            window.setTimeout(() => {
                const c = this.state.highlight;
                const dir = [c - this.colCount, c - 1, c + this.colCount, c + 1];
                const randomDir = wrapDir(dir[Math.floor(Math.random() * dir.length)], this.state.names.length);
                const nextTimeout = this.state.stopping ? timeout * 1.05 : timeout;
                this.setState({ highlight: randomDir }, () => this.pickName(nextTimeout));
            }, timeout);
        }
    };
    stop = () => {
        this.setState({ stopping: true });
    };
    render() {
        const { names, highlight, stopping, winner } = this.state;

        const style = {
            width: 100 / this.colCount + '%',
        };

        let stopText = 'Stop!';
        if (!winner && stopping) {
            stopText = 'Stopping!';
        } else if (winner) {
            stopText = winner.value + ' is the winner!';
        }

        const classname = `grid ${stopping ? 'stopping' : ''}`;
        return (
            <div className={classname}>
                {names.map((n, i) =>
                    <div className="name-wrapper" key={n.value} style={style}>
                        <div className="name" data-highlight={i === highlight} data-winner={i === highlight && !!winner}>{n.value}</div>
                    </div>
                )}
                <div className="stop-btn-wrapper">
                    <div class="stop-btn" onClick={this.stop}>{stopText}</div>
                </div>
            </div>
        );
    }
}

export default Grid;
