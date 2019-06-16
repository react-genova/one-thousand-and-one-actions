import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const IterationRaw = ({ value, onValueChange, className }) => {
    const onValueChangeCallback = useCallback(e => onValueChange(Number(e.target.value)), [onValueChange]);
    return <input className={className} type="text" onChange={onValueChangeCallback} value={value} />
};

IterationRaw.propTypes = {
    className: PropTypes.string,
    value: PropTypes.number.isRequired,
    onValueChange: PropTypes.func.isRequired,
};

const Iteration = styled(IterationRaw)`
    padding: 5px;
    color: #666;
    background-color: #EEE;
    border: 1px solid #CCC;
    border-radius: 5px;
    font-size: 20px;
`;

export default Iteration;
