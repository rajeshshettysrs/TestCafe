import { Selector } from 'testcafe';

const txtName=Selector ('input#developer-name')

fixture `My Fixture`
   .page `https://devexpress.github.io/testcafe/example/`;

test('Test checkbox click', async t => {
    await t
    .maximizeWindow()
    .typeText(txtName,'Welcome to GST')
    .selectText(txtName,6,0)
    .wait(2000)
});