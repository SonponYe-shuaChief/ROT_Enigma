function input_field () {
    return (
        <>
        <div className="input-field">
            <label htmlFor="inputText">Enter text to encrypt</label>
            <input type="text" id="inputText" name="inputText" placeholder="Type your text here..." />
        </div>

        <div className="input-field">
            <label htmlFor="shiftValue">Enter shift value</label>
            <input type="number" id="shiftValue" name="shiftValue" placeholder="Enter shift value (e.g., 13)" />
        </div>
        </>
    )
}