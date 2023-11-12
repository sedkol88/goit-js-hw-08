import throttle from 'lodash.throttle';

const refs = {
    formElem: document.querySelector('.feedback-form'),
    inputElem: document.querySelector('input'),
    messageElem: document.querySelector('textarea'),
    btnElem: document.querySelector('button')
};

const onFormInput = throttle(function(e) {
    const objForm = {
        email: refs.inputElem.value,
        message: refs.messageElem.value
    };
    localStorage.setItem('feedback-form-state', JSON.stringify(objForm));
}, 500);

refs.formElem.addEventListener('input', onFormInput);

function onLoad() {
    const savedState = JSON.parse(localStorage.getItem('feedback-form-state'));
    if (savedState) {
        refs.inputElem.value = savedState.email;
        refs.messageElem.value = savedState.message;
    }
}

onLoad();

refs.formElem.addEventListener('submit', onSubmit)
function onSubmit(e) {
    e.preventDefault();
    console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
    localStorage.clear();
    refs.inputElem.value = '';
    refs.messageElem.value = '';
}
