# Assumed Hostile — privacy policy and support

The two pages the App Store requires for
[Assumed Hostile](https://flukanuck.github.io/assumed-hostile/), a tactical naval
command-and-control game for iPhone and iPad.

- [Privacy policy](https://flukanuck.github.io/assumed-hostile/privacy/) — the app collects nothing
- [Support](https://flukanuck.github.io/assumed-hostile/support/)

This repository is public because GitHub Pages requires it to be. The game itself is not here.

The source of truth for both texts is `docs/STORE_LISTING.md` in the game's own repository; if a
fact about the app changes, it changes there first and is copied here. A privacy answer that
under-declares is a resubmission.

## The support address

The pages assemble it in the browser (`contact.js`) instead of writing it into the HTML, so a
harvester that regexes the source for `mailto:` finds nothing. One that runs a real browser is not
fooled for a moment. Treat the address as disposable rather than hidden: if it starts drawing spam,
change it here and in App Store Connect and the old one stops mattering.
