import '../style/components/form.sass'

export default function Form(){
    return (
        <form className='form'>
            <input className='form-input' placeholder='Search for a country...' type="search" name="search" id="countries" />
            {/* <select name="regions" id="regions">
                <option disabled selected value="none">Filter by regions</option>
                <option value="Region">Region</option>
                <option value="Region">Region</option>
                <option value="Region">Region</option>
            </select> */}
        </form>
    )
}