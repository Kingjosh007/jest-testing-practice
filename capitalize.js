const capitalize = (str) => (str && str.length >= 1) ? (str[0].toUpperCase() + str.slice(1)) : "";
module.exports = capitalize;