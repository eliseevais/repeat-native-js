import {ChangeEvent, MouseEvent} from "react";

export let value06 = "06"

export const User = () => {
  const searchUser = (event: MouseEvent<HTMLButtonElement>) => {
    console.log("user search")
  }

  const saveUser = () => {
    console.log("user saved")
  }

  const onNameChanged = () => {
    console.log("name changed")
  }

  const onFocusLost = () => {
    console.log("focus lost")
  }

  const onAgeChanged = (event: ChangeEvent<HTMLInputElement> ) => {
    console.log(`age changed on ` +  event.currentTarget.value)
  }

  return (
    <div>
      <textarea onChange={onNameChanged} onBlur={onFocusLost}>Dimych</textarea>
      <input type={"number"} onChange={onAgeChanged}/>
      <button name="search" onClick={searchUser}>search</button>
    </div>
  )
}
