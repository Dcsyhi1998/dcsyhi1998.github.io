# CarCast

CarPlayのホーム画面に、CarPlay非対応のiPhoneアプリを追加できます。

CarCastを使用すると、SafariやYouTubeなどの対応するiPhoneアプリをCarPlayのホーム画面に追加できます。
[English description](https://chariz.com/buy/carcast)

## デモ画像:

<div style="overflow-x:auto;-webkit-overflow-scrolling:touch;scroll-snap-type:x mandatory;display:flex;gap:12px;padding-bottom:8px;">
<img src="https://dcsyhi1998.github.io/icons/CarCast/preview1.png" alt="preview1" style="height:260px;width:auto;max-width:none;flex:0 0 auto;scroll-snap-align:start;border-radius:12px;">
<img src="https://dcsyhi1998.github.io/icons/CarCast/preview2.png" alt="preview2" style="height:260px;width:auto;max-width:none;flex:0 0 auto;scroll-snap-align:start;border-radius:12px;">
<img src="https://dcsyhi1998.github.io/icons/CarCast/preview3.png" alt="preview3" style="height:260px;width:auto;max-width:none;flex:0 0 auto;scroll-snap-align:start;border-radius:12px;">
</div>

## 動作要件

購入前に、以下の内容をご確認ください。

- iOS 17、iOS 18、iOS 26で動作確認済み
- iOS 16以前は非対応
- Rootless脱獄環境が必要
- [Airaw](https://chariz.com/buy/airaw)のインストールが必要
- CarBridgeとの併用は不可

CarCastで追加したアプリをCarPlay上で起動するには、Airawが必要です。

CarCastはアプリをCarPlayのホーム画面に追加し、Airawは各アプリの起動処理の部分を担当しています。

## 主な機能

- インストール済みのiPhoneアプリをCarPlayのホーム画面に追加
- CarCastで追加したアプリを削除
- 追加したアプリの並べ替え
- CarPlay接続中に変更内容を反映

CarCastが管理するのは、CarCastから追加したアプリのみです。マップ、ミュージック、メッセージなど、CarPlayの標準アプリは変更しません。

## 使用方法

1. Airawをインストールして有効にします。
2. 「設定 → CarCast」を開きます。
3. インストール済みアプリを選択し、「＋」ボタンをタップします。
4. CarPlayへ接続するか、CarPlayを再起動します。
5. CarPlayのホーム画面から追加したアプリを起動します。

※アプリはCarPlayに追加されるが、起動しない場合は追加したアプリを一度CarCastの画面から削除をして、再度追加してください。そのあと、SpringBoardを再起動してください。

## 互換性と制限事項

CarCastは、本来CarPlay向けに設計されていないアプリをCarPlay画面に表示します。そのため、アプリによって互換性や動作が異なる場合があります。

アプリによっては、以下の問題が発生する可能性があります。

- 画面レイアウトが正しく表示されない
- タッチ操作が通常と異なる
- アプリがクラッシュする、または起動しない
- DRMで保護された動画が黒い画面になる

Netflix、Prime Video、Disney+などのFairPlayで保護された動画は表示できません。CarCastはDRMの制限を回避はできません。

YouTubeとSafariは、通常のブラウジングや動画再生に使用できますが、一部の保護されたコンテンツは再生できない場合があります。

追加したアプリがCarPlayに表示されない場合は、CarCastの設定画面からCarPlayを再起動してください。改善しない場合は、CarPlayの再接続またはデバイスの再起動をお試しください。

## 動作確認環境

- iOS 17のCarPlay環境(Dopamine,NathanLR)
- iOS 18のCarPlay環境(Dopamine)
- iOS 26のCarPlay環境(Dopamine)
- Rootless脱獄環境

iOS 18での動作確認には、[@ciaowes93](https://x.com/ciaowes93)さんにご協力いただきました。

## 重要事項

CarCastとCarBridgeを同時にインストールしないでください。両方のパッケージは競合するため、正常に動作しなくなる可能性があります。

運転中にアプリを操作しないでください。CarCastを安全に使用し、お住まいの地域の交通法規を守ることは利用者の責任です。

返金依頼については、[Charizの返金ポリシー](https://docs.chariz.com/policies/refund-policy)に従って対応します。

## サポート

問題が発生した場合は、以下の連絡先までお問い合わせください。

- メール：[dcsyhi1998@gmail.com](mailto:dcsyhi1998@gmail.com)
- X：[@linux_n1](https://x.com/linux_n1)

不具合をご報告いただく際は、以下の情報をお知らせください。

- iOSのバージョンとデバイスのモデル
- 使用している脱獄ツールとバージョン
- Airawのバージョン
- 問題が発生するアプリ名またはBundle ID
- アプリを起動した際に発生する問題の詳細
