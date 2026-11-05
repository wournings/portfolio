/* ==========================================================
   EDIT YOUR STUFF HERE
   ========================================================== */

// the album in the tape deck.
// drop full songs in music/flowers-swallow-me/ as 01.mp3 … 10.mp3 and the deck
// plays those. any file that's missing falls back to apple's 30s preview.
const ALBUM = {
  artist: "in our sea",
  title: "flowers! swallow me!",
  year: 2024,
  cover: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/cc/17/82/cc17821a-205e-79de-89ef-dd39b20d0fc5/artwork.jpg/600x600bb.jpg",
  folder: "music/flowers-swallow-me/",
  tracks: [
    ["Bugs Song (Live from the Forest Floor)", 110, "AudioPreview211/v4/de/a7/f6/dea7f6b4-2eae-188d-8565-a93de8c455e5/mzaf_12654082227932231313"],
    ["Meet Me in the Middle", 182, "AudioPreview211/v4/fa/4c/a6/fa4ca636-d32c-c972-7679-208a71306643/mzaf_8894262185191910009"],
    ["When You Kissed Me I Went Numb", 230, "AudioPreview211/v4/9d/6e/02/9d6e02c8-fce9-41d1-3fd4-196007244517/mzaf_16129182193943920229"],
    ["Rancid (Hand-rolled Cigarettes)", 235, "AudioPreview211/v4/98/fc/f6/98fcf6ff-39ae-cc67-d5da-e955ae417952/mzaf_2428324627683391906"],
    ["Sparks", 170, "AudioPreview211/v4/82/34/f7/8234f79b-9b8a-7f01-fc59-24d1c3d493ac/mzaf_4564769981169439295"],
    ["Secret of the Quiet Night", 165, "AudioPreview221/v4/59/62/07/596207f1-b324-c154-fe7b-9ba5090ab7b3/mzaf_60475794225974307"],
    ["Foul Temptations", 260, "AudioPreview221/v4/80/a3/70/80a370c8-969e-6e94-fd49-83c19de92f46/mzaf_8755038333945129507"],
    ["Garden Song (30.22287° N, 98.76707° W)", 201, "AudioPreview221/v4/53/fe/cd/53fecdcf-a75b-44fe-9ceb-a79578596c5e/mzaf_7118893398996929839"],
    ["Flowers! Swallow Me!", 116, "AudioPreview221/v4/a5/04/e2/a504e20f-a0e8-7f07-4dac-293f06b7dd32/mzaf_4713315375625142945"],
    ["(By the Time I Get to) Asheville", 163, "AudioPreview221/v4/f9/08/52/f90852ea-e4b5-e783-c5f2-5ac42a5e0847/mzaf_7423872953055669137"],
  ].map(([title, length, preview], i) => ({
    n: i + 1,
    title,
    length,
    file: `music/flowers-swallow-me/${String(i + 1).padStart(2, "0")}.mp3`,
    preview: `https://audio-ssl.itunes.apple.com/itunes-assets/${preview}.plus.aac.p.m4a`,
    hasFile: false,
  })),
};

const SPOTIFY = "https://open.spotify.com/artist/6W3rwKNj4ThWExWRK7yoi0";
const APPLE = "https://music.apple.com/us/artist/in-our-sea/1476176805";

