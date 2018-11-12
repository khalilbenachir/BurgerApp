import React from 'react'
import BuildControl from './BuildControl/BuildControl'
import classes from './BuildControls.css'
const controls = [

    {label : 'Salad',type :'salad'},
    {label : 'Bacon',type :'bacon'},
    {label : 'Cheese',type :'cheese'},
    {label : 'Meat',type :'meat'}
]

const buildControls = (props) => (
    <div className={classes.BuildControls}>
        <p>Total Price : <strong>{props.price.toFixed(2)}</strong></p>  
        {controls.map(ctr =>(
            <BuildControl 
                key={ctr.label} 
                label={ctr.label}
                added={() =>props.addedIngredients(ctr.type)} 
                removed={() => props.removedIngredients(ctr.type)}
                disabled ={props.disabled[ctr.type]}
                
                />
        )
        )}
        <button 
            className={classes.OrderButton}
            disabled={!props.purchasable}
            onClick={props.ordered}
            >Order Now</button>
    </div>
);


export default buildControls;