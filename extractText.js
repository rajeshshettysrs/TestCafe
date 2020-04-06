import { Selector } from 'testcafe'
import Colors from 'colors'

const nameInput=Selector('input#developer-name');
const header=Selector('header h1');
const para=Selector('header p');

fixture `Test Fixture`
    .page `https://devexpress.github.io/testcafe/example/`;
 
test('Extract test', async t=> {
    await t
    .maximizeWindow()
    .typeText(nameInput,'Welcome to GST')
    .wait(2000);

    const nameInputText=await nameInput.value;
    const headerText=await header.innerText;
    const paraText=await para.innerText;

    console.log(nameInputText.red);
    console.log(headerText.green);
    console.log(paraText.rainbow);
   
});    