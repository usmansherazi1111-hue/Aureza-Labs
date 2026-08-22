/**
 * Encode bare ampersands in generated markup.
 *
 * Project data holds human copy such as "Oil & Gas" and "AI & Vision".
 * Rather than hand-escaping every interpolation point (and risking a
 * double-escape on the fields that legitimately carry markup), we make one
 * pass over the finished document: any "&" that does not already begin a
 * character reference becomes "&amp;". Script blocks are left untouched.
 */

const ENTITY = /^&(#\d+|#x[0-9a-fA-F]+|[a-zA-Z][a-zA-Z0-9]{1,31});/;

function encodeSegment(text) {
  let out = "";
  for (let i = 0; i < text.length; i++) {
    if (text[i] !== "&") {
      out += text[i];
      continue;
    }
    out += ENTITY.test(text.slice(i, i + 34)) ? "&" : "&amp;";
  }
  return out;
}

export function encodeAmpersands(html) {
  // Split on script/style blocks so their contents pass through verbatim.
  const parts = html.split(/(<script\b[\s\S]*?<\/script>|<style\b[\s\S]*?<\/style>)/gi);
  return parts
    .map((part, i) => (i % 2 === 1 ? part : encodeSegment(part)))
    .join("");
}
