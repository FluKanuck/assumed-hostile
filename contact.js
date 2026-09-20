// The support address, assembled in the browser rather than written into the HTML.
//
// WHAT THIS BUYS AND WHAT IT DOES NOT: address harvesters that read HTML and regex for `mailto:`
// or for `name@host` find neither here — the two halves are separate attributes and never adjacent
// in the source. A harvester that runs a real browser defeats it completely, and plenty do now.
// It is a cheap filter against the naive majority, not protection. The address being DISPOSABLE
// is the actual defence; see the README.
//
// It degrades to the `name [at] host [dot] com` already in the markup, which a person reads fine,
// so the page still carries a working contact with JavaScript off — which App Review needs.
for (const el of document.querySelectorAll('.email')) {
  const addr = el.dataset.u + String.fromCharCode(64) + el.dataset.d;
  const a = document.createElement('a');
  a.href = [ 'mailto', addr ].join(String.fromCharCode(58));
  a.textContent = addr;
  el.replaceWith(a);
}
