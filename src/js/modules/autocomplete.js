import autoComplete from "@tarekraafat/autocomplete.js";
import countryList from "./../helpers/countryList";


function autoCompleteInput(){
    console.log('hello')
    const autoCompleteJS = new autoComplete({
        selector: "#autoCompleteCountry",
        placeHolder: "e.g Bali, Indonesia",
        data: {
            src: countryList,
            cache: true,
        },
        resultItem: {
            highlight: true,
        },
        events: {
            input: {
                selection: (event) => {
                    const selection = event.detail.selection.value;
                    autoCompleteJS.input.value = selection;
                }
            },
            list: {
                scroll: (event) => {
                    console.log("Results List scrolled!");
                }
            }
        },
    });
}


export default autoCompleteInput;