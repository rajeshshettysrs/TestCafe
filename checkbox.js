import { Selector } from 'testcafe';

const chkbox1=Selector ('input#remote-testing')

fixture `My Fixture`
   .page `https://devexpress.github.io/testcafe/example/`;

test('Test checkbox click', async t => {
    await t
    .maximizeWindow()
    .click(chkbox1)
    .wait(2000)
});