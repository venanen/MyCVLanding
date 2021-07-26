module.exports = {
    css: {
        loaderOptions: {
            sass: {
                additionalData: `
                    @use "sass:math";
                    @import "src/styles/variables";
                    @import "src/styles/global";
                    @import "src/styles/flexboxgrid";
                    @import "src/milligram/milligram";
                    @import "src/plugins/locomotive/locomotive";
                    @import "src/styles/icofont";
                `
            }
        }
    }
};