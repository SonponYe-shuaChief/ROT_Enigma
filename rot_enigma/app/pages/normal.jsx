import button from '../components/button';
import output_field from '../components/output';
import footer from '../components/footer';

function normal () {
    return (
        <div className="normal-page">
            <h1>ROT_Enigma</h1>
            <p>HERE IT IS ...</p>
            {button()}
            {output_field()}
            {footer()}
        </div>
    )
}

export default normal;