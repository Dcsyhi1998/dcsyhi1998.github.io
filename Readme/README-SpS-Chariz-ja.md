# Airaw Split Standard

CarPlay非対応アプリをスプリットビューで表示するためのAirawアドオンです。
Airaw Split Standardを使用すると、CarCastまたはCarBridgeから追加したアプリをスプリットビューで表示できます。

## デモ画像:

<div style="overflow-x:auto;-webkit-overflow-scrolling:touch;scroll-snap-type:x mandatory;display:flex;gap:12px;padding-bottom:8px;">
    <img src="https://dcsyhi1998.github.io/icons/SpStandard/preview1.png" alt="preview1" style="height:260px;width:auto;max-width:none;flex:0 0 auto;scroll-snap-align:start;border-radius:12px;">
    <img src="https://dcsyhi1998.github.io/icons/SpStandard/preview2.png" alt="preview2" style="height:260px;width:auto;max-width:none;flex:0 0 auto;scroll-snap-align:start;border-radius:12px;">
</div>

## 動作要件

購入前に、以下の内容をご確認ください。

- iOS 16.0以降が必要
- iOS 14およびiOS 15は非対応
- [Airaw](https://chariz.com/buy/airaw) 1.7.0以降が必要
- CarCastまたはCarBridgeが必要
- Rootless脱獄環境が必要
- Airaw Split Standardは単体では動作しません

対象アプリをAiraw Split Standardに表示するには、CarCastまたはCarBridgeのどちらかをインストールしてCarPlayにアプリを追加してから設定をしてください。

本製品はAiraw用のアドオンです。設定アプリのトップ画面に、Airaw Split Standardの個別項目は表示されません。

設定は「設定 → Airaw → スプリットビュー（Standard）」から開きます。

## 主な機能

- CarPlay非対応アプリをスプリットビューで表示
- CarCastまたはCarBridgeから追加したアプリに対応
- アプリごとにスプリットビューの有効・無効を設定
- スプリットビューの初期比率を調整
- アプリごとに選択した比率を記憶できる設定があります。

## 使用方法

1. CarCastまたはCarBridgeのどちらかをインストールします。
2. 使用するブリッジ機能から、スプリットビューで使用したいアプリを追加または有効にします。
3. Airaw Split Standardをインストールします。
4. 「設定 → Airaw」を開きます。
5. 「スプリットビュー（Standard）」を選択します。
6. スプリットビューで使用するアプリを有効にします。

一覧にアプリが表示されない場合は、CarCastまたはCarBridgeから対象アプリが追加されていることを確認し、Airaw Split Standardの設定画面を開き直してください。

## Airaw Split Nativeとの違い

Airaw Split Standardは、CarCastまたはCarBridgeから追加したCarPlay非対応アプリをスプリットビューで使用するためのアドオンです。

マップやミュージックなどのCarPlay対応アプリをスプリットビューで使用する場合は、Airaw Split Nativeが必要です。

StandardとNativeは別々のアドオンです。使用したいアプリの種類に応じて選択してください。

## 互換性と制限事項

- 対応OS：iOS 16.0以降
- 非対応OS：iOS 14、iOS 15
- 必須パッケージ：Airaw 1.7.0以降
- 追加要件：CarCastまたはCarBridge
- 対応環境：Rootless脱獄環境
- アーキテクチャ：arm64 arm64e
- 設定場所：Airaw → スプリットビュー（Standard）

Airaw Split Standardの動作は、AirawのCarPlay実行機能に依存します。Airawも最新バージョンへ更新してください。

Airaw Split Standardで使用するアプリは、本来CarPlay向けに設計されていません。そのため、アプリによって互換性や動作が異なる場合があります。

アプリによっては、以下の問題が発生する可能性があります。

- 画面レイアウトが正しく表示されない
- タッチ操作が通常と異なる
- アプリがクラッシュする、または起動しない
- DRMで保護された動画が黒い画面になる

## 重要事項

購入前に、「設定 → 一般 → 情報」からiOSのバージョンをご確認ください。本製品はiOS 16.0以降専用です。

CarCastとCarBridgeを同じデバイスへ同時にインストールしないでください。両方のパッケージは競合するため、アプリが正常に動作しなくなる可能性があります。

本製品は非公式のCarPlay拡張機能です。運転中にアプリを操作せず、お住まいの地域の交通法規に従って安全に使用してください。

返金依頼については、[Charizの返金ポリシー](https://docs.chariz.com/policies/refund-policy)に従って対応します。

## サポート

問題が発生した場合は、以下の連絡先までお問い合わせください。

- メール：[dcsyhi1998@gmail.com](mailto:dcsyhi1998@gmail.com)
- X：[@linux_n1](https://x.com/linux_n1)

不具合をご報告いただく際は、以下の情報をお知らせください。

- iOSのバージョンとデバイスのモデル
- 使用している脱獄ツールとバージョン
- Airawのバージョン
- Airaw Split Standardのバージョン
- CarCastまたはCarBridgeのどちらを使用しているか
- 問題が発生するアプリの名前またはBundle ID
- 問題の発生手順と具体的な症状
