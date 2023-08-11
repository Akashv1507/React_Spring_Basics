import classes from "./NewTodo.module.css";


const NewTodo:React.FC = ()=>{
    return(
        <div className={classes.box}>
	<form>
		<span className="text-center">login</span>
	<div className="input-container">
		<input type="text"/>
		<label>Full Name</label>		
	</div>
	<div className="input-container">		
		<input type="mail" />
		<label>Email</label>
	</div>
		<button type="button" className="btn">submit</button>
</form>	
</div>
    )
}

export default NewTodo