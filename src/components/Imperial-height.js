function ImperialHeight () {
    return (
        <div className="imperial-input-div">
            <input 
                type='text'
                inputMode="numeric"
                placeHolder="Feet"
                id="feet-input"            
            />
            <input 
                type='text'
                inputMode="numeric"
                placeHolder="Inches"
                id="inches-input"            
            />
        </div>
    )
}

export default ImperialHeight;