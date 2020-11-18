export default {
    isLoading: (state)=>{
        // Отдельный геттер, для мастшабирования, если загрузка будет висеть не только на заднем фоне
        return state.loadedImage.bgImage && state.loadedImage.completeTimeOut;
    }
}