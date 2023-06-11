const flexbox_container = document.getElementById('flexbox-container-1');
const justify_content_buttons = document.querySelectorAll('.justify-content-option-button');
const align_items_buttons = document.querySelectorAll('.align-items-option-button');
const flex_wrap_buttons = document.querySelectorAll('.flex-wrap-option-button');
const align_content_buttons = document.querySelectorAll('.align-content-option-button');
let n = 3;


document.getElementById('change-axis').addEventListener('click', (event) => {
    let value = flexbox_container.style.flexDirection;
    const main_axis_status = document.getElementById('main-axis-status');

    if(value == 'column'){
        flexbox_container.style.flexDirection = 'row';
        main_axis_status.textContent = `main axis is set to "row" (horizontal alignment)`;
        document.getElementById('change-axis').style.backgroundColor = 'red';

    } else {
        flexbox_container.style.flexDirection = 'column';
        main_axis_status.textContent = `main axis is set to "column" (vertical alignment)`;
        document.getElementById('change-axis').style.backgroundColor = 'blue';
    }
})

document.getElementById('add-div-button').addEventListener('click', (event) => {
    const newDiv = document.createElement('div');
    newDiv.textContent = `obj ${++n}`;
    newDiv.classList.add('flexbox-element');
    newDiv.id = `flexbox-element-${n}`;
    flexbox_container.appendChild(newDiv);
})

document.getElementById('rm-div-button').addEventListener('click', (event) => {
    const flexbox_elements = document.querySelectorAll('.flexbox-element');
    if(flexbox_elements.length > 0){
        document.getElementById(`flexbox-element-${n--}`).remove();
    }
})

/******JUSTIFY CONTENT*******/
document.getElementById('justify-content-flex-start').addEventListener('click', (event) => {
    flexbox_container.style.justifyContent = 'flex-start';
    change_button_color(document.getElementById('justify-content-flex-start'), justify_content_buttons);
})

document.getElementById('justify-content-flex-end').addEventListener('click', (event) => {
    flexbox_container.style.justifyContent = 'flex-end';
    change_button_color(document.getElementById('justify-content-flex-end'), justify_content_buttons);
})

document.getElementById('justify-content-center').addEventListener('click', (event) => {
    flexbox_container.style.justifyContent = 'center';
    change_button_color(document.getElementById('justify-content-center'), justify_content_buttons);
})

document.getElementById('justify-content-space-between').addEventListener('click', (event) => {
    flexbox_container.style.justifyContent = 'space-between';
    change_button_color(document.getElementById('justify-content-space-between'), justify_content_buttons);
})

document.getElementById('justify-content-space-around').addEventListener('click', (event) => {
    flexbox_container.style.justifyContent = 'space-around';
    change_button_color(document.getElementById('justify-content-space-around'), justify_content_buttons);
})

document.getElementById('justify-content-space-evenly').addEventListener('click', (event) => {
    flexbox_container.style.justifyContent = 'space-evenly';
    change_button_color(document.getElementById('justify-content-space-evenly'), justify_content_buttons);
})



/********ALIGN ITEMS********/
document.getElementById('align-items-flex-start').addEventListener('click', (event) => {
    flexbox_container.style.alignItems = 'flex-start';
    change_button_color(document.getElementById('align-items-flex-start'), align_items_buttons);
})

document.getElementById('align-items-flex-end').addEventListener('click', (event) => {
    flexbox_container.style.alignItems = 'flex-end';
    change_button_color(document.getElementById('align-items-flex-end'), align_items_buttons);
})

document.getElementById('align-items-center').addEventListener('click', (event) => {
    flexbox_container.style.alignItems = 'center';
    change_button_color(document.getElementById('align-items-center'), align_items_buttons);
})

document.getElementById('align-items-baseline').addEventListener('click', (event) => {
    flexbox_container.style.alignItems = 'baseline';
    change_button_color(document.getElementById('align-items-baseline'), align_items_buttons);
})


/*******FLEX WRAP*******/
document.getElementById('flex-wrap-nowrap').addEventListener('click', (event) => {
    flexbox_container.style.flexWrap = 'nowrap';
    change_button_color(document.getElementById('flex-wrap-nowrap'), flex_wrap_buttons);
})

document.getElementById('flex-wrap-wrap').addEventListener('click', (event) => {
    flexbox_container.style.flexWrap = 'wrap';
    change_button_color(document.getElementById('flex-wrap-wrap'), flex_wrap_buttons);
})


/******ALIGN CONTENT********/
document.getElementById('align-content-flex-start').addEventListener('click', (event) => {
    flexbox_container.style.alignContent = 'flex-start';
    change_button_color(document.getElementById('align-content-flex-start'), align_content_buttons);
})

document.getElementById('align-content-flex-end').addEventListener('click', (event) => {
    flexbox_container.style.alignContent = 'flex-end';
    change_button_color(document.getElementById('align-content-flex-end'), align_content_buttons);
})

document.getElementById('align-content-center').addEventListener('click', (event) => {
    flexbox_container.style.alignContent = 'center';
    change_button_color(document.getElementById('align-content-center'), align_content_buttons);
})

document.getElementById('align-content-space-between').addEventListener('click', (event) => {
    flexbox_container.style.alignContent = 'space-between';
    change_button_color(document.getElementById('align-content-space-between'), align_content_buttons);
})

document.getElementById('align-content-space-around').addEventListener('click', (event) => {
    flexbox_container.style.alignContent = 'space-around';
    change_button_color(document.getElementById('align-content-space-around'), align_content_buttons);
})

document.getElementById('align-content-space-evenly').addEventListener('click', (event) => {
    flexbox_container.style.alignContent = 'space-evenly';
    change_button_color(document.getElementById('align-content-space-evenly'), align_content_buttons);
})




function change_button_color(button, buttons){
    buttons.forEach(btn => {
        if(btn === button) {
            btn.style.backgroundColor = 'red';
        } else {
            btn.style.backgroundColor = '';
        }
    })
}