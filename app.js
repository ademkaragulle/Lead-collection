/*
    Insider Case Study
    Author by: Adem Karagülle
    07.03.2023
*/


document.head.insertAdjacentHTML('beforebegin', `<style>
@media (max-width: 768px) {
    .container-popup {
        width: 80%;
        margin-top: 50px;
    }

    html {
        text-align: center;
        justify-content: center;
        display: flex;
    }

    .popup {
        flex-direction: column !important;
    }

    .close-popup {
        color:white !important;
    }
}

@media only screen and (max-width: 992px) and (min-width: 768px) {
    .container-popup {
        position: fixed;
        left:1px;
        text-align:center;
        top: 50%;
        transform: translate(+15%,-50%);
        width: 75%;
    }
}

@media (min-width: 992px) {
    .container-popup {
        position: fixed;
        top: 50%;
        transform: translate(50%,-50%);
        width: 50%;
    }
}

#image {
    height: 20px !important;
}

html {
    font-family: sans-serif;
}

a {
    text-decoration: none;
}

.container-popup {
    -webkit-box-shadow: 0px 0px 28px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 0px 28px 0px rgba(0,0,0,0.75);
    box-shadow: 0px 0px 28px 0px rgba(0,0,0,0.75);
    position: fixed;
    z-index: 9999999999;
    padding: 0 0 0 0 !important;
}

.popup {
    position:relative;
    display: flex;
    flex-direction: row;
}

.box {
    flex: 1;
} 

.tittle {
    margin:10px;
}

.title h2 {
    justify-content: center;
    font-size: 28px;
    text-align: center;
    margin: unset;
}

.shortText {
    justify-content: center;
    font-size: 10px;
    text-align: center;
    line-height: 20px;
    margin:5px;
}

.close-popup {
    border: none;
    background: none;   
    cursor:pointer;
    position: absolute;
    right: 10px;
    top: 10px;  
    width: 24px;
    height: 24px;
    border-radius: 50%;
    text-align: center;
    font-size: 16px;
}



.inputControl {
    padding: 8px;
    border-radius: 5px;
    width: 95%;
    margin: 4px 0 4px 0;
    border: 1px rgb(164, 164, 164) solid;
    font-weight: bold;
    overflow: hidden;
}

.inputControl:focus {
    outline: none !important;
    border-color: #5a5a5a;
    box-shadow: 0 0 5px #5a5a5a;
    font-weight: bolder;
}


.btn {
    background-color: black;
    color: #ddd;
    cursor: pointer;
    text-align: center;
}

.error {
    border-color: #ff0000;
    font-weight: bolder;
    color:red !important;
}

.checkbox-container-popup {
    display: flex;
    align-items: center;
    font-size: 10px;
    line-height: 20px;
}

.checkbox-wrapper {
    margin-right: 5px;
}

/* kontrol et */
#checkbox {
    border: 10px solid black;
}

#contentBox {
    padding: 16px 20px;
    background: white;
}

.content {
    height: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
}

.image-resize {
    width: 100%;
    height: 100%;
}

.coupon {
    padding: 8px;
    text-align: center;
    border: 2px rgb(164, 164, 164)dashed;
    margin: 0 auto;
    width: 60%;
}


.overlay{
    background-color: black;
    opacity: .5;
    width: 100%;
    height: 100%;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: 0;
    z-index:10000;
}


</style>`)


document.getElementById('root').style.pointerEvents = 'none'; // Başka bir sitede çalışsın istiyorsak bu bölümü kaldırmalıyız. ONLY LC wakiki

document.getElementsByTagName('body')[0].insertAdjacentHTML('afterbegin', `<div id='overlay' class="overlay"></div><div class="container-popup">
<div class="popup">
    <button id="close-icon" class="close-popup">x</button>
    <div id="picture" class="box">
        <img class="image-resize"
            src="https://img.freepik.com/free-photo/halloween-background-with-spooky-castle_1048-3101.jpg?w=360&t=st=1678136548~exp=1678137148~hmac=26e3bb57b1a1b290c9073a57d344dd4d17bea02a2b34f16c3e1d6a55180a3c10"
            alt="Hiroshima Castle" />
    </div>
    <div id="contentBox" class="box">
    </div>
</div>
</div>`);

