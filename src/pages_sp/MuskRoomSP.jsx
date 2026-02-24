// ===========================
// MuskRoomSP.jsx（SP版）
// ===========================
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.config({
  ignoreMobileResize: true,
});

export default function MuskRoomSP() {
  const heroImgRef = useRef(null);
  const heroTitleRef = useRef(null);
  const heroSubRef = useRef(null);

  /* =====================================
     HERO：呼吸アニメ（SP最適）
  ===================================== */
  useEffect(() => {
    const ctx = gsap.context(() => {
      if (heroImgRef.current) {
        gsap.to(heroImgRef.current, {
          scale: 1.01,
          duration: 8,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      }
      if (heroTitleRef.current) {
        gsap.to(heroTitleRef.current, {
          letterSpacing: "0.32em",
          duration: 7.2,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      }
    });
    return () => ctx.revert();
  }, []);

  /* =====================================
     HERO：フェードイン
  ===================================== */
  useEffect(() => {
    gsap.to("#musk-hero-title-sp", {
      opacity: 1,
      y: 0,
      duration: 0.65,
      ease: "power2.out",
      delay: 0.2,
    });
    gsap.to("#musk-hero-sub-sp", {
      opacity: 1,
      y: 0,
      duration: 0.65,
      ease: "power2.out",
      delay: 0.32,
    });
    gsap.to("#musk-hero-copy-sp", {
      opacity: 1,
      y: 0,
      duration: 0.7,
      ease: "power2.out",
      delay: 0.48,
    });
  }, []);

  /* =====================================
     Fade-sec（CLSゼロ）
  ===================================== */
  useEffect(() => {
    gsap.utils.toArray(".fade-sec-sp").forEach((sec) => {
      gsap.fromTo(
        sec,
        { opacity: 0, filter: "blur(0.18px)" },
        {
          opacity: 1,
          filter: "blur(0px)",
          duration: 0.65,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sec,
            start: "top 90%",
          },
        }
      );
    });
  }, []);

  return (
    <div className="bg-[#0d0d0d] text-white overflow-x-hidden relative">

      {/* =========================================================
          HERO（SP版）
      ========================================================= */}
      <section className="relative min-h-[96vh] w-full overflow-hidden fade-sec-sp">

        {/* 背景ライン */}
        <div className="absolute inset-0 bg-[url('/images/musk/neural-lines.png')] bg-[length:180%] bg-center opacity-[0.18] mix-blend-screen" />

        {/* 白膜 */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/6 via-white/3 to-transparent pointer-events-none" />

        {/* シルエット */}
        <img
          ref={heroImgRef}
          src="/images/musk/hero.png"
          className="
            absolute inset-0 w-full h-full
            object-cover opacity-[0.9]
            scale-[1.04]
          "
          alt=""
        />

        {/* テキスト */}
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center z-10">

          <h1
            ref={heroTitleRef}
            id="musk-hero-title-sp"
            className="
              text-[38px] tracking-[0.22em]
              text-white/95 font-light
              opacity-0 translate-y-[10px]
            "
          >
            ELON MUSK
          </h1>

          <p
            ref={heroSubRef}
            id="musk-hero-sub-sp"
            className="
              mt-3 text-[11px]
              tracking-[0.18em] text-white/55
              opacity-0 translate-y-[10px]
            "
          >
            GENIUS VECTOR
          </p>

          <p
            id="musk-hero-copy-sp"
            className="
              mt-10 text-[20px] leading-[1.74]
              tracking-[0.12em] text-white/85 font-light
              opacity-0 translate-y-[10px] max-w-[90%]
            "
          >
            常識を越えて生まれた頭脳。
          </p>
        </div>
      </section>

      {/* =========================================================
          CHAPTER 01
      ========================================================= */}
      <section className="fade-sec-sp max-w-[480px] mx-auto px-4 py-[120px]">
        <p className="text-[11px] tracking-[0.26em] opacity-50 mb-6">
          CHAPTER 01 — CHILDHOOD
        </p>

        <h2 className="text-[22px] tracking-[0.16em] mb-10 font-light text-white/90 leading-[1.6]">
          生まれた瞬間から、世界の外側にいた。
        </h2>

        <img
          src="/images/musk/born.png"
          className="
            w-full aspect-[4/3]
            rounded-[14px] opacity-[0.95] object-cover
            shadow-[0_0_28px_rgba(255,255,255,0.06)]
            mb-8
          "
        />

        <p className="leading-[1.9] text-[15px] opacity-[0.85] mb-6">
          イーロン・マスクが生まれたのは南アフリカ・プレトリア。
          世界の中心から少し離れたその場所で、彼の物語は始まった。
        </p>

        <p className="leading-[1.9] text-[15px] opacity-[0.85] mb-6">
          幼いころ、彼は周囲とは違う時間を生きていた。
          他の子どもたちが外で遊ぶあいだ、彼は分厚い科学書に没頭していた。
        </p>

        <p className="leading-[1.9] text-[15px] opacity-[0.85]">
          “なぜ世界はこう動くのか。”  
          その問いこそが、彼のスタートだった。
        </p>
      </section>

      {/* =========================================================
          CHAPTER 02
      ========================================================= */}
      <section className="fade-sec-sp max-w-[480px] mx-auto px-4 py-[120px]">
        <p className="text-[11px] tracking-[0.26em] opacity-50 mb-6">
          CHAPTER 02 — ISOLATION
        </p>

        <h2 className="text-[22px] tracking-[0.16em] mb-10 font-light text-white/90">
          孤独は、彼を壊さず。“方向”を与えた。
        </h2>

        <img
          src="/images/musk/childroom.png"
          className="
            w-full aspect-[4/3] rounded-[14px]
            opacity-[0.95] object-cover
            shadow-[0_0_28px_rgba(255,255,255,0.06)]
            mb-8
          "
        />

        <p className="leading-[1.9] text-[15px] opacity-[0.85] mb-6">
          学校では“浮いていた”。空想に沈みやすい性質は、
          同年代の子どもたちには理解されず、ときに暴力の対象になった。
        </p>

        <p className="leading-[1.9] text-[15px] opacity-[0.85] mb-6">
          だが孤独は壊れる原因ではなく、彼に“知識の宇宙”へ潜る方向を与えた。
        </p>

        <p className="leading-[1.9] text-[15px] opacity-[0.85]">
          物理、SF、宇宙──  
          本のページだけが、彼を裏切らなかった。
        </p>
      </section>

    {/* =========================================================
    CHAPTER 03 — DISCOVERY
========================================================= */}
<section className="fade-sec-sp max-w-[480px] mx-auto px-4 py-[120px]">
  <p className="text-[11px] tracking-[0.26em] opacity-50 mb-6">
    CHAPTER 03 — DISCOVERY
  </p>

  <h2 className="text-[22px] tracking-[0.16em] mb-10 font-light text-white/90 leading-[1.62]">
    “見つけた”という瞬間から、世界が動き出す。
  </h2>

  <img
    src="/images/musk/game.png"
    className="
      w-full aspect-[4/3] rounded-[14px] object-cover
      opacity-[0.95]
      shadow-[0_0_28px_rgba(255,255,255,0.06)]
      mb-8
    "
    alt=""
  />

  <p className="leading-[1.9] text-[15px] opacity-[0.85] mb-6">
    12歳のとき、彼は突然ゲームを作りはじめ、
    わずか数時間で「Blastar」という宇宙シューティングを完成させた。
  </p>

  <p className="leading-[1.9] text-[15px] opacity-[0.85] mb-6">
    そしてそのプログラムを 500ドルで売却した。
    これが、彼の最初の“起業”だった。
  </p>

  <p className="leading-[1.9] text-[15px] opacity-[0.85]">
    才能とは天から降るものではなく、  
    “気づいた瞬間から燃えはじめる火種” だと証明した瞬間だった。
  </p>
</section>


{/* =========================================================
    CHAPTER 04 — SHADOWS OF HOME（SP Optimized）
========================================================= */}
<section className="fade-sec max-w-[860px] mx-auto px-5 py-[120px]">

  <p className="text-[11px] tracking-[0.26em] opacity-55 mb-6">
    CHAPTER 04 — SHADOWS OF HOME
  </p>

  <h2 className="text-[22px] tracking-[0.18em] mb-10 font-light text-white/90 leading-[1.7]">
    家庭は、彼にとって“最初の試練”だった。
  </h2>

  {/* 画像：上（SP構造） */}
  <img
    src="/images/musk/home.png"
    className="
      w-full aspect-[4/3]
      rounded-[16px]
      opacity-[0.92]
      object-cover
      shadow-[0_0_32px_rgba(255,255,255,0.05)]
      mb-10
    "
    alt=""
  />

  {/* テキスト：下（読みやすさ最適化） */}
  <div className="space-y-7">

    <p className="leading-[1.95] text-[15px] opacity-[0.85]">
      イーロンの家庭環境は、決して穏やかではなかった。
      とくに父親との関係は苛烈で、彼の心に深い影を落とした。
      “正しさ”を押しつけられ、感情よりも服従を求められる日々。
    </p>

    <p className="leading-[1.95] text-[15px] opacity-[0.85]">
      その環境は彼にひとつの能力を与える。
      「外側がどうであれ、自分の内側に逃げ込める」という力だ。
      書物、宇宙、物語。彼は思想の世界に自分を避難させた。
    </p>

    <p className="leading-[1.95] text-[15px] opacity-[0.85]">
      この“内的避難所”が、のちの  
      SpaceX、Tesla、Neuralinkの  
      “異常なまでの集中力と執念”の根っこになる。
    </p>

  </div>
</section>
{/* =========================================================
    CHAPTER 05 — ESCAPE
========================================================= */}
<section className="fade-sec-sp max-w-[480px] mx-auto px-4 py-[120px]">
  <p className="text-[11px] tracking-[0.26em] opacity-50 mb-6">
    CHAPTER 05 — ESCAPE
  </p>

  <h2 className="text-[22px] tracking-[0.16em] mb-10 font-light text-white/90 leading-[1.62]">
    “この国では、未来をつくれない。”
  </h2>

  <img
    src="/images/musk/flight.png"
    className="
      w-full aspect-[4/3] rounded-[14px] object-cover
      opacity-[0.95]
      shadow-[0_0_28px_rgba(255,255,255,0.06)]
      mb-8
    "
    alt=""
  />

  <p className="leading-[1.9] text-[15px] opacity-[0.85] mb-6">
    南アフリカは徴兵制があり、未来をつくるには環境が重すぎた。
    彼は 17歳で国を出る決断をする。
  </p>

  <p className="leading-[1.9] text-[15px] opacity-[0.85] mb-6">
    だれも助けてくれない。保証もない。  
    けれど、彼は“未来を選ぶ権利”だけは捨てなかった。
  </p>

  <p className="leading-[1.9] text-[15px] opacity-[0.85]">
    逃げたのではない。  
    **未来をつくれる場所へ“移動した”。**  
  </p>
</section>



{/* =========================================================
    CHAPTER 06 — NORTH AMERICA
========================================================= */}
<section className="fade-sec-sp max-w-[480px] mx-auto px-4 py-[120px]">
  <p className="text-[11px] tracking-[0.26em] opacity-50 mb-6">
    CHAPTER 06 — NORTH AMERICA
  </p>

  <h2 className="text-[22px] tracking-[0.16em] mb-10 font-light text-white/90 leading-[1.62]">
    カナダでの“極貧時代”が、後の革命の土台になった。
  </h2>

  <img
    src="/images/musk/canada_life.png"
    className="
      w-full aspect-[4/3] rounded-[14px] object-cover
      opacity-[0.95]
      shadow-[0_0_28px_rgba(255,255,255,0.06)]
      mb-8
    "
    alt=""
  />

  <p className="leading-[1.9] text-[15px] opacity-[0.85] mb-6">
    彼はカナダに渡り、働きながら大学へ通いはじめた。
    食べるものもギリギリ、家も安アパート。
  </p>

  <p className="leading-[1.9] text-[15px] opacity-[0.85] mb-6">
    けれど、ここで “未来を読む力” が磨かれる。  
    テクノロジー、宇宙、エネルギー。  
    これらすべてが「人類が絶対に必要とする分野」だと気づいた。
  </p>

  <p className="leading-[1.9] text-[15px] opacity-[0.85]">
    マスクの強さは、最初から天才だったのではなく、  
    **“未来を選び続けた意志” にある。**
  </p>
</section>



{/* =========================================================
    CHAPTER 07 — ZIP2
========================================================= */}
<section className="fade-sec-sp max-w-[480px] mx-auto px-4 py-[120px]">
  <p className="text-[11px] tracking-[0.26em] opacity-50 mb-6">
    CHAPTER 07 — ZIP2
  </p>

  <h2 className="text-[22px] tracking-[0.16em] mb-10 font-light text-white/90 leading-[1.62]">
    初めての“本格起業”。止まらない飢えが世界を動かす。
  </h2>

  <img
    src="/images/musk/zip2_room.png"
    className="
      w-full aspect-[4/3] rounded-[14px] object-cover
      opacity-[0.95]
      shadow-[0_0_28px_rgba(255,255,255,0.06)]
      mb-8
    "
    alt=""
  />

  <p className="leading-[1.9] text-[15px] opacity-[0.85] mb-6">
    1995年。インターネット黎明期。  
    彼は弟とともに Zip2 を立ち上げた。
    住む場所がないので、オフィスに寝泊まりしながらコードを書き続けた。
  </p>

  <p className="leading-[1.9] text-[15px] opacity-[0.85] mb-6">
    靴も買えない。シャワーも週数回。  
    けれど、世界は確実に変わっていった。
  </p>

  <p className="leading-[1.9] text-[15px] opacity-[0.85]">
    “誰よりも長く働いた者が市場を奪う”  
    これがマスクの生存戦略だった。
  </p>
</section>



{/* =========================================================
    CHAPTER 08 — X.COM
========================================================= */}
<section className="fade-sec-sp max-w-[480px] mx-auto px-4 py-[120px]">
  <p className="text-[11px] tracking-[0.26em] opacity-50 mb-6">
    CHAPTER 08 — X.COM
  </p>

  <h2 className="text-[22px] tracking-[0.16em] mb-10 font-light text-white/90 leading-[1.62]">
    “未来のお金” をつくるため、銀行を破壊した。
  </h2>

  <img
    src="/images/musk/xcom.png"
    className="
      w-full aspect-[4/3] rounded-[14px] object-cover
      opacity-[0.95]
      shadow-[0_0_28px_rgba(255,255,255,0.06)]
      mb-8
    "
    alt=""
  />

  <p className="leading-[1.9] text-[15px] opacity-[0.85] mb-6">
    Zip2売却後、彼は X.com を設立。  
    “オンラインバンク” の先駆けとなり、後に PayPal へと統合される。
  </p>

  <p className="leading-[1.9] text-[15px] opacity-[0.85] mb-6">
    ただのサービス作りではなく、  
    **「金融構造そのもののアップデート」** に挑んだ。
  </p>

  <p className="leading-[1.9] text-[15px] opacity-[0.85]">
    彼の天才性は、“小さく稼ぐ”という発想を持たず、  
    最初から “地球規模” に照準を合わせていたことだ。
  </p>
</section>



{/* =========================================================
    CHAPTER 09 — FRICTION
========================================================= */}
<section className="fade-sec-sp max-w-[480px] mx-auto px-4 py-[120px]">
  <p className="text-[11px] tracking-[0.26em] opacity-50 mb-6">
    CHAPTER 09 — FRICTION
  </p>

  <h2 className="text-[22px] tracking-[0.16em] mb-10 font-light text-white/90 leading-[1.62]">
    才能は称賛されるが、“異物” は嫌われる。
  </h2>

  <img
    src="/images/musk/boardroom.png"
    className="
      w-full aspect-[4/3] rounded-[14px] object-cover
      opacity-[0.95]
      shadow-[0_0_28px_rgba(255,255,255,0.06)]
      mb-8
    "
    alt=""
  />

  <p className="leading-[1.9] text-[15px] opacity-[0.85] mb-6">
    マスクのリーダーシップは強すぎて、  
    ときに反発を生んだ。  
    PayPalでは CEO を解任されるという挫折を味わう。
  </p>

  <p className="leading-[1.9] text-[15px] opacity-[0.85] mb-6">
    しかし、彼の視線は“もっと先”にあった。  
    地球ではなく、宇宙。
  </p>

  <p className="leading-[1.9] text-[15px] opacity-[0.85]">
    マスクは挫折で止まるのではなく、  
    **「より大きな壁」に向かうタイプだった。**
  </p>
</section>



{/* =========================================================
    CHAPTER 10 — SPACE X ORIGIN
========================================================= */}
<section className="fade-sec-sp max-w-[480px] mx-auto px-4 py-[120px]">
  <p className="text-[11px] tracking-[0.26em] opacity-50 mb-6">
    CHAPTER 10 — SPACE X ORIGIN
  </p>

  <h2 className="text-[22px] tracking-[0.16em] mb-10 font-light text-white/90 leading-[1.62]">
    “人類を宇宙に出す” という、無謀すぎる挑戦。
  </h2>

  <img
    src="/images/musk/rebirth.png"
    className="
      w-full aspect-[4/3] rounded-[14px] object-cover
      opacity-[0.95]
      shadow-[0_0_28px_rgba(255,255,255,0.06)]
      mb-8
    "
    alt=""
  />

  <p className="leading-[1.9] text-[15px] opacity-[0.85] mb-6">
    PayPal売却後の資金をほぼ全額つぎ込み、  
    彼は宇宙ベンチャー SpaceX を創業した。
  </p>

  <p className="leading-[1.9] text-[15px] opacity-[0.85] mb-6">
    ロケット開発は失敗の連続。  
    だが、**“最後の1回分の燃料”** が残っていた。
  </p>

  <p className="leading-[1.9] text-[15px] opacity-[0.85]">
    ここから、彼の“人類史に残る逆転劇”が始まる。
  </p>
</section>
{/* =========================================================
    CHAPTER 11 — FALCON 1
========================================================= */}
<section className="fade-sec-sp max-w-[480px] mx-auto px-4 py-[120px]">
  <p className="text-[11px] tracking-[0.26em] opacity-50 mb-6">
    CHAPTER 11 — FALCON 1
  </p>

  <h2 className="text-[22px] tracking-[0.16em] mb-10 font-light text-white/90 leading-[1.62]">
    3度の失敗。資金は底。  
    それでも、彼は止まらなかった。
  </h2>

  <img
    src="/images/musk/collapse1.png"
    className="
      w-full aspect-[4/3] rounded-[14px] object-cover
      opacity-[0.95]
      shadow-[0_0_28px_rgba(255,255,255,0.06)]
      mb-8
    "
    alt=""
  />

  <p className="leading-[1.9] text-[15px] opacity-[0.85] mb-6">
    Falcon1 は 3回連続で失敗。  
    会社も、彼の私財も、ほぼすべて消えた。
  </p>

  <p className="leading-[1.9] text-[15px] opacity-[0.85] mb-6">
    世界の専門家たちは言った。  
    「民間でロケットなんて不可能だ」
  </p>

  <p className="leading-[1.9] text-[15px] opacity-[0.85]">
    けれどマスクは、  
    **“あと1回分” の資金だけは残した。**  
    すべてを賭けた、最後の1発。
  </p>
</section>



{/* =========================================================
    CHAPTER 12 — MIRACLE
========================================================= */}
<section className="fade-sec-sp max-w-[480px] mx-auto px-4 py-[120px]">
  <p className="text-[11px] tracking-[0.26em] opacity-50 mb-6">
    CHAPTER 12 — MIRACLE
  </p>

  <h2 className="text-[22px] tracking-[0.16em] mb-10 font-light text-white/90 leading-[1.62]">
    歴史が変わった。  
    Falcon1──ついに成功。
  </h2>

  <img
    src="/images/musk/starship.png"
    className="
      w-full aspect-[4/3] rounded-[14px] object-cover
      opacity-[0.95]
      shadow-[0_0_28px_rgba(255,255,255,0.06)]
      mb-8
    "
    alt=""
  />

  <p className="leading-[1.9] text-[15px] opacity-[0.85] mb-6">
    2008年9月。  
    Falcon1 はついに軌道投入に成功し、  
    “民間初の快挙” として歴史に刻まれた。
  </p>

  <p className="leading-[1.9] text-[15px] opacity-[0.85]">
    これが後の NASA 契約、Falcon9、  
    そして人類初の“再利用ロケット”につながる。
  </p>
</section>



{/* =========================================================
    CHAPTER 13 — TESLA
========================================================= */}
<section className="fade-sec-sp max-w-[480px] mx-auto px-4 py-[120px]">
  <p className="text-[11px] tracking-[0.26em] opacity-50 mb-6">
    CHAPTER 13 — TESLA
  </p>

  <h2 className="text-[22px] tracking-[0.16em] mb-10 font-light text-white/90 leading-[1.62]">
    電気自動車はダサい──  
    その常識を、彼は嫌った。
  </h2>

  <img
    src="/images/musk/tesla.png"
    className="
      w-full aspect-[4/3] rounded-[14px] object-cover
      opacity-[0.95]
      shadow-[0_0_28px_rgba(255,255,255,0.06)]
      mb-8
    "
    alt=""
  />

  <p className="leading-[1.9] text-[15px] opacity-[0.85] mb-6">
    当時の電気自動車は「遅い・短距離・高い」の三重苦。  
    しかしマスクは言った。
  </p>

  <p className="leading-[1.9] text-[15px] opacity-[0.85] mb-6 italic text-white/70">
    “最高に美しく、最高に速いEVをつくればいい”
  </p>

  <p className="leading-[1.9] text-[15px] opacity-[0.85]">
    そうして生まれたのが Tesla Roadster であり、  
    そこから EV 革命が始まった。
  </p>
</section>



{/* =========================================================
    CHAPTER 14 — STARSHIP
========================================================= */}
<section className="fade-sec-sp max-w-[480px] mx-auto px-4 py-[120px]">
  <p className="text-[11px] tracking-[0.26em] opacity-50 mb-6">
    CHAPTER 14 — STARSHIP
  </p>

  <h2 className="text-[22px] tracking-[0.16em] mb-10 font-light text-white/90 leading-[1.62]">
    “火星移住計画” は狂気ではない。  
    彼にとっては、次のフェーズだ。
  </h2>

  <img
    src="/images/musk/starship1.png"
    className="
      w-full aspect-[4/3] rounded-[14px] object-cover
      opacity-[0.95]
      shadow-[0_0_28px_rgba(255,255,255,0.06)]
      mb-8
    "
    alt=""
  />

  <p className="leading-[1.9] text-[15px] opacity-[0.85] mb-6">
    Starship は “人類史最大のロケット”。  
    その目的はただひとつ。
  </p>

  <p className="leading-[1.9] text-[15px] opacity-[0.88] italic text-white/80 mb-6">
    “人類を多惑星種にする”
  </p>

  <p className="leading-[1.9] text-[15px] opacity-[0.85]">
    彼はロケットを飛ばしたいのではない。  
    **種としての人類を存続させたい。**
  </p>
</section>



{/* =========================================================
    CHAPTER 15 — NEURALINK
========================================================= */}
<section className="fade-sec-sp max-w-[480px] mx-auto px-4 py-[120px]">
  <p className="text-[11px] tracking-[0.26em] opacity-50 mb-6">
    CHAPTER 15 — NEURALINK
  </p>

  <h2 className="text-[22px] tracking-[0.16em] mb-10 font-light text-white/90 leading-[1.62]">
    “脳 × コンピュータ”  
    彼が次に見たのは、人類のOS。
  </h2>

  <img
    src="/images/musk/neuralink.png"
    className="
      w-full aspect-[4/3] rounded-[14px] object-cover
      opacity-[0.95]
      shadow-[0_0_28px_rgba(255,255,255,0.06)]
      mb-8
    "
    alt=""
  />

  <p className="leading-[1.9] text-[15px] opacity-[0.85] mb-6">
    Neuralink は “脳にチップを入れる” 技術。  
    賛否両論だが、マスクの視線はもっと先にある。
  </p>

  <p className="leading-[1.9] text-[15px] opacity-[0.85]">
    彼の目的は、  
    **AI と人類の共存インターフェースをつくること。**
  </p>
</section>



{/* =========================================================
    CHAPTER 16 — X / TWITTER
========================================================= */}
<section className="fade-sec-sp max-w-[480px] mx-auto px-4 py-[120px]">
  <p className="text-[11px] tracking-[0.26em] opacity-50 mb-6">
    CHAPTER 16 — X (TWITTER)
  </p>

  <h2 className="text-[22px] tracking-[0.16em] mb-10 font-light text-white/90 leading-[1.62]">
    言論空間すら、“人類の未来” の一部だった。
  </h2>

  <img
    src="/images/musk/x.png"
    className="
      w-full aspect-[4/3] rounded-[14px] object-cover
      opacity-[0.95]
      shadow-[0_0_28px_rgba(255,255,255,0.06)]
      mb-8
    "
    alt=""
  />

  <p className="leading-[1.9] text-[15px] opacity-[0.85] mb-6">
    マスクは Twitter（現 X）を買収し、  
    言論の自由と情報の透明性を守ろうとした。
  </p>

  <p className="leading-[1.9] text-[15px] opacity-[0.85]">
    彼にとって SNS は“遊び”ではない。  
    **文明の意思決定インフラ** なのだ。
  </p>
</section>



{/* =========================================================
    FINAL CHAPTER — 17
========================================================= */}
<section className="fade-sec-sp max-w-[480px] mx-auto px-4 py-[160px]">
  <p className="text-[11px] tracking-[0.26em] opacity-50 mb-6">
    FINAL CHAPTER — 17
  </p>

  <h2 className="text-[24px] tracking-[0.18em] mb-12 font-light text-white/95 leading-[1.7] text-center">
    彼は“天才”ではない。  
    ただ、世界の鈍さに耐えられなかっただけだ。
  </h2>

  <p className="leading-[1.9] text-[15px] opacity-[0.85] text-center mb-10">
    マスクが教えてくれるのは、  
    未来は“発明するもの”ではなく、  
    **“選び続けるもの”** だということ。
  </p>

  <p className="leading-[1.9] text-[15px] opacity-[0.85] text-center">
    そしてその意志は、  
    小さな違和感から始まる。
  </p>
</section>



{/* =========================================================
    CLOSING VISUAL
========================================================= */}
<section className="fade-sec-sp relative max-w-[480px] mx-auto px-4 pb-[200px]">
  <img
    src="/images/musk/final.png"
    className="
      absolute inset-0 w-full h-full object-cover opacity-[0.9]
    "
    alt=""
  />

  <div
    className="
      absolute inset-0 backdrop-blur-[0.6px]
      bg-gradient-to-b from-black/70 via-black/40 to-black/10
    "
  />

  <div className="relative z-20 h-[46vh] flex items-center justify-center px-6 text-center">
    <h2
      className="
        text-[20px] leading-[1.62]
        tracking-[0.18em] font-light text-white/90
      "
    >
      未来は、挑んだ者だけが掴む。
    </h2>
  </div>
</section>
    </div>
  );
}