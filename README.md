# Assumed Hostile — privacy policy and support

The two pages the App Store requires for
[Assumed Hostile](https://flukanuck.github.io/assumed-hostile/), a tactical naval
command-and-control game for iPhone and iPad.

- [Privacy policy](https://flukanuck.github.io/assumed-hostile/privacy/) — the app collects nothing
- [Support](https://flukanuck.github.io/assumed-hostile/support/)
- [Guide](https://flukanuck.github.io/assumed-hostile/guide/) — every key, page, symbol and alert on the console

This repository is public because GitHub Pages requires it to be. The game itself is not here.

`guide/` is generated, not written: `npm run guide` in the game's repository builds it from the game
source and photographs of the console. `guide/data.js` is data only; no game code is published. Never
edit it here — rebuild there and copy the whole folder across.

The source of truth for both texts is `docs/STORE_LISTING.md` in the game's own repository; if a
fact about the app changes, it changes there first and is copied here. A privacy answer that
under-declares is a resubmission.

## The support address

The pages assemble it in the browser (`contact.js`) instead of writing it into the HTML, so a
harvester that regexes the source for `mailto:` finds nothing. One that runs a real browser is not
fooled for a moment. Treat the address as disposable rather than hidden: if it starts drawing spam,
change it here and in App Store Connect and the old one stops mattering.