// the music tab. `embed` is optional: a spotify / bandcamp / soundcloud / youtube
// embed url gets a "▸ listen" toggle.
const MUSIC = [
  {
    title: "flowers! swallow me!",
    meta: "in our sea · album · 2024",
    desc: "the album. ten songs, thirty minutes. also in the tape deck up top.",
    cover: ALBUM.cover,
    embed: "https://open.spotify.com/embed/album/0l67TrbPZjE1M0bGIYlvj0",
    embedHeight: 352,
    links: [
      ["spotify", "https://open.spotify.com/album/0l67TrbPZjE1M0bGIYlvj0"],
      ["apple music", "https://music.apple.com/us/album/flowers-swallow-me/1754431744"],
      ["tidal", "https://listen.tidal.com/album/371710550"],
    ],
  },
  {
    title: "inner beauty pageant (feat. <3guts)",
    meta: "in our sea · 2022",
    links: [
      ["spotify", "https://open.spotify.com/album/5xZw46asrAv1q4R5obwDSM"],
      ["apple music", "https://music.apple.com/us/album/inner-beauty-pageant-feat-3guts/1634435568"],
    ],
  },
  {
    title: "foul temptations",
    meta: "in our sea · single · 2021",
    links: [
      ["spotify", "https://open.spotify.com/album/2rgC6IFckrggLISDeI6xxB"],
      ["apple music", "https://music.apple.com/us/album/foul-temptations-single/1584754692"],
    ],
  },
  {
    title: "rancid (hand rolled cigarettes) (feat. <3guts)",
    meta: "in our sea · single · 2021",
    links: [["apple music", "https://music.apple.com/us/album/rancid-hand-rolled-cigarettes-feat-3guts-single/1579776092"]],
  },
  {
    title: "speeding ticket",
    meta: "in our sea · single · 2020",
    links: [["apple music", "https://music.apple.com/us/album/speeding-ticket-single/1513692014"]],
  },
  {
    title: "rev note (feat. tay howell)",
    meta: "in our sea · single · 2019",
    links: [["apple music", "https://music.apple.com/us/album/rev-note-feat-tay-howell-single/1491416640"]],
  },
  {
    title: "fits of pleasure",
    meta: "band",
    desc: "the band.",
    embed: "https://open.spotify.com/embed/artist/147gE0Fr5knydNehRc0HUi",
    embedHeight: 352,
    links: [
      ["spotify", "https://open.spotify.com/artist/147gE0Fr5knydNehRc0HUi"],
      ["apple music", "https://music.apple.com/us/artist/fits-of-pleasure/1511568818"],
      ["youtube", "https://www.youtube.com/channel/UCBoLUqyXPc6X-_nKNDMUP1Q"],
    ],
  },
];

// websites. `path` points at the folder in /websites, `live` is optional.
const SITES = [
  {
    title: "larry goode",
    meta: "portfolio · design + code",
    desc: "illustration + design portfolio for larry goode. scrolling project slideshows, slide-down menus.",
    path: "websites/larry-goode/index.html",
  },
  {
    title: "brandon reading clinic",
    meta: "business site · design + code · 2018",
    desc: "site for a reading therapy clinic in brandon, fl: photo carousel, about / services / faq, testimonials, contact + map.",
    path: "websites/brandon-reading-clinic/index.html",
    archive: "https://web.archive.org/web/20180321220631/https://www.brandonreadingclinic.com/",
  },
  {
    title: "fits of pleasure",
    meta: "band site · design + code",
    desc: "site for the band: music links, shows, contact. bootstrap base, custom styling.",
    path: "websites/fits-of-pleasure/index.html",
    live: "https://fitsofpleasure.com",
  },
];

/* ==========================================================
   tabs
   ========================================================== */

const TABS = ["home", "websites", "music"];

function showTab() {
  const name = TABS.includes(location.hash.slice(1)) ? location.hash.slice(1) : "home";
  document.querySelectorAll("[data-panel]").forEach((p) => (p.hidden = p.dataset.panel !== name));
  document.querySelectorAll("[data-tab]").forEach((a) => a.classList.toggle("active", a.dataset.tab === name));
  if (name === "websites") fitPreviews();
}
window.addEventListener("hashchange", showTab);

/* ==========================================================
   music + websites lists
   ========================================================== */

const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

