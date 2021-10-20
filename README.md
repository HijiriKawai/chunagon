# chunagon

front end app

| 種類                    | 名前                   |
| ----------------------- | ---------------------- |
| os                      | WSL Ubuntu 20.04.2 LTS |
| パッケージマネージャー  | yarn                   |
| リンター                | eslint                 |
| コードフォーマッタ      | prettier               |
| UI Component 管理ツール | Storybook              |
| jsフレームワーク        | React                  |
| Css in js               | emotion                |
| Cssフレームワーク       | MUI(旧Material-UI)     |

## 実行可能なスクリプト

| コマンド         | 説明                                                          |
| ---------------- | ------------------------------------------------------------- |
| start            | <http://localhost:3000> で開発モードで起動                    |
| build            | アプリをビルド                                                |
| test             | テストを実行                                                  |
| lint             | linterを実行                                                  |
| fix              | lintで出たエラーを自動修正                                    |
| storybook        | <http://localhost:6006> でstorybookを起動                     |
| build-storybook  | storybookをビルド                                             |
| deploy-storybook | <https://hijirikawai.github.io/chunagon/>にsorybookをデプロイ |

## 作成上での注意点

- 外部APIとの通信はpagesディレクトリ内のコンポーネントで行うこと
