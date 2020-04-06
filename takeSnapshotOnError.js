import { Selector } from 'testcafe'

const textInputName=Selector('input#developer-name')

fixture `Take screenshot on Error`
    .page `https://devexpress.github.io/testcafe/example/`;

test('Take screeshot on error test', async t => {
    await t
    .maximizeWindow()
    .typeText(textInputName,'Welcome to GST')
    .expect(textInputName.value).eql('Welcome to GST 1')
    .wait(2000)
});