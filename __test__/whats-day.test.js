const WhatsDay = require('../index');
const whatsDay = new WhatsDay();

describe('WhatsDay', () => {
    test('.search()', () => {
        whatsDay.search().then((result) => {
            expect(typeof result === 'string').toBeTruthy();
        });
    });
});