function renderMusic() {
  document.getElementById("musicList").innerHTML = MUSIC.map((m, i) => `
    <li class="${m.cover ? "has-cover" : ""}">
      ${m.cover ? `<img class="cover" src="${esc(m.cover)}" alt="" loading="lazy" />` : ""}
      <div>
        <div class="item-head"><span class="item-title">${esc(m.title)}</span><span class="item-meta">${esc(m.meta || "")}</span></div>
        ${m.desc ? `<p class="item-desc">${esc(m.desc)}</p>` : ""}
        <div class="item-links">
          ${m.embed ? `<a class="listen" data-embed="${i}" href="#music">▸ listen</a>` : ""}
          ${(m.links || []).map(([label, url]) => `<a href="${esc(url)}" target="_blank" rel="noopener">${esc(label)} ↗</a>`).join("")}
        </div>
      </div>
      <div class="embed" id="embed-${i}"></div>
    </li>`).join("");

  document.querySelectorAll("[data-embed]").forEach((btn) =>
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const m = MUSIC[btn.dataset.embed];
      const box = document.getElementById("embed-" + btn.dataset.embed);
      const open = box.childElementCount > 0;
      box.innerHTML = open ? "" :
        `<iframe src="${esc(m.embed)}" height="${m.embedHeight || 152}" loading="lazy" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>`;
      btn.textContent = open ? "▸ listen" : "▾ hide";
    })
  );
}

function renderSites() {
  document.getElementById("siteList").innerHTML = SITES.map((s) => `
    <article>
      <div class="site-preview">
        <iframe src="${esc(s.path)}" loading="lazy" tabindex="-1" scrolling="no" title="${esc(s.title)} preview"></iframe>
        <a href="${esc(s.path)}" target="_blank" rel="noopener" aria-label="open ${esc(s.title)}"></a>
      </div>
      <div class="site-body">
        <div class="item-head"><span class="item-title">${esc(s.title)}</span><span class="item-meta">${esc(s.meta || "")}</span></div>
        <p class="item-desc">${esc(s.desc || "")}</p>
        <div class="item-links">
          <a href="${esc(s.path)}" target="_blank" rel="noopener">open ↗</a>
          ${s.live ? `<a href="${esc(s.live)}" target="_blank" rel="noopener">live site ↗</a>` : ""}
          ${s.archive ? `<a href="${esc(s.archive)}" target="_blank" rel="noopener">2018 archive ↗</a>` : ""}
        </div>
      </div>
    </article>`).join("");
}

// scale the 1280px-wide iframes down to fit their boxes
function fitPreviews() {
  document.querySelectorAll(".site-preview").forEach((box) => {
    const f = box.querySelector("iframe");
    f.style.transform = `scale(${box.clientWidth / 1280})`;
  });
}
new ResizeObserver(fitPreviews).observe(document.body);

/* ==========================================================
   the tape deck
   ========================================================== */

const START_TRACK = 1; // 0-based, so this is track 2: meet me in the middle

const screen = document.getElementById("screen");
const audio = document.getElementById("audio");
const playBtn = document.getElementById("playBtn");
const nowEl = document.getElementById("nowPlaying");
const listBtn = document.getElementById("listBtn");
const listEl = document.getElementById("tracklist");
const TR = ALBUM.tracks;

const deck = { i: START_TRACK, loaded: -1, spin: 0 };

