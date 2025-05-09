import { useEffect, useState } from 'react';
import '../CSS/ContactInfo.css';

const ContactInfo = (props) => {
    const beforeInfo = props.beforeInfo;
    const afterInfo = props.afterInfo;
    const shouldBreak = props.shouldBreak;

    const [verified, setVerified] = useState(false);

    useEffect(() => {
        const updateState = () => setVerified(true);
        window.addEventListener("recaptcha-verified-success", updateState);
        return window.removeEventListener("recaptcha-verified-success", updateState);
    }, [])

    if(shouldBreak){
        return( verified &&
            <>
                <div class="g-recaptcha" data-sitekey="6LeFKjQrAAAAAA6DUMuU4I9amAxJFUluGA19Ig_N"></div>
                <span className='sensitive-details'>{beforeInfo}<br className='lb'/>{afterInfo}</span>
            </>
        )
    }

    return( verified &&
        <>
            <span className='sensitive-details'>{beforeInfo}<br className='lb'/>{afterInfo}</span>
        </>
    )
}


export default ContactInfo;