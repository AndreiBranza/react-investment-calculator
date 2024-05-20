import InputGroup from "./InputGroup"

export default function UserInput() {
    return (
        <section id='user-input'>
            <div className="input-group">
                <InputGroup title='Initial Investment' />
                <InputGroup title='Annual Investment' />
            </div>
            <div className="input-group">
                <InputGroup title='Expected Return' />
                <InputGroup title='Duration' />
            </div>                
        </section>        
    )
}