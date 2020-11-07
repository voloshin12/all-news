<template>
    <main>
        <div class="container">
            <h1 class="text-center m-2">All news</h1>
            <div class="row justify-content-lg-center m-4">
                <div class="col-8">
                    <form @submit.prevent="">
                        <input
                            class="form-control form-control"
                            type="text"
                            placeholder="Enter article titles"
                        />
                        <div class="justify-content-center d-flex m-3">
                            <button type="button" class="btn btn-primary">
                                Search
                            </button>
                        </div>
                    </form>
                    <div class="sorting mb-4 mt-5">
                        <div class="col d-flex align-items-center">
                            <div class="mr-3">SORTING:</div>
                            <div>
                                <div
                                    class="custom-control custom-radio custom-control-inline"
                                >
                                    <input
                                        type="radio"
                                        id="customRadioInline1"
                                        name="customRadioInline1"
                                        class="custom-control-input"
                                    />
                                    <label
                                        class="custom-control-label"
                                        for="customRadioInline1"
                                    >News</label
                                    >
                                </div>
                                <div
                                    class="custom-control custom-radio custom-control-inline"
                                >
                                    <input
                                        type="radio"
                                        id="customRadioInline2"
                                        name="customRadioInline1"
                                        class="custom-control-input"
                                    />
                                    <label
                                        class="custom-control-label"
                                        for="customRadioInline2"
                                    >Old</label
                                    >
                                </div>
                                <div class="custom-control custom-control-inline">
                                    <select
                                        class="custom-select"
                                        id="inputGroupSelect01"
                                    >
                                        <option selected>Choose...</option>
                                        <option value="1">US</option>
                                    </select>
                                </div>
                                <div class="custom-control custom-control-inline">
                                    <input
                                        type="text"
                                        class="form-control"
                                        aria-label="Sizing example input"
                                        aria-describedby="inputGroup-sizing-sm"
                                        value="10"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-3">
                    <div class="sidebar filter">
                        <h5 class="mb-3">Sources</h5>
                        <div class="custom-control custom-checkbox my-1 mr-sm-2">
                            <input
                                type="checkbox"
                                class="custom-control-input"
                                id="customControlInline"
                            />
                            <label
                                class="custom-control-label"
                                for="customControlInline"
                            >Abril.com.br</label
                            >
                        </div>
                        <div class="custom-control custom-checkbox my-1 mr-sm-2">
                            <input
                                type="checkbox"
                                class="custom-control-input"
                                id="customControlInline2"
                            />
                            <label
                                class="custom-control-label"
                                for="customControlInline2"
                            >Eonline.com</label
                            >
                        </div>
                        <div class="custom-control custom-checkbox my-1 mr-sm-2">
                            <input
                                type="checkbox"
                                class="custom-control-input"
                                id="customControlInline3"
                            />
                            <label
                                class="custom-control-label"
                                for="customControlInline3"
                            >BBC News</label
                            >
                        </div>
                        <div class="custom-control custom-checkbox my-1 mr-sm-2">
                            <input
                                type="checkbox"
                                class="custom-control-input"
                                id="customControlInline4"
                            />
                            <label
                                class="custom-control-label"
                                for="customControlInline4"
                            >DIE WELT</label
                            >
                        </div>
                        <div class="custom-control custom-checkbox my-1 mr-sm-2">
                            <input
                                type="checkbox"
                                class="custom-control-input"
                                id="customControlInline5"
                            />
                            <label
                                class="custom-control-label"
                                for="customControlInline5"
                            >News.com.au</label
                            >
                        </div>
                    </div>
                </div>
                <div class="col-9">
                    <div class="cards">
                        <div class="row">
                            <div class="col-6 mb-4">
                                <div class="card">
                                    <div class="card-img-fix">
                                        <img
                                            src="https://t1.llb.be/cctkOUyFZwu5y0ZI9E_5_wruARI=/0x0:2560x1280/1280x640/5fa4391f7b50a6525beeee50.jpg"
                                            class="card-img-top"
                                            alt="..."
                                        />
                                    </div>
                                    <div class="card-body">
                                        <h5 class="card-title">Card title</h5>
                                        <p class="card-text">
                                            Some quick example text to build on the
                                            card title and make up the bulk of the
                                            card's content.
                                        </p>
                                        <a href="#" class="btn btn-primary"
                                        >Read more</a
                                        >
                                    </div>
                                </div>
                            </div>
                            <div class="col-6 mb-4">
                                <div class="card">
                                    <div class="card-img-fix">
                                        <img
                                            src="https://static.reuters.com/resources/r/?m=02&d=20201105&t=2&i=1540150143&r=LYNXMPEGA41I3&w=800"
                                            class="card-img-top"
                                            alt="..."
                                        />
                                    </div>
                                    <div class="card-body">
                                        <h5 class="card-title">Card title</h5>
                                        <p class="card-text">
                                            Some quick example text to build on the
                                            card title and make up the bulk of the
                                            card's content.
                                        </p>
                                        <a href="#" class="btn btn-primary"
                                        >Read more</a
                                        >
                                    </div>
                                </div>
                            </div>
                            <div class="col-6 mb-4">
                                <div class="card">
                                    <div class="card-img-fix">
                                        <img
                                            src="https://editorial.fxstreet.com/images/Markets/Currencies/Digital Currencies/Bitcoin/bitcoins-37949586_Large.jpg"
                                            class="card-img-top"
                                            alt="..."
                                        />
                                    </div>

                                    <div class="card-body">
                                        <h5 class="card-title">Card title</h5>
                                        <p class="card-text">
                                            Some quick example text to build on the
                                            card title and make up the bulk of the
                                            card's content.
                                        </p>
                                        <a href="#" class="btn btn-primary"
                                        >Read more</a
                                        >
                                    </div>
                                </div>
                            </div>
                            <div class="col-6 mb-4">
                                <div class="card">
                                    <div class="card-img-fix">
                                        <img
                                            src="https://t1.llb.be/cctkOUyFZwu5y0ZI9E_5_wruARI=/0x0:2560x1280/1280x640/5fa4391f7b50a6525beeee50.jpg"
                                            class="card-img-top"
                                            alt="..."
                                        />
                                    </div>
                                    <div class="card-body">
                                        <h5 class="card-title">Card title</h5>
                                        <p class="card-text">
                                            Some quick example text to build on the
                                            card title and make up the bulk of the
                                            card's content.
                                        </p>
                                        <a href="#" class="btn btn-primary"
                                        >Read more</a
                                        >
                                    </div>
                                </div>
                            </div>
                            <div class="col-6 mb-4">
                                <div class="card">
                                    <div class="card-img-fix">
                                        <img
                                            src="https://static.reuters.com/resources/r/?m=02&d=20201105&t=2&i=1540150143&r=LYNXMPEGA41I3&w=800"
                                            class="card-img-top"
                                            alt="..."
                                        />
                                    </div>
                                    <div class="card-body">
                                        <h5 class="card-title">Card title</h5>
                                        <p class="card-text">
                                            Some quick example text to build on the
                                            card title and make up the bulk of the
                                            card's content.
                                        </p>
                                        <a href="#" class="btn btn-primary"
                                        >Read more</a
                                        >
                                    </div>
                                </div>
                            </div>
                            <div class="col-6 mb-4">
                                <div class="card">
                                    <div class="card-img-fix">
                                        <img
                                            src="https://editorial.fxstreet.com/images/Markets/Currencies/Digital Currencies/Bitcoin/bitcoins-37949586_Large.jpg"
                                            class="card-img-top"
                                            alt="..."
                                        />
                                    </div>

                                    <div class="card-body">
                                        <h5 class="card-title">Card title</h5>
                                        <p class="card-text">
                                            Some quick example text to build on the
                                            card title and make up the bulk of the
                                            card's content.
                                        </p>
                                        <a href="#" class="btn btn-primary"
                                        >Read more</a
                                        >
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <nav aria-label="navigation" class="mt-4 row justify-content-center">
                        <ul class="pagination">
                            <li class="page-item">
                                <a class="page-link" href="#" aria-label="Previous">
                                    <span aria-hidden="true">&laquo;</span>
                                </a>
                            </li>
                            <li class="page-item">
                                <a class="page-link" href="#">1</a>
                            </li>
                            <li class="page-item">
                                <a class="page-link" href="#">2</a>
                            </li>
                            <li class="page-item">
                                <a class="page-link" href="#">3</a>
                            </li>
                            <li class="page-item">
                                <a class="page-link" href="#" aria-label="Next">
                                    <span aria-hidden="true">&raquo;</span>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
        <footer class="mt-5">
            <div class="container text-center">
                2020
            </div>

        </footer>
    </main>

</template>

<script>
export default {};
</script>

<style>
.sidebar {
    box-shadow: 0px 0px 10px -3px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
    padding: 20px;
}
.card-img-fix {
    position: relative;
    height: 200px;
    overflow: hidden;
}
footer{
    padding: 15px 0;
    background-color: #f1f1f1;
}
</style>
