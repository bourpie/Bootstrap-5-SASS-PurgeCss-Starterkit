Vue.component('go-up', {
    template: `
        <button 
            ref="button" 
            aria-label="Go Up"
            v-on:click.prevent="scroll(0,0)" 
            class="go-up-btn">&#8679;
        </button>
    `,
    mounted() {
        this.scrollHandler();
    },
    methods: {
        scrollHandler() {
            const thisBtn = this.$refs.button;   
            document.addEventListener('scroll', (e) => {  
                if (window.scrollY > 300) {
                    thisBtn.style.opacity = '1';
                } else {
                    thisBtn.style.opacity = '0';
                }
            });
        }
    }
});