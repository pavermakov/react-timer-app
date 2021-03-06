var React = require('react');

var Controls = React.createClass({
  propTypes: {
    countdownStatus: React.PropTypes.string.isRequired,
    onStatusChange: React.PropTypes.func.isRequired
  },
  onStatusChange(newStatus){
    // Currying
    return () => {
      this.props.onStatusChange(newStatus);
    };
  }, 
  render: function(){
    var {countdownStatus} = this.props;
    var renderStartButton = () => {
      if(countdownStatus === 'started'){
        return <button className='button secondary' onClick={this.onStatusChange('paused')}>Pause</button>;
      } else {
        return <button className='button primary' onClick={this.onStatusChange('started')}>Start</button>;
      }
    }

    return (
      <div className='controls'>
        {renderStartButton()}
        <button className='button alert hollow' onClick={this.onStatusChange('stopped')}>Clear</button>
      </div>
    );
  }
});

module.exports = Controls;