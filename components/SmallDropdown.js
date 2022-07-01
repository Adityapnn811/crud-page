
export default function SmallDropdown({text, value, setValue, id}) {
    const changeHandler = () => {
        setValue(document.getElementById(id).options[document.getElementById(id).selectedIndex].value)
    }
    return (
        <div className="inline m-4">
            <label htmlFor={id}>
                {text}
            </label>
            <select onChange={changeHandler} name={id} id={id} className="ml-3 bg-secondary p-1 rounded hover:bg-gray-500">
                {value.map((item) => (
                    <option key={item} value={item} className={"bg-secondary hover:bg-primary"}>{item}</option>
                ))}
            </select>
        </div>
    )
}