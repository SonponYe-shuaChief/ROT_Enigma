function output_field () {
    return (
        <div className="output-field">
            <label htmlFor="outputText">Encrypted text:</label>
            <input type="text" id="outputText" name="outputText" placeholder="Encrypted text will appear here..." readOnly />
        </div>
    )
}

export default output_field;