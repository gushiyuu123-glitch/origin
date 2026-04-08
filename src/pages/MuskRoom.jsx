// ===========================
// MuskRoom.jsx（完全版 / スケール強化）
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

  /* ===========================
     HERO：フェードイン
  ============================ */
  useEffect(() => {
    gsap.to("#musk-hero-title", {
      opacity: 1,
      y: 0,
      duration: 0.72,
      ease: "power2.out",
      delay: 0.2,
    });

    gsap.to("#musk-hero-sub", {
      opacity: 1,
      y: 0,
      duration: 0.72,
      ease: "power2.out",
      delay: 0.35,
    });

    gsap.to("#musk-hero-copy", {
      opacity: 1,
      y: 0,
      duration: 0.78,
      ease: "power2.out",
      delay: 0.5,
    });
  }, []);

  /* ===========================
     Fade-in
  ============================ */
  useEffect(() => {
    gsap.utils.toArray(".fade-sec").forEach((sec) => {
      gsap.fromTo(
        sec,
        { opacity: 0, filter: "blur(0.2px)" },
        {
          opacity: 1,
          filter: "blur(0px)",
          duration: 0.72,
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
    <div className="relative overflow-x-hidden bg-[#0d0d0d] text-white">
      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="fade-sec relative min-h-screen w-full overflow-hidden">
        {/* 背景ライン */}
        <div className="absolute inset-0 bg-[url('/images/musk/neural-lines.png')] bg-cover opacity-[0.18] mix-blend-screen" />

        {/* 白膜 */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/6 via-white/2 to-transparent" />

        {/* うっすら暗芯 */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.24]"
          style={{
            background:
              "radial-gradient(circle at 50% 44%, rgba(0,0,0,0.34), transparent 44%)",
          }}
        />

        {/* シルエット */}
        <img
          ref={heroImgRef}
          src="/images/musk/hero.png"
          loading="eager"
          className="
            absolute inset-0 h-full w-full
            object-cover opacity-[0.92] scale-[1.03]
          "
          alt=""
        />

        {/* テキスト */}
        <div className="absolute inset-0 z-10 flex -translate-y-[1%] flex-col items-center justify-center px-8 text-center">
          <h1
            ref={heroTitleRef}
            id="musk-hero-title"
            className="
              text-[64px] tracking-[0.18em]
              text-white/95 font-normal
              opacity-0 translate-y-[10px]
              drop-shadow-[0_0_8px_rgba(255,255,255,0.08)]
            "
          >
            ELON MUSK
          </h1>

          <p
            ref={heroSubRef}
            id="musk-hero-sub"
            className="
              mt-4 text-[13px]
              tracking-[0.22em] text-white/55
              opacity-0 translate-y-[10px]
            "
          >
            GENIUS VECTOR
          </p>

          <p
            id="musk-hero-copy"
            className="
              mt-14 text-[31px] leading-[1.76]
              tracking-[0.08em] text-white/85 font-light
              opacity-0 translate-y-[10px] max-w-[920px]
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
      <section className="fade-sec mx-auto max-w-[1080px] px-8 py-[190px]">
        <p className="mb-9 text-[13px] tracking-[0.28em] opacity-50">
          CHAPTER 01 — CHILDHOOD
        </p>

        <h2 className="mb-14 text-[30px] leading-[1.54] tracking-[0.12em] font-light text-white/90">
          生まれた瞬間から、世界の外側にいた。
        </h2>

        <div className="flex items-start gap-14">
          <img
            src="/images/musk/born.png"
            className="
              w-[48%] aspect-[4/3]
              rounded-[18px] opacity-[0.95] object-cover
              shadow-[0_0_46px_rgba(255,255,255,0.06)]
            "
            alt=""
          />

          <div className="w-[52%] max-w-none">
            <p className="mb-7 text-[16px] leading-[2.04] opacity-[0.85]">
              イーロン・マスクが生まれたのは、南アフリカ・プレトリア。
              世界の中心から少し距離のあるその土地で、
              のちに世界の軌道を揺らす人間の物語は始まった。
            </p>

            <p className="mb-7 text-[16px] leading-[2.04] opacity-[0.85]">
              幼いころから、彼は周囲とは違う時間を生きていた。
              友だちが外で遊ぶあいだ、
              彼だけは分厚い科学書や百科事典に沈み込んでいた。
              世界を“楽しむ”より先に、
              世界がどう動いているのかを知りたかった。
            </p>

            <p className="text-[16px] leading-[2.04] opacity-[0.85]">
              “なぜ世界はこう動くのか。”
              この問いの連続こそが、彼の出発点だった。
              彼は最初から、現実を受け入れる側ではなく、
              仕組みごと見抜こうとする側の子どもだった。
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
          CHAPTER 02
      ========================================================= */}
      <section className="fade-sec mx-auto max-w-[1080px] px-8 py-[190px]">
        <p className="mb-9 text-[13px] tracking-[0.28em] opacity-50">
          CHAPTER 02 — ISOLATION
        </p>

        <h2 className="mb-14 text-[30px] leading-[1.54] tracking-[0.12em] font-light text-white/90">
          孤独は、彼を壊さず。“方向”を与えた。
        </h2>

        <div className="flex items-start gap-14">
          <div className="w-[52%] max-w-none">
            <p className="mb-7 text-[16px] leading-[2.04] opacity-[0.85]">
              学校では“浮いていた”。
              空想に沈みすぎる性質は、同年代の子どもとは噛み合わず、
              ときに暴力の対象になった。
              理解されないことは、幼い彼にとってすでに日常だった。
            </p>

            <p className="mb-7 text-[16px] leading-[2.04] opacity-[0.85]">
              だが孤独は、彼を壊さなかった。
              むしろ“知識の宇宙”へ潜る方向を与えた。
              外側に居場所がないなら、
              自分の内側に世界を作ればいい。
              その発想が、すでにこの頃から始まっていた。
            </p>

            <p className="text-[16px] leading-[2.04] opacity-[0.85]">
              物理、SF、宇宙、機械──
              本のページだけが彼を裏切らなかった。
              孤独は欠損ではなく、
              のちに巨大な構想へつながる“集中の器”になっていく。
            </p>
          </div>

          <img
            src="/images/musk/childroom.png"
            className="
              w-[48%] aspect-[4/3]
              rounded-[18px] object-cover opacity-[0.95]
              shadow-[0_0_46px_rgba(255,255,255,0.06)]
            "
            alt=""
          />
        </div>
      </section>

      {/* =========================================================
          CHAPTER 03
      ========================================================= */}
      <section className="fade-sec mx-auto max-w-[1080px] px-8 py-[190px]">
        <p className="mb-9 text-[13px] tracking-[0.28em] opacity-50">
          CHAPTER 03 — FIRST CREATION
        </p>

        <h2 className="mb-14 text-[30px] leading-[1.54] tracking-[0.12em] font-light text-white/90">
          12歳、初めて“作品”で世界が動いた。
        </h2>

        <div className="flex items-start gap-14">
          <img
            src="/images/musk/game.png"
            className="
              w-[48%] aspect-[4/3] rounded-[18px]
              object-cover opacity-[0.95]
              shadow-[0_0_46px_rgba(255,255,255,0.05)]
            "
            alt=""
          />

          <div className="w-[52%] max-w-none">
            <p className="mb-7 text-[16px] leading-[2.04] opacity-[0.85]">
              12歳。
              彼は自作ゲーム「Blastar」を完成させた。
              コードは粗くても、発想は驚くほど筋が通っていた。
              ただ遊ぶためではなく、
              “自分の頭の中にあるものを外へ出す”という感覚が、
              すでに芽生えていた。
            </p>

            <p className="mb-7 text-[16px] leading-[2.04] opacity-[0.85]">
              そのゲームは約500ドルで売却される。
              子どもの作品が初めて“価値”として交換された瞬間だった。
              思考はただの妄想ではなく、
              現実に作用しうるものだと彼は知る。
            </p>

            <p className="text-[16px] leading-[2.04] opacity-[0.85]">
              「自分は学ぶ側ではなく“創る側”だ。」
              この感覚が、のちのすべての根っこになる。
              彼はここで初めて、
              世界に触れる方法として“制作”を選んだ。
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
          CHAPTER 04 — SHADOWS OF HOME
      ========================================================= */}
      <section className="fade-sec mx-auto max-w-[1180px] px-8 py-[170px]">
        <p className="mb-9 text-[13px] tracking-[0.28em] opacity-50">
          CHAPTER 04 — SHADOWS OF HOME
        </p>

        <h2 className="mb-12 text-[30px] leading-[1.56] tracking-[0.12em] font-light text-white/90">
          家庭は、彼にとって“最初の試練”だった。
        </h2>

        <div className="flex items-start gap-14">
          <img
            src="/images/musk/home.png"
            className="
              w-[52%]
              aspect-[4/3]
              rounded-[18px]
              opacity-[0.92]
              object-cover
              shadow-[0_0_48px_rgba(255,255,255,0.05)]
            "
            alt=""
          />

          <div className="w-[48%]">
            <p className="mb-6 text-[16px] leading-[2.04] opacity-[0.85]">
              イーロンの家庭環境は、決して穏やかではなかった。
              とくに父親との関係は苛烈で、
              彼の心に長く消えない影を落とした。
              “正しさ”を押しつけられ、感情よりも服従を求められる日々。
              家は休まる場所ではなく、
              常に緊張が走る空間だった。
            </p>

            <p className="mb-6 text-[16px] leading-[2.04] opacity-[0.85]">
              しかし、その環境は彼をただ傷つけただけではない。
              外側がどれだけ不安定でも、
              自分の内側に潜り込み、そこに世界を作る力を与えた。
              書物、宇宙、物語、機械。
              彼は現実から逃げたのではなく、
              現実を超える視界の中へ避難していた。
            </p>

            <p className="text-[16px] leading-[2.04] opacity-[0.85]">
              この“内的避難所”こそが、
              のちの SpaceX、Tesla、Neuralink に通じる
              異常なまでの集中力と執念の根になっていく。
              彼の未来は、まず家庭という閉塞の中で鍛えられた。
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
          CHAPTER 06 — BREAKING POINT
      ========================================================= */}
      <section className="fade-sec mx-auto max-w-[1180px] px-8 py-[160px]">
        <p className="mb-9 text-[13px] tracking-[0.28em] opacity-50">
          CHAPTER 06 — BREAKING POINT
        </p>

        <h2 className="mb-12 text-[30px] leading-[1.56] tracking-[0.12em] font-light text-white/90">
          家のなかに、“越えてはいけない壁”があった。
        </h2>

        <div className="flex items-start gap-14">
          <img
            src="/images/musk/home1.png"
            className="
              w-[58%]
              aspect-[4/3]
              rounded-[18px]
              opacity-[0.95]
              object-cover
              shadow-[0_0_50px_rgba(255,255,255,0.07)]
            "
            alt=""
          />

          <div className="w-[42%]">
            <p className="mb-6 text-[16px] leading-[2.04] opacity-[0.85]">
              家の中には、いつも重い空気が漂っていた。
              父親の機嫌ひとつで、場の温度が一瞬で変わる。
              子どもだった彼には、その変化が“嵐”のように見えた。
              何が引き金になるのか分からない空間で、
              神経だけが先に発達していく。
            </p>

            <p className="mb-6 text-[16px] leading-[2.04] opacity-[0.85]">
              言葉の暴力、理不尽、コントロール。
              そのすべては彼の内側に深い傷を残したが、
              同時に“絶対に同じ人間にはならない”という
              強烈な反骨を育てていった。
              破壊されたものと同時に、
              抵抗する核もここで生まれていた。
            </p>

            <p className="text-[16px] leading-[2.04] opacity-[0.85]">
              この頃からイーロンは、
              家の外に“別の世界”を探し始める。
              現実に押しつぶされないために、
              思考の中に“逃げ道ではなく未来”を描き始めた。
              それが後のすべての行動原理になる。
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
          CHAPTER 07 — NORTHBOUND FLIGHT
      ========================================================= */}
      <section className="fade-sec mx-auto max-w-[1180px] px-8 py-[160px]">
        <p className="mb-9 text-[13px] tracking-[0.28em] opacity-50">
          CHAPTER 07 — NORTHBOUND FLIGHT
        </p>

        <h2 className="mb-12 text-[30px] leading-[1.56] tracking-[0.12em] font-light text-white/90">
          この国に未来はない──そう確信した。
        </h2>

        <div className="flex items-start gap-14">
          <img
            src="/images/musk/flight.png"
            className="
              w-[58%]
              aspect-[4/3]
              rounded-[18px]
              opacity-[0.95]
              object-cover
              shadow-[0_0_50px_rgba(255,255,255,0.07)]
            "
            alt=""
          />

          <div className="w-[42%]">
            <p className="mb-6 text-[16px] leading-[2.04] opacity-[0.85]">
              南アフリカの空気は、彼には重すぎた。
              父との関係、閉塞した社会、将来を縛る軍役の義務──
              そのどれもが、彼の思考と相性が悪すぎた。
              ここに留まれば、
              未来そのものが削れていくと直感していた。
            </p>

            <p className="mb-6 text-[16px] leading-[2.04] opacity-[0.85]">
              「ここにいたら、心が死ぬ」
              そう強烈に感じた17歳のイーロンは、
              たったひとりで北米へ向かう決断を下す。
              誰にも相談せず、誰にも理解されず、それでも行く。
              その決断だけが、
              自分を未来へつなぐ唯一の道だった。
            </p>

            <p className="text-[16px] leading-[2.04] opacity-[0.85]">
              それは“逃避”ではなく、“未来の奪還”だった。
              世界の可能性を信じられる場所で生きたい──
              その純粋な衝動が、彼を国境の外へ押し出した。
              後に世界を変える男の、最初の革命は“移動”だった。
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
          CHAPTER 08 — SURVIVAL & IGNITION
      ========================================================= */}
      <section className="fade-sec mx-auto max-w-[1180px] px-8 py-[160px]">
        <p className="mb-9 text-[13px] tracking-[0.28em] opacity-50">
          CHAPTER 08 — SURVIVAL & IGNITION
        </p>

        <h2 className="mb-12 text-[30px] leading-[1.56] tracking-[0.12em] font-light text-white/90">
          生き延びるために働き、学ぶために燃えた。
        </h2>

        <div className="flex items-start gap-14">
          <img
            src="/images/musk/canada_life.png"
            className="
              w-[58%]
              aspect-[4/3]
              rounded-[18px]
              opacity-[0.95]
              object-cover
              shadow-[0_0_50px_rgba(255,255,255,0.07)]
            "
            alt=""
          />

          <div className="w-[42%]">
            <p className="mb-6 text-[16px] leading-[2.04] opacity-[0.85]">
              北米へ渡った彼を待っていたのは、輝かしい未来ではなく、
              “生き延びるだけで精一杯”の極貧生活だった。
              食費を削り、アルバイトを掛け持ちし、
              ときには体力が尽きて倒れる日もあった。
              だが彼は、その環境すら通過点として見ていた。
            </p>

            <p className="mb-6 text-[16px] leading-[2.04] opacity-[0.85]">
              けれど彼は、どれだけ働いても
              「学ぶ時間」だけは奪われなかった。
              仕事が終わると疲れ切った身体を引きずりながら本を開いた。
              未来をつくるのは“知識”だと、
              本能的に知っていたからだ。
            </p>

            <p className="text-[16px] leading-[2.04] opacity-[0.85]">
              大学へ進むと、眠っていた才能が一気に点火する。
              宇宙、AI、物理学、エネルギー──
              世界を根本から変える領域ばかりに吸い寄せられた。
              “ただの知識”が、彼の中で“計画”へと姿を変えていく。
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
          CHAPTER 09 — BROTHERS IN THE PIT
      ========================================================= */}
      <section className="fade-sec mx-auto max-w-[1180px] px-8 py-[160px]">
        <p className="mb-9 text-[13px] tracking-[0.28em] opacity-50">
          CHAPTER 09 — BROTHERS IN THE PIT
        </p>

        <h2 className="mb-12 text-[30px] leading-[1.56] tracking-[0.12em] font-light text-white/90">
          寝袋と中古PCから、最初の会社が生まれた。
        </h2>

        <div className="flex items-start gap-14">
          <img
            src="/images/musk/zip2_room.png"
            className="
              w-[58%]
              aspect-[4/3]
              rounded-[18px]
              opacity-[0.95]
              object-cover
              shadow-[0_0_50px_rgba(255,255,255,0.07)]
            "
            alt=""
          />

          <div className="w-[42%]">
            <p className="mb-6 text-[16px] leading-[2.04] opacity-[0.85]">
              北米で合流した弟キンバルと借りたのは、
              “家”というより、ただの雑居ビルの一室だった。
              ベッドも家具もなく、二人が持ち込んだのは寝袋だけ。
              シャワーは近くのYMCA。
              すべてが最低限だった。
            </p>

            <p className="mb-6 text-[16px] leading-[2.04] opacity-[0.85]">
              眠くなったら床で寝る。
              食費を削り、最低限の電気だけをつける。
              それでも二人は笑った。
              “世界を変えるなら、この程度の地獄は通過点だろ”と。
              苦しさよりも、先に見ている景色のほうが大きかった。
            </p>

            <p className="text-[16px] leading-[2.04] opacity-[0.85]">
              この狭い部屋から、最初の会社 Zip2 が動き出す。
              中古PCと電話線、そして兄弟ふたりの執念だけ。
              昼は営業、夜はコードを書く。
              24時間体制の“地獄の共同生活”は、
              やがて彼らに最初の成功をもたらした。
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
          CHAPTER 10 — X.COM
      ========================================================= */}
      <section className="fade-sec mx-auto max-w-[1180px] px-8 py-[170px]">
        <p className="mb-9 text-[13px] tracking-[0.28em] opacity-50">
          CHAPTER 10 — X.COM
        </p>

        <h2 className="mb-12 text-[30px] leading-[1.56] tracking-[0.12em] font-light text-white/90">
          インターネットで“お金”を再発明する。
        </h2>

        <div className="flex items-start gap-14">
          <img
            src="/images/musk/xcom.png"
            className="
              w-[58%]
              aspect-[4/3]
              rounded-[18px]
              opacity-[0.95]
              object-cover
              shadow-[0_0_48px_rgba(255,255,255,0.07)]
            "
            alt=""
          />

          <div className="w-[42%]">
            <p className="mb-6 text-[16px] leading-[2.04] opacity-[0.85]">
              Zip2売却後、彼の頭に残ったのはただひとつだった。
              「次は、世界のお金の流れを変える。」
              そうして1999年、マスクは X.com を立ち上げる。
              彼にとってインターネットは、
              情報を流す場所ではなく、
              現実の基盤そのものを書き換える装置だった。
            </p>

            <p className="mb-6 text-[16px] leading-[2.04] opacity-[0.85]">
              まだ誰も“オンライン送金”を信用していなかった時代。
              銀行でさえも本気で相手にしなかった。
              それでも彼は疑わない。
              「未来の常識は、いま疑われている場所にある。」
              その視点だけは、最初から一貫していた。
            </p>

            <p className="text-[16px] leading-[2.04] opacity-[0.85]">
              X.com は後に合併し、PayPal へと姿を変える。
              世界の送金インフラを静かに動かした、最初の火種だった。
              彼はここで初めて、
              “仕組みを変えることで社会は動く”という手応えを掴んだ。
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
          CHAPTER 11 — SUCCESS & BETRAYAL
      ========================================================= */}
      <section className="fade-sec mx-auto max-w-[1180px] px-8 py-[170px]">
        <p className="mb-9 text-[13px] tracking-[0.28em] opacity-50">
          CHAPTER 11 — SUCCESS & BETRAYAL
        </p>

        <h2 className="mb-12 text-[30px] leading-[1.56] tracking-[0.12em] font-light text-white/90">
          成功した会社から、追放された。
        </h2>

        <div className="flex items-start gap-14">
          <img
            src="/images/musk/boardroom.png"
            className="
              w-[58%]
              aspect-[4/3]
              rounded-[18px]
              opacity-[0.95]
              object-cover
              shadow-[0_0_48px_rgba(255,255,255,0.07)]
            "
            alt=""
          />

          <div className="w-[42%]">
            <p className="mb-6 text-[16px] leading-[2.04] opacity-[0.85]">
              PayPal が急成長するなか、マスクは“理想を追う創業者”だった。
              だが現場は“効率と安全”を求めていた。
              未来を押し広げようとする視点と、
              いま成立させることを優先する視点。
              両者の差は、時間が経つほど大きくなっていった。
            </p>

            <p className="mb-6 text-[16px] leading-[2.04] opacity-[0.85]">
              そしてある日、
              休暇で飛行機に乗っている間に、
              役員会によって CEO から解任される。
              電話一本で、すべてが終わった。
              自分がつくった会社から、
              自分だけが外される。
              それは単なる敗北ではなく、
              自分の思想ごと否定されたような体験だった。
            </p>

            <p className="text-[16px] leading-[2.04] opacity-[0.85]">
              それでも彼は折れなかった。
              この追放の痛みが、
              のちの SpaceX と Tesla に向かう
              “異常な挑戦”の燃料になる。
              彼はここで、組織に居場所を求めることをやめた。
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
          CHAPTER 12 — COLLAPSE & REBIRTH
      ========================================================= */}
      <section className="fade-sec mx-auto max-w-[1260px] px-8 py-[180px]">
        <p className="mb-9 text-[13px] tracking-[0.28em] opacity-50">
          CHAPTER 12 — COLLAPSE & REBIRTH
        </p>

        <h2 className="mb-14 text-[32px] leading-[1.56] tracking-[0.12em] font-light text-white/90">
          すべてが崩れた瞬間こそ、“天才の正体”が現れる。
        </h2>

        <div className="flex items-start gap-16">
          <img
            src="/images/musk/collapse1.png"
            className="
              w-[58%]
              aspect-[4/4]
              rounded-[20px]
              opacity-[0.95]
              object-cover
              shadow-[0_0_52px_rgba(255,255,255,0.08)]
            "
            alt=""
          />

          <div className="w-[42%]">
            <p className="mb-6 text-[16px] leading-[2.04] opacity-[0.85]">
              <span className="text-white/95">SpaceX。</span>
              世界初の民間ロケットを目指し、
              彼はほぼ全資産をそこへ注ぎ込んだ。
              だが現実は容赦がなかった。
              1回目、失敗。
              2回目も失敗。
              3回目も爆発。
              挑戦のたびに、資金も信用も削れていく。
            </p>

            <p className="mb-6 text-[16px] leading-[2.04] opacity-[0.85]">
              追い打ちをかけるように、
              <span className="text-white/95">Tesla も崩壊寸前</span> に陥る。
              工場は止まり、資金は尽き、
              メディアは連日「終わった」と書いた。
              世界中が敗北を確信するなかで、
              彼だけがまだ未来を信じていた。
            </p>

            <p className="text-[16px] leading-[2.04] opacity-[0.85]">
              離婚、うつ、仲間との対立。
              すべてが同時に襲った。
              それでも彼は前へ倒れることを選ぶ。
              <br />
              <br />
              <span className="italic text-white/95">
                「もし死ぬなら、前に倒れて死ぬ。」
              </span>
              <br />
              <br />
              この地獄から、
              Falcon 1 成功と Tesla 黒字化が生まれた。
              崩壊の底でこそ、彼の本性は最もはっきり現れた。
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
          CHAPTER 13–15 — REBIRTH & ASCENSION
      ========================================================= */}
      <section className="fade-sec mx-auto max-w-[1400px] px-8 py-[180px]">
        <p className="mb-9 text-[13px] tracking-[0.28em] opacity-50">
          CHAPTER 13–15 — REBIRTH & ASCENSION
        </p>

        <h2 className="mb-14 text-[32px] leading-[1.58] tracking-[0.12em] font-light text-white/90">
          沈みきった地獄から、すべてが動きはじめた。<br />
          4回目の奇跡、反撃、そして“未来の産業”の再設計。
        </h2>

        <div className="flex items-start gap-16">
          <img
            src="/images/musk/rebirth.png"
            className="
              w-[58%]
              aspect-[4/3]
              rounded-[20px]
              opacity-[0.95]
              object-cover
              shadow-[0_0_54px_rgba(255,255,255,0.08)]
            "
            alt=""
          />

          <div className="w-[42%]">
            <p className="mb-8 text-[16px] leading-[2.04] opacity-[0.85]">
              2008年、3度の失敗を経て迎えた
              <span className="text-white/95">4回目の打ち上げ</span>。
              誰も期待していなかった。
              だがロケットは静かに軌道へ乗った。
              <br />
              <br />
              <span className="font-light text-white/95">
                — Falcon 1、民間初の軌道到達。
              </span>
              <br />
              <br />
              ここから人生が“終わり”から“始まり”へ切り替わる。
            </p>

            <p className="mb-8 text-[16px] leading-[2.04] opacity-[0.85]">
              Tesla では <span className="text-white/95">Model S</span> が進行していた。
              嘲笑され、否定され続けた計画。
              だが実際の完成品は、自動車100年の常識をひっくり返した。
              彼の構想は、ようやく現実の形を持ち始める。
            </p>

            <p className="text-[16px] leading-[2.04] opacity-[0.85]">
              SpaceX、Tesla、SolarCity。
              ロケット・自動車・エネルギー。
              まったく別の領域を、彼は一つの未来ビジョンでつないだ。
              <br />
              <br />
              <span className="italic text-white/95">
                「地球を持続可能にし、
                <br />
                人類を多惑星種にする。」
              </span>
              <br />
              <br />
              世界は、ここから彼の“反撃”を見ることになる。
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
          CHAPTER 16 — NEURALINK
      ========================================================= */}
      <section className="fade-sec mx-auto max-w-[1180px] px-8 py-[160px]">
        <p className="mb-9 text-[13px] tracking-[0.28em] opacity-50">
          CHAPTER 16 — NEURALINK
        </p>

        <h2 className="mb-12 text-[30px] leading-[1.56] tracking-[0.12em] font-light text-white/90">
          脳の境界を、技術で溶かす。
        </h2>

        <div className="flex items-start gap-14">
          <img
            src="/images/musk/neuralink.png"
            className="
              w-[58%]
              aspect-[4/3]
              rounded-[18px]
              opacity-[0.95]
              object-cover
              shadow-[0_0_50px_rgba(255,255,255,0.07)]
            "
            alt=""
          />

          <div className="w-[42%]">
            <p className="mb-6 text-[16px] leading-[2.04] opacity-[0.85]">
              Neuralink の発想はシンプルだ。
              「脳そのものを、コンピューターとつなぐ。」
              文字や画面の“外側のインターフェース”を越え、
              思考そのものを信号として扱う試みだ。
              それは道具を賢くする話ではなく、
              人間の可能性の輪郭を書き換える話でもある。
            </p>

            <p className="text-[16px] leading-[2.04] opacity-[0.85]">
              まずは医療。
              麻痺した手足を動かし、失われた機能を取り戻すために。
              その先には──
              “人間の知能そのものを拡張する未来” が静かに見えている。
              彼の視点は、常に治療の先にある次の時代まで伸びている。
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
          CHAPTER 17 — STARSHIP
      ========================================================= */}
      <section className="fade-sec mx-auto max-w-[1180px] px-8 py-[160px]">
        <p className="mb-9 text-[13px] tracking-[0.28em] opacity-50">
          CHAPTER 17 — STARSHIP
        </p>

        <h2 className="mb-12 text-[30px] leading-[1.56] tracking-[0.12em] font-light text-white/90">
          ロケットではなく、“居場所”を増やす計画。
        </h2>

        <div className="flex items-start gap-14">
          <img
            src="/images/musk/starship.png"
            className="
              w-[58%]
              aspect-[4/3]
              rounded-[18px]
              opacity-[0.95]
              object-cover
              shadow-[0_0_50px_rgba(255,255,255,0.07)]
            "
            alt=""
          />

          <div className="w-[42%]">
            <p className="mb-6 text-[16px] leading-[2.04] opacity-[0.85]">
              Starship は“火星移住の輸送手段”として設計された。
              地球に何かあっても、人類が途絶えないように。
              彼の視点は国家や市場よりも、
              “文明そのものの存続”に向いている。
            </p>

            <p className="text-[16px] leading-[2.04] opacity-[0.85]">
              巨大な機体、完全再使用、100人規模の輸送力。
              これが成功すれば、火星移住は SF ではなく
              “時間の問題”へと変わる。
              彼が作ろうとしているのはロケットではない。
              人類の未来に、次の地平を用意する装置だ。
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
          CHAPTER 18 — X
      ========================================================= */}
      <section className="fade-sec mx-auto max-w-[1180px] px-8 py-[160px]">
        <p className="mb-9 text-[13px] tracking-[0.28em] opacity-50">
          CHAPTER 18 — X
        </p>

        <h2 className="mb-12 text-[30px] leading-[1.56] tracking-[0.12em] font-light text-white/90">
          SNSではなく、“世界の言語系”を握りにいく。
        </h2>

        <div className="flex items-start gap-14">
          <img
            src="/images/musk/x.png"
            className="
              w-[58%]
              aspect-[4/3]
              rounded-[18px]
              opacity-[0.95]
              object-cover
              shadow-[0_0_50px_rgba(255,255,255,0.07)]
            "
            alt=""
          />

          <div className="w-[42%]">
            <p className="mb-6 text-[16px] leading-[2.04] opacity-[0.85]">
              彼が Twitter を買収し「X」へと変えたのは、
              単なるリブランディングではない。
              SNS を“世界規模のインフラ”として再設計し、
              情報・言論・金融を束ねる巨大 OS にしようとしている。
            </p>

            <p className="text-[16px] leading-[2.04] opacity-[0.85]">
              支払い機能、AI連携、クリエイター収益──
              彼の頭の中では、「X」はもはや
              “ひとつの国家規模の情報装置”として描かれている。
              彼はいつも、既存のサービスではなく、
              文明の神経系そのものを握ろうとする。
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
          FINAL CHAPTER
      ========================================================= */}
      <section
        className="
          fade-sec relative w-full min-h-[98vh]
          flex flex-col items-center justify-center
          text-center px-8
          overflow-hidden
        "
      >
        {/* 背景 */}
        <div
          className="
            absolute inset-0
            bg-[url('/images/musk/final.png')] bg-cover bg-center
            opacity-[0.36]
          "
        />

        {/* 光膜 */}
        <div
          className="
            pointer-events-none absolute inset-0
            bg-gradient-to-b
            from-black/20 via-black/35 to-black/55
            mix-blend-overlay
          "
        />

        {/* 中央暗芯 */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.22]"
          style={{
            background:
              "radial-gradient(circle at 50% 48%, rgba(0,0,0,0.34), transparent 48%)",
          }}
        />

        {/* テキスト */}
        <div className="relative z-10 mx-auto max-w-[1120px]">
          <h2
            className="
              mb-16
              text-[42px]
              tracking-[0.16em]
              font-light
              text-white/95
            "
          >
            世界は、彼の意志でわずかに動いた。
          </h2>

          <p
            className="
              mb-14
              mx-auto max-w-[860px]
              text-[19px]
              leading-[2.02]
              text-white/85 opacity-90
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
              mb-14
              mx-auto max-w-[860px]
              text-[19px]
              leading-[2.02]
              text-white/85 opacity-90
            "
          >
            天才だから成し遂げたのではない。<br />
            世界がまだ見ていない“未来の形”を、<br />
            彼だけが先に現実として信じ切っていたからだ。<br />
            そして、その信念に自分の人生ごと賭けた。
          </p>

          <p
            className="
              mb-20
              mx-auto max-w-[860px]
              text-[19px]
              leading-[2.02]
              text-white/82 opacity-90
            "
          >
            彼が動かしたのは企業だけではない。<br />
            人類がどこへ進めるのかという想像力そのものだ。<br />
            ロケットも、EVも、脳も、SNSも、すべては別々の事業ではない。<br />
            文明の進行方向を、少しだけ未来側へ傾けるための装置だった。
          </p>

          <p
            className="
              mb-[2vh]
              text-[25px]
              tracking-[0.14em]
              text-white/70
              font-light
            "
          >
            ELON MUSK — A MAN WHO REWRITES GRAVITY.
          </p>
        </div>
      </section>
    </div>
  );
}