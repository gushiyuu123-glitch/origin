// ===========================
// MuskRoom.jsx（Part 1 / 3）
// ===========================
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.config({
  ignoreMobileResize: true,
});

export default function MuskRoom() {
  const heroImgRef = useRef(null);
  const heroTitleRef = useRef(null);
  const heroSubRef = useRef(null);

  /* ===========================
     HERO：呼吸アニメ
  ============================ */
  useEffect(() => {
    const ctx = gsap.context(() => {
      if (heroImgRef.current) {
        gsap.to(heroImgRef.current, {
          scale: 1.008,
          duration: 8,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      }
      if (heroTitleRef.current) {
        gsap.to(heroTitleRef.current, {
          letterSpacing: "0.36em",
          duration: 7.2,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      }
    });
    return () => ctx.revert();
  }, []);

  /* ===========================
     HERO：フェードイン
  ============================ */
  useEffect(() => {
    gsap.to("#musk-hero-title", {
      opacity: 1,
      y: 0,
      duration: 0.7,
      ease: "power2.out",
      delay: 0.2,
    });
    gsap.to("#musk-hero-sub", {
      opacity: 1,
      y: 0,
      duration: 0.7,
      ease: "power2.out",
      delay: 0.35,
    });
    gsap.to("#musk-hero-copy", {
      opacity: 1,
      y: 0,
      duration: 0.75,
      ease: "power2.out",
      delay: 0.5,
    });
  }, []);

  /* ===========================
     Fade-in（CLSゼロ）
  ============================ */
  useEffect(() => {
    gsap.utils.toArray(".fade-sec").forEach((sec) => {
      gsap.fromTo(
        sec,
        { opacity: 0, filter: "blur(0.2px)" },
        {
          opacity: 1,
          filter: "blur(0px)",
          duration: 0.7,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sec,
            start: "top 85%",
          },
        }
      );
    });
  }, []);

  return (
    <div className="bg-[#0d0d0d] text-white overflow-x-hidden relative">

      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative min-h-screen w-full overflow-hidden fade-sec">

        {/* 背景ライン */}
        <div className="absolute inset-0 bg-[url('/images/musk/neural-lines.png')] bg-cover opacity-[0.18] mix-blend-screen"/>

        {/* 白膜 */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/6 via-white/2 to-transparent pointer-events-none"/>

        {/* シルエット */}
        <img
          ref={heroImgRef}
          src="/images/musk/hero.png"
          loading="eager"
          className="
            absolute inset-0 w-full aspect-[16/9]
            object-cover opacity-[0.92] scale-[1.02]
          "
          alt=""
        />

        {/* テキスト */}
        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 translate-y-[-1%] text-center z-10">

          <h1
            ref={heroTitleRef}
            id="musk-hero-title"
            className="
              text-[50px] tracking-[0.24em]
              text-white/95 font-normal
              opacity-0 translate-y-[10px]
              drop-shadow-[0_0_6px_rgba(255,255,255,0.08)]
            "
          >
            ELON MUSK
          </h1>

          <p
            ref={heroSubRef}
            id="musk-hero-sub"
            className="
              mt-3 text-[12px]
              tracking-[0.22em] text-white/55
              opacity-0 translate-y-[10px]
            "
          >
            GENIUS VECTOR
          </p>

          <p
            id="musk-hero-copy"
            className="
              mt-12 text-[27px] leading-[1.72]
              tracking-[0.14em] text-white/85 font-light
              opacity-0 translate-y-[10px] max-w-[700px]
            "
          >
            常識を越えて生まれた頭脳。
          </p>

        </div>
      </section>

      {/* =========================================================
          CHAPTER 01
      ========================================================= */}
      <section className="fade-sec max-w-[760px] mx-auto px-6 py-[180px]">

        <p className="text-[12px] tracking-[0.26em] opacity-50 mb-8">
          CHAPTER 01 — CHILDHOOD
        </p>

        <h2 className="text-[26px] tracking-[0.18em] mb-12 font-light text-white/90">
          生まれた瞬間から、世界の外側にいた。
        </h2>

        <div className="flex gap-10">
          <img
            src="/images/musk/born.png"
            className="
              w-[45%] aspect-[4/3]
              rounded-[16px] opacity-[0.95] object-cover
              shadow-[0_0_40px_rgba(255,255,255,0.06)]
            "
          />

          <div className="w-[55%] max-w-[600px]">
            <p className="leading-[2] text-[15px] opacity-[0.85] mb-7">
              イーロン・マスクが生まれたのは、南アフリカ・プレトリア。
              世界の大都市から距離のあるその土地で、彼の物語は始まった。
            </p>

            <p className="leading-[2] text-[15px] opacity-[0.85] mb-7">
              幼いころ、彼は周囲とは違う時間を生きていた。
              友だちが外で遊ぶあいだ、分厚い科学書に没頭していた。
            </p>

            <p className="leading-[2] text-[15px] opacity-[0.85]">
              “なぜ世界はこう動くのか。”  
              その問いの連続が、彼の出発点だった。
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
          CHAPTER 02
      ========================================================= */}
      <section className="fade-sec max-w-[760px] mx-auto px-6 py-[180px]">

        <p className="text-[12px] tracking-[0.26em] opacity-50 mb-8">
          CHAPTER 02 — ISOLATION
        </p>

        <h2 className="text-[26px] tracking-[0.18em] mb-12 font-light text-white/90">
          孤独は、彼を壊さず。“方向”を与えた。
        </h2>

        <div className="flex gap-10">

          <div className="w-[55%] max-w-[600px]">
            <p className="leading-[2] text-[15px] opacity-[0.85] mb-7">
              学校では“浮いていた”。空想に沈みすぎる性質は、
              同年代の子どもとは噛み合わず、ときに暴力の対象となった。
            </p>

            <p className="leading-[2] text-[15px] opacity-[0.85] mb-7">
              だが孤独は、彼を壊さなかった。
              逆に“知識の宇宙”へ潜る方向を与えた。
            </p>

            <p className="leading-[2] text-[15px] opacity-[0.85]">
              物理、SF、宇宙、機械──  
              本のページだけが彼を裏切らなかった。
            </p>
          </div>

          <img
            src="/images/musk/childroom.png"
            className="
              w-[45%] aspect-[4/3]
              rounded-[16px] object-cover opacity-[0.95]
              shadow-[0_0_40px_rgba(255,255,255,0.06)]
            "
          />
        </div>
      </section>

      {/* =========================================================
          CHAPTER 03
      ========================================================= */}
      <section className="fade-sec max-w-[760px] mx-auto px-6 py-[180px]">

        <p className="text-[12px] tracking-[0.26em] opacity-50 mb-8">
          CHAPTER 03 — FIRST CREATION
        </p>

        <h2 className="text-[26px] tracking-[0.18em] mb-12 font-light text-white/90">
          12歳、初めて“作品”で世界が動いた。
        </h2>

        <div className="flex gap-10">

          <img
            src="/images/musk/game.png"
            className="
              w-[45%] aspect-[4/3] rounded-[16px]
              object-cover opacity-[0.95]
              shadow-[0_0_40px_rgba(255,255,255,0.05)]
            "
          />

          <div className="w-[55%] max-w-[600px]">

            <p className="leading-[2] text-[15px] opacity-[0.85] mb-7">
              12歳。彼は自作ゲーム「Blastar」を完成させた。
              コードは粗くても、発想は驚くほど“筋”が通っていた。
            </p>

            <p className="leading-[2] text-[15px] opacity-[0.85] mb-7">
              そのゲームは約500ドルで売却される。
              子どもの作品が初めて“価値”として交換された瞬間だった。
            </p>

            <p className="leading-[2] text-[15px] opacity-[0.85]">
              「自分は学ぶ側ではなく“創る側”だ。」
              この感覚が、のちのすべての根っこになる。
            </p>

          </div>
        </div>
      </section>
      {/* =========================================================
    CHAPTER 04 — SHADOWS OF HOME
========================================================= */}
<section className="fade-sec max-w-[860px] mx-auto px-6 py-[160px]">

  <p className="text-[12px] tracking-[0.26em] opacity-50 mb-8">
    CHAPTER 04 — SHADOWS OF HOME
  </p>

  <h2 className="text-[26px] tracking-[0.18em] mb-10 font-light text-white/90">
    家庭は、彼にとって“最初の試練”だった。
  </h2>

  <div className="flex gap-10 items-start">

    <img
      src="/images/musk/home.png"
      className="
        w-[50%]
        aspect-[4/3]
        rounded-[16px]
        opacity-[0.92]
        object-cover
        shadow-[0_0_40px_rgba(255,255,255,0.05)]
      "
      alt=""
    />

    <div className="w-[50%]">

      <p className="leading-[2] text-[15px] opacity-[0.85] mb-6">
        イーロンの家庭環境は、決して穏やかではなかった。
        とくに父親との関係は苛烈で、彼の心に深い影を落とした。
        “正しさ”を押しつけられ、感情よりも服従を求められる日々。
      </p>

      <p className="leading-[2] text-[15px] opacity-[0.85] mb-6">
        その環境は彼にひとつの能力を与える。
        「外側がどうであれ、自分の内側に逃げ込める」という力だ。
        書物、宇宙、物語。彼は思想の世界に自分を避難させた。
      </p>

      <p className="leading-[2] text-[15px] opacity-[0.85]">
        この“内的避難所”が、のちの
        SpaceX、Tesla、Neuralinkの
        “異常なまでの集中力と執念”の根っこになる。
      </p>

    </div>
  </div>
</section>


{/* =========================================================
    CHAPTER 06 — BREAKING POINT
========================================================= */}
<section className="fade-sec max-w-[860px] mx-auto px-6 py-[140px]">

  <p className="text-[12px] tracking-[0.26em] opacity-50 mb-8">
    CHAPTER 06 — BREAKING POINT
  </p>

  <h2 className="text-[26px] tracking-[0.18em] mb-10 font-light text-white/90">
    家のなかに、“越えてはいけない壁”があった。
  </h2>

  <div className="flex gap-10 items-start">

    <img
      src="/images/musk/home1.png"
      className="
        w-[55%]
        aspect-[4/3]
        rounded-[16px]
        opacity-[0.95]
        object-cover
        shadow-[0_0_44px_rgba(255,255,255,0.07)]
      "
      alt=""
    />

    <div className="w-[45%]">

      <p className="leading-[2] text-[15px] opacity-[0.85] mb-6">
        家の中には、いつも重い空気が漂っていた。  
        父親の機嫌ひとつで、場の温度が一瞬で変わる。  
        子どもだった彼には、その変化が“嵐”のように見えた。
      </p>

      <p className="leading-[2] text-[15px] opacity-[0.85] mb-6">
        言葉の暴力、理不尽、コントロール。  
        そのすべては、彼の内側に深い傷を残したが、  
        同時に──“絶対に同じ人間にはならない”という  
        強烈な反骨を育てていった。
      </p>

      <p className="leading-[2] text-[15px] opacity-[0.85]">
        この頃から、イーロンは家の外に“別の世界”を探し始める。  
        現実に押しつぶされないために、  
        彼は思考の中に“逃げ道ではなく、未来”を描き始めた。  
        それが、後のすべての行動原理になる。
      </p>

    </div>
  </div>
</section>


{/* =========================================================
    CHAPTER 07 — NORTHBOUND FLIGHT
========================================================= */}
<section className="fade-sec max-w-[860px] mx-auto px-6 py-[140px]">

  <p className="text-[12px] tracking-[0.26em] opacity-50 mb-8">
    CHAPTER 07 — NORTHBOUND FLIGHT
  </p>

  <h2 className="text-[26px] tracking-[0.18em] mb-10 font-light text-white/90">
    この国に未来はない──そう確信した。
  </h2>

  <div className="flex gap-10 items-start">

    <img
      src="/images/musk/flight.png"
      className="
        w-[55%]
        aspect-[4/3]
        rounded-[16px]
        opacity-[0.95]
        object-cover
        shadow-[0_0_44px_rgba(255,255,255,0.07)]
      "
      alt=""
    />

    <div className="w-[45%]">

      <p className="leading-[2] text-[15px] opacity-[0.85] mb-6">
        南アフリカの空気は、彼には重すぎた。  
        父との関係、閉塞した社会、将来を縛る軍役の義務──  
        そのどれもが、彼の思考と相性が悪すぎた。
      </p>

      <p className="leading-[2] text-[15px] opacity-[0.85] mb-6">
        「ここにいたら、心が死ぬ」  
        そう強烈に感じた17歳のイーロンは、  
        たったひとりで北米へ向かう決断を下す。  
        誰にも相談せず、誰にも理解されず、それでも行く。
      </p>

      <p className="leading-[2] text-[15px] opacity-[0.85]">
        それは“逃避”ではなく、“未来の奪還”だった。  
        世界の可能性を信じられる場所で生きたい──  
        その純粋な衝動が、彼を国境の外へと押し出した。  
        後に世界を変える男の、最初の革命は“移動”だった。
      </p>

    </div>
  </div>
</section>


{/* =========================================================
    CHAPTER 08 — SURVIVAL & IGNITION
========================================================= */}
<section className="fade-sec max-w-[860px] mx-auto px-6 py-[140px]">

  <p className="text-[12px] tracking-[0.26em] opacity-50 mb-8">
    CHAPTER 08 — SURVIVAL & IGNITION
  </p>

  <h2 className="text-[26px] tracking-[0.18em] mb-10 font-light text-white/90">
    生き延びるために働き、学ぶために燃えた。
  </h2>

  <div className="flex gap-10 items-start">

    <img
      src="/images/musk/canada_life.png"
      className="
        w-[55%]
        aspect-[4/3]
        rounded-[16px]
        opacity-[0.95]
        object-cover
        shadow-[0_0_44px_rgba(255,255,255,0.07)]
      "
      alt=""
    />

    <div className="w-[45%]">

      <p className="leading-[2] text-[15px] opacity-[0.85] mb-6">
        北米へ渡った彼を待っていたのは、輝かしい未来ではなく、  
        “生き延びるだけで精一杯”の極貧生活だった。  
        食費を削り、アルバイトを掛け持ちし、  
        ときには体力が尽きて倒れる日もあった。
      </p>

      <p className="leading-[2] text-[15px] opacity-[0.85] mb-6">
        けれど彼は、どれだけ働いても「学ぶ時間」だけは奪われなかった。  
        仕事が終わると疲れ切った身体を引きずりながら本を開いた。  
        未来をつくるのは“知識”だと、本能的に知っていたからだ。
      </p>

      <p className="leading-[2] text-[15px] opacity-[0.85]">
        大学へ進むと、眠っていた才能が一気に点火する。  
        宇宙、AI、物理学、エネルギー──  
        世界を根本から変える領域ばかりに吸い寄せられた。  
        “ただの知識”が、彼の中で“計画”へと姿を変えていく。  
        いずれ世界を震わせる野望の原型がここで生まれた。
      </p>

    </div>
  </div>
</section>


{/* =========================================================
    CHAPTER 09 — BROTHERS IN THE PIT
========================================================= */}
<section className="fade-sec max-w-[860px] mx-auto px-6 py-[140px]">

  <p className="text-[12px] tracking-[0.26em] opacity-50 mb-8">
    CHAPTER 09 — BROTHERS IN THE PIT
  </p>

  <h2 className="text-[26px] tracking-[0.18em] mb-10 font-light text-white/90">
    寝袋と中古PCから、最初の会社が生まれた。
  </h2>

  <div className="flex gap-10 items-start">

    <img
      src="/images/musk/zip2_room.png"
      className="
        w-[55%]
        aspect-[4/3]
        rounded-[16px]
        opacity-[0.95]
        object-cover
        shadow-[0_0_44px_rgba(255,255,255,0.07)]
      "
      alt=""
    />

    <div className="w-[45%]">

      <p className="leading-[2] text-[15px] opacity-[0.85] mb-6">
        北米で合流した弟キンバルと借りたのは、  
        “家”というより、ただの雑居ビルの一室だった。  
        ベッドも家具もなく、二人が持ち込んだのは寝袋だけ。  
        シャワーは近くのYMCA。すべてが最低限だった。
      </p>

      <p className="leading-[2] text-[15px] opacity-[0.85] mb-6">
        眠くなったら床で寝る。  
        食費を削り、最低限の電気だけをつける。  
        それでも二人は笑った。  
        “世界を変えるなら、この程度の地獄は通過点だろ”と。
      </p>

      <p className="leading-[2] text-[15px] opacity-[0.85]">
        この狭い部屋から、最初の会社 <span className="text-white/95">Zip2</span> が動き出す。  
        中古PCと電話線、そして兄弟ふたりの執念だけ。  
        昼は営業、夜はコードを書く。  
        24時間体制の“地獄の共同生活”は、やがて彼らに最初の成功をもたらした。
      </p>

    </div>
  </div>
</section>


{/* =========================================================
    CHAPTER 10 — X.COM：金融革命の原点
========================================================= */}
<section className="fade-sec max-w-[860px] mx-auto px-6 py-[140px]">

  <p className="text-[12px] tracking-[0.26em] opacity-50 mb-8">
    CHAPTER 10 — X.COM
  </p>

  <h2 className="text-[26px] tracking-[0.18em] mb-10 font-light text-white/90">
    インターネットで“お金”を再発明する。
  </h2>

  <div className="flex gap-10 items-start">

    <img
      src="/images/musk/xcom.png"
      className="
        w-[55%]
        aspect-[4/3]
        rounded-[16px]
        opacity-[0.95]
        object-cover
        shadow-[0_0_44px_rgba(255,255,255,0.07)]
      "
      alt=""
    />

    <div className="w-[45%]">

      <p className="leading-[2] text-[15px] opacity-[0.85] mb-6">
        Zip2売却後、彼の頭に残ったのはただひとつ。  
        「次は、世界のお金の流れを変える。」  
        そうして1999年、マスクは <span className="text-white/95">X.com</span> を立ち上げた。
      </p>

      <p className="leading-[2] text-[15px] opacity-[0.85] mb-6">
        まだ誰も“オンライン送金”を信用していなかった時代。  
        銀行でさえも相手にしなかった。  
        それでも彼は言う。  
        「未来の常識は、いま疑われている場所にある。」
      </p>

      <p className="leading-[2] text-[15px] opacity-[0.85]">
        X.com は後に合併し <span className="text-white/95">PayPal</span> へと姿を変える。  
        世界の送金インフラを静かに動かした、最初の火種だった。
      </p>

    </div>
  </div>
</section>
{/* =========================================================
    CHAPTER 11 — SUCCESS & BETRAYAL
========================================================= */}
<section className="fade-sec max-w-[860px] mx-auto px-6 py-[140px]">

  <p className="text-[12px] tracking-[0.26em] opacity-50 mb-8">
    CHAPTER 11 — SUCCESS & BETRAYAL
  </p>

  <h2 className="text-[26px] tracking-[0.18em] mb-10 font-light text-white/90">
    成功した会社から、追放された。
  </h2>

  <div className="flex gap-10 items-start">

    <img
      src="/images/musk/boardroom.png"
      className="
        w-[55%]
        aspect-[4/3]
        rounded-[16px]
        opacity-[0.95]
        object-cover
        shadow-[0_0_44px_rgba(255,255,255,0.07)]
      "
      alt=""
    />

    <div className="w-[45%]">
      <p className="leading-[2] text-[15px] opacity-[0.85] mb-6">
        PayPal が急成長するなか、マスクは“理想を追う創業者”だった。  
        だが現場は“効率と安全”を求めていた。  
        両者の差は、あまりにも大きかった。
      </p>

      <p className="leading-[2] text-[15px] opacity-[0.85] mb-6">
        そしてある日──  
        休暇で飛行機に乗っている間に、  
        役員会によって CEO から解任される。  
        電話一本で、すべてが終わった。
      </p>

      <p className="leading-[2] text-[15px] opacity-[0.85]">
        自分がつくった会社から追放される痛み。  
        それでも彼は折れなかった。  
        この挫折が、のちの  
        <span className="text-white/95">SpaceX</span> と  
        <span className="text-white/95">Tesla</span> の  
        “異常な挑戦”の燃料になる。
      </p>
    </div>
  </div>
</section>


{/* =========================================================
    CHAPTER 12 — COLLAPSE & REBIRTH
========================================================= */}
<section className="fade-sec max-w-[980px] mx-auto px-6 py-[160px]">

  <p className="text-[12px] tracking-[0.26em] opacity-50 mb-8">
    CHAPTER 12 — COLLAPSE & REBIRTH
  </p>

  <h2 className="text-[26px] tracking-[0.18em] mb-12 font-light text-white/90">
    すべてが崩れた瞬間こそ、“天才の正体”が現れる。
  </h2>

  <div className="flex gap-10 items-start">

    <img
      src="/images/musk/collapse1.png"
      className="
        w-[55%]
        aspect-[4/4]
        rounded-[16px]
        opacity-[0.95]
        object-cover
        shadow-[0_0_44px_rgba(255,255,255,0.07)]
      "
      alt=""
    />

    <div className="w-[45%]">

      {/* A: SpaceX */}
      <p className="leading-[2] text-[15px] opacity-[0.85] mb-6">
        <span className="text-white/95">SpaceX。</span>  
        世界初の民間ロケットを目指し、  
        全資産をそこに注ぎ込んだ。<br/><br/>
        <span className="text-white/95">1回目、失敗。</span><br/>
        <span className="text-white/95">2回目も失敗。</span><br/>
        <span className="text-white/95">3回目も爆発。</span><br/><br/>
        成功確率は “3%”。  
        普通の人間なら、ここで諦めていた。
      </p>

      {/* B: Tesla */}
      <p className="leading-[2] text-[15px] opacity-[0.85] mb-6">
        追い打ちをかけるように、  
        <span className="text-white/95">Tesla も崩壊寸前。</span>  
        工場は止まり、資金も尽き、  
        メディアは連日「終わった」と書いた。  
        世界中で、彼だけがまだ信じていた。
      </p>

      {/* C: 私生活 */}
      <p className="leading-[2] text-[15px] opacity-[0.85]">
        離婚、うつ、仲間との対立──  
        すべてが同時に襲った。<br/>
        それでも彼は言う。<br/><br/>

        <span className="text-white/95 italic">
          「もし死ぬなら、前に倒れて死ぬ。」
        </span><br/><br/>

        この地獄から、  
        <span className="text-white/95">Falcon 1 成功</span> と  
        <span className="text-white/95">Tesla 黒字化</span> が生まれた。
      </p>

    </div>
  </div>
</section>


{/* =========================================================
    CHAPTER 13–15 — REBIRTH & ASCENSION
========================================================= */}
<section className="fade-sec max-w-[1400px] mx-auto px-6 py-[160px]">

  <p className="text-[12px] tracking-[0.26em] opacity-50 mb-8">
    CHAPTER 13–15 — REBIRTH & ASCENSION
  </p>

  <h2 className="text-[28px] tracking-[0.18em] mb-12 font-light text-white/90 leading-[1.62]">
    沈みきった地獄から、すべてが動きはじめた。<br />
    4回目の奇跡、反撃、そして“未来の産業”の再設計。
  </h2>

  <div className="flex gap-10 items-start">

    <img
      src="/images/musk/rebirth.png"
      className="
        w-[55%]
        aspect-[4/3]
        rounded-[16px]
        opacity-[0.95]
        object-cover
        shadow-[0_0_50px_rgba(255,255,255,0.08)]
      "
      alt=""
    />

    <div className="w-[45%]">

      {/* CH13 */}
      <p className="leading-[2] text-[15px] opacity-[0.85] mb-8">
        2008年、3度の失敗を経て迎えた  
        <span className="text-white/95">4回目の打ち上げ</span>。<br/>
        誰も期待していなかった。  
        だがロケットは静かに軌道へ乗った。<br/><br/>
        <span className="text-white/95 font-light">
          — Falcon 1、民間初の軌道到達。
        </span><br/><br/>
        ここから人生が“終わり”から“始まり”へ切り替わる。
      </p>

      {/* CH14 */}
      <p className="leading-[2] text-[15px] opacity-[0.85] mb-8">
        Tesla では <span className="text-white/95">Model S</span> が進行していた。  
        嘲笑され、否定され続けた計画。  
        だが実際の完成品は、自動車100年の常識をひっくり返した。
      </p>

      {/* CH15 */}
      <p className="leading-[2] text-[15px] opacity-[0.85]">
        SpaceX、Tesla、SolarCity。  
        ロケット・自動車・エネルギー。  
        まったく別の領域を、彼は一つの未来ビジョンでつないだ。<br/><br/>
        <span className="text-white/95 italic">
          「地球を持続可能にし、  
          人類を多惑星種にする。」
        </span><br/><br/>
        世界は、ここから彼の“反撃”を見ることになる。
      </p>

    </div>
  </div>
</section>


{/* =========================================================
    CHAPTER 16 — NEURALINK
========================================================= */}
<section className="fade-sec max-w-[860px] mx-auto px-6 py-[140px]">

  <p className="text-[12px] tracking-[0.26em] opacity-50 mb-8">
    CHAPTER 16 — NEURALINK
  </p>

  <h2 className="text-[26px] tracking-[0.18em] mb-10 font-light text-white/90">
    脳の境界を、技術で溶かす。
  </h2>

  <div className="flex gap-10 items-start">

    <img
      src="/images/musk/neuralink.png"
      className="
        w-[55%]
        aspect-[4/3]
        rounded-[16px]
        opacity-[0.95]
        object-cover
        shadow-[0_0_44px_rgba(255,255,255,0.07)]
      "
      alt=""
    />

    <div className="w-[45%]">
      <p className="leading-[2] text-[15px] opacity-[0.85] mb-6">
        Neuralink の発想はシンプルだ。  
        「脳そのものを、コンピューターとつなぐ。」  
        文字や画面の“外側のインターフェース”を越え、  
        思考そのものを信号として扱う試みだ。
      </p>

      <p className="leading-[2] text-[15px] opacity-[0.85]">
        まずは医療。  
        麻痺した手足を動かし、失われた機能を取り戻すために。  
        その先には──  
        “人間の知能そのものを拡張する未来” が静かに見えている。
      </p>
    </div>

  </div>
</section>


{/* =========================================================
    CHAPTER 17 — STARSHIP
========================================================= */}
<section className="fade-sec max-w-[860px] mx-auto px-6 py-[140px]">

  <p className="text-[12px] tracking-[0.26em] opacity-50 mb-8">
    CHAPTER 17 — STARSHIP
  </p>

  <h2 className="text-[26px] tracking-[0.18em] mb-10 font-light text-white/90">
    ロケットではなく、“居場所”を増やす計画。
  </h2>

  <div className="flex gap-10 items-start">

    <img
      src="/images/musk/starship.png"
      className="
        w-[55%]
        aspect-[4/3]
        rounded-[16px]
        opacity-[0.95]
        object-cover
        shadow-[0_0_44px_rgba(255,255,255,0.07)]
      "
      alt=""
    />

    <div className="w-[45%]">
      <p className="leading-[2] text-[15px] opacity-[0.85] mb-6">
        Starship は“火星移住の輸送手段”として設計された。  
        地球に何かあっても、人類が途絶えないように。  
        彼の視点は、国家よりも“文明そのもの”を見ている。
      </p>

      <p className="leading-[2] text-[15px] opacity-[0.85]">
        巨大な機体、完全再使用、100人規模の輸送力。  
        これが成功すれば、火星移住は SF ではなく  
        “時間の問題” へと変わる。
      </p>
    </div>

  </div>
</section>


{/* =========================================================
    CHAPTER 18 — X（旧Twitter）
========================================================= */}
<section className="fade-sec max-w-[860px] mx-auto px-6 py-[140px]">

  <p className="text-[12px] tracking-[0.26em] opacity-50 mb-8">
    CHAPTER 18 — X
  </p>

  <h2 className="text-[26px] tracking-[0.18em] mb-10 font-light text-white/90">
    SNSではなく、“世界の言語系”を握りにいく。
  </h2>

  <div className="flex gap-10 items-start">

    <img
      src="/images/musk/x.png"
      className="
        w-[55%]
        aspect-[4/3]
        rounded-[16px]
        opacity-[0.95]
        object-cover
        shadow-[0_0_44px_rgba(255,255,255,0.07)]
      "
      alt=""
    />

    <div className="w-[45%]">
      <p className="leading-[2] text-[15px] opacity-[0.85] mb-6">
        彼が Twitter を買収し「X」へと変えたのは、  
        単なるリブランディングではない。  
        SNS を“世界規模のインフラ”として再設計し、  
        情報・言論・金融を束ねる巨大 OS にしようとしている。
      </p>

      <p className="leading-[2] text-[15px] opacity-[0.85]">
        支払い機能、AI連携、クリエイター収益──  
        彼の頭の中では、「X」はもはや  
        “ひとつの国家規模の情報装置”として描かれている。
      </p>
    </div>

  </div>
</section>


{/* =========================================================
    FINAL CHAPTER — 軌道をずらす人間
========================================================= */}
<section
  className="
    fade-sec relative w-full min-h-[92vh]
    flex flex-col items-center justify-center
    text-center px-6 
    overflow-hidden
  "
>
  {/* 背景 */}
  <div
    className="
      absolute inset-0
      bg-[url('/images/musk/final.png')] bg-cover bg-center
      opacity-[0.32]
    "
  />

  {/* 光膜 */}
  <div
    className="
      absolute inset-0
      bg-gradient-to-b
      from-black/20 via-black/35 to-black/50
      mix-blend-overlay
      pointer-events-none
    "
  />

  {/* テキスト */}
  <div className="relative z-10 max-w-[900px] mx-auto">

    <h2
      className="
        text-[34px]
        tracking-[0.20em]
        font-light
        text-white/95
        mb-14
      "
    >
      世界は、彼の意志でわずかに動いた。
    </h2>

    <p
      className="
        text-[17px]
        leading-[2]
        opacity-90
        text-white/85
        max-w-[760px]
        mx-auto
        mb-14
      "
    >
      幼少期の静かな孤独。<br />
      追われるように走った青春。<br />
      すべてを失いかけた地獄。<br />
      そして、星と情報と脳をつなぐ“未来の設計”。<br />
      そのどれもが、ひとりの人間の中で連続している。
    </p>

    <p
      className="
        text-[17px]
        leading-[2]
        opacity-90
        text-white/85
        max-w-[760px]
        mx-auto
        mb-20
      "
    >
      天才だから成し遂げたのではない。<br />
      世界がまだ見ていない“未来の形”を、<br />
      彼だけが見ていたからだ。
    </p>

  <p
      className="
        text-[22px]
        tracking-[0.18em]
        text-white/70
        font-light
        mb-[2vh]
      "
    >
      ELON MUSK — A MAN WHO REWRITES GRAVITY.
    </p>

  </div>
</section>

</div>  

  );
}