import React from 'react';
import ElevatorButton from './ElevatorButton';

class ElevatorControlPanel extends React.Component {
    render() {
        return (
            <div className="ElevatorControlPanel" >
                Elevator Control Panel
                <ElevatorButton
                    id={this.props.buttons[2].id}
                    isOn={this.props.buttons[2].isOn}
                    label={this.props.buttons[2].label}
                />
                <ElevatorButton
                    id={this.props.buttons[1].id}
                    isOn={this.props.buttons[1].isOn}
                    label={this.props.buttons[1].label}
                />
                <ElevatorButton
                    id={this.props.buttons[0].id}
                    isOn={this.props.buttons[0].isOn}
                    label={this.props.buttons[0].label}
                />
            </div >
        );
    }
}

export default ElevatorControlPanel;