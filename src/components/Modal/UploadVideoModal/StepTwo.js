import useInput from '../../../hooks/useInput'
import { Button } from '../../Button'
import { Dropdown } from '../../Input/Dropdown'
import TextFieldInput from '../../Input/TextField'

export const StepTwo = () => {
    const [value, handler] = useInput('')
    const locations = [
        {
            value: 'Hello',
            text: 'Hello Text',
        },
        {
            value: 'Hello2',
            text: 'Hello Text2',
        },
    ]
    const saveHandler = () => {
        console.log(value)
    }
    return (
        <>
            <h1>Step two</h1>
            <TextFieldInput label="Tên video"></TextFieldInput>
            <Dropdown options={locations} handlerChange={handler} />
            <Button onClick={saveHandler}>Save</Button>
        </>
    )
}
