function upsertMeta(selector, attrName, attrValue, content) {
  let el = document.head.querySelector(selector);

  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attrName, attrValue);
    document.head.appendChild(el);
  }

  el.setAttribute("content", content);
}

function upsertLink(selector, rel, href) {
  let el = document.head.querySelector(selector);

  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }

  el.setAttribute("href", href);
}

export function setSeo({
  title,
  description,
  url,
  image,
  imageAlt,
  type = "website",
  twitterCard = "summary_large_image",
  jsonLd,
}) {
  if (title) {
    document.title = title;
  }

  upsertMeta('meta[name="robots"]', "name", "robots", "index, follow");
  upsertMeta('meta[property="og:site_name"]', "property", "og:site_name", "GUSHIKEN DESIGN");
  upsertMeta('meta[property="og:locale"]', "property", "og:locale", "ja_JP");

  if (description) {
    upsertMeta('meta[name="description"]', "name", "description", description);
  }

  if (url) {
    upsertLink('link[rel="canonical"]', "rel", "canonical", url);
    upsertMeta('meta[property="og:url"]', "property", "og:url", url);
  }

  if (type) {
    upsertMeta('meta[property="og:type"]', "property", "og:type", type);
  }

  if (title) {
    upsertMeta('meta[property="og:title"]', "property", "og:title", title);
    upsertMeta('meta[name="twitter:title"]', "name", "twitter:title", title);
  }

  if (description) {
    upsertMeta(
      'meta[property="og:description"]',
      "property",
      "og:description",
      description
    );
    upsertMeta(
      'meta[name="twitter:description"]',
      "name",
      "twitter:description",
      description
    );
  }

  if (image) {
    upsertMeta('meta[property="og:image"]', "property", "og:image", image);
    upsertMeta('meta[name="twitter:image"]', "name", "twitter:image", image);
  }

  if (imageAlt) {
    upsertMeta(
      'meta[property="og:image:alt"]',
      "property",
      "og:image:alt",
      imageAlt
    );
  }

  if (twitterCard) {
    upsertMeta(
      'meta[name="twitter:card"]',
      "name",
      "twitter:card",
      twitterCard
    );
  }

  if (jsonLd) {
    let script = document.getElementById("jsonld-dynamic");

    if (!script) {
      script = document.createElement("script");
      script.type = "application/ld+json";
      script.id = "jsonld-dynamic";
      document.head.appendChild(script);
    }

    script.textContent = JSON.stringify(jsonLd);
  }
}

export function resetSeoToDefault() {
  setSeo({
    title: "ORIGIN｜思想を体験するアート空間 | GUSHIKEN DESIGN",
    description: "ORIGINは、思想の核を体験できるWebアートプロジェクトです。",
    url: "https://origin-gray.vercel.app/",
    image: "https://origin-gray.vercel.app/og/top.png",
    imageAlt: "ORIGINのキービジュアル",
    type: "website",
    twitterCard: "summary_large_image",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "CreativeWork",
      name: "ORIGIN",
      headline: "思想の核を、体験できる空間へ",
      description: "思想の核をWeb空間として再構築するアートプロジェクト。",
      creator: {
        "@type": "Person",
        name: "裕人",
      },
      publisher: {
        "@type": "Organization",
        name: "GUSHIKEN DESIGN",
      },
      url: "https://origin-gray.vercel.app/",
      inLanguage: "ja",
    },
  });
}