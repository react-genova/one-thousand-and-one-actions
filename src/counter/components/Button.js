import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ButtonRaw = ({ onClick, className, text }) => (
    <div className={className} onClick={onClick}>
        <span className="button-text">{text}</span>
    </div>
);

ButtonRaw.propTypes = {
    className: PropTypes.string,
    onClick: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired,
};

const Button = styled(ButtonRaw)`
    padding: 10px;
    color: #EEE;
    background-color: green;
    border: 1px solid #0A0;
    border-radius: 5px;
    cursor: pointer;
    user-select: none;

    &:hover {
        background-color: #0A0;
    }
`;

export default Button;
