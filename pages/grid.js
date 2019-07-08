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
        highlight: {},
        names: Utils.getNames(),
        stopping: false,
        winner: {},
    };
    colCount = Math.ceil(Math.sqrt(this.state.names.length));
    nameIdCounter = 0;
    nameIdsInProgress = new Set();
    _getNameId = () => {
        return ++this.nameIdCounter;
    };
    componentDidMount() {
        Utils.loadVoices();
        const engineerFirst = !!Math.floor(Math.random() * 2);
        this.pickName(50, engineerFirst);
        this.pickName(50, !engineerFirst);
    }
    announceWinner = (prefix = '') => {
        const nameIds = Object.keys(this.state.winner).sort();
        const winnerNamesText = nameIds
            .map((nameId) => this.state.winner[nameId].spoken || this.state.winner[nameId].value)
            .join(' and ');
        Utils.say(prefix + winnerNamesText + ' are the winners!');
    }
    declareWinner = (nameId, isEngineer) => {
        this.incrementToFilteredWinner(nameId, isEngineer).then(() => {
            this.nameIdsInProgress.delete(nameId);
            const winner = this.state.names[this.state.highlight[nameId]];
            this.setState((state) => ({ winner: { ...state.winner, [nameId]: winner } }), () => {
                if (this.nameIdsInProgress.size === 0) {
                    this.announceWinner();
                }
            });
        });
    };
    manuallyDeclareWinner = (winner, nameId, highlight) => () => {
        if (this.state.winner[nameId]) {
            this.setState((state) => ({ 
                winner: { ...state.winner, [nameId]: winner }, 
                highlight: { ...state.highlight, [nameId]: highlight } 
            }), () => this.announceWinner('Just kidding, '));
        }
    };
    incrementToFilteredWinner = (nameId, isEngineer) => {
        if (isEngineer !== undefined) {
            return new Promise((resolve) => {
                this._incrementToFilteredWinnerRecur(nameId, isEngineer, resolve);
            });
        }
        return Promise.resolve();
    };
    _incrementToFilteredWinnerRecur = (nameId, isEngineer, resolve) => {
        const potentialWinner = this.state.names[this.state.highlight[nameId]];
        if (potentialWinner.isEngineer == isEngineer) {
            resolve();
        } else {
            window.setTimeout(() => {
                this.setState((state) => ({
                    highlight: { ...state.highlight, [nameId]: (state.highlight[nameId] + 1) % state.names.length }
                }), () => this._incrementToFilteredWinnerRecur(nameId, isEngineer, resolve));
            }, 250);
        }
    };
    pickName = (timeout, isEngineer) => {
        const nameId = this._getNameId();
        this.nameIdsInProgress.add(nameId);
        this.setState((state) => ({ highlight: { ...state.highlight, [nameId]: 0 }} ), 
            () => this._pickNameRecur(timeout, isEngineer, nameId));
    };
    _pickNameRecur = (timeout, isEngineer, nameId) => {
        if (timeout > 400) {
            this.declareWinner(nameId, isEngineer);
        } else {
            window.setTimeout(() => {
                const c = this.state.highlight[nameId];
                const dir = [c - this.colCount, c - 1, c + this.colCount, c + 1];
                const randomDir = wrapDir(dir[Math.floor(Math.random() * dir.length)], this.state.names.length);
                const nextTimeout = this.state.stopping ? timeout * 1.05 : timeout;
                this.setState({ 
                    highlight: { ...this.state.highlight, [nameId]: randomDir } 
                }, () => this._pickNameRecur(nextTimeout, isEngineer, nameId));
            }, timeout);
        }
    };
    stop = () => {
        this.setState({ stopping: true });
    };
    getNameAttrs = (name, idx) => {
        const attrs = {};
        for (let [nameId, highlighted] of Object.entries(this.state.highlight)) {
            if (idx === highlighted) {
                attrs[`data-highlight-${nameId}`] = true;
            }
        }
        for (let [nameId, winner] of Object.entries(this.state.winner)) {
            if (name.value === winner.value) {
                attrs[`data-winner-${nameId}`] = true;
            }
        }
        return attrs;
    };
    getWinnerButtonText = () => {
        const nameIds = Object.keys(this.state.winner).sort();
        return nameIds.map((nameId) => this.state.winner[nameId].value).join(' and ') + ' are the winners!';
    }
    render() {
        const { names, stopping, winner } = this.state;

        const style = {
            width: 100 / this.colCount + '%',
        };

        const numWinners = Object.keys(winner).length;
        let stopText = 'Stop!';
        if (numWinners === 0 && stopping) {
            stopText = 'Stopping!';
        } else if (numWinners > 0) {
            stopText = this.getWinnerButtonText();
        }

        const classname = `grid ${stopping ? 'stopping' : ''}`;
        return (
            <div className={classname}>
                {names.map((n, i) =>
                    <div className="name-wrapper" key={n.value} style={style}>
                        <div
                            className="name"
                            {...this.getNameAttrs(n, i)}
                            onClick={this.manuallyDeclareWinner(n, 1, i)}>
                            {n.value}
                        </div>
                    </div>
                )}
                <div className="stop-btn-wrapper">
                    <div className="stop-btn" onClick={this.stop}>{stopText}</div>
                </div>
            </div>
        );
    }
}

export default Grid;
