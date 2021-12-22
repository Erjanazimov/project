import {
    ACCOUNTS_MODAL,
    ENTRANCE_GET,
    HANDLE_PERSONAL,
    IMAGES_GET,
    NEWS,
    REG_MODAL,
    STUDENTS_POST,
    SUBMIT,
    VHOD_MODAL
} from "./type";
import {toast} from "react-toastify";

export const submitChange = (data) => {
    return{
        type: SUBMIT,
        data
    }
}

export const news = () => {
    return async dispatch => {
        try {
            const response = await fetch("http://zrozez.pythonanywhere.com/api/v1/category/categories/");
            const jsonData = await response.json();

            dispatch({
                type:NEWS,
                jsonData
            })
        }
        catch (err){
            localStorage.clear();
            toast.error("Зйадите чуть поэже")
        }
    }
}

export const modal_accounts = (data) => {
    return{
        type: ACCOUNTS_MODAL,
        data
    }
}

export const reg_modal = (reg) => {
    return{
        type: REG_MODAL,
        reg
    }
}

export const vhod_modal = (vhod) => {
    return{
        type: VHOD_MODAL,
        vhod
    }
}

export const entrance_user = (user, reg) => {
    return async dispatch => {
        try {
            const response = await fetch("http://zrozez.pythonanywhere.com/accounts/accounts/");
            const jsonUser = await response.json();
            dispatch({
                type:ENTRANCE_GET,
                user,
                reg,
                jsonUser
            })
        }
        catch (err){
            localStorage.clear();
            alert("Перезагрузите сайт! Ваш аккаунт был изменен имя или пароль")
        }
    }
}

export const personalNewUser = (personal) => {
    return{
        type: HANDLE_PERSONAL,
        personal
    }
}

export const imagesGet = (img) => {
    return async dispatch => {
        try {
            const response = await fetch("http://zrozez.pythonanywhere.com/images/images/");
            const jsonImg = await response.json();
            dispatch({
                type: IMAGES_GET,
                jsonImg
            })
        }
        catch (err){
            toast.error("Ошибка")
        }
    }
}

export const submitStudents = (students) => {
    {
        let options = {
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(students)
        }
        fetch("http://zrozez.pythonanywhere.com/api/v1/students/", options)
            .then(response => {
                if(response.ok){
                    toast.success("Успешно отправлено заяка!");
                } else{
                    toast.error(`Ошибка при отправке. Код ошибки ${response.status}`)
                }
            })
    }
    return{
        type: STUDENTS_POST,
        students
    }
}


