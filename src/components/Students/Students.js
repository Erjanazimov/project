import React from "react";
import Footer from "../Footer/Footer";

function Students(){
    return(
        <div>
        <div className="fons_Trainer">
            <div className="containerM mt pb-2">
                <form className="mb-3 pt-5">
                    <h3 className="fs-3 text-center">Поиск учеников</h3>
                    <div className="mt-5">
                        <div className="mb-3">
                            <input type="text" className="form-control mb-2" placeholder="Фамилия" aria-label="Username"/>
                                <input type="text" className="form-control mb-2" placeholder="Имя" aria-label="Server"/>
                            <div className="d-grid gap-2">
                            <button type="button form-control" className="btn btn-outline-dark">Искать</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
            {/*<div className="about_fons">*/}
            {/*    <div className="containerM">*/}
            {/*        <div>*/}

            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
            <Footer/>
        </div>
    )
}

export default Students;