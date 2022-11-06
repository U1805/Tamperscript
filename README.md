# 🐒Tamperscript
some Tampermonkey scripts for myself


## 🙈眼不见为净

> 根据关键词屏蔽 Bilibili 评论

传送门：[🚪点击安装](https://greasyfork.org/zh-CN/scripts/454367-%E7%9C%BC%E4%B8%8D%E8%A7%81%E4%B8%BA%E5%87%80) [📃Source](./ReplyBanner.js)


![效果图](./ReplyBanner.png)

代码参考：[B站成分检测器](https://scriptcat.org/scripts/code/606/B%E7%AB%99%E6%88%90%E5%88%86%E6%A3%80%E6%B5%8B%E5%99%A8.user.js)

<small>（个人仅用于屏蔽抽象低能玩烂梗复读魔怔乐子人鼠语，不针对贴吧流行语🙏）</small>

TODO

- [ ] 正则表达式屏蔽
- [ ] 添加 toggle，方便屏蔽词增删改查
- [ ] 白名单机制（？具体还没想好）

## 🚝首页排行榜

> 在首页添加「排行榜」分区，数据取自[Bilibili排行榜](https://www.bilibili.com/v/popular/rank/all) [API](https://api.bilibili.com/x/web-interface/ranking/v2?rid=0&type=all)
>
> ❗注：不适配「旧版」和当前「内测」界面 2022.10.30

传送门 [🚪点击安装](https://greasyfork.org/zh-CN/scripts/454368-%E9%A6%96%E9%A1%B5%E6%8E%92%E8%A1%8C%E6%A6%9C) [📃Source](./TopList.js)

![效果图](./TopList.png)

TODO

- [ ] 修复右侧排行榜 Thumbnail

## 版权说明

该项目签署了MIT 授权许可，详情请参阅[LICENSE.md](./LICENSE)