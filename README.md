# whats-day

[Wikipedia](https://ja.wikipedia.org/)の情報を元に、今日が何の日か教えてくれます。

## Use

### CLI

```shell
npm i -g whats-day

# 今日がなんの日か
whats-day

# 4月1日がなんの日か
whats-day -d 4-1
```

### API

```js
const WhatsDay = require('whats-day');
const whatsDay = new WhatsDay();

// 今日がなんの日か
whatsDay.search().then((content) => {
    console.log(content);
});

// 4月1日がなんの日か
whatsDay.search('4-1').then((content) => {
    console.log(content);
});
```

## License

[MIT Lisence](https://github.com/kmrk/whats-day/blob/master/LICENSE)
