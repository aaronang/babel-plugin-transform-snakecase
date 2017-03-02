export default function({ types: t }) {
  function camelCase(name) {
    let leadingDollar = getLeadingDollar(name);
    let nondollar = leadingDollar ? name.slice(1) : name;
    let leadingUnderscores = getLeadingUnderscores(nondollar);
    let trailingUnderscores = getTrailingUnderscores(nondollar);
    let filtered = nondollar.slice(leadingUnderscores.length, nondollar.length - trailingUnderscores.length);
    let words = filtered.split("_");
    let camels = words.slice(1)
      .map(w => w.charAt(0).toUpperCase() + w.slice(1))
      .join("");
    return leadingDollar + leadingUnderscores + words[0] + camels + trailingUnderscores;
  }

  function getLeadingDollar(name) {
    return name.startsWith("$") ? "$" : "";
  }

  function getLeadingUnderscores(name) {
    return name.startsWith("_") ? name.split(/[a-z]+/)[0] : "";
  }

  function getTrailingUnderscores(name) {
    if (name.endsWith("_")) {
      let underscores = name.split(/[a-z]+/);
      return underscores[underscores.length - 1];
    }
    return "";
  }

  function isUpperCase(character) {
    return character === character.toUpperCase();
  }

  function isFullCaps(name) {
    let clean = name.replace(/[^a-zA-Z]/g, "");
    return clean.split("").every(isUpperCase);
  }

  return {
    name: "transform-snakecase",
    visitor: {
      Identifier(path) {
        let name = path.node.name;
        if (name.contains('_') && !isFullCaps(name)) {
          path.node.name = camelCase(name);
        }
      }
    }
  };
}
