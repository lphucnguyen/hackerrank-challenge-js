
// Idea: Encrypt to string to find in this string by regex
// Caculate the width of 2 line of P in G array
// Join string array of G to line_1,line_2,line_3,...,line_n
// Create patern for search P in G by regex line_1_P.{width+1},line_2_P.{width+1}, line_3_P.{width+1},...,line_m_P.{width+1}
// Using match function to search pattern of P in G
// For example:
// Array G to string: '7283455864,6731158619,8988242643,3830589324,2229505813,5633845374,6473530293,7053106601,0834282956,4607924137'
// Pattern: '9505.{7}3845.{7}3530'
function gridSearch(G, P) {
    const width = G[0].length - P[0].length;
    const strG = G.join(',');
    const pattern = P.join(`.{${width + 1}}`);
    return strG.match(pattern) ? "YES" : "NO";
}