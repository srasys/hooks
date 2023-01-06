import SubChildComponent from "./SubChildComponent";
const ChildComponent =(props)=>{
    console.log(props.userDetails,'hi');
    return(
        <div>
            <h1>childcontext from child ChildComponent</h1>
            <SubChildComponent userDetails={props.userDetails}/>
        </div>
    )
}

export default ChildComponent;