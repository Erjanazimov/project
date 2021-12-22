import React from "react";
import ModalSubmit from "../ModalSubmit/ModalSubmit";


function Header(){
    return(
        <div id="header" className="header">
            <div className="containerM">
                <div className="header_t">
                    <div>
                    <div>
                    <h1 className="header_text">Академия Таэквондо Кыргызской Республики
                    </h1>
                    </div>
                        <p className="text">
                            Таэквондо — один из самых популярных видов корейских единоборств, которое учит не только умению физической схватки,
                            но и дисциплине.
                        </p>
                        <div className="d-flex justify-content-center">
                        <button type="button" className="btn mt-5 btnPadat" data-bs-toggle="modal" data-bs-target="#exampleModal">Подать Заявку</button>
                        </div>
                    </div>
                </div>
            </div>
            <ModalSubmit/>
        </div>
    )
}

export default Header