import { Selector } from 'testcafe';
const txtname= Selector('input#developer-name');
const btnPopulate=Selector('input#populate');

fixture `My Fixture`
    .page `https://devexpress.github.io/testcafe/example/`;

test('My first test', async t => {
    await t
    .maximizeWindow()
    .typeText(txtname,'GST')
    //.typeText(txtname,'Hello GST',{speed:0.1})
    .typeText(txtname,'Hello GST Replace',{replace:true})
    //.wait(1000)
    //.click(btnPopulate)
    .wait(2000);
});