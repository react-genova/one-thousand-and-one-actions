import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CounterValueRaw = ({ className, counter }) => (
    <div className={className}>
        <span className="counter-label">{'Counter: '}</span>
        <span className="counter-value">{counter}</span>
    </div>
);

CounterValueRaw.propTypes = {
    className: PropTypes.string,
    counter: PropTypes.number.isRequired,
};

const CounterValue = styled(CounterValueRaw)`
    padding: 10px;
    color: #666;
    dispay: flex;
`;

export default CounterValue;