let contentBox = document.getElementById('contentBox')

let contentOne = `<!-- Content One -->

<div class="content">
    <div class="title">
        <h2>Title</h2>
    </div>
    <div class="shortText">
        <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</span>
    </div>
    <form>
        <input type="text" name="" id="email" class="inputControl" placeholder="Email">
        <input type="text" name="" id="phoneNumber" class="inputControl" placeholder="Phone Number">
        <input type="button" value="BE FIRST" id="triggerEvent" class="inputControl btn">
        <div class="checkbox-container-popup">
            <div class="checkbox-wrapper"><input type="checkbox" style="color: red;" name="checkbox" id="GDPR-checkbox"></div>
            <div><a target="_blank" href="https://en.wikipedia.org/wiki/General_Data_Protection_Regulation"><label for="checkbox" id="GDPR-checkbox-label">By submitting this form, you are
            giving consent for your e-mail
            to be used
            anddisclosed.*</label></a></div>
            
        </div>
    </form>
</div>`

let contentTwo = `<!-- Content Two -->

<div class="content">
    <div class="title">
        <h2>Amazing!</h2>
    </div>
    <div class="shortText">
        <p>Here is Your discount code you can use in your next order. This coupon code will be valid
            until 01.01.2020</p>
    </div>

    <div id="couponCode" class="coupon">Coupon Code</div><br>
    <button onclick="CopyToClipboard('couponCode')" class="inputControl btn">COPY</button>
</div>`

contentBox.innerHTML = contentOne

function CopyToClipboard(id) {
    var r = document.createRange();
    r.selectNode(document.getElementById(id));
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(r);
    try {
        document.execCommand('copy');
        window.getSelection().removeAllRanges();
    } catch (err) {
        console.log('Unable to copy!');
    }
}

const validateEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};
const validatePhoneNumber = (number) => {
    if (number) {
        return number.match(/\d/g).length === 10;
    }
    return false
}
let triggerEvent = document.getElementById('triggerEvent')

const removeErrorClasses = (elements) => {
    elements.forEach(element => {
        element.classList.remove('error')
    })
}

triggerEvent.addEventListener('click', function () {
    const emailElement = document.getElementById('email')
    const phoneNumberElement = document.getElementById('phoneNumber')
    const checkboxElement = document.getElementById('GDPR-checkbox')
    const GDPRLabelElement = document.getElementById('GDPR-checkbox-label')


    const isValidCheckbox = checkboxElement.checked
    const isValidPhoneNumberValue = validatePhoneNumber(phoneNumberElement.value)
    const isValidEmailValue = validateEmail(emailElement.value)


    const elementArray = [emailElement, phoneNumberElement, checkboxElement]
    elementArray.forEach(element => {
        element.addEventListener('click', function () {
            removeErrorClasses([...elementArray, GDPRLabelElement])
        })
    })

    if (!isValidEmailValue) {
        emailElement.classList.add('error')
    }
    if (!isValidPhoneNumberValue) {
        phoneNumberElement.classList.add('error')
    }
    if (!isValidCheckbox) {
        GDPRLabelElement.classList.add('error')
    }
    if (isValidEmailValue && isValidPhoneNumberValue && isValidCheckbox) {
        fetch("https://opt-interview-projects.onrender.com/lead-collection", {
                method: "POST",
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                },
                body: JSON.stringify({
                    email: emailElement.value,
                    phone: phoneNumberElement.value,
                })
            })
            .then(response => response.json())
            .then(json => {
                contentBox.innerHTML = contentTwo
                const couponCodeElement = document.getElementById('couponCode')
                couponCodeElement.innerText = json.coupon_code
            });
    }
})

let overlayElements = [
    document.getElementById('close-icon'),
    document.getElementById('overlay')
]

overlayElements.forEach(element => {
    element.addEventListener('click', function () {
        document.querySelector('.container-popup').remove();
        document.getElementById('overlay').remove()
        document.getElementById('root').style.pointerEvents = 'all';
    })
});