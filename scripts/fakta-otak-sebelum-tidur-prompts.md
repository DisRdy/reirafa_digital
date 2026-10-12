# Prompt Visual: Fakta Otak Sebelum Tidur

Pasangan dari `fakta-otak-sebelum-tidur.md`. Format 9:16, ±50 detik.

## Alur kerja (hybrid)
1. **Generate gambar** tiap scene pakai AI image (Midjourney / Leonardo / Ideogram / ChatGPT image / Gemini).
2. **Animasikan 4 scene kunci** (1, 2, 4, 7) pakai image-to-video (Kling / Hailuo / Runway / Pika), 5 detik per klip.
3. **Scene sisanya** cukup foto + gerak di CapCut (zoom pelan, pan, efek parallax 3D).
4. **Teks layar, SFX, dan VO** ditambahkan di editor, JANGAN di-generate AI (teks hasil AI sering typo/berantakan).

Prompt ditulis dalam bahasa Inggris karena hasil generator AI biasanya lebih akurat.

---

## STYLE ANCHOR (tempel di awal SETIAP prompt gambar)
> Cute stylized 3D cartoon illustration, soft clay-like textures, rounded shapes, cinematic soft lighting, cozy night color palette of deep navy blue, purple and warm amber, gentle glow, high detail, vertical 9:16 composition, no text, no letters, no watermark.

## KARAKTER (tempel juga di setiap scene yang ada karakternya)
> Main character: a young Indonesian adult with messy short black hair, big round expressive eyes, slightly chubby round face, wearing oversized light blue pajamas with tiny yellow star pattern.

Tips konsistensi: generate karakter dulu (scene 1), lalu pakai gambar itu sebagai **character reference** (Midjourney `--cref`, Leonardo "Character Reference", atau upload sebagai referensi di ChatGPT/Gemini) untuk scene berikutnya.

---

## Scene 1 | HOOK (0–3 dtk) 🎬 animasi
**Image prompt:**
> [STYLE] [CHARACTER] lying in bed under a thick white blanket, top-down view, dark cozy bedroom lit only by soft blue moonlight from a window, the character's eyes wide open staring at the ceiling, everything else calm and dark.

**Motion prompt:**
> The bedroom light switches off, a moment of darkness, then the character's eyes suddenly snap wide open. Subtle slow camera push-in toward the face. Smooth, no distortion.

## Scene 2 | RELATE (3–11 dtk) 🎬 animasi
Generate 1 gambar dasar + 3 gambar gelembung, lalu susun di CapCut supaya gelembung muncul satu-satu (efek *pop*).

**Gambar dasar:**
> [STYLE] [CHARACTER] lying in bed in a dark bedroom, looking nervous and restless, several empty glowing cloud-shaped thought bubbles floating above the head, dreamy atmosphere.

**Motion prompt:**
> Thought bubbles slowly float and wobble above the sleeping character, the character turns head left and right restlessly. Gentle camera sway.

**Gelembung 1 (malu):**
> [STYLE] Inside a round glowing thought bubble: [CHARACTER] waving happily at a stranger on the street, but the stranger is actually waving at someone behind, the character's face frozen in embarrassment, blushing cheeks.

**Gelembung 2 (cemas):**
> [STYLE] Inside a round glowing thought bubble: a cartoon alarm clock ringing wildly and shaking, sweat drops flying, comic panic vibe, warm red and orange accents.

**Gelembung 3 (random):**
> [STYLE] Inside a round glowing thought bubble: a cute orange fish inside an aquarium holding a tiny glass of water with its fin, curious funny expression.

## Scene 3 | TRANSISI (11–14 dtk) 📸 foto + zoom
**Image prompt:**
> [STYLE] [CHARACTER] lying in bed, side view, all thought bubbles frozen in mid-air, a soft magical glow coming from the character's forehead, cinematic close-up.

**Di editor:** freeze-frame, zoom cepat ke kepala, transisi *zoom blur* ke scene 4.

## Scene 4 | FAKTA (14–26 dtk) 🎬 animasi (scene paling "wow")
**Image prompt:**
> [STYLE] Inside a stylized cartoon human brain, a vast network of glowing neurons connected like a sparkling city skyline at night seen from above, thousands of tiny lights in cyan, purple and gold, magical and awe-inspiring, deep space-like background.

**Motion prompt:**
> Camera slowly flies forward through the glowing neural network, neurons light up one after another in waves like city lights turning on, sparks of electricity travel along the connections. Smooth, cinematic, dreamy.

**Teks di editor:** "±86 MILIAR NEURON" lalu "MODE MELAMUN: ON 💡"

## Scene 5 | KENAPA MALAM? (26–38 dtk) 📸 foto + parallax
Buat 2 gambar, tampilkan split-screen (atau geser dari siang ke malam).

**Siang:**
> [STYLE] A cute cartoon brain character with tiny arms looking overwhelmed and dizzy, surrounded by floating icons of smartphones, laptops, chat bubbles and notification bells, bright busy daytime background, yellow and white palette.

**Malam:**
> [STYLE] The same cute cartoon brain character relaxing alone in a calm night sky, watching floating glowing film frames of old memories drifting around it like a movie, peaceful navy and purple palette, stars twinkling.

**Di editor:** ikon siang menghilang satu-satu (fade/pop), lalu transisi ke malam.

## Scene 6 | REFRAME + TIPS (38–46 dtk) 📸 foto + gerak pelan
**Image prompt:**
> [STYLE] [CHARACTER] sitting in bed under a warm bedside lamp, writing in a small notebook, glowing thought bubbles gently flowing down into the notebook pages, peaceful smile, cozy calm bedroom, warm amber light.

**Opsional, motion prompt (kalau mau dianimasikan):**
> The character writes in the notebook while glowing thought bubbles shrink and float into the pages one by one, the room becomes calmer, the character closes the notebook, lies down and closes eyes with a smile.

## Scene 7 | CTA (46–52 dtk) 🎬 animasi
**Image prompt:**
> [STYLE] [CHARACTER] lying in bed with eyes suddenly wide open again, a single big empty glowing thought bubble above the head, funny surprised expression, dark cozy bedroom.

**Motion prompt:**
> The character is peacefully sleeping, then suddenly the eyes pop open in surprise, and a big empty thought bubble pops up above the head with a bounce. Comedic timing.

**Teks di editor:** "?" di dalam gelembung + "TULIS DI KOMEN 👇"

---

## Checklist editing (CapCut)
- Gerakan/perubahan visual setiap **2–3 detik**, karena ini kunci retensi Reels.
- Subtitle besar di tengah-bawah (auto-caption), highlight kata kunci: **overthinking**, **86 miliar**, **mode melamun**.
- SFX: *klik* lampu, *pop* gelembung, *ding* weker, *whoosh* zoom, *sparkle* neuron.
- Musik: lo-fi/ambient pelan, volume turun saat VO.
- Jaga teks di area aman (jangan terlalu bawah/kanan karena tertutup UI Instagram).
