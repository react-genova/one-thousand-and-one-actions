import React, { useState } from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import Counter from './counter/containers/Counter';
import Iterations from './counter/components/Iteration';
import styled from 'styled-components';
import Logic01 from './logics/containers/Logic01';
import Logic02 from './logics/containers/Logic02';
import Logic03 from './logics/containers/Logic03';
import Logic04 from './logics/containers/Logic04';

function App({ className }) {
    const [iterations, setIterations] = useState(1001);
    return (
        <Provider store={store}>
            <div className={className}>
                <span className="title">{'One thousand and one actions'}</span>
                <div className="separator" />
                <Counter />
                <div className="separator" />
                <div className="iterations">
                    <span className="iterations-title">{'Iterations for the test: '}</span>
                    <Iterations value={iterations} onValueChange={setIterations} />
                </div>
                <div className="separator" />
                <Logic01 iterations={iterations} />
                <div className="separator" />
                <Logic02 iterations={iterations} />
                <div className="separator" />
                <Logic03 iterations={iterations} />
                <div className="separator" />
                <Logic04 iterations={iterations} />
            </div>
        </Provider>
    );
}

export default styled(App)`
    padding: 20px;
    display: flex;
    flex-direction: column;
    font-size: 20px;
    font-family: Verdana, sans-serif;

    .title {
        align-self: center;
        font-size: 40px;
        font-weight: bold;
    }

    .separator {
        height: 1px;
        border-top: 1px solid #DDD;
        margin: 30px 0px;
    }

    .iterations {
        display: flex;
        flex-direction: row;

        .iterations-title {
            padding: 10px 10px 10px 0;
        }
    }
`;
