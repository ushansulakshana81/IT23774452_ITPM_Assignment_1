const { test, expect } = require('@playwright/test');

async function testTranslation(page, inputText) {
  await page.goto('https://www.swifttranslator.com/');
  
  const inputBox = page.locator('textarea[placeholder="Input Your Singlish Text Here."]');
  await inputBox.fill(inputText);

  await page.waitForFunction(() => {
    return /[ඔ-ෆ][ං-්]/.test(document.body.innerText);
  }, { timeout: 10000 });

  const output = await page.evaluate(() => {
    const match = document.body.innerText.match(/[ඔ-ෆ][ං-්\u0D80-\u0DFF\s]+/);
    return match ? match[0].trim() : '';
  });
  
  expect(output.length).toBeGreaterThan(0);
  return output;
}

test.describe('Positive Conversion Scenarios', () => {

  test('Pos_Fun_0001 - Interrogative', async ({ page }) => {
    await testTranslation(page, 'oyaa harima sathutin innavadha');
  });

  test('Pos_Fun_0002 - Interrogative', async ({ page }) => {
    await testTranslation(page, 'oya kavadhdha enna kiyala hithanne ?');
  });

  test('Pos_Fun_0003 - Interrogative', async ({ page }) => {
    await testTranslation(page, 'me vaeda hariyata venavadha?');
  });

  test('Pos_Fun_0004 - Imperative', async ({ page }) => {
    await testTranslation(page, 'ikmanata enna.');
  });

  test('Pos_Fun_0005 - Imperative', async ({ page }) => {
    await testTranslation(page, 'issarahata poddak yanna');
  });

  test('Pos_Fun_0006 - Imperative', async ({ page }) => {
    await testTranslation(page, 'mata eeka kiyala dhenna.');
  });

  test('Pos_Fun_0007 - Positive', async ({ page }) => {
    await testTranslation(page, 'mama ehema karanavaa.');
  });

  test('Pos_Fun_0008 - Positive', async ({ page }) => {
    await testTranslation(page, 'api heta gedhara yamu.');
  });

  test('Pos_Fun_0009 - Positive', async ({ page }) => {
    await testTranslation(page, 'oyaage kathaava hari saralayi.');
  });

  test('Pos_Fun_0010 - Negative', async ({ page }) => {
    await testTranslation(page, 'mama ehema karanne naee.');
  });

  test('Pos_Fun_0011 - Negative', async ({ page }) => {
    await testTranslation(page, 'api adha enne naee kiyala hithuvaa.');
  });

  test('Pos_Fun_0012 - Request', async ({ page }) => {
    await testTranslation(page, 'oyaata udhavvak oonadha?');
  });

  test('Pos_Fun_0013 - Request', async ({ page }) => {
    await testTranslation(page, 'karuNaakara podi udhavvak karanna puluvandha?');
  });

  test('Pos_Fun_0014 - Daily usage', async ({ page }) => {
    await testTranslation(page, 'mama gedhara inne, passe call karannam.');
  });

  test('Pos_Fun_0015 - Paragraph', async ({ page }) => {
    await testTranslation(page, 'adha udhaesaney mama office yanna kalin podi vaeda godak karanna thibuna. laptop eka on karala emails check karapu gaman, manager kenekgen urgent message ekak aavaa. ehema unaata passe traffic hari amaaruyi kiyala hithuna nisaa, mama gedhara inna gaman Zoom meeting eka join unaa. meeting eka ivara unaata passe, files tika WhatsApp karala yavanna saha heta venakam reports tika hadhala evanna kiyala kiyala thibunaa.');
  });

  test('Pos_Fun_0016 - Response', async ({ page }) => {
    await testTranslation(page, 'hari, mama eeka balannam.');
  });

  test('Pos_Fun_0017 - Mix Lang.', async ({ page }) => {
    await testTranslation(page, 'oyata WiFi connection eka hari dha?');
  });

  test('Pos_Fun_0018 - Mix Lang.', async ({ page }) => {
    await testTranslation(page, 'Zoom meeting eka heta 7.30 AM dha?');
  });

  test('Pos_Fun_0019 - stress test', async ({ page }) => {
    await testTranslation(page, 'mamagedharayanavaa');
  });

  test('Pos_Fun_0020 - Repetition', async ({ page }) => {
    await testTranslation(page, 'hari hari vaeda thamaa vennee');
  });

  test('Pos_Fun_0021 - Tenses', async ({ page }) => {
    await testTranslation(page, 'mama iiye office giyaa, adha gedhara inne.');
  });

  test('Pos_Fun_0022 - Nouns', async ({ page }) => {
    await testTranslation(page, 'oyaala heta Kandy needha yanne?');
  });

  test('Pos_Fun_0023 - Currency', async ({ page }) => {
    await testTranslation(page, 'Rs. 2500 valata items dhekak gaththaa.');
  });

  test('Pos_Fun_0024 - multiple lines', async ({ page }) => {
    await testTranslation(page, 'mama adha gedhara inne.\noyaata passe enna puluvan.');
  });

});

test.describe('Negative Conversion Scenarios', () => {

  test('Neg_Fun_0001 - short forms', async ({ page }) => {
    await testTranslation(page, 'oyata godk amarui da?');
  });

  test('Neg_Fun_0002 - short forms', async ({ page }) => {
    await testTranslation(page, 'ikmnta cll krnna.');
  });

  test('Neg_Fun_0003 - Letters mismatching', async ({ page }) => {
    await testTranslation(page, 'ada traffic tibuna nisa mama office late unaa, ehema unaata passe manager ta message ekak dalaa kiyala thibuna.');
  });

  test('Neg_Fun_0004 - Letters mismatching', async ({ page }) => {
    await testTranslation(page, 'karunakara me document tika balala errors thiyenawanam mata kiyanna, heta meeting eka kalin hadaganna puluwan wenna.');
  });

  test('Neg_Fun_0005 - Letters mismatching', async ({ page }) => {
    await testTranslation(page, 'man kalpana kale ai minissu anik ayawa mechchara kenthi gassawanne kiyala');
  });

  test('Neg_Fun_0006 - Repetition', async ({ page }) => {
    await testTranslation(page, 'hariiiii lassanaiiii');
  });

  test('Neg_Fun_0007 - unsupported characters', async ({ page }) => {
    await testTranslation(page, 'gedhara yannə');
  });

  test('Neg_Fun_0008 - unsupported characters', async ({ page }) => {
    await testTranslation(page, 'kaeema kænna one');
  });

  test('Neg_Fun_0009 - unsupported characters', async ({ page }) => {
    await testTranslation(page, 'oyata #udawwak @karanna onna');
  });

  test('Neg_Fun_0010 - unsupported characters', async ({ page }) => {
    await testTranslation(page, 'hari lassanayi, very good😊');
  });

});
