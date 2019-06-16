import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { incrementCounter } from '../../counter/modules/actionCreators';
import Button from '../../counter/components/Button';
import sleep from '../../utils/sleep';

const Logic04Raw = ({ className, iterations, incrementCounter }) => {
    const onClick = async() => {
        const sleepStep = Math.floor(iterations / 10); // every 10%
        for(let i=0; i<iterations; ++i) {
            incrementCounter();
            if (i % sleepStep === 0) {
                await sleep(1);
            }
        }
    };
    return (
        <div className={className}>
            <Button text="Start" onClick={onClick} />
            <span className="description">{`4) Increment counter ${iterations} times sparse delayed in an loop`}</span>
        </div>
    );
}

Logic04Raw.propTypes = {
    className: PropTypes.string,
    iterations: PropTypes.number.isRequired,
    incrementCounter: PropTypes.func.isRequired,
};

const Logic04 = styled(Logic04Raw)`
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

export default connect(mapStateToProps, mapDispatch)(Logic04);
