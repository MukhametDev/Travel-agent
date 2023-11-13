import { easepick } from '@easepick/bundle'

function easePicker() {
    console.log('hello')
    const picker = new easepick.create({
        element: document.getElementById('#datepicker'),
        css: [
            "https://cdn.jsdelivr.net/npm/@easepick/bundle@1.2.1/dist/index.css"
        ],
        zIndex: 10
    })
}
export default easePicker;