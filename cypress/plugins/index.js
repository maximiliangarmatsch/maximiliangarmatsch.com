module.exports = (on, config) => {
    // eslint-disable-next-line import/no-extraneous-dependencies
    require('cypress-react-unit-test/plugins/react-scripts')(on, config);

    on('task', require('@cypress/code-coverage/task')(on, config));
    return config;
};
