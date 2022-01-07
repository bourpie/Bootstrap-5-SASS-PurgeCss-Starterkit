Vue.component("modals", {
    template: `
        <section>
            <div class="container">
                <h2 class="mb-5 text-center">Modals</h2>
                <button type="button" class="btn btn-primary" data-bs-toggle="modal"
                    data-bs-target="#exampleModalFullscreen">Full screen</button>
                <button type="button" class="btn btn-primary" data-bs-toggle="modal"
                    data-bs-target="#exampleModalFullscreenSm">Full screen below sm</button>
                <button type="button" class="btn btn-primary" data-bs-toggle="modal"
                    data-bs-target="#exampleModalFullscreenMd">Full screen below md</button>
                <button type="button" class="btn btn-primary" data-bs-toggle="modal"
                    data-bs-target="#exampleModalFullscreenLg">Full screen below lg</button>
                <button type="button" class="btn btn-primary" data-bs-toggle="modal"
                    data-bs-target="#exampleModalFullscreenXl">Full screen below xl</button>
                <button type="button" class="btn btn-primary" data-bs-toggle="modal"
                    data-bs-target="#exampleModalFullscreenXxl">Full screen below xxl</button>
            </div>
        </section>
    `
});