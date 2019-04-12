const css = require('css')
const { getOptions } = require('loader-utils');

module.exports = function (source) {
    const options = getOptions(this);
    const pxUnit = options.pxUnit || 50;

    let ast = css.parse(source);

    ast.stylesheet.rules.forEach((rule) => {        
        rule.type == 'rule' && rule.declarations.forEach((declaration) => {
            let remReg = /(^|\s*)([\d.]+)rem($|\s*)/g, 
                value = declaration.value;

            if (remReg.test(value)) {
                declaration.value = value.replace(remReg, (match, p1, p2, p3) => {
                    return p1 + parseFloat(p2) * pxUnit + "px" + p3;
                });
            }
        });
    });

    return css.stringify(ast);
}