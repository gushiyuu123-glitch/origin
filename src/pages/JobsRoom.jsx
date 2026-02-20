// src/pages/JobsRoom.jsx
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./jobs.css"; // ← 黄金ライン・銀膜だけ残す

gsap.registerPlugin(ScrollTrigger);

export default function JobsRoom() {
  const containerRef = useRef(null);
  const heroRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      /* HERO 呼吸 */
      if (heroRef.current && titleRef.current) {
        gsap.to(heroRef.current, {
          scale: 1.004,
          duration: 8,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });

        gsap.to(titleRef.current, {
          letterSpacing: "0.30em",
          duration: 7,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      }

      /* Fade-in */
      gsap.utils.toArray(".fade-sec").forEach((sec) => {
        gsap.fromTo(
          sec,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 1.5,
            ease: "power3.out",
            scrollTrigger: {
              trigger: sec,
              start: "top 85%",
              once: true,
            },
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="bg-[#f3f3f3] text-[#111] overflow-x-hidden"
    >
{/* ================= HERO WRAPPER ================= */}
<div className="relative min-h-screen w-full overflow-hidden">

  {/* ================= FRONT TITLE BLOCK ================= */}
  <div
    className="
      absolute top-[24vh] left-1/2 -translate-x-1/2
      z-[9999]
      text-center
      pointer-events-none
    "
  >
    {/* サブコピー */}
    <p
      className="
        text-[13px]
        tracking-[0.34em]
        opacity-70
        mb-3
        font-light
      "
    >
      STEVE JOBS
    </p>

    {/* メインタイトル */}
    <h1
      ref={titleRef}
      className="
        text-[48px]
        tracking-[0.18em]
        font-light
        text-black/85
        drop-shadow-[0_2px_14px_rgba(255,255,255,0.75)]
      "
    >
      世界は“視点”でつくられる。
    </h1>
  </div>

  {/* ================= BACKGROUND BLOCK ================= */}
  <section
    ref={heroRef}
    className="
      relative min-h-screen w-full
      px-8
      flex items-center justify-center text-center
    "
  >

    {/* 銀膜（最背面） */}
    <div
      className="absolute inset-0 pointer-events-none opacity-[0.04]"
      style={{
        background:
          "radial-gradient(circle at 50% 28%, rgba(255,255,255,0.38) 0%, rgba(255,255,255,0.06) 35%, transparent 70%)",
      }}
    />

    {/* 背景画像 */}
    <img
      src="/images/jobs/hero1.png"
      className="
        absolute inset-0 w-full h-full 
        object-cover object-center 
        opacity-[0.84]
      "
      style={{ filter: "contrast(1.08) brightness(1.06)" }}
      alt=""
    />

    {/* 白銀深度（光膜） */}
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        background:
          "radial-gradient(circle at 50% 65%, rgba(255,255,255,0.22) 0%, rgba(245,245,245,1) 78%)",
      }}
    />
  </section>
</div>

      {/* ================= CONTENT WRAPPER ================= */}
      <div className="w-full pt-[200px] px-[42px]">
{/* ========= 01：境界線 ========= */}
<section className="fade-sec mb-[320px] pt-[180px] pb-[60px]">
  <div className="
    grid 
    max-w-[1320px] mx-auto 
    grid-cols-[1.35fr_1fr]   /* ← 画像を大きく */
    gap-[100px] 
    items-start
  ">

{/* ===================== 画像 ===================== */}
<div className="space-y-6 relative top-[6px]">

  {/* 大文字キャプション（誌面導入） */}
  <p className="absolute -top-10 left-0 text-[13px] tracking-[0.42em] opacity-40">
    CHAPTER 01 — BORDERLINE
  </p>

  <img
    src="/images/jobs/born1.png"
    className="
      w-[96%]                /* 横を広げて誌面バランスUP */
      max-w-[620px]          /* PCで最も美しく見える幅 */
      max-h-[560px]          /* 背を低くして潰れ防止 */
      mx-auto
      rounded-[14px]
      shadow-[0_14px_38px_rgba(0,0,0,0.07)]
      scale-[1.01]           /* 過剰な拡大をやめて自然に */
      origin-center
      object-cover            /* ← 切り抜き構図が最も美しい */
    "
    alt=""
    style={{
      objectFit: "cover",
      objectPosition: "center top",  // 上側の絵を優先表示
    }}
  />

  <p className="text-center text-[11px] tracking-[0.3em] opacity-55">
    01 — BORDERLINE
  </p>
</div>

    {/* ===================== テキスト ===================== */}
    <div className="max-w-[620px] text-[15.8px] leading-[2.1] font-light opacity-[0.92]">

      {/* 英語セクションタイトル（誌面強） */}
      <h3 className="text-[15px] tracking-[0.28em] opacity-50 mb-[26px]">
        THE STORY BEGINS AT THE EDGE
      </h3>

      {/* 日本語タイトル */}
      <h2 className="mag-title mb-[38px]">
        境界線から始まった物語
      </h2>

      {/* 本文（改行で呼吸） */}
      <p>
        スティーブ・ジョブズの物語は、栄光からは程遠い“境界線”で幕を開けた。<br />
        生まれてすぐに実の両親と別れ、 <br /> 
        「自分はどこに属するのか」という問いだけが残された。
      </p>

      <p className="mt-[28px]">
        その後の人生でも、彼は常に境界の手前に立ち続けた。<br />
        学校にも馴染めず、既存の価値観には反発し、どこにも完全にはフィットしない。<br />
        だが——その“居場所のなさ”こそが、感性を研ぎ澄ませていく。
      </p>

      {/* 引きの強いセンテンス（中央寄せ） */}
      <p className="mag-pull  my-[40px] text-[18px] tracking-[0.02em] text-center">
        「小さなノイズが、なぜか気になる」
      </p>

      <p>
        1mm のズレ、空気の濁り、手触り。<br />
        多くの人が見落とす“雑味”に、彼だけが強烈に反応した。
      </p>

      <p className="mt-[26px]">
        後に“Apple が世界を変える“<br />美と機能の統合”は、  
        この違和感センサーが原点となる。
      </p>
    </div>
  </div>
</section>
{/* ========= Air Break（控えめ × 雑誌 × フェード演出） ========= */}
<section
  className="
    fade-sec relative w-full h-[56vh] 
    rounded-[12px] overflow-hidden mb-[240px]
    flex items-center justify-center text-center
  "
>
  {/* 背景画像 */}
  <img
    src="/images/jobs/break-light.png"
    alt=""
    className="absolute inset-0 w-full h-full object-cover object-center scale-[1.015]"
  />

  {/* Dior光膜 */}
  <div
    className="
      absolute inset-0 pointer-events-none
      backdrop-blur-[2px]
      opacity-[0.82]
      bg-[radial-gradient(circle_at_50%_42%,rgba(255,255,255,0.48)_0%,rgba(255,255,255,0.18)_35%,rgba(255,255,255,0.06)_80%)]
    "
  />

  {/* ===== 英文（メインコピー） ===== */}
  <div className="relative z-20 text-center px-6 editorial-fade">
    <h2
      className="
        text-[28px] md:text-[32px]
        font-light
        leading-[1.6]
        tracking-[0.12em]
        text-[#111]/85
        drop-shadow-[0_0_12px_rgba(255,255,255,0.6)]
      "
    >
      Simplicity is an act of courage,<br />
      not the absence of complexity.
    </h2>

  {/* ===== 日本語（和訳） ===== */}
<p
  className="
    mt-[28px]                /* ← 距離をしっかり開ける */
    text-[16px]             /* ← ほんの少しだけ大きく */
    leading-[1.85]
    tracking-[0.03em]
    text-black/60 font-light
    drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]
  "
>
  シンプルとは、ただ“削る”だけではない。不必要を捨てる勇気そのものだ。
</p>
  </div>
</section>
{/* ========= 02：意味の嗅覚 ========= */}
<section className="fade-sec mb-[300px] pt-[180px] pb-[60px]">
  <div className="max-w-[1320px] mx-auto">

    {/* SUBTITLE */}
    <p className="text-[12px] tracking-[0.24em] opacity-50 mb-10">
      SPECIAL FEATURE
    </p>

    <div
      className="
        grid
        grid-cols-[1fr_1.35fr]   /* ← 画像比率アップ */
        gap-[100px]             /* ← 間隔広げて“高級誌”バランス */
        items-start
      "
    >

      {/* TEXT */}
      <div className="max-w-[620px] text-[15.8px] leading-[2.08] font-light opacity-[0.92]">

        <p className="mag-code mb-3">02 — MEANING SENSE</p>

        <h2 className="mag-title mb-12">意味の嗅覚</h2>

        <p>
          子どものころからジョブズは、<br />
          “理由のないもの” に強い拒絶反応を示す少年だった。<br />
          形だけの宿題、形式だけの校則。<br />
          誰も疑わない「当たり前」が、彼の中には常にザラつきを残した。<br /><br />
        </p>

        <p>
          一方で、「これは本物だ」と感じた瞬間には、<br />
          世界が一気に色を変えるほど没入する。<br />
          その極端さは欠点ではなく、のちに “審美眼” へと変わっていく資質だった。
        </p>

        <p
          className="my-[32px] text-[17px] opacity-80 tracking-[0.03em] text-center"
        >
          「これは何のために存在しているのか？」
        </p>

        <p>
          その問いは、思考の癖ではなく “標準設定” になっていった。<br />
          大学へ進んだあとも、彼の嗅覚は迷わず境界線を越える。
        </p>

        <p>
          自分を薄めるだけの学びには一切の価値を見いだせず、<br />
          入学してすぐに大学を離れるという異例の決断を下す。<br /><br />
        </p>

        <p>
          ただし、撤退ではない。<br /><br />
          彼は「理由のある美」を探しに、カリグラフィーの授業へ足を運び続けた。<br />
          そこで出会った繊細な文字の曲線が、<br />
          のちの <span className="font-medium">Mac 文化の源泉</span> となる。
        </p>
      </div>

      {/* IMAGE */}
      <div className="space-y-4 relative top-[120px]">
        <img
          src="/images/jobs/reed1.png"
          className="
            w-full 
            rounded-[12px] 
            mag-img 
            scale-[1.08]          /* ← 画像の迫力UP */
            origin-center
          "
          alt=""
        />
        <p className="text-center text-[11px] tracking-[0.3em] opacity-55">
          02 — MEANING SENSE
        </p>
      </div>

    </div>
  </div>
</section>
{/* ========= 03：起業前夜 — 火がつく瞬間 ========= */}
<section className="fade-sec mb-[320px] pt-[180px] pb-[60px]">
  <div className="max-w-[1320px] mx-auto">

    {/* SUBTITLE */}
    <p className="text-[12px] tracking-[0.24em] opacity-50 mb-10">
      SPECIAL FEATURE
    </p>

    <div
      className="
        grid
        grid-cols-[1fr_0.9fr]   /* 縦画像を活かす比率 */
        gap-[90px]
        items-start
      "
    >

      {/* TEXT AREA */}
      <div className="max-w-[620px] text-[15.8px] leading-[2.12] font-light opacity-[0.92]">

        <p className="mag-code mb-3">03 — BEFORE THE FIRST SPARK</p>

        <h2 className="mag-title mb-12">起業前夜 — 火がつく瞬間</h2>

        <p>
          大学を離れたあと、ジョブズはすぐに何かを始めたわけではない。<br />
          むしろしばらくは “漂う時間” が続いた。  
          所属を失い、肩書きもなく、ただ直感だけを頼りに世界を歩く日々。
        </p>

        <p className="mt-[26px]">
          禅に傾倒し、精神性を磨き、テクノロジーの未来を直観で捉えはじめる。<br />
          その時間が、後の Apple の “静けさと緊張感” の原型をつくった。
        </p>

        <p className="my-[36px] text-[17px] opacity-80 tracking-[0.03em] text-center">
          「自分が信じる“美しい世界”は、自分で作るしかない。」
        </p>

        <p>
          その思想が芽を出したのは、  
          旧友ウォズニアックとの再会だった。<br />
          ホームブリュー・コンピュータ・クラブで見た原始的なマシン。<br />
          そこには“未来の匂い”があった。
        </p>

        <p className="mt-[26px]">
          ジョブズは悟る。  
          テクノロジーはまだ“使う人の世界”をデザインできていない。<br />
          誰もが触れる“入口”すら整っていない。  
        </p>

        <p className="mt-[26px]">
          美と合理の間にある “未開の領域” を形にできる人間がいない——  
          ならば自分がやるしかない。
        </p>

        <p className="mt-[32px] font-medium opacity-90">
          こうして、ガレージでの Apple が始まる。  
          起業は野心ではなく、“世界の雑味を消す” という本能の延長だった。
        </p>

      </div>

      {/* IMAGE AREA */}
{/* IMAGE AREA */}
<div className="space-y-4 relative top-[8px]">
  <img
    src="/images/jobs/vertical_fontstudy.png"
    className="
      w-[92%]                /* ← これが効く（幅を優雅に絞る） */
      mx-auto                /* ← センター寄せ */
      rounded-[14px]
      mag-img
      scale-[1.02]           /* ← 拡大しすぎず“誌面感”だけ残す */
      origin-center
      shadow-[0_16px_36px_rgba(0,0,0,0.08)]
    "
    alt=""
  />
  <p className="text-center text-[11px] tracking-[0.3em] opacity-55">
    03 — THE SHAPE BEFORE FORM
  </p>
</div>

    </div>
  </div>
</section>
{/* ========= 04：ガレージ革命 — 見開き（Optimized Ver.） ========= */}
<section className="fade-sec mb-[380px] pt-[200px]">

  {/* VISUAL BLOCK */}
  <div className="relative w-full">
{/* 背景画像（大きめ） */}
<img
  src="/images/jobs/garage_revo.png"
  className="
    w-full
    max-h-[680px]
    object-cover
    rounded-[20px]
    shadow-[0_28px_60px_rgba(0,0,0,0.20)]
  "
  alt=""
/>

{/* 上から溶ける“にじみ黒”グラデ */}
<div
  className="
    absolute inset-0 rounded-[20px]
    bg-gradient-to-b
    from-black/90 via-black/70 to-black/20
    backdrop-blur-[1.4px]
  "
/>


{/* 金の滲み膜（控えめ） */}
<div
  className="
    absolute inset-0 rounded-[20px]
    pointer-events-none
    opacity-[0.08]
    bg-gradient-to-r
    from-[rgba(212,175,55,0.18)] to-transparent
    mix-blend-screen
  "
/>
    {/* TEXT OVERLAY */}
    <div
      className="
        absolute inset-0
        flex items-center justify-center
        px-[56px]
        text-white
      "
    >
      <div
        className="
          max-w-[640px]
          text-center
          drop-shadow-[0_6px_22px_rgba(0,0,0,0.55)]
        "
      >

        {/* Subtitle */}
        <p className="text-[12px] tracking-[0.26em] opacity-70 mb-3">
          SPECIAL FEATURE — CHAPTER 04
        </p>

        {/* Title */}
        <h2 className="mag-title text-white mb-10 leading-[1.42]">
          ガレージの革命<br/>世界観が形になる瞬間
        </h2>

        {/* Paragraphs */}
        <p className="text-[16px] leading-[2.2] font-light opacity-[0.96]">
          ウォズニアックとの再会は、ジョブズにとって  
          “未来の入口”だった。<br/>
          原始的な基板の中に、彼だけが  
          「触れられる未来の原型」を見ていた。
        </p>

        <p className="mt-[28px] text-[16px] leading-[2.2] font-light opacity-[0.94]">
          技術と美学の境界をつなぐ“翻訳者”。<br/>
          その役割は、当時の世界にはまだ存在していなかった。
        </p>

        <p className="my-[42px] text-[17px] opacity-85 tracking-[0.03em]">
          「未来は、全員が触れられて初めて革命になる。」
        </p>

        <p className="text-[16px] leading-[2.22] font-light opacity-[0.98]">
          ガレージで始まったのは企業の誕生ではない。<br/>
          世界を“どう見せるか”。  
          その問いに対する、最初の答えだった。
        </p>

      </div>
    </div>
  </div>

  {/* Caption */}
  <div className="mt-6 text-center">
    <p className="text-[11px] tracking-[0.3em] opacity-55">
      04 — THE FIRST REVOLUTION
    </p>
  </div>

</section>
      </div>
    </div>
  );
}