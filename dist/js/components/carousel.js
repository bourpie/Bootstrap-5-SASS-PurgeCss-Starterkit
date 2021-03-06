Vue.component('carousel', { 
    
    template: `
        <section class="carousel slide h-100 bg-dark" data-bs-ride="carousel">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" class="active"
                    aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner h-100">
                <div class="carousel-item active h-100">

                    <div class="container h-100 d-flex align-items-center justify-content-center">
                        <div class="carousel-caption">
                            <h1>Example headline</h1>
                            <p>Photo de cottonbro provenant de Pexels</p>
                            <p><a class="btn btn-lg btn-dark" href="https://www.pexels.com/fr-fr/@cottonbro?utm_content=attributionCopyText&utm_medium=referral&utm_source=pexels">Voir son portfolio</a></p>
                        </div>
                    </div>
                </div>
                <div class="carousel-item h-100">

                    <div class="container h-100 d-flex align-items-center justify-content-center">
                        <div class="carousel-caption">
                            <h1>Another example headline.</h1>
                            <p>Photo de Alex Conchillos provenant de Pexels</p>
                            <p><a class="btn btn-lg btn-dark" href="https://www.pexels.com/fr-fr/@slendyalex?utm_content=attributionCopyText&utm_medium=referral&utm_source=pexels">Voir son portfolio</a></p>
                        </div>
                    </div>
                </div>
                <div class="carousel-item h-100">

                    <div class="container h-100 d-flex align-items-center justify-content-center">
                        <div class="carousel-caption">
                            <h1>One more for good measure.</h1>
                            <p>Photo de Rodrigo Souza provenant de Pexels.</p>
                            <p><a class="btn btn-lg btn-dark" href="https://www.pexels.com/fr-fr/@rodrigo-souza-1275988?utm_content=attributionCopyText&utm_medium=referral&utm_source=pexels">Voir son portfolio</a></p>
                        </div>
                    </div>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </section>
    `,
});