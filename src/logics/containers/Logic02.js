import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { incrementCounter } from '../../counter/modules/actionCreators';
import Button from '../../counter/components/Button';

const Logic02Raw = ({ className, iterations, incrementCounter }) => {
    const onClick = () => {
        for(let i=0; i<iterations; ++i) {
            incrementCounter();
        }
    };
    return (
        <div className={className}>
            <Button text="Start" onClick={onClick} />
            <span className="description">{`2) Increment counter ${iterations} times in a loop`}</span>
        </div>
    );
}

Logic02Raw.propTypes = {
    className: PropTypes.string,
    iterations: PropTypes.number.isRequired,
    incrementCounter: PropTypes.func.isRequired,
};

const Logic02 = styled(Logic02Raw)`
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

export default connect(mapStateToProps, mapDispatch)(Logic02);
