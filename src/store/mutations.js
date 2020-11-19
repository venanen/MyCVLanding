export default {
    addSection(state) {
        state;
    },
    setScroll(state, scroll) {
        this.state.scroll = scroll;
    },
    setLoadedImage(state, {name}) {
        window.loco.update()
        this.state.loadedImage[name] = true;

    },
    setComleteTimeOut(state) {
        window.loco.update()
        state.loadedImage.completeTimeOut = true
    }
}