const fmt = (s) => {
  s = Math.max(0, Math.floor(s || 0));
  return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`;
};
const num = (t) => String(t.n).padStart(2, "0");

// --- transport ---
function load(i) {
  deck.i = (i + TR.length) % TR.length;
  const t = TR[deck.i];
  audio.src = t.hasFile ? t.file : t.preview;
  deck.loaded = deck.i;
  render();
  if ("mediaSession" in navigator) {
    navigator.mediaSession.metadata = new MediaMetadata({
      title: t.title, artist: "In Our Sea", album: "Flowers! Swallow Me!",
      artwork: [{ src: ALBUM.cover, sizes: "600x600", type: "image/jpeg" }],
    });
  }
}

function play(i = deck.i) {
  if (i !== deck.loaded) load(i);
  audio.play().catch(() => {});
}
function pause() { audio.pause(); }
function toggle() { audio.paused ? play() : pause(); }
function prev() {
  if (audio.currentTime > 3) { audio.currentTime = 0; return; }
  const was = !audio.paused;
  load(deck.i - 1);
  if (was) play();
}
function next() {
  const was = !audio.paused;
  load(deck.i + 1);
  if (was) play();
}

audio.addEventListener("ended", () => {
  if (deck.i === TR.length - 1) load(START_TRACK); // end of the tape: rewind + stop
  else { load(deck.i + 1); play(); }
});
audio.addEventListener("play", render);
audio.addEventListener("pause", render);
audio.addEventListener("timeupdate", render);
audio.addEventListener("loadedmetadata", render);

document.getElementById("prevBtn").addEventListener("click", prev);
document.getElementById("nextBtn").addEventListener("click", next);
playBtn.addEventListener("click", toggle);
screen.addEventListener("click", toggle);
screen.addEventListener("keydown", (e) => {
  if (e.key === "Enter") toggle();
});
listBtn.addEventListener("click", () => {
  listEl.hidden = !listEl.hidden;
  listBtn.setAttribute("aria-expanded", String(!listEl.hidden));
  listBtn.classList.toggle("on", !listEl.hidden);
});
listEl.addEventListener("click", (e) => {
  const b = e.target.closest("[data-track]");
  if (b) play(+b.dataset.track);
});

if ("mediaSession" in navigator) {
  navigator.mediaSession.setActionHandler("play", () => play());
  navigator.mediaSession.setActionHandler("pause", pause);
  navigator.mediaSession.setActionHandler("previoustrack", prev);
  navigator.mediaSession.setActionHandler("nexttrack", next);
}

window.addEventListener("keydown", (e) => {
  if (e.metaKey || e.ctrlKey || e.altKey) return;
  if (e.target.closest("input, textarea, button, a, [tabindex]")) return;
  if (e.key === " ") { e.preventDefault(); toggle(); }
  else if (e.key === "ArrowRight") next();
  else if (e.key === "ArrowLeft") prev();
});

// --- drawing: just a cassette with play / pause and the time ---
const SPIN = ["|", "/", "-", "\\"];

function render() {
  const t = TR[deck.i];
  const playing = !audio.paused;
  const reel = playing ? SPIN[deck.spin % 4] : "|";
  const state = playing ? "|| pause" : "|> play ";
  const time = `${fmt(audio.currentTime)} / ${fmt(audio.duration || t.length)}`;
  const label = `  ${state}${time.padStart(20 - state.length)}  `;

  screen.innerHTML = [
    ` .------------------------------. `,
    ` |  .------------------------.  | `,
    ` |  |<span class="a">${esc(label)}</span>|  | `,
    ` |  |  ( ${reel} )          ( ${reel} )  |  | `,
    ` |  '------------------------'  | `,
    ` |      __________________      | `,
    ` '-----/__________________\\-----' `,
  ].join("\n");

  playBtn.textContent = playing ? "pause" : "play";
  playBtn.classList.toggle("on", playing);
  nowEl.innerHTML = `<span class="accent">${num(t)}</span> ${esc(t.title.toLowerCase())}` +
    (t.hasFile ? "" : ` <span class="dim">· 30s preview</span>`);

  listEl.querySelectorAll("[data-track]").forEach((b) => b.classList.toggle("cur", +b.dataset.track === deck.i));
}

// reels turn slowly while playing; that's the only animation
setInterval(() => {
  if (!audio.paused) { deck.spin++; render(); }
}, 300);

function renderTracklist() {
  listEl.innerHTML = `<ol>${TR.map((t, k) => `
    <li><button type="button" data-track="${k}">
      <span>${num(t)}. ${esc(t.title)}</span><span class="dim">${fmt(t.length)}</span>
    </button></li>`).join("")}</ol>`;
}

// find out which full mp3s exist; anything missing uses the preview
async function checkFiles() {
  if (location.protocol === "file:") return;
  await Promise.all(TR.map(async (t) => {
    try { t.hasFile = (await fetch(t.file, { method: "HEAD" })).ok; } catch { t.hasFile = false; }
  }));
  if (audio.paused && audio.currentTime === 0 && TR[deck.i].hasFile) load(deck.i); // swap in the full file if we found one
}

/* ==========================================================
   go
   ========================================================== */

document.getElementById("year").textContent = new Date().getFullYear();
renderMusic();
renderSites();
renderTracklist();
showTab();
load(START_TRACK);
checkFiles();
