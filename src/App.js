import React from 'react';

const App = ({ title }) =>
    <div>{title}</div>;
export default App;

App.propTypes = {
    title: App.string
};