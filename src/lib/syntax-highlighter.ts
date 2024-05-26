export default class RayQLSyntaxHighlighter {
  static keywords = ["enum", "model", "int", "str", "timestamp", "default", "primary_key", "auto_increment", "unique", "foreign_key"];
  static types = ["user_type", "user", "post"];
  static constants = ["admin", "developer", "normal"];
  static operators = [":", ",", "(", ")", "{", "}"];

  static highlight(code: string) {
    // Adjusted regex to match keywords followed by a '?'
    const tokens = code.split(/(\s+|#.*|,|\(|\)|{|}|str\?|enum|model|int|str|timestamp|default|primary_key|auto_increment|unique|foreign_key|admin|developer|normal)/).filter(token => token.trim() !== '' || token.match(/\s+/));

    return tokens.map(token => {
      if (RayQLSyntaxHighlighter.keywords.includes(token)) {
        return `<span class="text-blue-500">${token}</span>`;
      }
      if (token === 'str?') {
        return `<span class="text-blue-500">str?</span>`;
      }
      if (RayQLSyntaxHighlighter.types.includes(token)) {
        return `<span class="text-purple-500">${token}</span>`;
      }
      if (RayQLSyntaxHighlighter.constants.includes(token)) {
        return `<span class="text-green-500">${token}</span>`;
      }
      if (RayQLSyntaxHighlighter.operators.includes(token)) {
        return `<span class="text-red-500">${token}</span>`;
      }
      if (token.startsWith('#')) {
        return `<span class="text-gray-500">${token}</span>`;
      }
      if (token.match(/\s+/)) {
        return token.replace(/ /g, '&nbsp;').replace(/\n/g, '<br>');
      }
      return token;
    }).join('');
  }
}
