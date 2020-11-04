module.exports = {
    css: {
        loaderOptions: {
            sass: {
                additionalData: `
                    @import "src/styles/variables";
                    @import "src/styles/global";
                    @import "src/styles/flexboxgrid";
                    @import "src/milligram/milligram";
                    @import "src/plugins/locomotive/locomotive";
                `
            }
        }
    }
};