import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { incrementCounter } from '../../counter/modules/actionCreators';
import Button from '../../counter/components/Button';

const Logic01Raw = ({ className, iterations, incrementCounter }) => {
    return (
        <div className={className}>
            <Button text="Start" onClick={incrementCounter} />
            <span className="description">{'1) Increment counter by one (just a basic test)'}</span>
        </div>
    );
}

Logic01Raw.propTypes = {
    className: PropTypes.string,
    iterations: PropTypes.number.isRequired,
    incrementCounter: PropTypes.func.isRequired,
};

const Logic01 = styled(Logic01Raw)`
    display: flex;
    align-items: center;

    .description {
        padding-left: 20px;
    }
`;

const mapStateToProps = state => ({ });

const mapDispatch = {
    incrementCounter,
};

export default connect(mapStateToProps, mapDispatch)(Logic01);
