import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { incrementCounter } from '../../counter/modules/actionCreators';
import Button from '../../counter/components/Button';
import sleep from '../../utils/sleep';

const Logic03Raw = ({ className, iterations, incrementCounter }) => {
    const onClick = async() => {
        for(let i=0; i<iterations; ++i) {
            incrementCounter();
            await sleep(1);
        }
    };
    return (
        <div className={className}>
            <Button text="Start" onClick={onClick} />
            <span className="description">{`3) Increment counter ${iterations} times with delay in a loop`}</span>
        </div>
    );
}

Logic03Raw.propTypes = {
    className: PropTypes.string,
    iterations: PropTypes.number.isRequired,
    incrementCounter: PropTypes.func.isRequired,
};

const Logic03 = styled(Logic03Raw)`
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

export default connect(mapStateToProps, mapDispatch)(Logic03);
