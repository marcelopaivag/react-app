import Iframe from "react-iframe"

export const Gmap = () => {
    return (
        <Iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13327.715577753279!2d-70.52568382384626!3d-33.37292235517919!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662cf345f2c0785%3A0xd1e1e9acddabae01!2sKinesi%C3%B3logo%20Marcelo%20Paiva%20G%C3%B3mez!5e0!3m2!1ses-419!2scl!4v1695328975467!5m2!1ses-419!2scl"
            width="100%" 
            height="600" 
            style="border:0;" 
            allowfullscreen="" 
            loading="lazy" 
            referrerpolicy="no-referrer-when-downgrade">
        </Iframe>
    )
}
