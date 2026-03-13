import { useState } from "react";

export default function Input({name, description, date, onClick}) {

    return (
        <>  
          <button className="px-6 py-2 rounded-md bg-stone-700 text-stone-50 hover:bg-stone-950">Cancel</button>
          <button className="px-6 py-2 rounded-md bg-stone-700 text-stone-50 hover:bg-stone-950" onClick={onClick}>Save</button>
          <p>TITLE</p>
          <input type="text" ref={name}/>
          <p>DESCRIPTION</p>
          <input type="text" ref={description}/>
          <p>DUE DATE</p>
          <input type="date" ref={date}/>
        </>
    )
}