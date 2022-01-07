Vue.component("main-header", {

    template: `
    <header>
        <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
            <div class="container-fluid">
                <a class="navbar-brand" href="#myCarousel">Carousel</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse"
                    aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarCollapse">
                    <ul class="navbar-nav me-auto mb-2 mb-md-0">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#myCarousel">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#features">Products</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#feature1">Featurette</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#accordion">Accordion</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#tabs">Tabs</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#modals">Modal</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
    `,
})