# **Airaw**

## _CarPlay をカスタマイズ_

**Airaw** は **iOS 14 から iOS 26** の CarPlay に、レイアウト・壁紙・ステータスバー・ウィジェット・フルスクリーン起動などの拡張を追加する Tweak です。

純正 CarPlay のアイコングリッドは小さめです。Airaw で格子を変え、**CarCast** または **CarBridge** と組み合わせれば、非対応アプリもホームに載せられます。

レビュー:

- [iDownloadBlog](https://www.idownloadblog.com/2021/06/11/airaw/)
- [ONE jailbreak](https://onejailbreak.com/blog/airaw-tweak/)

> **iOS 14.0 以降が必要です。** Split View アドオンと Hosted Scene は **iOS 16 以降**です。購入前に **設定 → 一般 → 情報** で OS バージョンを確認してください。

> **CarCast と CarBridge は同時に入れないでください。** どちらか一方だけを使います。Airaw はどちらとも組み合わせられます。

## デモ画像:

<div style="overflow-x:auto;-webkit-overflow-scrolling:touch;scroll-snap-type:x mandatory;display:flex;gap:12px;padding-bottom:8px;">
<img src="https://dcsyhi1998.github.io/icons/Airaw/preview1.png" alt="preview1" style="height:260px;width:auto;max-width:none;flex:0 0 auto;scroll-snap-align:start;border-radius:12px;">
<img src="https://dcsyhi1998.github.io/icons/Airaw/preview2.png" alt="preview2" style="height:260px;width:auto;max-width:none;flex:0 0 auto;scroll-snap-align:start;border-radius:12px;">
<img src="https://dcsyhi1998.github.io/icons/Airaw/preview3.png" alt="preview3" style="height:260px;width:auto;max-width:none;flex:0 0 auto;scroll-snap-align:start;border-radius:12px;">
</div>

---

## **💰 開発支援**

**Airaw** を気に入っていただけたら、[PayPal](https://www.paypal.me/DevDcsyhi) からの寄付を歓迎しています。

X のフォローもとても励みになります。

👉 **X:** [@linux_n1](https://x.com/linux_n1)

---

## **📦 関連 Tweak**

Airaw が本体です。アプリ追加・Split View・見た目は別パッケージです。

- **[CarCast](https://chariz.com/buy/carcast)** — **純正非対応**アプリをダッシュボードに追加。動作確認は iOS 17 と iOS 26。CarBridge の代替。
- **[Airaw Split Native](https://chariz.com/buy/airaw-native)** — **純正** CarPlay アプリ向け Split View。**iOS 16+。** 有料アドオン。Airaw 1.7.0 以降が必要。
- **[Airaw Split Standard](https://chariz.com/buy/airaw-standard)** — **Airaw / CarCast / Hosted Scene** 向け Split View。**iOS 16+。** 有料アドオン。Airaw 1.7.0 以降が必要。
- **[Cylinder CarPlay](https://dcsyhi1998.github.io/depiction/CylinderCarPlay.html)** — CarPlay ホームのページめくり演出。
- **[CarGlyph](https://dcsyhi1998.github.io/depiction/CarGlyph.html)** — CarPlay アイコンのテーマ。
- **[CarScrub](https://dcsyhi1998.github.io/depiction/CarScrub.html)** — CarPlay の再生バーをスクラブ可能に。設定画面なし。

すでに **CarBridge** を使っている場合も Airaw と併用できます。**CarCast と同時には入れないでください。**

---

## **📌 機能**

### **🔹 アイコンレイアウト**

- 行数（2–4）と列数（4–6）
- アイコンサイズ、余白、ダッシュボードのオフセット
- ラベル・ラベル背景・ページドットの非表示
- ラベル色とフォントサイズ
- バッジ色
- 透明プレースホルダーアイコンを生成し、CarBridge または CarCast で追加
- アプリごとの設定（ノッチ、スケール、FLEX、3D Touch、お気に入り）

### **📲 アプリと起動**

- 起動方法: **Airaw ホスト**、**Hosted Scene**（iOS 16+）、または CarBridge 導入時はその経路
- CarPlay 上のフルスクリーンボタンとホストメニュー
- Notch Disable / Notch Disable (2)
- CarCast アプリは Airaw の **Apps** で管理します

### **🪟 Split View（アドオン、iOS 16+）**

- **Split Native** — 純正 CarPlay アプリを並べて表示
- **Split Standard** — Airaw / CarCast / Hosted Scene アプリ向け
- Airaw 内の **Split Shared** — ピン留めアプリやキーボードなど、両方のアドオンに共通する設定
- Native と Standard は **別購入**です

### **🎨 壁紙**

- 静止画またはスライドショー
- カスタム壁紙（GIF 対応）
- フィット / デフォルト
- CarPlay 接続中の壁紙更新

### **📊 ステータスバー**

- カスタムステータスバー、または純正の非表示
- 日付・時刻の形式、秒表示、ロケール
- 位置: 上 / 下 / 左 / 右
- 初回セットアップで運転席（左ハンドル / 右ハンドル）を選択
- 天気アイコンと気温
- バッテリーアイコン（Bluetooth 接続時は非表示も可）
- 時刻・キャリア・Wi-Fi・LTE・集中モード・バッテリー・背景・ホームボタンの色
- ホームボタン画像（SF Symbol または写真）

### **📦 ウィジェット**

- CarPlay ホームに配置。サイズ・位置、プレビューは CarPlay の縦横比に合わせます
- カード型ピッカー: タップで配置、**＋** で追加
- Airaw API のソース選択（音楽、バッテリー、システム、天気、CarPlay、ステータスバー）

**HTML とモジュール — 実際に動くもの**

- **モジュール形式**（`.bundle` / Controls）は **iOS 14 から iOS 26** まで使えます。どの対応バージョンでもこちらが使えます。
- **HTML ウィジェット**（SBHTML / iWidgets / Universal）は **iOS 14 / 15** で使えます。
- **iOS 16 以降:** Settings から HTML パックを _追加すること自体は_ できますが、CarPlay 上では **正常に動作しません。** 現時点では HTML の導入はできていないと考え、**モジュール** を使ってください。

### **⚒️ その他**

- バックアップ / 復元
- コントロールセンターモジュール
- スプラッシュ画面の削除
- キーパッド制限の解除
- Maps のダークモード
- CarPlay ウィンドウの黒い角丸を削除
- ウェルカム後のセットアップ: 運転席、ステータスバー位置、Enable Airaw
- 設定内の変更履歴

### **🖥️ フルスクリーンのデモ**

- Airaw ホスト: [DEMO][15]
- Airaw（Notch Disable）: [DEMO][16]
- CarBridge フルスクリーン: [DEMO][14]

---

## **🔨 開発者向け Airaw API**

Airaw API で CarPlay ウィジェットを作れます。**モジュール**（`.bundle`）は **iOS 14 以降** で動きます。**HTML** は **iOS 14–15** で動きます。iOS 16 以降では HTML を追加できても、正常には動きません。

詳細: [Airaw API](https://dcsyhi1998.github.io/airawapi)

質問: [X の DM][1]

---

## **❓ よくある質問**

**Q. CarCast や CarBridge は必須ですか？**
A. **純正非対応**アプリをダッシュボードに載せたいときだけです。レイアウト・壁紙・ステータスバー・ウィジェットは単体で使えます。アプリを足す場合は **CarCast か CarBridge のどちらか一方**にしてください。

**Q. Split Native と Split Standard の違いは？**
A. **Native** は純正 CarPlay アプリ向けです。**Standard** は Airaw / CarCast / Hosted Scene 経由のアプリ向けです。どちらも **iOS 16+** と Airaw **1.7.0+** が必要です。

**Q. Hosted Scene は iOS 15 で使えますか？**
A. **使えません。** Hosted Scene と Split View は **iOS 16 以降**です。iOS 15 以下では設定項目自体を出しません。

**Q. iOS 26 で動きますか？**
A. **はい。** Airaw 1.7.0 で iOS 26 の CarPlay に対応しています。

**Q. 天気アイコンがおかしいです。**
A. この [投稿][6] を見てください。

**Q. アプリがフルスクリーンになりません。**
A. iOS 14 は [こちら][5]、iOS 15–16 は [こちら][10]。あわせて Overlay と **Apps** の起動方法を確認してください。

**Q. iOS 16 で HTML ウィジェットは使えますか？**
A. ファイルの追加はできますが、**正常には動きません。** iOS 16 以降では HTML は **未導入** と考えてください。**モジュール形式** を使ってください。モジュールは **iOS 14 以降**（16 も含む）で動きます。HTML が問題なく使えるのは **iOS 14 と 15** です。

**Q. ウィジェットはどこから入手しますか？**
A. 各作者のリポジトリからです。**モジュール**（`.bundle`）パックは対応しているすべての iOS で使えます。HTML パックは **iOS 14–15** 向けです。

**Q. ウィジェットはどう作りますか？**
A. **モジュール**（`.bundle`）は **iOS 14 以降** で使えます。**HTML** と Airaw API は **iOS 14–15** です。iOS 16 以降では HTML パックはまだ使える経路ではありません。

**Q. ウィジェットを手動で追加するには？**
A. Filza で次の場所に置きます。

**モジュール（iOS 14 以降）:**

- `/Library/Airaw/Widgets/Controls/` → `Name.bundle`

**HTML（iOS 14–15）:**

- `/var/mobile/Library/SBHTML/` → `Wallpaper.html`
- `/var/mobile/Library/iWidgets/` → `Widget.html`
- `/var/mobile/Library/Widgets/Universal/` → `index.html`

**Q. 設定画面は英語ですか？**
A. 端末の言語に合わせます。**英語**と**日本語**（ほか同梱翻訳）に対応しています。

---

## **📱 互換性**

|                               |                                                            |
| ----------------------------- | ---------------------------------------------------------- |
| **最低依存**                  | iOS 14.0                                                   |
| **現行**                      | 1.7.0                                                      |
| **アーキテクチャ**            | arm64 & arm64e（rootless / rootful）                       |
| **Split View / Hosted Scene** | iOS 16+                                                    |
| **HTML ウィジェット**         | iOS 14–15（iOS 16 以降は非動作）                           |
| **モジュールウィジェット**    | iOS 14+                                                    |
| **必須**                      | ElleKit/substrate、PreferenceLoader、Cephei、CCSupport     |
| **任意**                      | CarCast **または** CarBridge、Split Native、Split Standard |

### **動作確認**

- iPhone 6s、iOS 14.7.1（checkra1n、rootful）
- iPhone Xs Max、iOS 14.4（unc0ver、rootful）
- iPhone Xs、iOS 15.0.1（Dopamine、rootless）
- iPhone 7、iOS 15.7.5（palera1n、rootless）
- iPhone 14 Pro Max、iOS 16.0.2（Dopamine、rootless）
- iPhone SE, iOS 17.1.2 CarPlay (Dopamine, rootless)
- iPhone 11 Pro Max, iOS 26.0.1 CarPlay (Dopamine, rootless)
- CarBridge および CarCast（同時使用は不可）

---

## **🙏 Special Thanks**

アイコンとバナー: [Ouni’s Designs](https://twitter.com/OuniDesigns)

---

## **⚠️ 注意**

- お住まいの地域で PayPal が使えない場合は、別の支払い方法についてご連絡ください。

---

## **💰 返金ポリシー**

- 購入から **24 時間以内** で、正当な理由がある場合に返金を受け付けます。
- 暴言やハラスメントを含む要求はお断りします。
- クラッシュや不具合の報告には、再現手順と iOS / ジェイルブレイク環境を含めてください。

---

## **📩 フィードバック・不具合報告**

📧 **メール:** dcsyhi1998@gmail.com  
🐦 **X:** [@linux_n1][1]  
🐞 **GitHub:** [Airaw issues](https://github.com/Dcsyhi1998/Airaw-Translations/issues)

報告時にあると助かります。

- iOS バージョンと機種
- ジェイルブレイク（rootless / rootful）
- Airaw のバージョン
- CarCast または CarBridge の有無
- 問題のあるアプリの Bundle ID

[1]: https://twitter.com/intent/follow?screen_name=linux_n1
[5]: https://twitter.com/linux_n1/status/1479025725663776769?s=20&t=6X2EsGT3w5_1RMqI-DqXqw
[6]: https://twitter.com/linux_n1/status/1470751948454625282?s=20&t=6X2EsGT3w5_1RMqI-DqXqw
[10]: https://x.com/linux_n1/status/1762123372518096933
[14]: https://x.com/linux_n1/status/1897961644426510510
[15]: https://x.com/linux_n1/status/1897960934133711116
[16]: https://x.com/linux_n1/status/1897961218070986893
