function rot_selector () {
    return (
        <div className="rot-selector">
            <label htmlFor="rotValue">Select ROT value:</label>
            <select id="rotValue" name="rotValue">
                <option value="13">ROT13</option>
                <option value="5">ROT5</option>
                <option value="47">ROT47</option>
            </select>
        </div>
    )
}

export default rot_selector;