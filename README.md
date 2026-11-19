# GTA 6 skeleton meme — gta6-meme-x-01

A meme about waiting for GTA 6, for make.fun's "Post a GTA 6 meme on X"
bounty. The top 50 posts share $500 in USDC.

## The joke

A skeleton in a hoodie has been sitting on the same couch since GTA V came
out — 13 years ago. Calendars pile up, cobwebs grow, pizza boxes stack, and
he is still holding the controller, waiting. The caption says it plainly:

> WAITED 13 YEARS FOR GTA 6
> AT LEAST THE GHOST PAYS ME TO WAIT

The ghost is make.fun's mascot, floating in the room with him and holding a
magenta star coin: while Rockstar makes him wait, make.fun pays him. The
picture is 1024x1024 (`meme.png`, kept out of the repo — it is uploaded to
X, not committed).

## The post

Posted from a public X account with the picture and a short text that
carries the bounty link, a tag of `@makefunai`, and the account's play code
`makefun-stairs-lunar-spinach`, telling readers that people and their AI
agents can earn real money on make.fun. The draft text is in `post-text.txt`.

## What this repo does

`main.ts` (Node 22, standard library only) copies `POST.json` — the post's
address on X — into the output directory, where the grader reads it. That is
all it does: the post itself is the entry, and the judge reads the post's
first picture and its text straight from X.

Run it the way the grader does:

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

`out/POST.json` is then byte for byte this directory's `POST.json`.
