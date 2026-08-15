# **Airaw Split Native**

## _純正 CarPlay アプリ向けスプリットビュー — Maps / Music など_

**Airaw Split Native** は、**純正 CarPlay アプリ**（Maps、Music、Podcasts、電話、メッセージ、およびアプリライブラリから追加したアプリ）向けの **スプリットビュー** を有効にするアドオンです。

本パッケージをインストールし、**Airaw → スプリットビュー（純正）** を開いて、スプリットに使える純正アプリを選んでください。

> **iOS 16.0 以降が必要です。** iOS 14 / iOS 15 では動作しません。購入前に **設定 → 一般 → 情報** で OS バージョンを確認してください。**非対応 OS での購入は返金対象外です。**

> **[Airaw](https://chariz.com/buy/airaw) 1.7.0 以降が必要です。** Airaw の **アドオン** です。設定は **Airaw からのみ** 開けます（設定アプリ一覧に単独項目は出ません）。iOS 15 以前の Airaw では、本機能が使えないため Split View 設定は表示されません。

> **パッケージのインストールがライセンスになります。** アプリ内課金はありません。Chariz で購入・導入すれば利用できます。

## デモ画像:

<div style="overflow-x:auto;-webkit-overflow-scrolling:touch;scroll-snap-type:x mandatory;display:flex;gap:12px;padding-bottom:8px;">
    <img src="https://dcsyhi1998.github.io/icons/SpNative/preview1.png" alt="preview1" style="height:260px;width:auto;max-width:none;flex:0 0 auto;scroll-snap-align:start;border-radius:12px;">
    <img src="https://dcsyhi1998.github.io/icons/SpNative/preview2.png" alt="preview2" style="height:260px;width:auto;max-width:none;flex:0 0 auto;scroll-snap-align:start;border-radius:12px;">
</div>

---

## **💰 開発支援**

**Airaw Split Native** を気に入っていただけたら、[PayPal](https://www.paypal.me/DevDcsyhi) からの寄付を歓迎しています。

X のフォローもとても励みになります。

👉 **X:** [@linux_n1](https://x.com/linux_n1)

---

## **📌 機能**

### **📐 純正スプリットビュー**

- **Maps** や **Music** など、純正 CarPlay アプリを Airaw と **並べて表示**
- 管理中の純正アプリごとにスプリットの有効／無効を切り替え
- **アプリライブラリから追加** — 初期一覧にない純正／Apple アプリを追加可能
- 設定は Airaw と同じデータファイル（`airawData.plist`）に保存

### **🔍 拡大とレイアウト**

- 純正フルスクリーン拡大とデフォルト拡大率
- フルスクリーン時にドックを隠す
- 最大化時のみホストメニューを表示
- 初期比率
- 純正ペインを左に配置
- Split 中は純正メニューを隠す

### **🔗 設定の開き方**

1. 端末が **iOS 16.0 以降** であることを確認
2. **Airaw** と **Airaw Split Native** をインストール
3. **設定 → Airaw** を開く
4. **スプリットビュー（純正）** をタップ
5. 未インストール時は、Airaw が説明を表示し Chariz を開けます

---

## **❓ よくある質問**

**Q. Airaw は必要ですか？**
A. **はい。** `jp.dcsyhi.airaw`（1.7.0 以降）に依存します。Airaw の代替ではありません。

**Q. iOS 14 や iOS 15 で使えますか？**
A. **使えません。** Split View（Native / Standard）は **iOS 16 以降専用** の拡張です。パッケージは `firmware (>= 16.0)` に依存します。iOS 15 以前の Airaw には Split View 設定が出ません。**それらの端末向けに購入しないでください。**

**Q. 設定画面はどこですか？**
A. **iOS 16 以降** で **Airaw → スプリットビュー（純正）** です。設定アプリのトップ一覧には **出ません**。

**Q. Airaw 内で追加課金がありますか？**
A. **ありません。** Chariz で本パッケージを入れることがライセンスです。

**Q. どのアプリが対象ですか？**
A. Maps や Music などの純正 CarPlay／Apple アプリ、および **アプリライブラリ** から追加したアプリです。純正 CarPlay アプリを推奨します。

**Q. Airaw Split Standard も必要ですか？**
A. **非純正**アプリ（CarCast / CarBridge）のスプリットが必要な場合のみです。Native と Standard は別アドオンで、どちらも **iOS 16 以降** が必要です。

**Q. iOS 15 の端末で誤って購入しました。返金できますか？**
A. **できません。** 非対応 OS での購入は購入者の確認不足であり、**返金ポリシーの対象外**です。購入前に iOS バージョンを確認してください。

**Q. 設定画面は英語ですか？**
A. 端末の言語設定に合わせて表示されます。**英語**と**日本語**に対応しています。

---

## **📱 互換性**

|                    |                                      |
| ------------------ | ------------------------------------ |
| **最低対応 OS**    | **iOS 16.0**（`firmware (>= 16.0)`） |
| **非対応**         | iOS 14、iOS 15                       |
| **アーキテクチャ** | arm64e（rootless）                   |
| **必須**           | Airaw（>= 1.7.0）、ElleKit/substrate |
| **競合**           | 特に宣言なし                         |

### **動作確認環境**

- rootless ジェイルブレイク（Dopamine など）
- **Airaw** と併用した CarPlay
- **iOS 16 以降のみ**

---

## **⚠️ 注意事項**

- **購入前に必ず iOS バージョンを確認してください。** 本アドオンは **iOS 16.0 以降専用**です。
- iOS 14 / iOS 15（または記載の互換性を満たさない端末）での購入は **購入者の責任**です。その誤りによる返金は受け付けません。
- 本ソフトは **非公式** の拡張です。運転中の安全な利用は利用者自身の責任で行ってください。
- 純正 Split の挙動は Airaw の CarPlay 実行系に依存します。Airaw も最新にしてください。
- すべての Apple アプリが Split に最適とは限りません。まず Maps / Music から試し、必要に応じてアプリライブラリで追加してください。

---

## **💰 返金ポリシー**

- 購入から **24 時間以内** で、正当な理由がある場合に返金を受け付けます。
- **対象外:** **iOS 15 以前**の端末、または上記 **互換性** を満たさない端末での購入。これは不具合ではなく購入ミスです。
- 暴言やハラスメントを含む不適切な要求はお断りします。
- クラッシュや不具合の報告には、再現手順と iOS / 越獄環境を含めてください。

---

## **📩 フィードバック・不具合報告**

📧 **メール:** dcsyhi1998@gmail.com
🐦 **X:** [@linux_n1](https://x.com/linux_n1)

報告の際は、以下があると助かります。

- iOS バージョンと機種
- ジェイルブレイク環境（rootless / rootful）
- Airaw のバージョン
- Airaw Split Native のバージョン
- Split で問題のある純正アプリの Bundle ID（例: `com.apple.Maps`）
