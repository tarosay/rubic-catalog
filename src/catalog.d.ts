declare namespace RubicCatalog {
    /**
     * カタログ情報ルート (公式カタログサイトのcatalog.jsonそのもの)
     */
    interface Root {
        /**
         * 対応するRubicのバージョン
         * これを満たさないバージョンのRubic利用者はカタログを更新できず、
         * アップデートを推奨される。
         */
        rubicVersion: string;

        /**
         * このJSONの最終更新時刻 (Date.now()の値)
         */
        lastModified: number;

        /**
         * ボード一覧
         * この配列の順番が原則としてカタログ上の表示順序となる。
         */
        boards: Board[];
    }

    /**
     * 多言語対応文字列 (英語は必須)
     */
    interface LocalizedString {
        en:  string;        /** English (always required) */
        de?: string;        /** German   */
        es?: string;        /** Spanish  */
        fr?: string;        /** French   */
        it?: string;        /** Italian  */
        ja?: string;        /** Japanese */
        ko?: string;        /** Korean   */
        ru?: string;        /** Russian  */
        "zh-cn"?: string;   /** Chinese (China)  */
        "zh-tw"?: string;   /** Chinese (Taiwan) */
    }

    /** トピック定義 */
    interface Topic {
        /** トピックの名前 */
        name: LocalizedString;

        /** 色 */
        color: null|"gray"|"blue"|"green"|"lightblue"|"orange"|"red";
    }

    /**
     * ボード定義 (catalog.jsonの一部)
     */
    interface Board {
        /**
         * ボードクラス名 (Rubic内部実装と合わせる)
         * (分かりやすさのためCamelCaseで書いているが、実際には
         *  大文字小文字は区別されない)
         * ※ワークスペースのボード指定に使用されるIDであり、公開後の変更禁止。
         */
        class: string;

        /** ボード名称 */
        name: LocalizedString;

        /** 説明文 */
        description: LocalizedString;

        /** 作者名 */
        author: LocalizedString;

        /** WEBサイト URL */
        website: LocalizedString;

        /** プレビュー版か否か(省略時=false) */
        preview?: boolean;

        /** トピック一覧 */
        topics: Topic[];

        /**
         * ファームウェア一覧
         * この配列の順番が原則としてカタログ上の表示順序となる。
         */
        firmwares: FirmwareSummary[];
    }

    /**
     * ファームウェア概要情報 (catalog.jsonの一部)
     */
    interface FirmwareSummary {
        /**
         * UUID
         * ※ワークスペースのファーム指定に使用されるIDであり、公開後の変更禁止。
         */
        uuid: string;

        /** 無効化されているか否か(省略時=false) */
        disabled?: boolean;

        /** ボードベンダーの公式ファームか否か(省略時=false) */
        official?: boolean;

        /** ホスティングサイト */
        host: "github";

        /** 所有者 */
        owner: string;

        /** リポジトリ名 */
        repo: string;

        /** ブランチ名(省略時=master) */
        branch?: string;

        /** 詳細情報(firmware.jsonの中身) */
        cache?: FirmwareDetail;
    }

    /**
     * ファームウェア詳細定義 (firmware.json)
     */
    interface FirmwareDetail {
        /** 名前 */
        name: LocalizedString;

        /** 説明 */
        description: LocalizedString;

        /** プレビュー版か否か(省略時=false) */
        preview?: boolean;

        /** リリース一覧 */
        releases?: ReleaseSummary[];
    }

    /**
     * リリース概要定義 (catalog.jsonの一部)
     */
    interface ReleaseSummary {
        /**
         * リリースのタグ名
         * ※ワークスペースのファーム指定に使用されるIDであり、公開後の変更禁止。
         */
        tag: string;

        /** リリースの名称 (GitHubリリース名、英語のみ) */
        name: string;

        /** リリースの説明 (GitHubリリース説明、英語のみ) */
        description: string;

        /** プレビュー版か否か(省略時=false) */
        preview?: boolean;

        /** 公開日 (GitHubのリリース情報 published_at より。ただし値は Date.now() フォーマット) */
        published_at: number;

        /** 更新日 (assetのupdated_atより) */
        updated_at: number;

        /** 作者名 (GitHubのauthorのログインID) */
        author: string;

        /** zip assetのURL */
        url: string;

        /** zipに格納された release.json のキャッシュ */
        cache: ReleaseDetail;
    }

    /**
     * リリース詳細定義 (release.jsonの中身そのもの)
     */
    interface ReleaseDetail {
        /** リリースの名称 (存在しない場合、Summaryのnameから引用) */
        name: LocalizedString;

        /** リリースの説明文 (存在しない場合、Summaryのdescriptionから引用) */
        description: LocalizedString;

        /** バリエーション一覧 */
        variations: Variation;
    }

    /**
     * バリエーション定義 (release.jsonの一部)
     */
    interface Variation {
        /**
         * アーカイブ(zip)内のパス
         * ※ワークスペースのファーム指定に使用されるIDであり、公開後の変更禁止。
         */
        path: string;

        /** バリエーションの名前 */
        name: LocalizedString;

        /** バリエーションの説明文 */
        description: LocalizedString;

        /** ランタイムの一覧 */
        runtimes: Runtime.Common[];
    }

    /**
     * ランタイム情報
     */
    namespace Runtime {
        /** ランタイム共通定義 */
        interface Common {
            /** ランタイムの名前 */
            name: string;
        }

        /** Rubyランタイム(name=mruby) */
        interface Mruby extends Common {
            /** バージョン(x.x.x) */
            version: string;
        }

        /** JavaScript(ES5)ランタイム(name=duktape) */
        interface Duktape extends Common{
        }
    }
}