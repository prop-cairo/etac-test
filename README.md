#リリース手順

##staging github-pages
`gh-pages`のライブラリを使用しているため、
```sh
npm run build
npm run deploy
```
で実行できる。

```sh
npm run build
```
ではdistフォルダにファイルを作成し
```sh
npm run deploy
```
ではdistフォルダの中身を`gh-pages`ブランチにpushする
githubの setting > pages　により`gh-pages`ブランチを参照してページを作成する設定をしている

##production
1.`vite.config.js`の`base`の設定を外す
2.`<BrowserRouter>`のサブディレクトリ設定を外す
3.npm run build
4.npm run preview でURL関連のミス等がないか確認する
5.配置
