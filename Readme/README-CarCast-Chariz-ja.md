# **CarCast**

## _好きな iPhone アプリを CarPlay のホーム画面に追加_

**CarCast** は、**CarPlay 非対応**のアプリを **iOS 17**、**iOS 18**、および **iOS 26** の **CarPlay ダッシュボード**に追加できる Tweak です。

**設定 → CarCast** から Safari や YouTube、設定アプリなどを選び、CarPlay に接続すれば、純正アプリと同じようにホーム画面から起動できます。

> **動作確認は iOS 17、iOS 18、iOS 26 です。** パッケージの最低依存は **iOS 17.0** です。**iOS 16 以前は非対応**です。動かなくても **購入者の責任**であり、**返金対象外**です。購入前に **設定 → 一般 → 情報** で OS バージョンを確認してください。

> **[Airaw](https://chariz.com/buy/airaw) が必要です。** 起動方法（Airaw ホスト、ホストシーン）、3D Touch メニュー、お気に入りなどの個別設定は Airaw 側で行います。

> **CarBridge と同時にインストールしないでください。** CarCast は `com.leftyfl1p.carbridge13` と **競合**します。**CarCast** か **CarBridge** のどちらか一方だけを使ってください。

## デモ画像:

<div style="overflow-x:auto;-webkit-overflow-scrolling:touch;scroll-snap-type:x mandatory;display:flex;gap:12px;padding-bottom:8px;">
<img src="https://dcsyhi1998.github.io/icons/CarCast/preview1.png" alt="preview1" style="height:260px;width:auto;max-width:none;flex:0 0 auto;scroll-snap-align:start;border-radius:12px;">
<img src="https://dcsyhi1998.github.io/icons/CarCast/preview2.png" alt="preview2" style="height:260px;width:auto;max-width:none;flex:0 0 auto;scroll-snap-align:start;border-radius:12px;">
<img src="https://dcsyhi1998.github.io/icons/CarCast/preview3.png" alt="preview3" style="height:260px;width:auto;max-width:none;flex:0 0 auto;scroll-snap-align:start;border-radius:12px;">
</div>

---

## **💰 開発支援**

**CarCast** を気に入っていただけたら、[PayPal](https://www.paypal.me/DevDcsyhi) からの寄付を歓迎しています。

X のフォローもとても励みになります。

👉 **X:** [@linux_n1](https://x.com/linux_n1)

---

## **🙏 スペシャルサンクス**

**iOS 18** の動作確認にご協力いただいた [@ciaowes93](https://x.com/ciaowes93) に心より感謝します。皆さんのフィードバックが、正式対応につながりました。

---

## **📌 機能**

### **📲 CarPlay にアプリを追加**

- **設定 → CarCast** を開く
- iPhone にインストール済みのアプリ一覧から選択
- **＋** をタップして CarPlay ダッシュボードに追加
- **−** で CarCast 経由で追加したアプリを削除
- リストをドラッグして並べ替え
- 追加・削除は CarPlay 接続中にすぐ反映されます
- 反映されないときは、歯車メニューの **CarPlay を再起動** を試す

### **🛡️ 純正アプリはそのまま**

- CarCast が管理するのは **あなたが追加したアプリだけ**
- Maps や Music、メッセージなど、もともと CarPlay 対応のアプリは **変更しません**
- 純正 CarPlay アプリのレイアウトはそのまま維持されます

### **🔗 Airaw と連携**

**Airaw** を入れていると、CarCast で追加した各アプリを個別に調整できます。

- **アプリの起動方法** — Airaw ホスト、またはホストシーン（CarCast 利用時は CarBridge 向けの起動オプションは表示されません）
- **3D Touch メニュー** — CarPlay ホーム画面を長押しして Airaw Options を表示
- **お気に入りアプリ** — コンテキストメニューから素早く起動
- **アプリごとの設定** — ノッチ処理、スケール、FLEX など

CarCast がダッシュボードにアプリを載せ、**Airaw** が起動方法や挙動を担当します。

### **📋 初回起動時の案内**

- ウェルカム画面（使い方の説明）
- 利用規約（EULA）への同意
- DRM に関する注意（FairPlay で保護された動画配信アプリ）

---

## **❓ よくある質問**

**Q. Airaw は必要ですか？**
A. **はい。** CarCast はアプリのホストや個別設定のために `jp.dcsyhi.airaw` に依存しています。

**Q. iOS 17 / iOS 18 / iOS 26 で使えますか？**
A. **はい。** **iOS 17**、**iOS 18**、**iOS 26** は動作確認済みです。パッケージの最低依存は **iOS 17.0** です。

**Q. iOS 16 以前で使えますか？**
A. **使えません。** iOS 16 以下は **非対応**です。パッケージも iOS 17 未満には入りません。それらのバージョンでの購入は **返金対象外**です。

**Q. CarBridge と CarCast を一緒に使えますか？**
A. **いいえ。** 競合します。CarCast は **iOS 17 以降**向けの CarBridge 代替です。どちらか一方だけをインストールしてください。

**Q. どんなアプリを追加できますか？**
A. 非表示でない、一般的なユーザーインストールアプリの多くが対象です。CarCast が不適切な項目を自動で除外します。Netflix、Prime Video、Disney+ など **DRM で保護された動画**は、プレイヤー UI は出ても **映像が黒いまま** になることがあります。これは CarCast の不具合ではなく、プラットフォームの制限です。

**Q. YouTube や Safari は使えますか？**
A. はい。通常のブラウジングや再生は問題ないことが多いです。DRM 制限のあるコンテンツが主な例外です。

**Q. アプリを追加したのに CarPlay に表示されません。**
A. CarCast 設定の **CarPlay を再起動** を試し、CarPlay の接続を切り替えるか、必要ならリスプリングしてください。

**Q. アプリごとの起動設定はどこですか？**
A. **Airaw → Apps**（CarCast または CarBridge インストール時に表示）から、各アプリをタップして詳細画面を開きます。

**Q. 確認済み以外の iOS で買ったら動きませんでした。返金できますか？**
A. **iOS 16 以前**は非対応です。それらの環境で動かない購入は、インストールできても **返金ポリシーの対象外**です。**iOS 17**、**iOS 18**、**iOS 26** は動作確認済みです。

**Q. 設定画面は英語ですか？**
A. 端末の言語設定に合わせて表示されます。**英語**と**日本語**に対応しています。

---

## **📱 互換性**

|                      |                                             |
| -------------------- | ------------------------------------------- |
| **動作確認**         | **iOS 17**、**iOS 18**、**iOS 26**          |
| **最低依存（パッケージ）** | iOS 17.0                              |
| **非対応**           | iOS 16 以前                                 |
| **アーキテクチャ**   | arm64e（rootless）                          |
| **必須**             | Airaw、ElleKit/substrate、PreferenceLoader  |
| **競合**             | CarBridge                                   |

### **動作確認環境**

- **iOS 17** CarPlay（作者がテスト）
- **iOS 18** CarPlay（[@ciaowes93](https://x.com/ciaowes93) のご協力により確認）
- **iOS 26** CarPlay（作者がテスト）
- rootless ジェイルブレイク（Dopamine など）
- **Airaw** と併用してアプリをホスト

---

## **⚠️ 注意事項**

- **購入前に必ず iOS バージョンを確認してください。** 作者が動作確認したのは **iOS 17**、**iOS 18**、**iOS 26** です。
- **iOS 16 以前**は **非対応**です。確認済み環境以外での購入は **購入者の責任**です。動かなくても返金は受け付けず、その構成へのサポートも保証しません。
- CarCast は **非公式** の拡張機能です。運転中の安全な利用は利用者自身の責任で行ってください。
- CarPlay 非対応アプリは、クラッシュしたり、起動しない、挙動が不安定になることがあります。想定内の動作です。
- FairPlay などの動画 DRM を回避することはできません。
- CarCast と CarBridge を両方入れると、どちらかが正常に動かなくなる可能性があります。ブリッジ系 Tweak は **1 つだけ** にしてください。

---

## **💰 返金ポリシー**

- 購入から **24 時間以内** で、正当な理由がある場合に返金を受け付けます。
- **対象外:** **iOS 16 以前**（非対応）での購入。パッケージが入っても CarPlay で動かない場合も含みます。自己責任での購入であり、製品の欠陥ではありません。
- 暴言やハラスメントを含む不適切な要求はお断りします。
- クラッシュや不具合の報告には、再現手順と iOS / ジェイルブレイク環境を含めてください。

---

## **📩 フィードバック・不具合報告**

📧 **メール:** dcsyhi1998@gmail.com
🐦 **X:** [@linux_n1](https://x.com/linux_n1)

報告の際は、以下があると助かります。

- iOS バージョンと機種
- ジェイルブレイク環境（rootless / rootful）
- Airaw の有無とバージョン
- 問題のあるアプリの Bundle ID（例: `com.google.ios.youtube`）
- 同一端末に CarBridge を入れたことがあるか
