---
layout: home.njk
title: 安田祐平
description: フロントエンドウェブ開発者。1995年生まれ。東京都在住。<br><a href="https://shiftbrain.com/">株式会社シフトブレイン</a>所属。業務では主に運用を見据えたウェブサイトの開発に携わる。
origin: https://yuheiy.com
---

<section id="interests">

## 関心

<article id="markup-is-design-process">

### マークアップはデザインプロセス

マークアップは後付けの作業だと思われがちです。すでに完成している画面仕様を、単にHTMLに変換するだけの行為であると理解する人は少なくありません。

私の解釈ではマークアップはデザインプロセスの一部です。コンテンツの意味に向き合いながら、ウェブサイトとしての情報の表現を検証する。その反復行為の過程でHTMLは思考のフレームワークとして役立ちます。

- presentation:[制作者のためのHTML（資料）](https://yuheiy.github.io/html-for-creators/)
- presentation:[制作者のためのHTML（映像）](https://www.pscp.tv/CA11Y_/1rmxPQzWXwgKN?t=56m52s)
- writing:[状態遷移時にアニメーションを伴うUIのアクセシビリティ周りの実装について](https://yuheiy.hatenablog.com/entry/2018/02/18/113537)

</article>

<article id="html-as-ui-framework">

### UIフレームワークとしてのHTML

HTML要素はもっともプリミティブなコンポーネントです。多くの要素は意味や振る舞いを持ち、制作者はそれらを継承する形で画面を実装します。

画面の構成要素となるパターンは、まずは基本的なHTML要素から選択できます。それらのHTML要素に対して、要素の種類ごとにスタイリングを施していくことによって、制作者の情報を構造化する意識が促されます。[タイプセレクタ](https://developer.mozilla.org/ja/docs/Web/CSS/Type_selectors)はHTMLとCSSの模範的な関わり方を象徴しています。

ブラウザは[インタラクティブコンテンツ](https://developer.mozilla.org/ja/docs/Web/Guide/HTML/Content_categories#Interactive_content)に含まれる要素をユーザーが操作できるように実装しています。操作方法は要素の種類とユーザーエージェントごとに決められており、それらの要素を採用することで操作の一貫性がウェブサイトという境界を超えて実現されます。

サイト固有のスタイルや振る舞いから見てHTMLは骨格なのです。

- writing:[ページ内リンクの実装から考える、a要素のclickイベントとその振る舞い](https://standard.shiftbrain.com/blog/default-action-for-click-event-of-a-element)

</article>

<article id="css-architecture-formalizes-ui-patterns">

### CSS設計はUIパターンを形式化する

CSS設計とは、コンテンツの形式を定義し、UIパターンとして表現し、ウェブサイトのポテンシャルを具現化する行為です。CSSのための命名にはパターンとしての世界観を反映させます。

コンポーネントは階層構造を前提としません。[HTMLのコンテンツカテゴリー](https://developer.mozilla.org/ja/docs/Web/Guide/HTML/Content_categories)のようにコンポーネントは性質を併せ持つものです。UIパターンの種類やドメインとの関係性に着目して、適切な汎用性を命名として表現します。

- writing:[［WIP］CSSの命名について](https://yuheiy.hatenablog.com/entry/2018/12/10/022626)

</article>

<article id="world-realized-by-web-components">

### Web Componentsが実現する世界

Web ComponentsはUIのコンポーネント化を標準の仕組みとして実現する仕様です。すでにいくつかのライブラリにはコンポーネント化の機能がありますが、標準としての採用はその民主化を意味します。コンポーネント化の発想が当たり前の世界になるための技術的な後ろ盾となることを期待しています。

- writing:[Web Componentsを待ち望んでいる話](https://yuheiy.hatenablog.com/entry/2018/03/26/091058)
- software:[yuheiy/animated-collapse-element](https://github.com/yuheiy/animated-collapse-element)

</article>

<article id="ui-design-for-user-to-be-subject">

### ユーザーが主体になるためのUIデザイン

良いUIとは、ユーザーが自律的に考えることができて、ユーザーの主体的な行動を促すものです。UIデザインをユーザーの利益のために、創造的な行動を制限して主導するような考え方から解放しなければなりません。

- presentation:[ユーザー自身の道具になるためのインターフェイス](https://yuheiy.github.io/interface-to-become-your-own-tool/)

</article>

<article id="responsive-web-design-and-division-of-labor">

### レスポンシブウェブデザインと分業

レスポンシブウェブデザインはウェブデザインを固定幅という制約から解放しました。同時に、静的なデザインカンプと本物のレンダリング結果とのギャップを浮き彫りにしました。それ以前まで、ウェブデザインは960pxであるという決めつけに囚われていました。

それにも関わらずウェブデザインは再び、スマホ用・PC用というアートボードの中に囚われています。これは分業化の結果として逃れられない現象であるとも言えます。その溝を埋めるために現実的なアプローチを探し続けなければなりません。

- software:[Responsive Grid Designer](https://yuheiy.github.io/grid-settings-designer/)

</article>

<article id="front-end-development-environment-for-websites">

### ウェブサイトのためのフロントエンド開発環境

フロントエンド開発ツールの話題が活発化していますが、従来からの課題であるような大量のHTMLファイルをうまく開発するための手法などはあまり語られません。ウェブサイト制作者とフロントエンド開発の流れとの溝が原因だと感じます。

ウェブサイトを変更しやすくかつ長い期間耐えうる設計をするためには、開発ツールについても多角的な視点が必要です。より良い開発環境を構築して開発効率や品質の向上に寄与します。

- writing:[SPAじゃないプロジェクトのための控えめなJavaScriptフレームワーク「Stimulus」](https://yuheiy.hatenablog.com/entry/2019/05/02/204549)
- writing:[サーバーサイドのみのテンプレートエンジンとしてのReact](https://yuheiy.hatenablog.com/entry/2019/01/15/031235)
- writing:[CSS in JSはCSSの書き方をどのように変えるのか](https://yuheiy.hatenablog.com/entry/2018/11/22/020322)
- writing:[cssnextを使うべきか](https://yuheiy.hatenablog.com/entry/2017/09/21/190150)
- software:[yuheiy/real-world-website-boilerplate](https://github.com/yuheiy/real-world-website-boilerplate)

</article>

</section>

<section id="projects">

## プロジェクト

<article id="standard-design-unit">

### [シフトブレイン／スタンダードデザインユニット](https://standard.shiftbrain.com/)

自社で所属しているチームのウェブサイトです。

{% for ref in referencesByProject[0] -%}
- writing:[{{ ref[0] }}]({{ ref[1] }})
{% endfor %}

</article>

<article id="yuhei-blog">

### [yuhei blog](https://yuheiy.hatenablog.com/)

ウェブ制作の話題について書いていることが多い個人ブログです。

{% for ref in referencesByProject[1] -%}
- writing:[{{ ref[0] }}]({{ ref[1] }})
{% endfor %}

</article>

</section>
