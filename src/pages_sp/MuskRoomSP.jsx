// ===========================
// MuskRoomSP.jsx（完全版 / 密度強化SP）
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
          letterSpacing: "0.28em",
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
     Fade-sec（SP）
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
    <div className="relative overflow-x-hidden bg-[#0d0d0d] text-white">
      {/* =========================================================
          HERO（SP版）
      ========================================================= */}
      <section className="fade-sec-sp relative min-h-[96vh] w-full overflow-hidden">
        {/* 背景ライン */}
        <div className="absolute inset-0 bg-[url('/images/musk/neural-lines.png')] bg-[length:180%] bg-center opacity-[0.18] mix-blend-screen" />

        {/* 白膜 */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/6 via-white/3 to-transparent" />

        {/* シルエット */}
        <img
          ref={heroImgRef}
          src="/images/musk/hero.png"
          className="
            absolute inset-0 h-full w-full
            object-cover opacity-[0.9]
            scale-[1.04]
          "
          alt=""
        />

        {/* テキスト */}
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-4 text-center">
          <h1
            ref={heroTitleRef}
            id="musk-hero-title-sp"
            className="
              text-[38px] tracking-[0.18em]
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
              tracking-[0.16em] text-white/55
              opacity-0 translate-y-[10px]
            "
          >
            GENIUS VECTOR
          </p>

          <p
            id="musk-hero-copy-sp"
            className="
              mt-10 text-[19px] leading-[1.76]
              tracking-[0.08em] text-white/85 font-light
              opacity-0 translate-y-[10px] max-w-[92%]
            "
          >
            常識を越えて生まれた頭脳。<br />
            世界の前提を疑い、文明の進行方向そのものを<br />
            書き換えようとした人間。
          </p>
        </div>
      </section>

      {/* =========================================================
          CHAPTER 01
      ========================================================= */}
      <section className="fade-sec-sp mx-auto max-w-[480px] px-4 py-[120px]">
        <p className="mb-6 text-[11px] tracking-[0.26em] opacity-50">
          CHAPTER 01 — CHILDHOOD
        </p>

        <h2 className="mb-10 text-[22px] leading-[1.6] tracking-[0.12em] font-light text-white/90">
          生まれた瞬間から、<br />
          世界の外側にいた。
        </h2>

        <img
          src="/images/musk/born.png"
          className="
            mb-8 w-full aspect-[4/3]
            rounded-[14px] object-cover opacity-[0.95]
            shadow-[0_0_28px_rgba(255,255,255,0.06)]
          "
          alt=""
        />

        <p className="mb-6 text-[15px] leading-[1.92] opacity-[0.85]">
          イーロン・マスクが生まれたのは南アフリカ・プレトリア。
          世界の中心から少し離れたその場所で、
          のちに世界の軌道を揺らす人間の物語は始まった。
        </p>

        <p className="mb-6 text-[15px] leading-[1.92] opacity-[0.85]">
          幼いころから、彼は周囲とは違う時間を生きていた。
          他の子どもたちが外で遊ぶあいだ、
          彼は分厚い科学書や百科事典に沈み込んでいた。
          世界を楽しむより先に、
          世界がどう動いているのかを知りたかった。
        </p>

        <p className="text-[15px] leading-[1.92] opacity-[0.85]">
          “なぜ世界はこう動くのか。”
          その問いこそが、彼のスタートだった。
          彼は最初から、現実を受け入れる側ではなく、
          仕組みごと見抜こうとする側の子どもだった。
        </p>
      </section>

      {/* =========================================================
          CHAPTER 02
      ========================================================= */}
      <section className="fade-sec-sp mx-auto max-w-[480px] px-4 py-[120px]">
        <p className="mb-6 text-[11px] tracking-[0.26em] opacity-50">
          CHAPTER 02 — ISOLATION
        </p>

        <h2 className="mb-10 text-[22px] leading-[1.6] tracking-[0.12em] font-light text-white/90">
          孤独は、彼を壊さず。<br />
          “方向”を与えた。
        </h2>

        <img
          src="/images/musk/childroom.png"
          className="
            mb-8 w-full aspect-[4/3]
            rounded-[14px] object-cover opacity-[0.95]
            shadow-[0_0_28px_rgba(255,255,255,0.06)]
          "
          alt=""
        />

        <p className="mb-6 text-[15px] leading-[1.92] opacity-[0.85]">
          学校では“浮いていた”。
          空想に沈みやすい性質は、
          同年代の子どもたちには理解されず、
          ときに暴力の対象になった。
          理解されないことは、
          幼い彼にとってすでに日常だった。
        </p>

        <p className="mb-6 text-[15px] leading-[1.92] opacity-[0.85]">
          だが孤独は壊れる原因ではなく、
          彼に“知識の宇宙”へ潜る方向を与えた。
          外側に居場所がないなら、
          自分の内側に世界を作ればいい。
          その発想が、すでにこの頃から始まっていた。
        </p>

        <p className="text-[15px] leading-[1.92] opacity-[0.85]">
          物理、SF、宇宙──
          本のページだけが、彼を裏切らなかった。
          孤独は欠損ではなく、
          のちに巨大な構想へつながる“集中の器”になっていく。
        </p>
      </section>

      {/* =========================================================
          CHAPTER 03
      ========================================================= */}
      <section className="fade-sec-sp mx-auto max-w-[480px] px-4 py-[120px]">
        <p className="mb-6 text-[11px] tracking-[0.26em] opacity-50">
          CHAPTER 03 — FIRST CREATION
        </p>

        <h2 className="mb-10 text-[22px] leading-[1.62] tracking-[0.12em] font-light text-white/90">
          12歳、初めて“作品”で<br />
          世界が動いた。
        </h2>

        <img
          src="/images/musk/game.png"
          className="
            mb-8 w-full aspect-[4/3]
            rounded-[14px] object-cover opacity-[0.95]
            shadow-[0_0_28px_rgba(255,255,255,0.06)]
          "
          alt=""
        />

        <p className="mb-6 text-[15px] leading-[1.92] opacity-[0.85]">
          12歳のとき、彼は自作ゲーム「Blastar」を完成させた。
          コードは粗くても、発想は驚くほど筋が通っていた。
          ただ遊ぶためではなく、
          自分の頭の中にあるものを外へ出す感覚が、
          すでに芽生えていた。
        </p>

        <p className="mb-6 text-[15px] leading-[1.92] opacity-[0.85]">
          そのプログラムは約500ドルで売却される。
          これが彼の最初の“起業”だった。
          思考はただの妄想ではなく、
          現実に作用しうるものだと彼は知る。
        </p>

        <p className="text-[15px] leading-[1.92] opacity-[0.85]">
          才能とは天から降るものではない。
          “気づいた瞬間から燃えはじめる火種”だと、
          彼は人生のかなり早い段階で証明してしまった。
        </p>
      </section>

      {/* =========================================================
          CHAPTER 04
      ========================================================= */}
      <section className="fade-sec-sp mx-auto max-w-[480px] px-5 py-[120px]">
        <p className="mb-6 text-[11px] tracking-[0.26em] opacity-55">
          CHAPTER 04 — SHADOWS OF HOME
        </p>

        <h2 className="mb-10 text-[22px] leading-[1.66] tracking-[0.12em] font-light text-white/90">
          家庭は、彼にとって<br />
          “最初の試練”だった。
        </h2>

        <img
          src="/images/musk/home.png"
          className="
            mb-10 w-full aspect-[4/3]
            rounded-[16px] object-cover opacity-[0.92]
            shadow-[0_0_32px_rgba(255,255,255,0.05)]
          "
          alt=""
        />

        <div className="space-y-7">
          <p className="text-[15px] leading-[1.95] opacity-[0.85]">
            イーロンの家庭環境は、決して穏やかではなかった。
            とくに父親との関係は苛烈で、
            彼の心に深い影を落とした。
            “正しさ”を押しつけられ、
            感情よりも服従を求められる日々。
            家は休まる場所ではなく、
            常に緊張が走る空間だった。
          </p>

          <p className="text-[15px] leading-[1.95] opacity-[0.85]">
            しかし、その環境は彼をただ傷つけただけではない。
            外側がどれだけ不安定でも、
            自分の内側に潜り込み、そこに世界を作る力を与えた。
            書物、宇宙、物語。
            彼は思想の世界に自分を避難させていた。
          </p>

          <p className="text-[15px] leading-[1.95] opacity-[0.85]">
            この“内的避難所”が、
            のちの SpaceX、Tesla、Neuralink の
            異常なまでの集中力と執念の根っこになる。
          </p>
        </div>
      </section>

      {/* =========================================================
          CHAPTER 05
      ========================================================= */}
      <section className="fade-sec-sp mx-auto max-w-[480px] px-4 py-[120px]">
        <p className="mb-6 text-[11px] tracking-[0.26em] opacity-50">
          CHAPTER 05 — NORTHBOUND FLIGHT
        </p>

        <h2 className="mb-10 text-[22px] leading-[1.62] tracking-[0.12em] font-light text-white/90">
          “この国では、未来をつくれない。”
        </h2>

        <img
          src="/images/musk/flight.png"
          className="
            mb-8 w-full aspect-[4/3]
            rounded-[14px] object-cover opacity-[0.95]
            shadow-[0_0_28px_rgba(255,255,255,0.06)]
          "
          alt=""
        />

        <p className="mb-6 text-[15px] leading-[1.92] opacity-[0.85]">
          南アフリカは彼にとって重すぎた。
          父との関係、閉塞した社会、将来を縛る制度。
          そのどれもが、彼の思考と相性が悪すぎた。
          ここに留まれば、
          未来そのものが削れていくと直感していた。
        </p>

        <p className="mb-6 text-[15px] leading-[1.92] opacity-[0.85]">
          17歳で国を出る決断をする。
          だれも助けてくれない。保証もない。
          けれど、彼は“未来を選ぶ権利”だけは捨てなかった。
          誰にも理解されず、それでも行く。
        </p>

        <p className="text-[15px] leading-[1.92] opacity-[0.85]">
          逃げたのではない。
          未来をつくれる場所へ“移動した”。
          後に世界を変える男の、
          最初の革命はこの移動から始まっている。
        </p>
      </section>

      {/* =========================================================
          CHAPTER 06
      ========================================================= */}
      <section className="fade-sec-sp mx-auto max-w-[480px] px-4 py-[120px]">
        <p className="mb-6 text-[11px] tracking-[0.26em] opacity-50">
          CHAPTER 06 — SURVIVAL & IGNITION
        </p>

        <h2 className="mb-10 text-[22px] leading-[1.62] tracking-[0.12em] font-light text-white/90">
          生き延びるために働き、<br />
          学ぶために燃えた。
        </h2>

        <img
          src="/images/musk/canada_life.png"
          className="
            mb-8 w-full aspect-[4/3]
            rounded-[14px] object-cover opacity-[0.95]
            shadow-[0_0_28px_rgba(255,255,255,0.06)]
          "
          alt=""
        />

        <p className="mb-6 text-[15px] leading-[1.92] opacity-[0.85]">
          北米へ渡った彼を待っていたのは、
          輝かしい未来ではなく極貧生活だった。
          食べるものもギリギリ、家も安アパート。
          だが彼は、その環境すら通過点として見ていた。
        </p>

        <p className="mb-6 text-[15px] leading-[1.92] opacity-[0.85]">
          それでも「学ぶ時間」だけは手放さなかった。
          働き終えたあとに本を開き、
          宇宙、AI、物理、エネルギーに吸い寄せられていく。
          未来をつくるのは知識だと、
          本能的に知っていたからだ。
        </p>

        <p className="text-[15px] leading-[1.92] opacity-[0.85]">
          彼の強さは、最初から天才だったことではない。
          “未来を選び続けた意志” にある。
        </p>
      </section>

      {/* =========================================================
          CHAPTER 07
      ========================================================= */}
      <section className="fade-sec-sp mx-auto max-w-[480px] px-4 py-[120px]">
        <p className="mb-6 text-[11px] tracking-[0.26em] opacity-50">
          CHAPTER 07 — ZIP2
        </p>

        <h2 className="mb-10 text-[22px] leading-[1.62] tracking-[0.12em] font-light text-white/90">
          寝袋と中古PCから、<br />
          最初の会社が生まれた。
        </h2>

        <img
          src="/images/musk/zip2_room.png"
          className="
            mb-8 w-full aspect-[4/3]
            rounded-[14px] object-cover opacity-[0.95]
            shadow-[0_0_28px_rgba(255,255,255,0.06)]
          "
          alt=""
        />

        <p className="mb-6 text-[15px] leading-[1.92] opacity-[0.85]">
          1995年。インターネット黎明期。
          彼は弟とともに Zip2 を立ち上げた。
          住む場所がないので、
          オフィスに寝泊まりしながらコードを書き続けた。
          生活は最低限で、環境はほとんど戦場だった。
        </p>

        <p className="mb-6 text-[15px] leading-[1.92] opacity-[0.85]">
          靴も買えない。シャワーも週に数回。
          それでも彼らは止まらなかった。
          世界は確実に変わっていくと信じていたからだ。
          苦しさより、先に見ている景色のほうが大きかった。
        </p>

        <p className="text-[15px] leading-[1.92] opacity-[0.85]">
          “誰よりも長く働いた者が市場を奪う。”
          これが、マスクの初期の生存戦略だった。
        </p>
      </section>

      {/* =========================================================
          CHAPTER 08
      ========================================================= */}
      <section className="fade-sec-sp mx-auto max-w-[480px] px-4 py-[120px]">
        <p className="mb-6 text-[11px] tracking-[0.26em] opacity-50">
          CHAPTER 08 — X.COM
        </p>

        <h2 className="mb-10 text-[22px] leading-[1.62] tracking-[0.12em] font-light text-white/90">
          インターネットで“お金”を<br />
          再発明する。
        </h2>

        <img
          src="/images/musk/xcom.png"
          className="
            mb-8 w-full aspect-[4/3]
            rounded-[14px] object-cover opacity-[0.95]
            shadow-[0_0_28px_rgba(255,255,255,0.06)]
          "
          alt=""
        />

        <p className="mb-6 text-[15px] leading-[1.92] opacity-[0.85]">
          Zip2売却後、彼は X.com を設立する。
          それは単なるオンラインサービスではなく、
          金融構造そのものをアップデートする試みだった。
          まだ誰もオンライン送金を本気で信用していなかった時代だ。
        </p>

        <p className="mb-6 text-[15px] leading-[1.92] opacity-[0.85]">
          だが彼は疑わなかった。
          “未来の常識は、いま疑われている場所にある。”
          その視線だけは、最初から一貫していた。
          彼は常に、既存の仕組みの外側から社会を見ていた。
        </p>

        <p className="text-[15px] leading-[1.92] opacity-[0.85]">
          X.com は後に PayPal へとつながり、
          世界の送金インフラを静かに変える最初の火種になった。
        </p>
      </section>

      {/* =========================================================
          CHAPTER 09
      ========================================================= */}
      <section className="fade-sec-sp mx-auto max-w-[480px] px-4 py-[120px]">
        <p className="mb-6 text-[11px] tracking-[0.26em] opacity-50">
          CHAPTER 09 — SUCCESS & BETRAYAL
        </p>

        <h2 className="mb-10 text-[22px] leading-[1.62] tracking-[0.12em] font-light text-white/90">
          成功した会社から、<br />
          追放された。
        </h2>

        <img
          src="/images/musk/boardroom.png"
          className="
            mb-8 w-full aspect-[4/3]
            rounded-[14px] object-cover opacity-[0.95]
            shadow-[0_0_28px_rgba(255,255,255,0.06)]
          "
          alt=""
        />

        <p className="mb-6 text-[15px] leading-[1.92] opacity-[0.85]">
          PayPal が急成長するなか、
          マスクは理想を押し広げようとする創業者だった。
          だが現場は、効率と安全を優先した。
          未来を見すぎる視線は、
          ときに組織の中で“異物”になる。
        </p>

        <p className="mb-6 text-[15px] leading-[1.92] opacity-[0.85]">
          そしてある日、
          飛行機に乗っている間に CEO を解任される。
          電話一本で、自分が作った会社から外される。
          それは単なる失敗ではなく、
          自分の思想ごと否定されたような体験だった。
        </p>

        <p className="text-[15px] leading-[1.92] opacity-[0.85]">
          けれど彼は止まらなかった。
          マスクは挫折で止まるのではなく、
          “より大きな壁” に向かうタイプだった。
        </p>
      </section>

      {/* =========================================================
          CHAPTER 10
      ========================================================= */}
      <section className="fade-sec-sp mx-auto max-w-[480px] px-4 py-[120px]">
        <p className="mb-6 text-[11px] tracking-[0.26em] opacity-50">
          CHAPTER 10 — SPACE X ORIGIN
        </p>

        <h2 className="mb-10 text-[22px] leading-[1.62] tracking-[0.12em] font-light text-white/90">
          “人類を宇宙に出す” という、<br />
          無謀すぎる挑戦。
        </h2>

        <img
          src="/images/musk/rebirth.png"
          className="
            mb-8 w-full aspect-[4/3]
            rounded-[14px] object-cover opacity-[0.95]
            shadow-[0_0_28px_rgba(255,255,255,0.06)]
          "
          alt=""
        />

        <p className="mb-6 text-[15px] leading-[1.92] opacity-[0.85]">
          PayPal 売却後の資金をほぼ全額つぎ込み、
          彼は宇宙ベンチャー SpaceX を創業した。
          それは事業拡大ではない。
          人類の進行方向を変えるための賭けだった。
        </p>

        <p className="mb-6 text-[15px] leading-[1.92] opacity-[0.85]">
          ロケット開発は失敗の連続。
          専門家たちは笑い、
          世界は不可能だと決めつけた。
          だが彼は、他人の常識で未来を測る人間ではなかった。
        </p>

        <p className="text-[15px] leading-[1.92] opacity-[0.85]">
          ここから、彼の“人類史に残る逆転劇”が始まる。
        </p>
      </section>

      {/* =========================================================
          CHAPTER 11
      ========================================================= */}
      <section className="fade-sec-sp mx-auto max-w-[480px] px-4 py-[120px]">
        <p className="mb-6 text-[11px] tracking-[0.26em] opacity-50">
          CHAPTER 11 — FALCON 1
        </p>

        <h2 className="mb-10 text-[22px] leading-[1.62] tracking-[0.12em] font-light text-white/90">
          3度の失敗。資金は底。<br />
          それでも、彼は止まらなかった。
        </h2>

        <img
          src="/images/musk/collapse1.png"
          className="
            mb-8 w-full aspect-[4/3]
            rounded-[14px] object-cover opacity-[0.95]
            shadow-[0_0_28px_rgba(255,255,255,0.06)]
          "
          alt=""
        />

        <p className="mb-6 text-[15px] leading-[1.92] opacity-[0.85]">
          Falcon 1 は3回連続で失敗した。
          会社も、彼の私財も、ほぼすべて消えた。
          挑戦のたびに資金も信用も削れ、
          世界は静かに彼の敗北を待っていた。
        </p>

        <p className="mb-6 text-[15px] leading-[1.92] opacity-[0.85]">
          専門家たちは言った。
          「民間でロケットなんて不可能だ。」
          だが彼は、その不可能という言葉を
          信じる側の人間ではなかった。
        </p>

        <p className="text-[15px] leading-[1.92] opacity-[0.85]">
          けれどマスクは、
          “あと1回分” の資金だけは残した。
          すべてを賭けた、最後の一発。
        </p>
      </section>

      {/* =========================================================
          CHAPTER 12
      ========================================================= */}
      <section className="fade-sec-sp mx-auto max-w-[480px] px-4 py-[120px]">
        <p className="mb-6 text-[11px] tracking-[0.26em] opacity-50">
          CHAPTER 12 — MIRACLE
        </p>

        <h2 className="mb-10 text-[22px] leading-[1.62] tracking-[0.12em] font-light text-white/90">
          歴史が変わった。<br />
          Falcon 1──ついに成功。
        </h2>

        <img
          src="/images/musk/starship.png"
          className="
            mb-8 w-full aspect-[4/3]
            rounded-[14px] object-cover opacity-[0.95]
            shadow-[0_0_28px_rgba(255,255,255,0.06)]
          "
          alt=""
        />

        <p className="mb-6 text-[15px] leading-[1.92] opacity-[0.85]">
          2008年9月。
          Falcon 1 はついに軌道投入に成功し、
          “民間初の快挙” として歴史に刻まれた。
          あの最後の1回が、
          人類の宇宙開発の流れそのものを変えた。
        </p>

        <p className="text-[15px] leading-[1.92] opacity-[0.85]">
          これが後の NASA 契約、Falcon 9、
          そして再利用ロケットへとつながる。
          奇跡は偶然ではない。
          最後まで賭けを降りなかった人間の執念が生んだ結果だった。
        </p>
      </section>

      {/* =========================================================
          CHAPTER 13
      ========================================================= */}
      <section className="fade-sec-sp mx-auto max-w-[480px] px-4 py-[120px]">
        <p className="mb-6 text-[11px] tracking-[0.26em] opacity-50">
          CHAPTER 13 — TESLA
        </p>

        <h2 className="mb-10 text-[22px] leading-[1.62] tracking-[0.12em] font-light text-white/90">
          電気自動車はダサい──<br />
          その常識を、彼は嫌った。
        </h2>

        <img
          src="/images/musk/tesla.png"
          className="
            mb-8 w-full aspect-[4/3]
            rounded-[14px] object-cover opacity-[0.95]
            shadow-[0_0_28px_rgba(255,255,255,0.06)]
          "
          alt=""
        />

        <p className="mb-6 text-[15px] leading-[1.92] opacity-[0.85]">
          当時の電気自動車は「遅い・短距離・高い」の三重苦だった。
          だがマスクは、その前提そのものを嫌った。
          問題はEVであることではない。
          まだ本気で作られていないことだと見抜いていた。
        </p>

        <p className="mb-6 text-[15px] leading-[1.92] italic text-white/70 opacity-[0.9]">
          “最高に美しく、最高に速いEVをつくればいい”
        </p>

        <p className="text-[15px] leading-[1.92] opacity-[0.85]">
          そうして Tesla Roadster が生まれ、
          そこから EV 革命が始まった。
          彼はいつも、既存市場に適応するのではなく、
          市場の前提そのものを書き換える。
        </p>
      </section>

      {/* =========================================================
          CHAPTER 14
      ========================================================= */}
      <section className="fade-sec-sp mx-auto max-w-[480px] px-4 py-[120px]">
        <p className="mb-6 text-[11px] tracking-[0.26em] opacity-50">
          CHAPTER 14 — STARSHIP
        </p>

        <h2 className="mb-10 text-[22px] leading-[1.62] tracking-[0.12em] font-light text-white/90">
          “火星移住計画” は狂気ではない。<br />
          彼にとっては、次のフェーズだ。
        </h2>

        <img
          src="/images/musk/starship1.png"
          className="
            mb-8 w-full aspect-[4/3]
            rounded-[14px] object-cover opacity-[0.95]
            shadow-[0_0_28px_rgba(255,255,255,0.06)]
          "
          alt=""
        />

        <p className="mb-6 text-[15px] leading-[1.92] opacity-[0.85]">
          Starship は人類史最大級のロケットだ。
          だが彼が飛ばしたいのはロケットそのものではない。
          目的はただひとつ。
          人類の居場所を、地球の外へ増やすことだ。
        </p>

        <p className="mb-6 text-[15px] leading-[1.92] italic text-white/80 opacity-[0.92]">
          “人類を多惑星種にする”
        </p>

        <p className="text-[15px] leading-[1.92] opacity-[0.85]">
          彼はロケットを作りたいのではない。
          種としての人類を存続させたい。
          その視点は、国家や市場よりも
          いつも文明そのものへ向いている。
        </p>
      </section>

      {/* =========================================================
          CHAPTER 15
      ========================================================= */}
      <section className="fade-sec-sp mx-auto max-w-[480px] px-4 py-[120px]">
        <p className="mb-6 text-[11px] tracking-[0.26em] opacity-50">
          CHAPTER 15 — NEURALINK
        </p>

        <h2 className="mb-10 text-[22px] leading-[1.62] tracking-[0.12em] font-light text-white/90">
          “脳 × コンピュータ”<br />
          彼が次に見たのは、人類のOS。
        </h2>

        <img
          src="/images/musk/neuralink.png"
          className="
            mb-8 w-full aspect-[4/3]
            rounded-[14px] object-cover opacity-[0.95]
            shadow-[0_0_28px_rgba(255,255,255,0.06)]
          "
          alt=""
        />

        <p className="mb-6 text-[15px] leading-[1.92] opacity-[0.85]">
          Neuralink は脳にチップを入れる技術として見られがちだ。
          だが彼の視線はもっと先にある。
          それは道具を便利にする話ではなく、
          人間の知能そのものの輪郭を書き換える話だ。
        </p>

        <p className="text-[15px] leading-[1.92] opacity-[0.85]">
          彼の目的は、
          AI と人類の共存インターフェースをつくること。
          つまり未来のOSを、人間の側から握りにいくことだ。
        </p>
      </section>

      {/* =========================================================
          CHAPTER 16
      ========================================================= */}
      <section className="fade-sec-sp mx-auto max-w-[480px] px-4 py-[120px]">
        <p className="mb-6 text-[11px] tracking-[0.26em] opacity-50">
          CHAPTER 16 — X
        </p>

        <h2 className="mb-10 text-[22px] leading-[1.62] tracking-[0.12em] font-light text-white/90">
          SNSではなく、“世界の言語系”を<br />
          握りにいく。
        </h2>

        <img
          src="/images/musk/x.png"
          className="
            mb-8 w-full aspect-[4/3]
            rounded-[14px] object-cover opacity-[0.95]
            shadow-[0_0_28px_rgba(255,255,255,0.06)]
          "
          alt=""
        />

        <p className="mb-6 text-[15px] leading-[1.92] opacity-[0.85]">
          マスクが Twitter を買収し X へ変えたのは、
          単なるリブランディングではない。
          情報・言論・金融を束ねる巨大OSとして、
          世界規模のインフラへ再設計しようとしている。
        </p>

        <p className="text-[15px] leading-[1.92] opacity-[0.85]">
          彼にとってSNSは遊びではない。
          文明の意思決定インフラそのものだ。
          彼はいつも、サービスではなく
          “文明の神経系” を握ろうとする。
        </p>
      </section>

      {/* =========================================================
          FINAL CHAPTER
      ========================================================= */}
      <section className="fade-sec-sp mx-auto max-w-[480px] px-4 py-[160px]">
        <p className="mb-6 text-[11px] tracking-[0.26em] opacity-50">
          FINAL CHAPTER
        </p>

        <h2 className="mb-12 text-center text-[24px] leading-[1.68] tracking-[0.14em] font-light text-white/95">
          世界は、彼の意志で<br />
          わずかに動いた。
        </h2>

        <p className="mb-10 text-center text-[15px] leading-[1.92] opacity-[0.85]">
          幼少期の静かな孤独。<br />
          追われるように走った青春。<br />
          すべてを失いかけた地獄。<br />
          そして、星と情報と脳をつなぐ未来の設計。<br />
          そのどれもが、ひとりの人間の中で連続している。
        </p>

        <p className="mb-10 text-center text-[15px] leading-[1.92] opacity-[0.85]">
          天才だから成し遂げたのではない。<br />
          世界がまだ見ていない“未来の形”を、<br />
          彼だけが先に現実として信じ切っていたからだ。<br />
          そして、その信念に自分の人生ごと賭けた。
        </p>

        <p className="text-center text-[15px] leading-[1.92] opacity-[0.85]">
          彼が動かしたのは企業だけではない。<br />
          人類がどこへ進めるのかという想像力そのものだ。<br />
          文明の進行方向を、少しだけ未来側へ傾ける。<br />
          彼のすべての事業は、そのための装置だった。
        </p>
      </section>

      {/* =========================================================
          CLOSING VISUAL
      ========================================================= */}
      <section className="fade-sec-sp relative mx-auto max-w-[480px] px-4 pb-[200px]">
        <img
          src="/images/musk/final.png"
          className="absolute inset-0 h-full w-full object-cover opacity-[0.9]"
          alt=""
        />

        <div
          className="
            absolute inset-0
            backdrop-blur-[0.6px]
            bg-gradient-to-b from-black/70 via-black/40 to-black/10
          "
        />

        <div className="relative z-20 flex h-[46vh] items-center justify-center px-6 text-center">
          <h2
            className="
              text-[20px] leading-[1.62]
              tracking-[0.14em] font-light text-white/90
            "
          >
            ELON MUSK —<br />
            A MAN WHO REWRITES GRAVITY.
          </h2>
        </div>
      </section>
    </div>
  );
}