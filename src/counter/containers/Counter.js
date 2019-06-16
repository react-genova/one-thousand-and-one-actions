import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { getCounter } from '../modules/selectors';
import { resetCounter } from '../modules/actionCreators';
import CounterValue from '../components/CounterValue';
import Button from '../components/Button';

const CounterRaw = ({ className, counter, resetCounter }) => {
    return (
        <div className={className}>
            <Button text="Reset" onClick={resetCounter} />
            <CounterValue counter={counter} />
        </div>
    );
}

CounterRaw.propTypes = {
    className: PropTypes.string,
    counter: PropTypes.number.isRequired,
    resetCounter: PropTypes.func.isRequired,
};

const Counter = styled(CounterRaw)`
    display: flex;
`;

const mapStateToProps = state => ({ counter: getCounter(state) });

const mapDispatch = { resetCounter };

export default connect(mapStateToProps, mapDispatch)(Counter);
