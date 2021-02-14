import { Config, Capabilities } from "protractor";


export let config: Config = {
    directConnect: true,
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),

    Capabilities: {
        browserName: 'chrome'
    },

    specs: [
         '../Features/Calculator.feature'
    ], 
    
    cucumberOpts: {
        require: 'Features/StepDefinitions/*.js'
    }
};