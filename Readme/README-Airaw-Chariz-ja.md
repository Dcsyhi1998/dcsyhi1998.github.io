# Airaw

CarPlayのホーム画面やステータスバーなど外見をカスタマイズできるTweakになります。
iOS14からiOS26までサポートをしています。

[English description](https://chariz.com/buy/airaw)

## デモ画像:

<div style="overflow-x:auto;-webkit-overflow-scrolling:touch;scroll-snap-type:x mandatory;display:flex;gap:12px;padding-bottom:8px;">
<img src="https://dcsyhi1998.github.io/icons/Airaw/preview1.png" alt="preview1" style="height:260px;width:auto;max-width:none;flex:0 0 auto;scroll-snap-align:start;border-radius:12px;">
<img src="https://dcsyhi1998.github.io/icons/Airaw/preview2.png" alt="preview2" style="height:260px;width:auto;max-width:none;flex:0 0 auto;scroll-snap-align:start;border-radius:12px;">
<img src="https://dcsyhi1998.github.io/icons/Airaw/preview3.png" alt="preview3" style="height:260px;width:auto;max-width:none;flex:0 0 auto;scroll-snap-align:start;border-radius:12px;">
</div>

## 動作要件

購入前に、以下の内容をご確認ください。

- iOS 14.0以降が必要
- Hosted SceneとSplit ViewはiOS 16以降が必要
- 脱獄環境が必要
- CarCastとCarBridgeは同時にインストールできません

ホーム画面のレイアウト、壁紙、ステータスバー、ウィジェットなどのカスタマイズには、Airawを単体で使用できます。

CarPlay非対応アプリをホーム画面へ追加する場合のみ、CarCastまたはCarBridgeが必要です。

## 主な機能

### ホーム画面のレイアウト

CarPlayホーム画面の外観を変更できます。

- 行数を2～4、列数を4～6の範囲で設定
- アイコンのサイズ、間隔、表示位置を調整
- アプリ名、ラベル背景、ページインジケーターを非表示
- ラベルの文字サイズと色を変更
- アイコンバッジの色を変更
- 透明なプレースホルダーアイコンを作成
- 対応する設定をアプリごとに変更

### アプリの起動

Airawでは、対応するiPhoneアプリを複数の方法でCarPlayに表示できます。

- Airaw Host(iPhoneスケール計算を元に出力)
- iOS 16以降のHosted Scene
- CarBridgeがインストールされている場合のCarBridge フルスクリーンモード
- フルスクリーン用のオーバーレイ操作
- アプリごとの表示スケールとノッチ設定
- コンテキストメニューとお気に入りアプリ

CarPlay向けに設計されていないアプリは、通常のCarPlayアプリとは表示や動作が異なる場合があります。互換性はアプリによって異なり、DRMで保護された動画は表示できない場合があります。

### 壁紙

CarPlayの背景を以下の方法でカスタマイズできます。

- 静止画像
- スライドショー
- アニメーションGIF
- 画面に合わせた表示または標準スケール
- CarPlay接続中の壁紙更新

### ステータスバー

CarPlay標準のステータスバーを置き換えるか、非表示にできます。

以下の項目を設定できます。

- 日付と時刻の形式
- 秒表示と言語・地域設定
- 上、下、左、右の表示位置
- 左ハンドルまたは右ハンドル向けのレイアウト
- 天気アイコンと気温
- バッテリー情報
- 各項目の表示色
- SF Symbolsまたは写真を使用したホームボタン画像

### ウィジェット

対応するウィジェットをCarPlayのホーム画面に配置し、サイズや位置を調整できます。

Airawは、以下の2種類のウィジェット形式に対応しています。

- モジュールウィジェット（`.bundle`）はiOS 14以降に対応
- HTMLウィジェットはiOS 14とiOS 15に対応

iOS 16以降でも設定画面からHTMLウィジェットを追加できますが、現在はCarPlay上で正常に動作しません。iOS 16以降では、モジュールウィジェットを使用してください。

開発者向けの情報は、[Airaw APIドキュメント](https://dcsyhi1998.github.io/airawapi)で確認できます。

### その他の機能

Airawには、以下の機能も含まれています。

- 設定のバックアップと復元
- コントロールセンターモジュール
- CarPlay起動時のスプラッシュ画面を非表示
- キーパッドロックの回避
- マップのダークモード設定
- CarPlay画面の黒い角を非表示
- 初回起動時のセットアップ
- 設定画面内の変更履歴
- 日本語、英語、その他の収録言語に対応

## オプションの関連製品

以下の製品は有料の追加オプションであり、別売りです。

- [CarCast](https://chariz.com/buy/carcast)：CarPlay非対応アプリをCarPlayのホーム画面へ追加
- [Airaw Split Native](https://chariz.com/buy/airaw-native)：CarPlay対応アプリ向けのスプリットビューを追加
- [Airaw Split Standard](https://chariz.com/buy/airaw-standard)：対応するCarPlay非対応アプリ向けのスプリットビューを追加

以下の製品は無料のアドオンです。

- [Cylinder CarPlay](https://dcsyhi1998.github.io/depiction/CylinderCarPlay.html)：CarPlayホーム画面にページ切り替えエフェクトを追加
- [CarGlyph](https://dcsyhi1998.github.io/depiction/CarGlyph.html)：CarPlayアプリアイコンのテーマを変更
- [CarScrub](https://dcsyhi1998.github.io/depiction/CarScrub.html): CarPlay の再生バーを、ドラッグしてシークできるようにします。

Airaw Split NativeとAiraw Split Standardを使用するには、Airaw 1.7.0以降とiOS 16以降が必要です。

## 互換性

- 対応OS：iOS 14～iOS 26
- Hosted Scene：iOS 16以降
- Split Viewアドオン：iOS 16以降
- モジュールウィジェット：iOS 14以降
- HTMLウィジェット：iOS 14、iOS 15
- アーキテクチャ：arm64、arm64e
- 脱獄環境：Rootful、Rootless
- 必須パッケージ：ElleKitまたはSubstrate、PreferenceLoader、Cephei、CCSupport

対応するiOSバージョンにおいて、checkra1n、unc0ver、palera1n、Dopamineなどの脱獄環境で動作確認を行っています。

## 重要事項

Airawは非公式のCarPlay拡張機能です。利用できる機能やレイアウトは、iOSのバージョン、脱獄環境、アプリ、車両、CarPlayディスプレイによって異なる場合があります。

CarPlay向けに設計されていないアプリは、起動しない、画面レイアウトが崩れる、またはタッチ操作が通常と異なる場合があります。

運転中にアプリを操作しないでください。Airawを安全に使用し、お住まいの地域の交通法規を守ることは利用者の責任です。

返金依頼については、[Charizの返金ポリシー](https://docs.chariz.com/policies/refund-policy)に従って対応します。

## レビュー

- [iDownloadBlogによるレビュー](https://www.idownloadblog.com/2021/06/11/airaw/)
- [ONE Jailbreakによるレビュー](https://onejailbreak.com/blog/airaw-tweak/)

## サポート

問題が発生した場合は、以下の連絡先までお問い合わせください。

- メール：[dcsyhi1998@gmail.com](mailto:dcsyhi1998@gmail.com)
- X：[@linux_n1](https://x.com/linux_n1)

不具合をご報告いただく際は、以下の情報をお知らせください。

- iOSのバージョンとデバイスのモデル
- 使用している脱獄ツールとRootfulまたはRootlessのどちらであるか
- Airawのバージョン
- CarCastまたはCarBridgeがインストールされているか
- 特定のアプリで問題が発生する場合は、アプリ名とBundle ID
- 問題の発生手順
