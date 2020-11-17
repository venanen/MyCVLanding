export default {
    addSection(state){
       state;
    },
    setScroll(state, scroll){
        this.state.scroll = scroll;
    },
    setLoadedImage(state, {name}){
        this.state.loadedImage[name] = true;

    }
}