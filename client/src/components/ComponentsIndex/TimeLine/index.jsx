import React, {Component} from 'react';
import HorizontalTimeline from './Components/HorizontalTimeline';

const events = [
    {type: 'review', author: 'fgfg', date: '01.11.11', title: 'fgfgf'},
    {type: 'book', author: 'fgfg', date: '02.11.11', title: 'fgfgf'},
    {type: 'top', author: 'fgfg', date: '05.11.11', title: 'fgfgf'},
    {type: 'review', author: 'fgfg', date: '08.11.11', title: 'fgfgf'},
    {type: 'book', author: 'fgfg', date: '10.11.11', title: 'fgfgf'},
    {type: 'top', author: 'fgfg', date: '12.11.11', title: 'fgfgf'},
];

class MainTimeline extends Component {
    state = {
        value: 0,
        previous: 0,
        minEventPadding: 20,
        maxEventPadding: 120,
        linePadding: 100,
        fillingMotionStiffness: 150,
    };

    handleClick = index => {
        this.setState({ value: index, previous: this.state.value });
    };

    render() {
        const {value, minEventPadding, maxEventPadding, linePadding} = this.state;

        return (
            <div className="timeline">
                <HorizontalTimeline
                    index={value}
                    indexClick={index => this.handleClick(index)}
                    labelWidth={100}
                    linePadding={linePadding}
                    maxEventPadding={maxEventPadding}
                    minEventPadding={minEventPadding}
                    values={events}
                />
            </div>
        );
    }
}

export default MainTimeline;