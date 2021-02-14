import { Given, When, Then } from "cucumber";
import { browser, element, by } from "protractor";
import chai from "chai";
const expect = chai.expect;

Given('Launch the url', { timeout: 60 * 1000 }, async function () {
  await browser.get("http://juliemr.github.io/protractor-demo/").then(async function () {
  });
});

When('Enter numbers in {string}, {string}', { timeout: 60 * 1000 }, async function (first, second) {
  await element(by.model('first')).sendKeys(first);
  await element(by.model('second')).sendKeys(second);
});

When('Select the {string}', { timeout: 60 * 1000 }, async function (operator) {
  await element(by.model('operator')).click();
  await element(by.css('option[value="' + operator + '"]')).click();
});

When('Click the Go! button', { timeout: 60 * 1000 }, async function () {
  await element(by.id('gobutton')).click();
});

Then('Expect {string}', { timeout: 60 * 1000 }, async function (expectedResult) {
  await element(by.css('h2.ng-binding')).getText().then(function (actualResult) {
    expect(actualResult).to.equal(expectedResult);
  });
});