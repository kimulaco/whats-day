const request = require('request');

/**
 * getObjectFirstKey
 * @param {Object} obj
 * @returns {String}
 */
function getObjectFirstKey(obj) {
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            return key;
        }
    }

    return '';
}

/**
 * WhatsDay
 * @constructor
 * @param {Object} config
 */
class WhatsDay {
    constructor(config) {
        this.config = Object.assign({
            lang: 'ja'
        }, config || {});
        this.apiUrl = `https://${this.config.lang}.wikipedia.org/w/api.php?format=json&utf8&action=query&prop=revisions&rvprop=content`;
    }

    /**
     * search
     * @param {String} date
     * @returns {Promise}
     */
    search(date) {
        return new Promise((resolve, reject) => {
            try {
                const now = new Date(date);
                const title = `${now.getMonth() + 1}月${now.getDate()}日`;
                const url = `${this.apiUrl}&titles=${encodeURIComponent(title)}`;

                request(url, (error, response, body) => {
                    if (error) {
                        throw error;
                    }

                    const pages = JSON.parse(body).query.pages;
                    const revisions = pages[getObjectFirstKey(pages)].revisions;

                    if (!revisions || revisions.length <= 0) {
                        resolve('Nothing special.');
                    } else {
                        resolve(revisions[0]['*']);
                    }
                });
            } catch (error) {
                reject(error);
            }
        });
    }
}

module.exports = WhatsDay;
